mybutton = document.getElementById('bott-button');
function goAwayButton(){
    // document.body.scrollTop = 0; // For Safari
    window.scrollTo(0,800) = 0; // For Chrome, Firefox, IE and Opera
}

function countdown(){
    var now = new Date();
    var eventDate = new Date(2020, 02, 18);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remainingTime = eventTime - currentTime;
    var d = Math.floor( remainingTime / 86400000);
    remainingTime = remainingTime % 86400000;
    var h = Math.floor( remainingTime / 3600000);
    remainingTime = remainingTime % 3600000;
    var min = Math.floor( remainingTime / 60000);
    remainingTime = remainingTime % 60000;
    var s = Math.floor( remainingTime / 1000);
    h %= 24;
    min %= 60;
    s %= 60;
    h = (h<10) ? "0" + h : h;
    min = (min<10) ? "0" + min : min;
    s = (s<10) ? "0" + s : s;
    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = min;
    document.getElementById("seconds").textContent = s;
}
setInterval("countdown()", 1000);

// Shop Logic

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
