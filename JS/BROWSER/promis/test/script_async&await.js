// let delay = new Promise(function(resolve, reject){
//         setTimeout(() => resolve(), 2000)
// })
// delay.then(() => console.log('OK'))


// Асинхронная функция
// Перед началом ставится async - функция всегда возвращает промис
async function asyncFunction() {
    return 1
    // Можно и так return new Promise.resolve(1)
}
asyncFunction().then(console.log)


// Await - ключевое слово ставится только в async функциях. Заставит JS ждать до тех пор, пока промис справа от await не выполнится. Потом вернет его результат и код продолжится
async function asyncFunction2(){
    let promise = new Promise((resolve, reject) =>{
        setTimeout(() => resolve('Готов'), 2000)
    })

    let res = await promise

    alert(res)
}

asyncFunction2()

alert('p   ')