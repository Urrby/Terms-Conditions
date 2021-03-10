// Variable decleration
const trigger = document.querySelector(".terms");
const outerModal = document.querySelector(".modalOuter");
const declineBtn = document.querySelector(".declineBtn");
const terms = outerModal.querySelector(".termsWindow");
const acceptBtn = outerModal.querySelector(".acceptBtn");
const checkBox = outerModal.querySelector(".checkBox");
// Initialization of Intersection Observer Object - used for keeping track of elements on the page
const ob = new IntersectionObserver(obCallback);

// Function for opening and showing Terms and Conditions window
function clickHandler(e) {
    outerModal.classList.add("open");
    trigger.style.setProperty("display", "none");
    // We call the Intersection Observer and use .observe() method on last element of terms div.
    ob.observe(terms.lastElementChild);
}

// Function for closing Terms and Conditions window and reseting buttons/scrolls/chechboxes
function closeModal(e) {
    outerModal.classList.remove("open");
    trigger.style.removeProperty("display");
    acceptBtn.disabled = true;
    checkBox.disabled = true;
    checkBox.checked = false;
    terms.scrollTo(0,0);
}

// Function for Intersection Observer
function obCallback(payload) {
    // We check if the element of the first observation element (payload[0] is shown fully on page(.intersectionRatio === 1))
    if(payload[0].isIntersecting === true) {
        checkBox.disabled = false;
        // We stop observing with .unobserve() method
        ob.unobserve(terms.lastElementChild);
    }
}

//Event listeners
checkBox.addEventListener("click", function(e) {
    checkBox.checked === true ? acceptBtn.disabled = false : acceptBtn.disabled = true;
})
trigger.addEventListener("click", clickHandler);
declineBtn.addEventListener("click", closeModal);
acceptBtn.addEventListener("click", closeModal);