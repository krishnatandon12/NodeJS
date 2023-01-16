//Common JS - every file in module (by default)
//Modules - Encapsulated code (only share minimum)

const names = require("./3_2_variablesInModules");
const sayHi = require("./3_1_functionInModules");

sayHi("Susan");
sayHi(names.user1);
sayHi(names.user2);
