import caesarCipher from '../modules/caesarCipher';

let text;
let encoded;

test('decipher() upper case string', () => {
  text = 'WELCOME TO JEST TESTING';
  encoded = caesarCipher.decipher(text, 1);
  expect(encoded).toEqual('XFMDPNF UP KFTU UFTUJOH');
});

test('decipher() lower case string', () => {
  const text = "let's see if this works";
  const encoded = caesarCipher.decipher(text, 2);
  expect(encoded).toEqual("ngv'u ugg kh vjku yqtmu");
});