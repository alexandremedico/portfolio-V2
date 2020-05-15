window.onscroll = function() {myFunction()};

function myFunction() {
    if (screen.width <= 425) {
        // if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            console.log('telephone')
        //     window.document.getElementById('declencheur1').classList.remove('none');
        //     window.document.getElementById('declencheur1').classList.add('animated2','fadeInLeft');
        //     window.document.getElementById('declencheur2').classList.remove('none');
        //     window.document.getElementById('declencheur2').classList.add("animated3","fadeInRight");
        //   }
      
        // if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
        //     window.document.getElementById('hardSkill').classList.remove('none');
        //     window.document.getElementById('hardSkill').classList.add('animation');
        //     window.document.getElementById('html').classList.add('animation');
        //     window.document.getElementById('css').classList.add('animation');
        //     window.document.getElementById('javascript').classList.add('animation');
        //     window.document.getElementById('nodeJS').classList.add('animation');
        //     window.document.getElementById('angularJS').classList.add('animation');
        //     window.document.getElementById('softSkill').classList.remove('none');
        //     window.document.getElementById('softSkill').classList.add('fadeInUp','animated','animatedFadeInUp');
        // }
    } else if (screen.width <= 800 && screen.width > 425) {
        if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
            console.log('tablette petite')
            window.document.getElementById('declencheur1').classList.remove('none');
            window.document.getElementById('declencheur1').classList.add('animated2','fadeInLeft');
            window.document.getElementById('declencheur2').classList.remove('none');
            window.document.getElementById('declencheur2').classList.add("animated3","fadeInRight");
          }
      
        if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
            window.document.getElementById('hardSkill').classList.remove('none');
            window.document.getElementById('hardSkill').classList.add('animation');
            window.document.getElementById('html').classList.add('animation');
            window.document.getElementById('css').classList.add('animation');
            window.document.getElementById('javascript').classList.add('animation');
            window.document.getElementById('nodeJS').classList.add('animation');
            window.document.getElementById('angularJS').classList.add('animation');
            window.document.getElementById('softSkill').classList.remove('none');
            window.document.getElementById('softSkill').classList.add('fadeInUp','animated','animatedFadeInUp');
        }
    } else if (screen.width <= 1025 && screen.width > 800) {
        console.log('tabellette grande')
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            window.document.getElementById('declencheur1').classList.remove('none');
            window.document.getElementById('declencheur1').classList.add('animated2','fadeInLeft');
            window.document.getElementById('declencheur2').classList.remove('none');
            window.document.getElementById('declencheur2').classList.add("animated3","fadeInRight");
          }
      
        if (document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050) {
            window.document.getElementById('hardSkill').classList.remove('none');
            window.document.getElementById('hardSkill').classList.add('animation');
            window.document.getElementById('html').classList.add('animation');
            window.document.getElementById('css').classList.add('animation');
            window.document.getElementById('javascript').classList.add('animation');
            window.document.getElementById('nodeJS').classList.add('animation');
            window.document.getElementById('angularJS').classList.add('animation');
            window.document.getElementById('softSkill').classList.remove('none');
            window.document.getElementById('softSkill').classList.add('fadeInUp','animated','animatedFadeInUp');
        }
    } else {
        console.log('ordinateur')
        if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
            window.document.getElementById('declencheur1').classList.remove('none');
            window.document.getElementById('declencheur1').classList.add('animated2','fadeInLeft');
            window.document.getElementById('declencheur2').classList.remove('none');
            window.document.getElementById('declencheur2').classList.add("animated3","fadeInRight");
          }
      
        if (document.body.scrollTop > 1350 || document.documentElement.scrollTop > 1350) {
            window.document.getElementById('hardSkill').classList.remove('none');
            window.document.getElementById('hardSkill').classList.add('animation');
            window.document.getElementById('html').classList.add('animation');
            window.document.getElementById('css').classList.add('animation');
            window.document.getElementById('javascript').classList.add('animation');
            window.document.getElementById('nodeJS').classList.add('animation');
            window.document.getElementById('angularJS').classList.add('animation');
            window.document.getElementById('softSkill').classList.remove('none');
            window.document.getElementById('softSkill').classList.add('fadeInUp','animated','animatedFadeInUp');
        }
    }
}


// changement de projets
let i = 0;

document.getElementById('right').addEventListener('click', function () {
    if (i == 0) {
        document.body.querySelector('.littlegame').classList.add('slide-in-left-reverse');
        setTimeout(() => {
            document.body.querySelector('.littlegame').classList.add('none');
            document.body.querySelector('.portfolioV1').classList.remove('none');
            document.body.querySelector('.portfolioV1').classList.add('slide-in-right');
            document.body.querySelector('.littlegame').classList.remove('slide-in-left-reverse');
            document.body.querySelector('.un').classList.remove('is-active');
            document.body.querySelector('.deux').classList.add('is-active');
            i++;
            setTimeout(() => {
                document.body.querySelector('.portfolioV1').classList.remove('slide-in-right');
            }, 1000);
        }, 1000);
    } else if (i == 1) {
        document.body.querySelector('.portfolioV1').classList.add('slide-in-left-reverse');
        setTimeout(() => {
            document.body.querySelector('.portfolioV1').classList.add('none');
            document.body.querySelector('.cv').classList.remove('none');
            document.body.querySelector('.cv').classList.add('slide-in-right');
            document.body.querySelector('.portfolioV1').classList.remove('slide-in-left-reverse');
            document.body.querySelector('.deux').classList.remove('is-active');
            document.body.querySelector('.trois').classList.add('is-active');
            i++;
            setTimeout(() => {
                document.body.querySelector('.cv').classList.remove('slide-in-right');
            }, 1000);
        }, 1000);        
    } else if (i == 2) {
        document.body.querySelector('.cv').classList.add('slide-in-left-reverse');
        setTimeout(() => {
            document.body.querySelector('.cv').classList.add('none');
            document.body.querySelector('.jeu-cv').classList.remove('none');
            document.body.querySelector('.jeu-cv').classList.add('slide-in-right');
            document.body.querySelector('.cv').classList.remove('slide-in-left-reverse');
            document.body.querySelector('.trois').classList.remove('is-active');
            document.body.querySelector('.quatre').classList.add('is-active');
            i++;
            setTimeout(() => {
                document.body.querySelector('.jeu-cv').classList.remove('slide-in-right');
            }, 1000);
        }, 1000);
    } else if (i == 3) {
        document.body.querySelector('.jeu-cv').classList.add('slide-in-left-reverse');
        setTimeout(() => {
            document.body.querySelector('.jeu-cv').classList.add('none');
            document.body.querySelector('.pong').classList.remove('none');
            document.body.querySelector('.pong').classList.add('slide-in-right');
            document.body.querySelector('.jeu-cv').classList.remove('slide-in-left-reverse');
            document.body.querySelector('.quatre').classList.remove('is-active');
            document.body.querySelector('.cinq').classList.add('is-active');
            i++;
            setTimeout(() => {
                document.body.querySelector('.pong').classList.remove('slide-in-right');
            }, 1000);
        }, 1000);
    } else {
        document.body.querySelector('.pong').classList.add('slide-in-left-reverse');
        setTimeout(() => {
            document.body.querySelector('.pong').classList.add('none');
            document.body.querySelector('.littlegame').classList.remove('none');
            document.body.querySelector('.littlegame').classList.add('slide-in-right');
            document.body.querySelector('.pong').classList.remove('slide-in-left-reverse');
            document.body.querySelector('.cinq').classList.remove('is-active');
            document.body.querySelector('.un').classList.add('is-active');
            i = 0;
            setTimeout(() => {
                document.body.querySelector('.littlegame').classList.remove('slide-in-right');
            }, 1000);
        }, 1000);
    }
})


document.getElementById('left').addEventListener('click', function () {
    if (i == 0) {
        document.body.querySelector('.littlegame').classList.add('slide-in-right-reverse');
        setTimeout(() => {
            document.body.querySelector('.littlegame').classList.add('none');
            document.body.querySelector('.pong').classList.remove('none');
            document.body.querySelector('.pong').classList.add('slide-in-left');
            document.body.querySelector('.littlegame').classList.remove('slide-in-right-reverse');
            document.body.querySelector('.un').classList.remove('is-active');
            document.body.querySelector('.cinq').classList.add('is-active');
            i = 4;;
            setTimeout(() => {
                document.body.querySelector('.pong').classList.remove('slide-in-left');
            }, 1000);
        }, 1000);
    } else if (i == 4) {
        document.body.querySelector('.pong').classList.add('slide-in-right-reverse');
        setTimeout(() => {
            document.body.querySelector('.pong').classList.add('none');
            document.body.querySelector('.jeu-cv').classList.remove('none');
            document.body.querySelector('.jeu-cv').classList.add('slide-in-left');
            document.body.querySelector('.pong').classList.remove('slide-in-right-reverse');
            document.body.querySelector('.cinq').classList.remove('is-active');
            document.body.querySelector('.quatre').classList.add('is-active');
            i--;
            setTimeout(() => {
                document.body.querySelector('.jeu-cv').classList.remove('slide-in-left');
            }, 1000);
        }, 1000);
    } else if (i == 3) {
        document.body.querySelector('.jeu-cv').classList.add('slide-in-right-reverse');
        setTimeout(() => {
            document.body.querySelector('.jeu-cv').classList.add('none');
            document.body.querySelector('.cv').classList.remove('none');
            document.body.querySelector('.cv').classList.add('slide-in-left');
            document.body.querySelector('.jeu-cv').classList.remove('slide-in-right-reverse');
            document.body.querySelector('.quatre').classList.remove('is-active');
            document.body.querySelector('.trois').classList.add('is-active');
            i--;
            setTimeout(() => {
                document.body.querySelector('.cv').classList.remove('slide-in-left');
            }, 1000);
        }, 1000);
    } else if (i == 2) {
        document.body.querySelector('.cv').classList.add('slide-in-right-reverse');
        setTimeout(() => {
            document.body.querySelector('.cv').classList.add('none');
            document.body.querySelector('.portfolioV1').classList.remove('none');
            document.body.querySelector('.portfolioV1').classList.add('slide-in-left');
            document.body.querySelector('.cv').classList.remove('slide-in-right-reverse');
            document.body.querySelector('.trois').classList.remove('is-active');
            document.body.querySelector('.deux').classList.add('is-active');
            i--;  
            setTimeout(() => {
                document.body.querySelector('.portfolioV1').classList.remove('slide-in-left');
            }, 1000);
        }, 1000);
    } else if (i == 1) {
        document.body.querySelector('.portfolioV1').classList.add('slide-in-right-reverse');
        setTimeout(() => {
            document.body.querySelector('.portfolioV1').classList.add('none');
            document.body.querySelector('.littlegame').classList.remove('none');
            document.body.querySelector('.littlegame').classList.add('slide-in-left');
            document.body.querySelector('.portfolioV1').classList.remove('slide-in-right-reverse');
            document.body.querySelector('.deux').classList.remove('is-active');
            document.body.querySelector('.un').classList.add('is-active');
            i--;
            setTimeout(() => {
                document.body.querySelector('.littlegame').classList.remove('slide-in-left');
            }, 1000);
        }, 1000);
    }
})


document.body.querySelector('.un').addEventListener('click', function () {
    document.body.querySelector('.littlegame').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.portfolioV1').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.jeu-cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.pong').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.un').classList.add('is-active');
    document.body.querySelector('.deux').classList.remove('is-active');
    document.body.querySelector('.trois').classList.remove('is-active');
    document.body.querySelector('.quatre').classList.remove('is-active');
    document.body.querySelector('.cinq').classList.remove('is-active');
    setTimeout(() => {
        document.body.querySelector('.littlegame').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.portfolioV1').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.jeu-cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.pong').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.littlegame').classList.add('slide-in-fwd-center');
        document.body.querySelector('.littlegame').classList.remove('none');
        document.body.querySelector('.portfolioV1').classList.add('none');
        document.body.querySelector('.cv').classList.add('none');
        document.body.querySelector('.jeu-cv').classList.add('none');
        document.body.querySelector('.pong').classList.add('none');
        setTimeout(() => {
            document.body.querySelector('.littlegame').classList.remove('slide-in-fwd-center');
        }, 700);
    }, 700);
    i = 0;
})

document.body.querySelector('.deux').addEventListener('click', function () {
    document.body.querySelector('.littlegame').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.portfolioV1').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.jeu-cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.pong').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.un').classList.remove('is-active');
    document.body.querySelector('.deux').classList.add('is-active');
    document.body.querySelector('.trois').classList.remove('is-active');
    document.body.querySelector('.quatre').classList.remove('is-active');
    document.body.querySelector('.cinq').classList.remove('is-active');
    setTimeout(() => {
        document.body.querySelector('.littlegame').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.portfolioV1').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.jeu-cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.pong').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.portfolioV1').classList.add('slide-in-fwd-center');
        document.body.querySelector('.littlegame').classList.add('none');
        document.body.querySelector('.portfolioV1').classList.remove('none');
        document.body.querySelector('.cv').classList.add('none');
        document.body.querySelector('.jeu-cv').classList.add('none');
        document.body.querySelector('.pong').classList.add('none');
        setTimeout(() => {
            document.body.querySelector('.portfolioV1').classList.remove('slide-in-fwd-center');
        }, 700);
    }, 700);
    i = 1;
})

document.body.querySelector('.trois').addEventListener('click', function () {
    document.body.querySelector('.littlegame').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.portfolioV1').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.jeu-cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.pong').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.un').classList.remove('is-active');
    document.body.querySelector('.deux').classList.remove('is-active');
    document.body.querySelector('.trois').classList.add('is-active');
    document.body.querySelector('.quatre').classList.remove('is-active');
    document.body.querySelector('.cinq').classList.remove('is-active');
    setTimeout(() => {
        document.body.querySelector('.littlegame').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.portfolioV1').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.jeu-cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.pong').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.cv').classList.add('slide-in-fwd-center');
        document.body.querySelector('.littlegame').classList.add('none');
        document.body.querySelector('.portfolioV1').classList.add('none');
        document.body.querySelector('.cv').classList.remove('none');
        document.body.querySelector('.jeu-cv').classList.add('none');
        document.body.querySelector('.pong').classList.add('none');
        setTimeout(() => {
            document.body.querySelector('.cv').classList.remove('slide-in-fwd-center');
        }, 700);
    }, 700);
    i = 2;
})

document.body.querySelector('.quatre').addEventListener('click', function () {
    document.body.querySelector('.littlegame').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.portfolioV1').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.jeu-cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.pong').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.un').classList.remove('is-active');
    document.body.querySelector('.deux').classList.remove('is-active');
    document.body.querySelector('.trois').classList.remove('is-active');
    document.body.querySelector('.quatre').classList.add('is-active');
    document.body.querySelector('.cinq').classList.remove('is-active');
    setTimeout(() => {
        document.body.querySelector('.littlegame').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.portfolioV1').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.jeu-cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.pong').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.jeu-cv').classList.add('slide-in-fwd-center');
        document.body.querySelector('.littlegame').classList.add('none');
        document.body.querySelector('.portfolioV1').classList.add('none');
        document.body.querySelector('.cv').classList.add('none');
        document.body.querySelector('.jeu-cv').classList.remove('none');
        document.body.querySelector('.pong').classList.add('none');
        setTimeout(() => {
            document.body.querySelector('.jeu-cv').classList.remove('slide-in-fwd-center');
        }, 700);
    }, 700);
    i = 3;
})

document.body.querySelector('.cinq').addEventListener('click', function () {
    document.body.querySelector('.littlegame').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.portfolioV1').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.jeu-cv').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.pong').classList.add('slide-in-fwd-center-back');
    document.body.querySelector('.un').classList.remove('is-active');
    document.body.querySelector('.deux').classList.remove('is-active');
    document.body.querySelector('.trois').classList.remove('is-active');
    document.body.querySelector('.quatre').classList.remove('is-active');
    document.body.querySelector('.cinq').classList.add('is-active');
    setTimeout(() => {
        document.body.querySelector('.littlegame').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.portfolioV1').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.jeu-cv').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.pong').classList.remove('slide-in-fwd-center-back');
        document.body.querySelector('.pong').classList.add('slide-in-fwd-center');
        document.body.querySelector('.littlegame').classList.add('none');
        document.body.querySelector('.portfolioV1').classList.add('none');
        document.body.querySelector('.cv').classList.add('none');
        document.body.querySelector('.jeu-cv').classList.add('none');
        document.body.querySelector('.pong').classList.remove('none');
        setTimeout(() => {
            document.body.querySelector('.pong').classList.remove('slide-in-fwd-center');
        }, 700);
    }, 700);
    i = 4;
})