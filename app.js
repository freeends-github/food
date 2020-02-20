// var sliderContent = document.getElementById('client-photo--div');

// var image = ['girl', 'ham', 'burger'];
// var i = image.length;

// function nextImage(){
//     if (i > image.length){
//         i = i + 1;
//     } else{
//         i = 1;
//     }
//         sliderContent.innerHTML = "<img src=" + [i-1] + ".png> "
// }

//======================================================================
// var i = 0;
// var images = [];
// var time = 5000;

// images[0] = './imgs/beautiful-young-healthy-woman-holds-tasty-big-burger-with-beef-cutlet-concept-nourishing-food_152625-788@2x.png';
// images[1] = './imgs/ham';
// images[2] = '.imgs/burger';

// function changeImg(){
//     document.slide.src = images[i];
    
//     if(i < images.length - 1){
//         i++;
//     } else{
//         i = 0;
//     }
//     setTimeout("changeImg()", time);
// }

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