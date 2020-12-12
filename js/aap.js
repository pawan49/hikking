let navTrigger = document.querySelector('.nav-trigger');
let siteContentWrapper = document.querySelector('.site-content-wrapper')
navTrigger.addEventListener('click', function() {
    siteContentWrapper.classList.toggle('scaled')
})