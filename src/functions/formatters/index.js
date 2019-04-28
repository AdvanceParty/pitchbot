const titleString = '<%TITLE%>';

const dialogFlow = (title, template) => {
  const msg = template.replace(titleString, `_${title}_`);
  return {
    fulfillmentText: msg,
    fulfillmentMessages: [
      {
        text: {
          text: [msg],
        },
      },
    ],
    source: '',
  };
};

const slackSlashCommand = (title, template, isPublic = true) => {
  const msg = template.replace(titleString, `_${title}_`);
  return {
    text: msg,
    response_type: isPublic ? 'in_channel' : 'ephemeral',
  };
};

const html = (title, template) => {
  console.log(title, template);
  const msg = template.replace(titleString, `<span class='title'>${title}</span>`);
  return `<p>${msg}</p>`;
};

module.exports.dialogFlow = dialogFlow;
module.exports.slackSlashCommand = slackSlashCommand;
module.exports.html = html;
