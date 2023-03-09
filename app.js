mybutton = document.getElementById('bott-button');
function goAwayButton(){
    // document.body.scrollTop = 0; // For Safari
    window.scrollTo(0,800) = 0; // For Chrome, Firefox, IE and Opera
}


// --- chatGPT time ...
function checkHappyHours() {
    // get current date and time
    const now = new Date();
    // check if today is Friday and if so, if it's after 5pm but before 8pm
    if (now.getDay() === 5 && now.getHours() >= 17 && now.getHours() < 20) {
      // if it's during happy hours, hide the element with id "happy-hours"
        const happyHoursElement = document.getElementById("happy-hours");
        if (happyHoursElement) {
            happyHoursElement.style.visibility = "hidden"
        } else {
            happyHoursElement.style.visibility = "visible"
        }
    }
}

function getNextFridayHappyHours() {
    // get current date and time
    const now = new Date();
    // get current day of week (0 is Sunday, 6 is Saturday)
    const currentDay = now.getDay();
    // check if today is Friday and if so, if it's after 8pm
    if (currentDay === 5 && now.getHours() >= 20) {
        // if it's after 8pm on a Friday, calculate days until next Friday
        const daysUntilFriday = (5 - currentDay + 7) % 7;
        // create datetime object for next Friday at 5pm
        const nextFriday = new Date(now.getFullYear(), now.getMonth(), now.getDate() + daysUntilFriday, 17, 0, 0);
        // calculate difference in milliseconds between now and next Friday at 5pm
        const timeDiff = nextFriday.getTime() - now.getTime();
        // calculate difference in hours between now and next Friday at 5pm
        const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
        // calculate difference in minutes between now and next Friday at 5pm
        const minutesDiff = Math.floor((timeDiff / (1000 * 60)) % 60);
        // calculate difference in seconds between now and next Friday at 5pm
        const secondsDiff = Math.floor((timeDiff / 1000) % 60);
        // return formatted string with time until next Friday at 5pm
        return `${daysUntilFriday} days, ${hoursDiff} hours, ${minutesDiff} minutes, and ${secondsDiff} seconds until next Friday's happy hours at 5pm`;
    } else {
        // if it's not after 8pm on a Friday, return a message indicating the next happy hour
        const nextHappyHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 17, 0, 0);
        if (now.getDay() < 5) {
            // if today is not Friday, set the date to the next Friday
            nextHappyHour.setDate(now.getDate() + (5 - now.getDay()));
        } else {
            // if today is Friday, check if it's after 5pm and if so, set the date to the next Friday
            if (now.getHours() >= 17) {
            nextHappyHour.setDate(now.getDate() + 7);
            }
        }
        // calculate difference in milliseconds between now and next happy hour
        var timeDiff = nextHappyHour.getTime() - now.getTime();
        // calculate difference in days between now and next happy hour
        var dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        // calculate difference in hours between now and next happy hour
        var hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
        // calculate difference in minutes between now and next happy hour
        var minutesDiff = Math.floor((timeDiff / (1000 * 60)) % 60);
        // calculate difference in seconds between now and next happy hour
        var secondsDiff = Math.floor((timeDiff / 1000) % 60);
        // return formatted string with time until next happy hour
        
        document.getElementById("days").textContent = dayDiff;
        document.getElementById("hours").textContent = hoursDiff;
        document.getElementById("minutes").textContent = minutesDiff;
        document.getElementById("seconds").textContent = secondsDiff;
    }
}

setInterval("getNextFridayHappyHours(), checkHappyHours()", 1000);
// --- chatGPT time ... /end

// Getting variables
let cartBtns = document.querySelectorAll(".addToCart-value button")
let cartNr = document.querySelector(".quantity");
let added = document.querySelector(".added");
let articles = document.querySelectorAll(".articles");

// Setting up the counter
cartNr.style.display = "none";
let count = 0;

// Helping functions
function addToCart(button) {
    count++;
    cartNr.style.display = "flex";
    cartNr.textContent = count;
    added.style.display = "block";
    button.style.display = "none";
}
let list = document.querySelector(".shopping-items");
function sendInfo(infos) {
    let item = document.createElement("div");
    let title = document.createElement("h3");
    // let desc = document.createElement("p");
    let titleText = document.createTextNode(infos.name);
    // let descText = document.createTextNode(infos.desc);
    title.appendChild(titleText);
    // desc.appendChild(descText);
    item.appendChild(title);
    // item.appendChild(desc);
    list.appendChild(item);
}


// toggle button
// Displaying the nav after clicking the toggle button
let toggleButton = document.querySelector(".toggle-button");
let navigationBar = document.querySelector(".main-nav");
toggleButton.addEventListener("click", () => {
    navigationBar.style.display = "block"
}
)
// Listening for clicks
articles.forEach(article => {
    articleInfo = {
        "name": article.querySelector("h3").textContent,
        // "desc": article.querySelector(".desc").textContent
    }
    let btn = article.querySelector("button");
    btn.addEventListener("click", () => {
        addToCart(btn);
        sendInfo(articleInfo);
    });
})

// Displaying shopping items
let cartt = document.querySelector(".cartt");
cartt.addEventListener("click", () => {
    list.style.display = "block";
    alert("test");
});

//Displaying search input
let searchInput = document.querySelector(".searchInput");
let searchInputText = document.querySelector(".search-input");
searchInput.addEventListener("click", () => {
    searchInputText.style.display = "inline-block";
})

// Account
let userDiv = document.querySelector(".user-div");
let acc = document.querySelector(".user");
acc.addEventListener("click", () => {
    userDiv.style.display = "flex"
})

//header slider
let header = document.querySelector("#header");
var sliderImage = ["url(./imgs/headerBg2x.png)", "url(./imgs/hamburger-and-fries-beside-mug-with-beer-3356408.jpg)", "url(./imgs/corona-background.jpg)"];
// let tripleBurgers = sliderImage[0];
// let burgerBeer = sliderImage[1];
// let coronaBeers = sliderImage[2];
let arrowLeft = document.querySelector("#arrowLeft");
let aroowRight = document.querySelector("#arrowRight");
let current = 0;

function reset(){
    header.style.background = "none";
}

function startSlide(){
    reset();
    header.style.background ="center / cover no-repeat " + sliderImage[0];
}

function slideLeft(){
    reset();
    header.style.background ="center / cover no-repeat " + sliderImage[current - 1];
    current--;
}

function slideRight(){
    reset();
    header.style.background ="center / cover no-repeat " + sliderImage[current + 1];
    current++;
}

arrowLeft.addEventListener("click", function(){
    if(current === 0){
        current = sliderImage.length;
    }
    slideLeft();
})

arrowRight.addEventListener("click", function(){
    if(current === sliderImage.length - 1){
        current = -1;
    }
    slideRight();
})
startSlide();

//testimonials

// let clientArticle = document.querySelector("#client");
// let dot = document.querySelector(".slideDir");
// let clientQuote = document.querySelector("#clientQuote");
// let clientName = document.querySelector("#clientName");
// let clientJob = document.querySelector("#clientJob");
// let currentSlide = 0;

//









//map
