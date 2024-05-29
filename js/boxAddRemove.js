let x = document.querySelectorAll('.box h2 i');
let remove = document.querySelector('.content')
for(let i=0;i<x.length;i++){
    x[i].addEventListener('click',boxtoggle);
}
 function boxtoggle(event){ 
  event.target.classList.toggle('box11')
  event.target.parentElement.nextElementSibling.classList.toggle('none')
}