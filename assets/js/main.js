// get slider items | Array.from [ES6 feature]
var sliderItems = Array.from(document.querySelectorAll('.slider-container img')),
// get number of slides
slidesCount = sliderItems.length,
// set current slide 
currentSlide = 1,
// slide number element
slideNumberElement = document.getElementById('slide-number'),
// prev and next buttons
prevBtn = document.getElementById('prev'),
nextBtn = document.getElementById('next');
// ############################################################################

// handle clidk on prev and next buttons
prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;


// create main ul element
var paginationElement = document.createElement('ul');

paginationElement.setAttribute('id', 'pagination-ul');


// create list items based on slides count
for(var i = 1 ; i <= slidesCount; i++){
    // create lis
    var paginationItems = document.createElement('li');
    //set custom attribute
    paginationItems.setAttribute('data-index', i);
    // set item content
    paginationItems.appendChild(document.createTextNode(i));
    // appent items to the parent
    paginationElement.appendChild(paginationItems);
}
// add created element to the document
document.getElementById('indicator').appendChild(paginationElement);


// get the created ul
var paginationCreatedUl = document.getElementById('pagination-ul');

var paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


// loop through all bullets items
for(var i = 0; i < paginationBullets.length; i++){
    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute('data-index'));
        checker();
    }
}

// trigger checker function
checker();


// ############################functions################################################

// nextSlide() function
function nextSlide(){
    console.log('next');
}
// prevSlide() function
function prevSlide(){
    console.log('prev');
}


// next slide() function
function nextSlide(){
    if (nextBtn.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide++;
        checker();
    }
}

// prev slide() function
function prevSlide(){
    if (prevBtn.classList.contains('disabled')) {
        return false;
    } else {
        currentSlide--;
        checker();
    }
}


// checker function
function checker(){
    // set the slide number
    slideNumberElement.textContent = `Slide # ${currentSlide} Of ${slidesCount}`;
    // remove all active classes
    removeAllActive();
    // set active class on current slide 
    sliderItems[currentSlide - 1].classList.add('active');
    // set active class on current pagination pullet
    paginationCreatedUl.children[currentSlide-1].classList.add('active');
    // check if current slide is the first and add disabled class to prevBtn
    if (currentSlide == 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled');
    }
    // check if current slide is the last and add disabled class to nextBtn
    if (currentSlide == slidesCount) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
}


// remove all active classes from imgs and paginations
function removeAllActive() {

    sliderItems.forEach(function(e){
        e.classList.remove('active');
    });

    paginationBullets.forEach(function(e){
        e.classList.remove('active');
    });
};
