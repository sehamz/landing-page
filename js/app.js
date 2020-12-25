/////////////////////////////////////////////////////////////////////////////////
///(1) -------------------- create the nav bar links 
/////////////////////////////////////////////////////////////////////////////////


//// select the nav bar unordered list that is located in the header 
//// to add li elements of the sections ot it
const navbarlist_ul = document.querySelector('.navbar__menu ul');

//// create li element for section#1 that contains anchor element and set its class and href attributes 
const section1_li = document.createElement('li');
const section1_a = document.createElement('a');
section1_a.innerHTML = "section 1";
section1_a.setAttribute("class", "menu__link");
section1_a.setAttribute("href", "#section1");
section1_li.appendChild(section1_a);

//// create li element for section#2 that contains anchor element and set its class and href attributes 
const section2_li = document.createElement('li');
const section2_a = document.createElement('a');
section2_a.innerHTML = "section 2";
section2_a.setAttribute("class", "menu__link");
section2_a.setAttribute("href", "#section2");
section2_li.appendChild(section2_a);

//// create li element for section#3 that contains anchor element and set its class and href attributes 
const section3_li = document.createElement('li');
const section3_a = document.createElement('a');
section3_a.innerHTML = "section 3";
section3_a.setAttribute("class", "menu__link");
section3_a.setAttribute("href", "#section3");
section3_li.appendChild(section3_a);

//// create li element for section#4 that contains anchor element and set its class and href attributes 
const section4_li = document.createElement('li');
const section4_a = document.createElement('a');
section4_a.innerHTML = "section 4";
section4_a.setAttribute("class", "menu__link");
section4_a.setAttribute("href", "#section4");
section4_li.appendChild(section4_a);

//// append all the li elements of the sections to the navbar unordered list element
navbarlist_ul.appendChild(section1_li);
navbarlist_ul.appendChild(section2_li);
navbarlist_ul.appendChild(section3_li);
navbarlist_ul.appendChild(section4_li);


/////////////////////////////////////////////////////////////////////////////////
///(2) ---intersection observer for highlighting the nav bar link when viewing the corresponding section
/////////////////////////////////////////////////////////////////////////////////
// reference: youtube tutorial: https://www.youtube.com/watch?v=T8EYosX4NOo

// select all the sections in the html
const sections = document.querySelectorAll('section');

const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');
// set the options of the intersection observer 
let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}

// the intersection observer that takes observerFunction and options as parameters  
let observer = new IntersectionObserver(observerFunction, options);

// observerFunction that takes the entries as a parameter
function observerFunction(entries) {
    // check for the intersecting section for each entry
    entries.forEach(entry => {

        if (entry.isIntersecting && entry.intersectionRatio >= 0.70) {
            // remove the classes for all anchors (when it is not intersected)
            section1_a.classList.remove("menu__link__active");
            section2_a.classList.remove("menu__link__active");
            section3_a.classList.remove("menu__link__active");
            section4_a.classList.remove("menu__link__active");

            //remove the active classes from all sections (when it is not intersected)
            section1.classList.remove("your-active-class");
            section2.classList.remove("your-active-class");
            section3.classList.remove("your-active-class");
            section4.classList.remove("your-active-class");
            // if statements to check for the current section and then add the needed classes to highlight the active link
            if (entry.target.id == "section1") {
                // console.log(entry.target.id); // to show the current section on DevTools
                // add the proper classes for the current section
                section1_a.classList.add("menu__link__active");
                // add active class to section1 when it is intersecting
                section1.classList.add("your-active-class");
                // add the section id to the uri
                location.href = "#" + entry.target.id;

            } else if (entry.target.id == "section2") {
                // console.log(entry.target.id); // to show the current section on DevTools
                // add the proper classes for the current section
                section2_a.classList.add("menu__link__active");
                // add active class to section2 when it is intersecting
                section2.classList.add("your-active-class");
                // add the section id to the uri
                location.href = "#" + entry.target.id;

            } else if (entry.target.id == "section3") {
                // console.log(entry.target.id); // to show the current section on DevTools
                // add the proper classes for the current section
                section3_a.classList.add("menu__link__active");
                // add active class to section3 when it is intersecting
                section3.classList.add("your-active-class");
                // add the section id to the uri
                location.href = "#" + entry.target.id;

            } else if (entry.target.id == "section4") {
                // console.log(entry.target.id); // to show the current section on DevTools
                // add the proper classes for the current section
                section4_a.classList.add("menu__link__active");
                // add active class to section4 when it is intersecting
                section4.classList.add("your-active-class");
                // add the section id to the uri
                location.href = "#" + entry.target.id;
            }

        } else {
            return;
        }
    })
}

// apply the intersection observer on each section
sections.forEach(section => {
    observer.observe(section);
});

/////////////////////////////////////////////////////////////////////////////////
///(3) --- the click event on the nav bar links
/////////////////////////////////////////////////////////////////////////////////
// reference: youtube tutorial: https://www.youtube.com/watch?v=hPT1SSHptWA

// select all the nav bar links
const navbar_anchors = document.querySelectorAll('a');

// add a click event listener(smothscrolling function) to each link
navbar_anchors.forEach(anchor => anchor.addEventListener('click', smoothScrolling));

// the smoothscrolling function
function smoothScrolling(event) {
    event.preventDefault();
    const target_id = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: target_id === "#" ? 0 : document.querySelector(target_id).offsetTop,
        behavior: 'smooth' // the behavior of scrollTo function
    });
    // console.log(target_Id); // to show the current section on DevTools
}


/////////////////////////////////////////////////////////////////////////////////
/////(4)---------- responsive hamburger in nav bar
/////////////////////////////////////////////////////////////////////////////////


// select html elements(hamburger button, hamburger icon and navbar list that contains the anchors )
const hamburger = document.querySelector('.hamburger');
const hamburger_i = document.querySelector('i');
const navlist_ul_items = document.querySelector('#navbar__list');

// event listener to show the nav bar items and to change the icons of the navbar after clicking
hamburger.addEventListener('click', function() {
    navlist_ul_items.classList.toggle('show__items');

    ///// to change the icons of the menu after clicking by adding and removing the classes
    // change the bars icons to close icon
    if (hamburger_i.classList.contains('fa-bars')) {
        hamburger_i.classList.remove('fa-bars');
        hamburger_i.classList.add('fa-times');

        // change the close icons to bars icon
    } else {
        hamburger_i.classList.remove('fa-times');
        hamburger_i.classList.add('fa-bars');
    }
});

/////