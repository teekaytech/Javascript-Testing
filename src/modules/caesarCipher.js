const CaesarCipher = (() => {
  const getCipheredChar = (origin, key, code) => String.fromCharCode(origin
    + ((code - origin + key) % 26));

  const caesar = (text, key) => {
    let output = '';
    for (let i = 0; i < text.length; i += 1) {
      const currentCharCode = text[i].charCodeAt();
      // handling lowercase character
      if (currentCharCode <= 90 && currentCharCode >= 65) {
        output += getCipheredChar(65, key, currentCharCode);
        // handling uppercase character
      } else if (currentCharCode <= 122 && currentCharCode >= 97) {
        output += getCipheredChar(97, key, currentCharCode);
      } else {
        // handling other characters
        output += text[i];
      }
    }
    return output;
  };

  return { caesar };
})();

export default CaesarCipher;
