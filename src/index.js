const ENDPOINTS = {
  GET_TITLE: '/.netlify/functions/getTitle',
};

const init = () => {
  console.log('Running');
  const wrapper = document.querySelector('#pitch');
  const inner = document.querySelector('#pitchContent');
  getTitle(wrapper, inner);
};

const getTitle = async (wrapper, inner) => {
  wrapper.classList.add('thinking');

  const response = await callAPI(ENDPOINTS.GET_TITLE);
  const data = await response.json();

  inner.innerHTML = data;
  console.log(data);
};

const callAPI = endpoint => {
  return fetch(endpoint);
};

init();
