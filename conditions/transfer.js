/*
Перевести число, введенное пользователем, в байты или килобайты в зависимости от его выбора.
*/

function transfer(a, b) {
  var kilobyte = b / 1024,
    byte = b * 1024;
  switch (a) {
    case "1":
      return byte + " байт";
    case "2":
      return kilobyte + " килобайт";
  }
}

module.exports = {
  transfer,
};
