let a = document.getElementById('test')
function moveDiv(ev){
    a.style.left = ev.pageX + 'px'
    a.style.top = ev.pageY + 'px'
    a.style.backgroundColor = 'red'
}