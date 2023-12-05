// window - глобальный обьект. Представляет собой окно браузера и имеет методы для работы с ним


function sayHi(){
    console.log('Привет!')
}

// Можно вызвать функцию как метод глобального обьекта
window.sayHi()

// Узнать высоту окна браузера
console.log(window.innerHeight)
console.log(window.innerWidth)


// DOM
// Обьектная модель документа, представляет все содержимое страницы в виде обьектов, которые можно менять
document.body.style.background = 'red'
setTimeout(() => document.body.style.background = '', 2000)


// Bom 
//Обьектная модель документа - это доп. обьекты , предоставляемые браузером ( окружением), чтобы влиять на все кроме документа
// Обьект navigator - дает инфу. о браузере
// lovation - получить текущий URL адрес и отпрвить по новому
alert(location.href)
if(confirm('Перейти на сайт learn.js?')){
    location.href = 'https://learn.javascript.ru/browser-environment'
}