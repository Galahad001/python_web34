let i = document.getElementById('on')
// i.onclick = function(ev){
//     document.getElementById('test').innerHTML = ev.target.nodeName
// }
i.addEventListener('click', function(ev){
    test.innerHTML = ev.target.nodeName
})