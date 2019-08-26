const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  for (const letter of sentence) {
    if (letter) {
      if (results[letter]) {
        results[letter].push(position);
        position += 1;
      } else {
        results[letter] = [position];
        position += 1;
      }
    }
  }
  return results;
};

module.exports = letterPositions;