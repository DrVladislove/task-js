/*
Вывести на экран коды и символы таблицы ASCII, начиная с символа под номером 32 и заканчивая 127-м включительно.
Вывод выполнить в табличной форме: по десять пар "код-символ" в каждой строке.
*/

function tableSymbols() {
  var i;
  for (i = 32; i <= 127; i++) {
    console.log(i + " " + String.fromCharCode(i), "\n");
  }
}

tableSymbols();
module.exports = {
  tableSymbols,
};
