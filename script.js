rb11 = document.getElementById("animation1-image");
anim2 = document.getElementById("animation2-image");
anim3 = document.getElementById("animation3-image");
header = document.getElementById("hero-header");
label1 = document.getElementById("label-hero1");
label2 = document.getElementById("label-hero2");
label3 = document.getElementById("label-hero3");
window.onscroll = function () { onScroll() };
onscroll();

function getLabelTween(label) {
    var tween = TweenMax.staggerFromTo(label, 1,
        { opacity: 0 },
        { opacity: 1, repeat: 1, yoyo: true, ease: Back.easeInOut }
    );

    return tween;
}

function setScene(trigger, label, top) {
    var scene = new ScrollMagic.Scene({ triggerElement: trigger, duration: 600 })
        .setTween(getLabelTween(label))
        .addTo(controller);

    if (top) {
        var scene = new ScrollMagic.Scene({ triggerElement: trigger, duration: 600 })
            .setTween(label, { top: top + "%" })
            .addTo(controller);
    }
}

setScene("#trigger-hero1", "#label-hero1", 45);
setScene("#trigger-hero2", "#label-hero2", 45);
setScene("#trigger-hero3", "#label-hero3", 45);
setScene("#trigger-description1", "#description1", 40);
setScene("#trigger-description2", "#description2", 40);
setScene("#trigger-motor1", "#label-motor1", 40);
setScene("#trigger-motor2", "#label-motor2", 40);
setScene("#trigger-control1", "#label-control1", 40);
setScene("#trigger-control2", "#label-control2", 40);
setScene("#trigger-modes","#label-modes", 45);
setScene("#trigger-mode1", "#mode1", 20);
setScene("#trigger-mode2", "#mode2", 20);
setScene("#trigger-mode3", "#mode3", 20);
setScene("#trigger-times", "#times", 10);
setScene("#trigger-contact", "#contact", 0);

var scene = new ScrollMagic.Scene({ triggerElement: "#trigger-description1", duration: 550 })
    .setTween("#animation2-image", { opacity: 1 })
    .addTo(controller);

function onScroll() {

    var speed = 30;

    var scroll = Math.ceil(window.scrollY / speed);
    var img = scroll + ".jpg";
    console.log(scroll);
    if (scroll == 0)
        rb11.src = "render/0001.jpg";
    else if (scroll <= 100) {
        rb11.style.opacity = 1;
        anim2.style.opacity = 0;
        if (scroll < 10) {
            rb11.src = "render/000" + img;
            rb11.style.display = "block";
        }
        else if (scroll < 100 && scroll > 10) {
            rb11.src = "render/00" + img;
            rb11.style.display = "block";
        }
        else if (scroll == 100) {
            rb11.src = "render/0" + img;
            rb11.style.display = "none";
        }
    }
    if (scroll > 100 && scroll < 140) {
        anim2.src = "render2/0001.jpg";
        rb11.style.opacity = 0;
    }

    if (scroll > 140 && scroll < 180) {
        anim3.style.display = "none";
        scroll -= 140;
        var img = scroll + ".jpg";
        if (scroll < 10) {
            anim2.src = "render2/000" + img;
            anim2.style.display = "block";
        }
        else if (scroll < 100 && scroll > 10) {
            anim2.src = "render2/00" + img;
            anim2.style.display = "block";
        }
    }
    if (scroll > 180 && scroll < 230) {
        anim2.src="render2/0040.jpg";
        anim2.display="block";
    }
    


    if (scroll > 230 && scroll < 270) {
        anim3.style.display = "block";
        scroll -= 190;
        var img = scroll + ".jpg";
        if (scroll < 100 && scroll > 10) {

            anim3.src = "render3/00" + img;
        }
    }
    var scroll = Math.ceil(window.scrollY / speed);
    if (scroll > 270 && scroll < 300) {
        anim3.style.display = "block";
        anim3.src="render3/0080.jpg";
    }
    if (scroll > 300) {
        rb11.style.display = "none";
        anim2.style.display = "none";
        anim3.style.display = "none";
    }



    header.style.marginTop = -window.scrollY / 1.5 + "px";
    console.log(header.style.marginTop);


}


