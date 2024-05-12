
function homeanimations(){
    gsap.set('.row-con',{scale: 3})
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
    },
})

tl
.to('video-area', {
    '--clip': '0%',
    ease: Power2,
    duration: 3
},'anime')
.to('.row-con', {
    scale: 1,
    ease: Power2.easeIn,
    duration: 3
},'anime')
.to('.row-con .lft', {
    xPercent: -8,
    duration: 3,
    ease: Power4,
},'anime2')
.to('.row-con .rgt', {
    xPercent: 8, 
    duration: 3,
    ease: Power4,
},'anime2')
}

function craftanimations(){

    var windowWidth = window.innerWidth;


    if (windowWidth > 600) {
        document.querySelectorAll('.craft .craft-right .card')
        .forEach(elem =>{
            gsap.to(elem,{
                scrollTrigger: {
                    trigger: elem,
                    start: "top 50%",
                    end: "bottom 50%",
                    scrub: 2,
                },
                lazy: false,
                scaleX: 1.1,
                backgroundColor: "black",
                color: '#AEDEE0',
                ease: Power2,
            })
        })
    }

}

function realTalkanimations(){
    gsap.to('.slide',{
        scrollTrigger: {
            trigger: ".realTalk",
            start: "top top",
            end: "bottom bottom",
            scrub: 2,

            
        },
        xPercent:-300,
        ease: Power4,
    })
}

function ourTeamanimtion(){
    document.querySelectorAll('.member')
    .forEach(elem =>{
        elem.addEventListener('mousemove', function(dets){
            
            gsap.to(this.querySelector('.picture'),{
                opacity: 1,
                duration: .3,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                y: gsap.utils.mapRange(0, window.innerHeight, -100, 100, dets.clientY),
                ease: Power2
            })
        })

        elem.addEventListener('mouseleave', function(dets){
            gsap.to(this.querySelector('.picture'),{
                opacity: 0,
                duration: .5,
                ease: Power2
            })
        })
    })
}

function clientMessagesanimation(){
    let clutter = '';
    document.querySelector('#para')
    .textContent.split("")
    .forEach(elem =>{
        clutter += `<span>${elem}</span>`
    })

    document.querySelector('#para').innerHTML = clutter;

    gsap.set('#para span',{opacity: .1})
    gsap.to('#para span',{
        scrollTrigger: {
            trigger: "#para",
            start: "top 50%",
            end: "bottom 80%",
            scrub: .2,
        },
        opacity: 1,
        stagger: .2,
        ease: Power2
    })



    let clutter2 = '';
    document.querySelector('#para2')
    .textContent.split("")
    .forEach(elem =>{
        clutter2 += `<span>${elem}</span>`
    })

    document.querySelector('#para2').innerHTML = clutter2;

    gsap.set('#para2 span',{opacity: .1})
    gsap.to('#para2 span',{
        scrollTrigger: {
            trigger: "#para2",
            start: "top 50%",
            end: "bottom 80%",
            scrub: .2,
        },
        opacity: 1,
        stagger: .2,
        ease: Power2
    })

}

function capsulanimations(){
    gsap.set(".rectangle2",{y: 50})
    gsap.to(".rectangle2",{
        scrollTrigger: {
            trigger: ".reactangles",
            start: "top 50%",
            end: "bottom 50%",
            scrub: 2,
        },
        y: 0
    })
}

function loco(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function footeranimation(){
    gsap.set('.significotext h1',{y: '200%'})
    gsap.to('.significotext h1',{
        scrollTrigger: {
            trigger: ".footer",
            start: "top 50%",
            end: "bottom 80%",
            scrub: 1
        },
        lazy: false,
        y: '10%',
        ease: Power4

    })
}

function colorchangeanimation(){
    document.querySelectorAll('.section')
    .forEach(elem => {
    ScrollTrigger.create({
        trigger: elem,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: function(){
            document.body.setAttribute('theme', elem.dataset.color)
        },
        onEnterBack: function(){
            document.body.setAttribute('theme', elem.dataset.color)
        },
        
    })
});
}



colorchangeanimation()
loco()
footeranimation()
capsulanimations()
clientMessagesanimation()
ourTeamanimtion()
craftanimations()
realTalkanimations()
homeanimations()

