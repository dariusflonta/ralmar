const nav = document.querySelectorAll('#navbar ul li');

for (let i = 0; i < nav.length; i++){
    nav[i].addEventListener('click',(e)=>{
        let navItem = nav[i].textContent.toLowerCase();
        let item;
        if(navItem == 'despre noi'){
            item = document.getElementById('despre');
        } else {
            item = document.getElementById(`${navItem}`);
        }
        if(navItem[i] == 'acasa'){
            window.scrollBy(0, -10);
        } else {
            window.scrollBy(0, item.getBoundingClientRect().y - 50);
        }
    });
}


const carusel = document.querySelector('.carusel');
const caruselItem = document.querySelector('.item-carusel');
const caruselItems = document.querySelectorAll('.item-carusel');
const nextBtn = document.querySelector('.buton-carusel.fata')
const prevBtn = document.querySelector('.buton-carusel.spate')
const itemW = caruselItem.getBoundingClientRect().width+25;
let counter = 0;
let caruselMax = caruselItems.length - 6;
prevBtn.style.display = 'none';
let caruselWidth = carusel.clientWidth;

nextBtn.addEventListener('click',()=>{
    prevBtn.style.display = 'block';
    carusel.style.transition = 'transform .3s ease-in-out';
    counter++;
    carusel.style.transform = `translateX(-${itemW*counter}px)`;
    if(counter == caruselMax){
        nextBtn.style.display = "none";
    }

});

prevBtn.addEventListener('click',()=>{
    nextBtn.style.display = 'block';
    carusel.style.transition = 'transform .3s ease-in-out';
    counter--;
    carusel.style.transform = `translatex(-${itemW*counter}px)`;
    if(counter == 0){
        prevBtn.style.display = 'none';
    }

});

function whatsapp(){
    let wappnum = '+33698517373';
    let url = `https://wa.me/${wappnum}`;

    window.open(url, '_blank').focus();

}
