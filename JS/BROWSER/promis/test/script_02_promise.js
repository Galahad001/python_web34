// Имитация отправки запроса на сервер
// Проблема в том что при большем количестве вложеных функций код становится трудночитаемый и поддерживать его труднее
// console.log('Запрос на сервер...')

// setTimeout(() => {
//     console.log('Обработка запроса...')

//     let user = {
//         name: 'John',
//         age: 25,
//         city: 'New York'
//     }

//     setTimeout(() => {
//         console.log('Даные получены', user)
//     }, 2000)
// }, 2000)


// Можно все проделать через промис
// new Promise -глобальный класс. Внутрь него помещаем функцию. Асинхронный код обернули в промис
let requestServer = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Обработка запроса...')
        let user = {
                    name: 'John',
                    age: 25,
                    city: 'New York'
                }
                resolve(user) // Говорим промису что он завершил свое выполнение
            }, 2000)

})


// У промиса requestServer есть методы
// Будет вызван когда закончится асинхронная операция. Будет вызван resolve()
// requestServer.then(user => {
//     console.log(user)
// })


requestServer.then(user =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            user.nickName = 'pol'
            resolve(user)
        }, 2000)
    })
}).then(res =>{
    console.log(`Пользователь ${res.name} теперь известен под ником ${res.nickName}`)
    res.win = true
    return res
}).then(result => {
    console.log(result)
}).catch(err => console.error(err)).finally(() => console.log('Закончил'))
// Метод catch нужен для обработки ошибок