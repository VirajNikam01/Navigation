var active= 3;

var mncircle = document.querySelectorAll(".mncircle");
var sec = document.querySelectorAll(".sec");


gsap.to(mncircle[active-1],{
    opacity: 0.5
})

gsap.to(sec[active-1],{
    opacity: 1
})

mncircle.forEach(function(val, index){
    val.addEventListener("click", function(){
        
        gsap.to("#circle", {
            rotate: (3-(index+1))*10,
            ease: Expo.easeInOut,
            duration: 1
        })
        grayout();
        gsap.to(this,{
            opacity: 0.5
        })
        gsap.to(sec[index],{
            opacity: 1
        })
    })

})

function grayout(){
    gsap.to(mncircle, {
        opacity: .08
    })

    gsap.to(sec,{
        opacity: .4
    })
}

gsap.to("#circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})