const titles = require('./content/titles.json').titles;
const { getTemplate } = require('./content/templates');
const { html } = require('./formatters');

const getRandomTitle = () => {
  var index = Math.floor(Math.random() * titles.length);
  return titles[index];
};

exports.handler = async event => {
  const title = getRandomTitle();
  const template = getTemplate();
  const payload = html(title, template);

  return {
    statusCode: 200,
    body: JSON.stringify(payload),
  };
};
