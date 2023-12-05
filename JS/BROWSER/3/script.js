// Верхний узел документа. Соответствует тегу html
console.log(document.documentElement)


console.log(document.body)

console.log(document.head)


console.log('--------------------')
// // Коллекция childNodes содержит список всех детей, включая текстовые узлы
// for (let i = 0; i < document.body.childNodes.length; i++){
//     console.log(document.body.childNodes[i])
// }


// ?
// console.log(elem.firstChild)
// console.log(document.body.childNodes[0] === docyment.body.firstChild)
// elem.childNodes[elem.childNodes.length - 1] === elem.lastChild


// Соседи и родитель
// Соседи это узлы, у которых один родитель
// head и body соседи
// Следующий узел того же родителя
console.log(document.head.nextSibling)
// Предыдущий узел
console.log(document.body.previousSibling)


console.log('------------')
// Навигация только по элемениам. Как правило нам не нужны текстовые узлы и узлы коментарии. Поэтому можно отсортировать по элементам 
// Вовод дочерних элементов
for (let elem of document.body.children){
  console.log(elem)
}

console.log('------------')

// Получить первый и последние узлы 
console.log(document.documentElement.firstElementChild)
console.log(document.body.lastElementChild)


console.log('-----+-------')
// console.log(document.body.previousElementSibling)
console.log(document.head.nextElementSibling)


let s = document.getElementById('e')

s.style.background = 'red'

let es = document.querySelectorAll('li')
for (let i of es){
  document.write(i['outerText'])
  document.write(' <br> ')
}