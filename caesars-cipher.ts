{
  const rot13 = (str) => {
    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');

    const decodedMessage = Array.from(str).reduce((acc, curr) => {
      const index = alphabet.indexOf(curr.toString());
      if (index === -1) {
        return `${acc}${curr}`;
      }

      const targetIndex = index - 13;
      const decodedCharIndex = targetIndex < 0 ? targetIndex + 26: targetIndex; 

      return `${acc}${alphabet[decodedCharIndex]}`;
    }, '');

    return decodedMessage;
  }

  const result = rot13("SERR PBQR PNZC");

  console.log(result);
}
