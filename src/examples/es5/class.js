'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var Persona = (function () {
  function Persona(nombre) {
    _classCallCheck(this, Persona);

    this.honorifico = 'Don';
    this.nombre = nombre;
  }

  Persona.prototype.saludar = function saludar(persona) {
    return 'Hola ' + persona.honorifico + ' ' + persona.nombre;
  };

  return Persona;
})();

var Pepito = new Persona('Pepito');
var Jose = new Persona('Jose');

console.log(Jose.saludar(Pepito)); // 'Hola Don Pepito'
console.log(Pepito.saludar(Jose)); // 'Hola Don Jose'