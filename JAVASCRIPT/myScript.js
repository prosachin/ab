// === === <<< === NAVBAR === >>> ===
function humburgerClick(){
    document.getElementById('navTab').style. width = "100%";
    document.getElementById('navTwo').style. width = "250px";
}

function hideNav() {
    document.getElementById('navTab').style. width = "0";
    document.getElementById('navTwo').style. width = "0";
}

// === === <<< === FOOTER MOBILE === >>> ===

const x = document.getElementsByClassName('mob_about_btn');
var y;

for(y = 0; y < x.length; y++){

    x[y].addEventListener("click", function() {

        this.classList.toggle("nonact");

        const text = this.nextElementSibling;

        if(text.style.maxHeight){
            text.style.maxHeight = null;
        }else{
            text.style.maxHeight = text.scrollHeight + "px";
        }
        
    });
}
