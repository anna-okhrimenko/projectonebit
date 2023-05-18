$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        speed: 800,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                dots: false,
              }
            },
            
            
            
        ]
    });
    $('.review-slider').slick({
        dots: false,
        arrows: true,
        speed: 800,
        
    });
    
    $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        const sliderItem = slick['$slides'][nextSlide];
        if(sliderItem.classList.contains('crypto-transaction')) { 
            $('.slider').addClass('bckgr-shiny');
        } else {
            $('.slider').removeClass('bckgr-shiny');
        }
    });
});


const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const selectInput = select.querySelector('input');
    const arrow = dropdown.querySelector('.arrow');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        arrow.classList.toggle('arrow-rotate');
        menu.classList.toggle('menu-open');
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerHTML = option.innerHTML;
            selectInput.value = option.textContent.trim();
            select.classList.remove('select-clicked');
            arrow.classList.remove('arrow-rotate');
            menu.classList.remove('menu-open');
                        
        });
    });

    document.addEventListener('click', (e) => {
        const clickDropdown = e.composedPath().includes(dropdown);
        if(!clickDropdown) {
            select.classList.remove('select-clicked');
            arrow.classList.remove('arrow-rotate');
            menu.classList.remove('menu-open');
        }
    });
});

// accordion

const installAccordion = function() {
    const acordion = document.querySelectorAll('.acordion-title');
    acordion.forEach(function (title) {
        title.onclick = function() {
            title.closest('.acordion-item').classList.toggle('active');
        }
    });
}
installAccordion()

// modal 

const modal = document.querySelector('.header-mobile_modal');
const modalBtnOpen = document.querySelector('.open-modal');
const modalBtnClose = document.querySelector('.close-modal');
modalBtnOpen.addEventListener('click', () => {
    modal.classList.add('open');
});
modalBtnClose.addEventListener('click', () => {
    modal.classList.remove('open');
});

//table change color spred//

const spredList = document.querySelectorAll('.spred');
spredList.forEach(function (spred){
    let spredValue = spred.textContent;
    spredValue = spredValue.replace(',', '.');
    spredValue = parseFloat(spredValue);
    if(spredValue > 0) {
        spred.classList.add('up');
    } else if(spredValue < 0) {
        spred.classList.add('down');
    }
});

//open full comment//

const textReviews = document.querySelectorAll('.review-person_text');
textReviews.forEach(function (review, i) {
    const openBtn = review.closest('.review_cards-block').querySelector('.btn-open');
    openBtn.addEventListener('click', () => {
        closeReviews(i);
        review.classList.toggle('text-open');
        if(review.classList.contains('text-open')) {
            openBtn.innerHTML = "закрити"
        } else {
            openBtn.innerHTML = "читати повністю"
        }
    });
    
});

const closeReviews = (currentIndex) => {
    textReviews.forEach(function (review, i) {
        if(currentIndex != i) {
            const openBtn = review.closest('.review_cards-block').querySelector('.btn-open');
            review.classList.remove('text-open');
            openBtn.innerHTML = "читати повністю"
        } else {
            null
        }
    });
}

//show/hide password//

const eyeImg = document.querySelectorAll('.show-pass');
eyeImg.forEach(function (eye) {
    eye.addEventListener('click', () => {
        if(eye.classList.contains('open-eye')) {
            eye.classList.remove('open-eye'); 
            eye.setAttribute("src", "assets/img/eye-close-icon.png");
            eye.previousElementSibling.type = "text"
        } else {
            eye.classList.add('open-eye'); 
            eye.setAttribute("src", "assets/img/eye-icon.png");
            eye.previousElementSibling.type = "password"
        }
        
    });
});
