document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll('img');
    const nbSlide = items.length;
    const suivant = document.querySelector('.right');
    const precedent = document.querySelector('.left');
    let count = 0;

    var galerie = {

        slideSuivante() {
            items[count].classList.remove('active');
            if (count < nbSlide - 1) {
                count++;
            } else {
                count = 0;
            }
            items[count].classList.add('active');
            console.log(count);
        },

        slidePrecedente() {
            items[count].classList.remove('active');
            if (count > 0) {
                count--;
            } else {
                count = nbSlide - 1;
            }

            items[count].classList.add('active');
        },

        keyPress(e) {
            console.log(e);
            if (e.keyCode === 37) {
                galerie.slidePrecedente();
            } else if (e.keyCode === 39) {
                galerie.slideSuivante();
            }
        }

    };
    suivant.addEventListener('click', galerie.slideSuivante);


    precedent.addEventListener('click', galerie.slidePrecedente);
    
    
    document.addEventListener('keydown', galerie.keyPress);
})