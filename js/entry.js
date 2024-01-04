'use strict';

/*********************************
 * 
 *  ЭЛЕМЕНТ В ОБЛАСТИ ВИДИМОСТИ
 * 
 */

// функция, применяемая к элементам
function onEntry(entry) {
    console.log(entry);
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('visible-element-entry');
        }
    });
}
  
let options = { threshold: [0.5] }; // 0...1 - % видимости для запуска функции ([0.5, 0.75, 1] - будет 3 вызова)
let observer = new IntersectionObserver(onEntry, options); // API "наблюдателя"  (функция, настройки вызова)
let elements = document.querySelectorAll('.hidden-element-entry');
for (let elm of elements) observer.observe(elm); // задаем элементы, за которыми нужно следить "наблюдателю"

console.log(elements)