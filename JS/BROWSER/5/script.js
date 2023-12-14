// СВОИСТВА УЗЛОВ
// У разных дом узлов могут быть свои своиства, например для ссылок или input - у них рпзные своиства
// Каждый дом-узел принадлежит соотвеьсвующему классу.
// Корнем является EventTarget

// Чтобы узнать имя дом-узла, можно получить имя через своисво constructor
// alert(document.body.firstElementChild.constructor.name)
// alert(document.body.firstElementChild instanceof  Element)



// Узнать имя узла nodeName, tagName
// Отличие - своиство tagName есть только у узлов Element
// Своиство nodeName - определен для любых узлов Node
// alert(document.body.firstElementChild.tagName) 
// alert(document.tagName)
// alert(document.nodeName)


// innerHTML - это содержимое элемента
// Позволяет получить содержимое элемента в виде строки
// Также можно изменять его
// alert(document.body.innerHTML)
// document.body.innerHTML = 'TEST'
// += позволяет добавить html к элементу
// document.body.innerHTML += '<h1>TEST</h2>'




// outerHTML - Позволяет получить весь html элемент целиком
// console.log(i.outerHTML)



// Содержимое текстового узла либо data либо nodeValue
// console.log(document.body.firstChild.data)
// console.log(document.body.firstChild.nodeValue)


// TextContent предоставляет доступ к тексту внутри элемента, не используя теги
// alert(text.textContent)

// let name = prompt("Введите ваше имя?", "<b>Винни-пух!</b>");
// elem1.innerHTML = name;
// elem2.textContent = name;




//   hidden
// Атрибут указывает на то, виден ли элемент или нет
// h.hidden = false
setInterval(() => h.hidden = !h.hidden, 100)