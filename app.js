document.addEventListener('DOMContentLoaded', function(){

window.addEventListener('scroll', myfunction);

var navBar = document.getElementById("navBar");

var sticky = navBar.offsetTop;


function myfunction(){
    if (window.pageYOffset >= sticky){
        navBar.classList.add("fixed-top");
    }
    else{
        navBar.classList.remove("fixed-top");
    }
}

})






