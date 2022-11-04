$(document).ready(function(){
    $('#columns-houses').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<a class='prev'>Previous</a>",
        nextArrow: "<a class='next'>Next</a>"
    });
});

$(document).ready(function(){
    $('#quotes-div').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: "<a class='leftArrow'><</a>",
        nextArrow: "<a class='rightArrow'>></a>"
    });
});

window.onscroll = function () {
    scroll()

}
let body = document.getElementById("body")
let navBar =  document.getElementsByClassName("nav-bar")
let navHeader = document.getElementsByClassName("nav-header1")
let navLinks = document.getElementsByClassName("nav-links")
let navLinkHome = document.getElementsByClassName("nav-link-home")

function scroll(){
if (document.documentElement.scrollTop > 1) {
    navBar[0].style.backgroundColor = "#FFF";
    navHeader[0].style.color = "#000000";
    if (document.documentElement.scrollTop > 500) {
        navBar[0].style.padding = "1% 2%";
    }
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = "#000000";
    }
    navLinkHome[0].style.color = "#e67622";
    navBar[0].style.boxShadow = "0px -4px 10px 1px";
    navBar[0].style.borderStyle = "none";
    navBar[0].style.padding = "2% 4%";
    }
    else {
        navBar[0].style.backgroundColor = "";
        navHeader[0].style.color = "#FFF";
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "rgb(172, 172, 172)";
        }
        navLinkHome[0].style.color = "#FFF";
        navBar[0].style.boxShadow = "0px 0px 0px 0px";
        navBar[0].style.borderStyle = "solid";
        navBar[0].style.padding = "3%";
    }
}

// function colorChange(obj) {
//     if (obj.style.color == '#e67622') {
//         obj.style.color = 'black';
//     }   else {
//         obj.style.color = '#e67622'
//     }
// }

// could not deal onmousehover/onmouseout nopenpoenpoe