const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
    if(counter === 4){
        counter = -1;
    };
        counter++;
        container.style.backgroundImage = `url(imgs/img-${counter}.jpg`;
    }

function prevSlide(){
    if(counter === 0 ){
        //counter == 5 below because 5-1 = 4
        counter = 5;
    };
        //subtract 1 from counter below
        counter--;
        container.style.backgroundImage = `url(imgs/img-${counter}.jpg`;
    }
    