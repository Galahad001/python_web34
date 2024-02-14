// Как получить конкретный элемент страницы
// Если у элемнта есть id то можно использовать getElementByUd

let elem = document.getElementById('test')

elem.style.background = 'blue'
elem.style.border = '1px solid red'


// querySelectorAll
// Возвращает все элементы, удовлетворяющие данному CSS-селектору

let elements = document.querySelectorAll('.t')
for(let i of elements){
    // innerHTML - Позволяет считать содержимое строки в виде строки или установить новое значение
    // console.log(i.innerHTML)
    // console.log(i)
    i.innerHTML = '<div><b>TEST</b></div>'
}



// querySelector
// Возврощает первый элемнт, соответсствующий данному CSS-селектору



// matches -  метод ничего не ищет, он проверяет, удовлетворяет ли elem CSS-селектору. Возращает либо True либо False
for(elem of document.body.children){
    if(elem.matches('a[href$="php"')){
        console.log(elem.href)
    }

    if(elem.matches('.w')){
        console.log('Работет')
    }
}



// closest - метод ищет ближайшего предка, который соответсвует CSS-селектору. Сам элемент также включается в поиск. Поднимается вверх от элемента и проверяет каждого из родителей. Если родитель соответсвует селектору поиск прекращается. Метод вернет предка, либо null если элемент не найден
let i = document.getElementById('closets')
console.log(i.closest('.w'))
console.log(i.closest('body'))
console.log(i.closest('html'))


// elem.getElementsByTagName(tag) - ищет элементы с заданным тегом, возхвращает их колекцию
let li = document.getElementsByTagName('li')
for (let i in li){
    console.log(li[i])
    // console.log(li)
}

console.dir(document.body)
console.log(document.body)