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


function countdown(){
    var now = new Date();
    var eventDate = new Date(2020, 03, 18);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    
    var remainingTime = eventTime - currentTime;

    var s = Math.floor(remainingTime / 1000);
    var min = Math.floor(s / 60);
    var h = Math.floor(min / 60);
    var d = Math.floor(h / 24);

    h %= 24;
    min %= 60;
    s %= 60;

    h = (h<10) ? "0" + h : h;
    min = (min<10) ? "0" + min : min;
    s = (s<10) ? "0" + s : s;

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h
    document.getElementById("minutes").textContent = min;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
}
countdown();