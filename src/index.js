const ENDPOINTS = {
  GET_TITLE: '/getTitle',
};

const init = () => {
  console.log('Running');
  getTitle();
};

const getTitle = async () => {
  const response = await callAPI(ENDPOINTS.GET_TITLE);

  // if (response.status !== 200) {
  //   throw Error(response.status);
  // }
  const data = await response.json();
  console.log(data);
};

const callAPI = endpoint => {
  return fetch(endpoint);
};

init();
