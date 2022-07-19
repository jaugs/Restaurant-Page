/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomepage": () => (/* binding */ createHomepage)
/* harmony export */ });


function createHeading() {
        let title = "- by Barliman Butterbur";
        let heading = document.createElement('div');
        heading.setAttribute('id', 'heading');
        heading.setAttribute('class', 'card');
        heading.innerText = title;
        return heading;
    }

function createTitle(string) {
        let titleText = string;
        let title = document.createElement('div');
        title.setAttribute('class', 'title');
        title.innerText = titleText;
        return title;
}

function createText() {
    let infoText = "The Prancing Pony has been a Breeland staple for over 300 years. Come and stay in our most comfortable rooms (including Hobbit-Sized rooms) while enjoing the best food west of the Misty Mountains! - Barliman";
    let info1 = document.createElement('div');
    info1.setAttribute('id', 'text');
    info1.setAttribute('class', 'card');
    info1.innerText = infoText;
    return info1;
}

function createHours() {
        let list = document.createElement('ul');
        list.setAttribute('id', 'hourList');
        list.setAttribute('class', 'card');
        let data = ["Breakfast: served at Sunrise daily", "Second-Breakfast: served two hours after Sunrise", "Luncheon: served at high noon", "Supper: served at Sunset", "Stables available upon request"]
  
        data.forEach((item) => {
            let li = document.createElement("li");
            li.setAttribute('class', 'listItem')
            li.innerText = item;
            list.appendChild(li);
      });
    return list;
}

function createLocation() {
    let infoText = "Find us just past the West-Gate, in Bree, west of Chet-wood, north from the Greenway"
    let location = document.createElement('div');
    location.setAttribute('id', 'location');
    location.setAttribute('class', 'card');
    location.innerText = infoText;
    return location;
}

function createHomepage() {
   
    let title = createTitle('The Prancing Pony')
    content.appendChild(title);
    title.appendChild(createHeading());
    
    let title1 = createTitle('About')
    content.appendChild(title1);
    title1.appendChild(createText());
    
    let title2 = createTitle('Hours')
    content.appendChild(title2);
    title2.appendChild(createHours());
    
    let title3 = createTitle('Location')
    content.appendChild(title3);
    title3.appendChild(createLocation());

    let footer = createTitle('By JAUGS 2022');
    footer.setAttribute('id', 'footer');
    content.appendChild(footer);
    }
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCB7Y3JlYXRlSG9tZXBhZ2V9XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkaW5nKCkge1xyXG4gICAgICAgIGxldCB0aXRsZSA9IFwiLSBieSBCYXJsaW1hbiBCdXR0ZXJidXJcIjtcclxuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKCdpZCcsICdoZWFkaW5nJyk7XHJcbiAgICAgICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IHRpdGxlO1xyXG4gICAgICAgIHJldHVybiBoZWFkaW5nO1xyXG4gICAgfVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGl0bGUoc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHRpdGxlVGV4dCA9IHN0cmluZztcclxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJUZXh0ID0gdGl0bGVUZXh0O1xyXG4gICAgICAgIHJldHVybiB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dCgpIHtcclxuICAgIGxldCBpbmZvVGV4dCA9IFwiVGhlIFByYW5jaW5nIFBvbnkgaGFzIGJlZW4gYSBCcmVlbGFuZCBzdGFwbGUgZm9yIG92ZXIgMzAwIHllYXJzLiBDb21lIGFuZCBzdGF5IGluIG91ciBtb3N0IGNvbWZvcnRhYmxlIHJvb21zIChpbmNsdWRpbmcgSG9iYml0LVNpemVkIHJvb21zKSB3aGlsZSBlbmpvaW5nIHRoZSBiZXN0IGZvb2Qgd2VzdCBvZiB0aGUgTWlzdHkgTW91bnRhaW5zISAtIEJhcmxpbWFuXCI7XHJcbiAgICBsZXQgaW5mbzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZm8xLnNldEF0dHJpYnV0ZSgnaWQnLCAndGV4dCcpO1xyXG4gICAgaW5mbzEuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbiAgICBpbmZvMS5pbm5lclRleHQgPSBpbmZvVGV4dDtcclxuICAgIHJldHVybiBpbmZvMTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XHJcbiAgICAgICAgbGV0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdob3VyTGlzdCcpO1xyXG4gICAgICAgIGxpc3Quc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkJyk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXCJCcmVha2Zhc3Q6IHNlcnZlZCBhdCBTdW5yaXNlIGRhaWx5XCIsIFwiU2Vjb25kLUJyZWFrZmFzdDogc2VydmVkIHR3byBob3VycyBhZnRlciBTdW5yaXNlXCIsIFwiTHVuY2hlb246IHNlcnZlZCBhdCBoaWdoIG5vb25cIiwgXCJTdXBwZXI6IHNlcnZlZCBhdCBTdW5zZXRcIiwgXCJTdGFibGVzIGF2YWlsYWJsZSB1cG9uIHJlcXVlc3RcIl1cclxuICBcclxuICAgICAgICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3RJdGVtJylcclxuICAgICAgICAgICAgbGkuaW5uZXJUZXh0ID0gaXRlbTtcclxuICAgICAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICAgIH0pO1xyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4gICAgbGV0IGluZm9UZXh0ID0gXCJGaW5kIHVzIGp1c3QgcGFzdCB0aGUgV2VzdC1HYXRlLCBpbiBCcmVlLCB3ZXN0IG9mIENoZXQtd29vZCwgbm9ydGggZnJvbSB0aGUgR3JlZW53YXlcIlxyXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uJyk7XHJcbiAgICBsb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQnKTtcclxuICAgIGxvY2F0aW9uLmlubmVyVGV4dCA9IGluZm9UZXh0O1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lcGFnZSgpIHtcclxuICAgXHJcbiAgICBsZXQgdGl0bGUgPSBjcmVhdGVUaXRsZSgnVGhlIFByYW5jaW5nIFBvbnknKVxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgICB0aXRsZS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkaW5nKCkpO1xyXG4gICAgXHJcbiAgICBsZXQgdGl0bGUxID0gY3JlYXRlVGl0bGUoJ0Fib3V0JylcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUxKTtcclxuICAgIHRpdGxlMS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0KCkpO1xyXG4gICAgXHJcbiAgICBsZXQgdGl0bGUyID0gY3JlYXRlVGl0bGUoJ0hvdXJzJylcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUyKTtcclxuICAgIHRpdGxlMi5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcclxuICAgIFxyXG4gICAgbGV0IHRpdGxlMyA9IGNyZWF0ZVRpdGxlKCdMb2NhdGlvbicpXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlMyk7XHJcbiAgICB0aXRsZTMuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XHJcblxyXG4gICAgbGV0IGZvb3RlciA9IGNyZWF0ZVRpdGxlKCdCeSBKQVVHUyAyMDIyJyk7XHJcbiAgICBmb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXInKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=