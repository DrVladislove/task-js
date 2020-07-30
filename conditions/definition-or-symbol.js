/*Вводится целое число, обозначающее код символа по таблице ASCII. 
Определить, это код английской буквы или какой-либо иной символ.
*/

function definition(a) {
  var testChar = String.fromCharCode(a);
  if ((a = String)) {
    return testChar;
  }
}

module.exports = {
  definition,
};
