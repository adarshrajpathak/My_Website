//Code for the Smooth Scroll of Navigation to Target Section
var Elements=document.querySelectorAll(".smooth-scroll li a");
// console.log(Elements);

for(var i=0;i<Elements.length;i++){
    Elements[i].addEventListener("click", function(event) {
        event.preventDefault();
        var selectedSection = document.querySelector(this.getAttribute('href'));
        var scrollInterval=setInterval(function(){
            w=selectedSection.getBoundingClientRect().top;
            if(w<=0){  //(window.scrollY>=w)
                clearInterval(scrollInterval);
                return;
            }
            // console.log(scrollY);
            // console.log(w);
            window.scrollBy(0,20);
            setTimeout(()=>{clearInterval(scrollInterval);},1500);
        },1);
    });
}