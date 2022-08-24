









const bindEvent = (node,type,handler) => {

  // 1. parameter validation

  //    - node가 ELEMENT_NODE가 아니라면 에러를 표시 
  if(node.nodeType !== document.ELEMENT_NODE){
    throw new Error('bindEvent 함수의 첫 번째 매개변수인 node는 ELEMENT_NODE이여야 합니다.')
  }

  //    - event type이 정의된 타입이 아니라면 에러를 표시
  if(!(/click|mousemove|dblclick|mouseenter/gi.test(type))){
    throw new Error('bindEvent 함수의 두 번째 매개변수는 유효한 이벤트 타입이 아닙니다.')
  }
  

  //    - handler의 데이터 타입이 함수가 아니라면 에러를 표시
  if(typeof handler !== 'function'){
    throw new TypeError('bindEvent 함수의 세 번째 매개변수는 function 타입이 아닙니다.')
  }
  


  // 2. implement logic
  node.addEventListener(type,handler);
  


  // 3. return value
  return () => node.removeEventListener(type,handler);


}










