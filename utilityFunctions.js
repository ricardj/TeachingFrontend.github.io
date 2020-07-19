var counterText = document.getElementsByName("CounterText")[0];
var currentCounter = 0;
function StartCounter() {
  counterText = document.getElementsByName("CounterText")[0];
  currentCounter = 0;
  setInterval(IncreaseCounter, 20);
}

function IncreaseCounter() {
  currentCounter++;
  counterText.textContent = currentCounter;
}

//Resources to learn
/**
 * https://www.w3schools.com/
 * https://www.tutorialspoint.com/index.htm
 * https://codepen.io/ (https://codepen.io/DPDesigns/pen/bGEmyOq)
 */

//CSS
/**
 * http://www.flexboxdefense.com/
 * https://flexboxfroggy.com/#es
 * https://flukeout.github.io/
 */

/*+
Exercises

1. Tres en raya
2. Hacer una galeria de videos de YouTube
3. Hacer algún tipo de página que use APIs (algún tipo de visualizador)

*/

//Key things to learn
/**
 * Git y Github
 * Javascript, Css y Html
 * Funcionamiento de Https (como hacer llamadas POST, GET. Que es AJAX. Que es JSON)
 * Uso de API s externas (APIs de google, API de Youtube, APIs de chatbot, API de NBA, API de IMDB, API de Instagram,API de la NASA, API de Chuck Norris... (https://api.chucknorris.io/))
 * Uso de Frameworks Javascript o CSS (vue, jquery,angular, react... )
 * Automatización: Gulp o Grunt, SCSS o SASS
 * ...
 * Backend: stacks de desarrollo,server y demás tecnologías (php, python, javascript...)
 *
 */
