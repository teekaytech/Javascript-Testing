import caesarCipher from '../modules/caesarCipher';

let text;
let encoded;

test('caesar() upper case string', () => {
  text = 'WELCOME TO JEST TESTING';
  encoded = caesarCipher.caesar(text, 1);
  expect(encoded).toEqual('XFMDPNF UP KFTU UFTUJOH');
});

test('caesar() lower case string', () => {
  const text = "let's see if this works";
  const encoded = caesarCipher.caesar(text, 2);
  expect(encoded).toEqual("ngv'u ugg kh vjku yqtmu");
});

test('caesar() with punctuations', () => {
  const text = 'Are you okay? Asked the teacher.';
  const encoded = caesarCipher.caesar(text, 3);
  expect(encoded).toEqual('Duh brx rndb? Dvnhg wkh whdfkhu.');
});