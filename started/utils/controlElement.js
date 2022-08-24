
// 1. parameter validation
// 2. implement logic
// 3. return value


/*  활성 / 비활성  */


const enableElement = (element) => {
// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new TypeError('해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  element.disabled = false;
}


const disableElement = (element) => {
// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new TypeError('해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  element.disabled = true;
}


const isEnableElement = (element) => {
  // - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new TypeError('해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  return element.disabled === false;
  
}






/*  표시 / 감춤 */
const visibleElement = (element) => {
  // - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new TypeError('visibleElement함수의 해당 element는 ELEMENT_NODE가 아닙니다.')
  }
  
  element.hidden = false;
}

const invisibleElement = (element) => {
  // - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new TypeError('visibleElement함수의 해당 element는 ELEMENT_NODE가 아닙니다.')
  }
  
  element.hidden = true;
}

const isVisibleElement = (element) => {
  // - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new TypeError('visibleElement함수의 해당 element는 ELEMENT_NODE가 아닙니다.')
  }
  
  return element.hidden === false;
}





const toggleElement = (element,type) => {
  
  switch (type) {
    default:
    case 'visible':
    case 'show':
    case 'hide':
      isVisibleElement(element) ? 
      invisibleElement(element) : 
      visibleElement(element)
      break;
  
    case 'disable':
    case 'enable':
    case 'lock':
      isEnableElement(element) ? 
      disableElement(element) : 
      enableElement(element)
      break;
  

  }
}


const isElement = (node) =>{
  // - node의 타입이 ELEMENT_NODE가 아니라면 return value 
  return node.nodeType === document.ELEMENT_NODE;
}


const insertBefore = (target,insertData)=>{
  if(!isElement(target) || !insertData){
    throw new Error('inserBefore함수에 전달된 매개변수가 존재하지 않습니다.')
  }

  target.insertAdjacentHTML('beforebegin',insertData);
  
}


const insertAfter = (target,insertData)=>{
  if(!isElement(target) || !insertData){
    throw new Error('insertAfter함수에 전달된 매개변수가 존재하지 않습니다.')
  }

  target.insertAdjacentHTML('afterend',insertData);
  
}

const insertFirst = (target,insertData)=>{
  if(!isElement(target) || !insertData){
    throw new Error('insertFirst함수에 전달된 매개변수가 존재하지 않습니다.')
  }

  target.insertAdjacentHTML('afterbegin',insertData);
  
}

// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시
const insertLast = (target,insertData)=>{
  if(!isElement(target) || !insertData){
    throw new Error('insertLast함수에 전달된 매개변수가 존재하지 않습니다.')
  }

  target.insertAdjacentHTML('beforeend',insertData);
  
}




// each
// // - data가 없거나 data가 배열이 아니거나 data가 오브젝트일 경우 반복문 순회 

// getArrt
// setAttr

// attr
