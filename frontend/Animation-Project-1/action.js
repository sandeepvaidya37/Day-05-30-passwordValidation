var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        scrub:1,
        pin:true,
        end:"bottom -450%"
    }
})

tl.to(".circle1 .bottom img", {
    scale:1,
    rotate:`-180deg`,
    duration:1,
    stagger:.1,
    ease:Power1
}, "flag")
.to(".cimg img", {

    scale:"0",
    duration:1,
    stagger: .1,
    ease:Power1

}, "flag")
.to(".centerimg h5", {

    opacity:0,
    duration:1,
    stagger: .1,
    ease:Power1

}, "flag")
.to(".circle1", {

    scale:0.6,
    ease:Power1

}, "flag")
 .to(".circle1 .top img", {
    scale:1,
    duration:1,
    stagger:.1,
    ease:Power1
}, "flag")
.to(".smcircle ", {
    scale:0,
    ease:Power1
}, "flag2")
.to(".circle1 ", {
    scale:0,
    ease:Power1
}, "flag2")
.to(".Gal", {
 
    bottom:"-150%",
    ease:Power1
     
}, "flag")
.to(".gola",{
   top:"50%",
   scale:1.2,
   ease:Power1
}, "flag")
.to(".gola", {
   opacity:0,
   ease:Power1

}, "flag2")
.to(".pink", {
    top:"68%",
    transform: "translate(-50%) rotate(0deg)",
    ease:Power1

}, "flag2")
.to(".floating", {
    top:"-64%",
    ease:Power1
}, "flag2")

var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".second",
        start:"top top",
        scrub:1,
        pin:true,
        end:"bottom -300%"
    }
})
tl2.to(".cr1", {
    top:"50%",
    stagger:.1,
    duration:1,
    ease:Power1
}, "anim1")
.to(".cr2", {
    top:"50%",
    stagger:.1,
    duration:1,
    ease:Power1,
    delay:0.5
}, "anim1")
.to(".cr1", {
    left:"50%",
    stagger:.1,
    duration:0.5,
    ease:Power1
}, "anim2")
.to(".cr2", {
    left:"50%",
    stagger:.1,
    duration:0.5,
    ease:Power1,
}, "anim2")
.to(".cr1",{
    opacity:0,
})
.to(".cr2", {
    scale:10,
    stagger:.1,
    duration:2,
    ease:Power1
}, "anim3")

.to(".stop h1", {
    left:"-75%",
    duration:8,
    stagger:.1,
    ease:Power1
}, "anim4")
.to(".stop",{
    background: "linear-gradient(to right, #D5A7B4, #B4AAD5)",
    stagger:.1,
    duration:4,
    ease:Power1
}, "anim4")
.to(".cr2", {
    opacity:0,
    ease:Power1,
}, "anim4")
.to(".d1",{
    opacity:0,
    duration:1,
    ease:Power1
}, "anim4")
.to(".d2",{
    opacity:1,
    duration:1,
    ease:Power1,
    delay:1
}, "anim4")




