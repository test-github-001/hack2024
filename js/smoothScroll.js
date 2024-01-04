'use strict'

/********************************
 * 
 *  ПЛАВНЫЙ СКРОЛЛ ПО "ЯКОРЯМ"
 * 
 */

document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(event) {
        event.preventDefault();

        let href = link.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = document.querySelector('nav').offsetHeight;
        //const topOffset = 0; // указать элемент или размер, если нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});