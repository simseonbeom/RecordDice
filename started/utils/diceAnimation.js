


const cube = document.querySelector('#cube')


gsap.to(cube,{duration:1,rotationX:300,rotationY:-300})

const diceAnimation = function() {
 
  let random = gsap.utils.random([0,1,2,3,4,5]);

  function complete(){
    cube.dataset.dice = random + 1;

  }

  const rotationValue = [
    [0,0], // 1
    [0,-90], // 2
    [-90,0], // 3
    [90,0], // 4
    [0,90], // 5
    [-180,0], // 6
  ]

  gsap.to(cube,{ease:'linear',duration:0.2,z:-100,rotationX:rotationValue[random][0],rotationY:rotationValue[random][1],onComplete:complete})

  // diceNumber == 6 ? 1 : diceNumber++;

};






