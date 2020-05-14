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