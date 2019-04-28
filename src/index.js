const ENDPOINTS = {
  GET_TITLE: '/.netlify/functions/getTitle',
};

const init = () => {
  getTitle();
  // testCss();
};

const testCss = () => {
  const data = "This is a movie <span class='title'>Title of Tomorrow</span>. Cool, hey?";
  setMessage(data);
  setLoading(false);
};

const setMessage = msg => {
  const inner = document.querySelector('#pitchContent');
  inner.innerHTML = msg;
};

const getTitle = async () => {
  const data = await callAPI(ENDPOINTS.GET_TITLE);
  console.log(data);
  setMessage(data);
};

const callAPI = async endpoint => {
  setLoading(true);
  let message;
  try {
    const response = await fetch(endpoint);
    message = await response.json();
  } catch (e) {
    message = 'Something went wrong. Oops.';
  } finally {
    setLoading(false);
    return message;
  }
};

const setLoading = isLoading => {
  const wrapper = document.querySelector('#pitch');
  isLoading ? wrapper.classList.add('loading') : wrapper.classList.remove('loading');
};

init();
