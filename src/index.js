const ENDPOINTS = {
  GET_TITLE: '/.netlify/functions/getTitle',
};

const init = () => {  
  getTitle();
};

const getTitle = async (wrapper, inner) => {
  const inner = document.querySelector('#pitchContent');
  const data = await callAPI(ENDPOINTS.GET_TITLE);
  inner.innerHTML = data;
};

const callAPI = endpoint => {
  setLoading(true);
  let message;
  try {
    const response = await fetch(endpoint);
    message = await response.json();
  } catch (e) {
    message = "Something went wrong. Oops."
  } finally {
    setLoading(false);
    return data;
  }
};

const setLoading = (isLoading) => {
  const wrapper = document.querySelector('#pitch');
  isLoading ? wrapper.classList.add('loading') : wrapper.classList.remove('loading')
}

init();