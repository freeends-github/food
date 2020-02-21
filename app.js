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
    document.getElementById("hours").textContent = h
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