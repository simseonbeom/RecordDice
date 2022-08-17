// let diceNumber = 1;




const cube = memo('duce',()=>document.querySelector('#cube'));


gsap.to(memo('duce'),{duration:2,rotationX:1500,rotationY:-1500})

const diceAnimation = function() {
 
  let random = gsap.utils.random([0,1,2,3,4,5]);






  function complete(){
    memo('duce').dataset.dice = random + 1;

  }

  const rotationValue = [
    [0,0], // 1
    [0,-90], // 2
    [-90,0], // 3
    [90,0], // 4
    [0,90], // 5
    [-180,0], // 6
  ]

  gsap.to(memo('duce'),{ease:'linear',duration:0.1,z:-100,rotationX:rotationValue[random][0],rotationY:rotationValue[random][1],onComplete:complete})

  // diceNumber == 6 ? 1 : diceNumber++;

};






