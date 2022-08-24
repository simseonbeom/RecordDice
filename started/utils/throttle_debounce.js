const debounce = (callback, limit = 500) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      callback.apply(this,args);
    }, limit);
  };
}




// window.addEventListener('mousemove', debounce((e)=>{console.log(e);},1000));

/* 
let toggle = false;

button.click(()=>{
  
  if(!toggle){
    menu.open
  }else{
    menu.close
  }

  toggle = !toggle
})
 */

const throttle = (callback,limit = 500) => {

  let waiting = false;
  
  return (...args) => {
    if(!waiting){
      callback.apply(this,args)
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }



  

  // waiting false일 때 callback을 실행 
  // callback 실행 후 waiting 을 true로 변경 
  // limit 시간이 지난 후 다시 waiting을 false로 변경

  

}





// window.addEventListener('mousemove', throttle((e)=>{console.log(e);},1000));
