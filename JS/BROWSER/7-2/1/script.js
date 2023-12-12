// Введение в браузерные события
// Событие - это сигнал от браузера о том что то-то произошло.


// Событию можно газначить обработчик-события. То есть функцию, которая сработает как только произойдет событие
// Есть несколько способов назначить обоаботчик
// 1 встроеный обработчик в html - разметку. К названию надо добавить on<событие>
// Пример на html файле под номером 1


function test(){
    for(let i = 0; i < 10; i++){
        console.log(i)
    }
}



// Можно назначить обработчик через DOM
let i = document.getElementById('el')
i.onclick = function(){
    console.log('РАБОТАЕТ')
}


// addEventListener - позволяет повесить несколько обработчиков на одно событие
w = document.getElementById('testr')
function t1(){console.log('func1')}
 function t2(){console.log('func2')}
w.addEventListener("mouseover", t1)
w.addEventListener("mouseover", t2)



// Обьект события
// Для хорошей обработки события, могут понадобится детали того что произошло. Например клик - можно получить координаты мыши, на клавиатуре - какая кнопка была нажата
// Когда происходит событие, браузер создает обьект события, записывакь его детали и передает его в качстве аргумента функции-обработчику.
x = document.getElementById('ev')
x.onclick = function(event){
    // Тип события
    console.log(event.type + event.currentTarget)
    // Целевой элемент
    console.log(event.currentTarget)
    // Координаты
    console.log(`Координаты ${event.clientX} + ${event.clientY}`)
}