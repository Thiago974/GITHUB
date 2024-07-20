let btnNext = document.querySelector('.next')
let btnBack = document.querySelector('.back')
let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')
btnNext.onclick = () => moveItemOnClick('next')
btnBack.onclick = () => moveItemOnClick('back')
function moveItemOnClick(type){
    let listItem = document.querySelectorAll('.list .list-item')
    let thumbItem = document.querySelectorAll('.thumb .thumb-item')

    if (type === 'next'){
        list.appendChild(listItem[0])
        thumb.appendChild(thumbItem[0])
        container.classList.add('netx')
    } else{
        list.prepend(listItem[listItem.length -1])
        thumb.prepend(thumbItem[thumbItem.length -1])
        container.classList.add('back')
    }

    setInterval(() => {
        container.classList.remove('netx')
        container.classList.remove('back')
    }, 3000);
}