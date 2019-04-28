exports.handler = function(event, context, callback) {
  // your server-side functionality
  const d = new Date();
  const now = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds}`;
  callback(null, {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello. Local time on the server is ${now}`,
    }),
  });
};
