const sets = require('./templateSets');

const getRandomItemFromList = list => {
  const index = Math.floor(Math.random() * list.length);
  return list[index];
};

module.exports.getTemplate = () => {
  const useSet = getRandomItemFromList(sets);
  return useSet.reduce((acc, fragment) => {
    return acc + getRandomItemFromList(fragment);
  }, '');
};
