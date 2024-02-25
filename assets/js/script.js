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
// //code for displaying the animation on scrollthrough the section
// var skillBars=document.querySelectorAll(".ind-background div");
// var skillSection=document.getElementById("skills");
// // console.log(skillSection);
// window.addEventListener("scroll",function(){
//     console.log("scrolling");
//     // var y=skillSection.getBoundingClientRect().top;
//     // var w=skillSection.getBoundingClientRect().bottom;
//     // console.log(w);
//     if(scrollY>=window.innerHeight){ //scrollY>=(w+y)/2
//         for(let i=0;i<skillBars.length;i++){
//             skillBars[i].classList.add("skillAnimation");
//         }
//     }else{
//         for(let i=0;i<skillBars.length;i++){
//             skillBars[i].classList.remove("skillAnimation");
//         }
//     }
// });

//code for appplying SkillFill on each of the skill
var skillElements=document.querySelectorAll('.ind-background div');
var isAnimation=new Array(skillElements.length);
for(let i of isAnimation){
    i=false;
}
//intialise
function initialise(element){
    element.style.width=0+'%';
}
//checkscroll
window.addEventListener('scroll',function(){
    //on each skillElement
    for(let i=0;i<skillElements.length;i++){
        // initialise(skillElements[i]);
        // console.log("True till for loop");
        if(!isAnimation[i] && skillElements[i].getBoundingClientRect().top<=window.innerHeight){
            isAnimation[i]=true;
            let widthSL=0;
            var animationInterval=setInterval(function(){
                // isAnimation[i]=true;
                if(widthSL>=skillElements[i].getAttribute('data-skillLevel')){
                    clearInterval(animationInterval);
                    return;
                }
                skillElements[i].style.width=widthSL+'%';
                widthSL++;
            },10);

        }else if(skillElements[i].getBoundingClientRect().top>window.innerHeight){
            isAnimation[i]=false;
            initialise(skillElements[i]);
        }
    }
});