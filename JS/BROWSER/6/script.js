// Когда браузер загружает страницу, он "читает" HTMl  и генерируею дом-обькты. Для узлов-элементов большинство атрибутов становятся свойствами дом-обьектов

// ДОМ - своиства. Можно добавить свои своиства
document.body.test = {
    name: 'Test',
    title: 'Imperator'
}
console.log(document.body.test.title)
// console.log(document.body)

// Можно добавлять методы
document.body.func = function(){
    console.log(this.tagName)
}
document.body.func()


// HTML - атрибуты
// Если у тега есть стандартный атрибут, при парсингесоздается соответствующее свойство. Если атрибут не стандартный, выдаст undefined
console.log('----------------')
console.log(document.body.firstElementChild.id)
console.log(document.body.lastElementChild.myAtrr)
// Одни атрибуты могут быть стандартными для одного элемента и не стандартными для другого
console.log(document.body.children[1].type)
console.log(document.body.type)


// Все атрибуты можно получить с помощью  след. методов
console.log('-------------------')
// Проверяет наличие атрибута
console.log(document.body.hasAttribute('myAtrr'))
// Получить значение атрибута
console.log(document.body.getAttribute('myAtrr'))
// Установить значение атрибута
document.body.setAttribute('news', 'ПРОВЕРКА')
console.log(document.body.getAttribute('news'))
// Удалить атрибут
// document.body.removeAttribute('news')
// console.log(document.body.getAttribute('news'))

// Получить все атрибуты
console.log(document.body.attributes)


// Получить полностью элемент вместе с тегами
console.log(document.body.outerHTML)


// Веренет элемент по атрибуту.  В квадратных скобках атрибут
console.log(document.querySelector('[news]'))
