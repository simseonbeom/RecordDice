
// 1. parameter validation
//    - node가 ELEMENT_NODE가 아니라면 에러를 표시 
//    - event type이 정의된 타입이 아니라면 에러를 표시
//    - handler 가 함수가 아니라면 에러를 표시

// 2. implement logic
// 3. return value



const bindEvent = (node,type,handler) => {
  


  if(node.nodeType !== document.ELEMENT_NODE){
    throw new Error('...')
  }
  
  
  if(!(/click|mouseenter|mousemove|mouseenter|mouseleave/gi.test(type))){
    throw new Error('...')
  }

  if(typeof handler !== 'function'){
    throw new Error('...')
  }



  node.addEventListener(type,handler);


  return ()=>node.removeEventListener(type,handler);
}


