
// 1. parameter validation
// 2. implement logic
// 3. return value


/*  활성 / 비활성  */
// enableElement
// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 

function enableElement(element){
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new Error('...')
  }

  element.disabled = false;
  
}

// disableElement
// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 



function disableElement(element){
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new Error('...')
  }

  element.disabled = true;
  
}

// isEnableElement
// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 

function isEnableElement(element){
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new Error('...')
  }

  return element.disabled === false;
  
}

/*  표시 / 감춤 */
// visibleElement
// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 

function visibleElement(element){
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new Error('...')
  }

  element.hidden = false;
  
}


// invisibleElement
// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 

function invisibleElement(element){
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new Error('...')
  }

  element.hidden = true;
  
}


// isVisibleElement
// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
function isVisibleElement(element){
  if(element.nodeType !== document.ELEMENT_NODE){
    throw new Error('...')
  }

  return element.hidden === false;
  
}


// toggleElement
function toggleElement(element,type){

  switch (type) {
    default:
    case 'visible':
    case 'show':
      isVisibleElement(element) ? 
      invisibleElement(element) : 
      visibleElement(element) 
      
      break;
  
      case 'enable' :
      case 'hidden' :
      case 'disable' :

        isEnableElement(element) ? 
        disableElement(element) : 
        enableElement(element) 
      break;
 
    
  }
}


isElement
// - node의 타입이 ELEMENT_NODE가 아니라면 return value 
function isElement(node){
  
  return node.nodeType !== document.ELEMENT_NODE

}

// insertBefore
// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시 
function insertBefore(insertElement,targetElement){
  if(!isElement(insertElement) || !isElement(targetElement)){
    throw new Error('...')
  }

  targetElement.insertAdjacentElement('beforebegin',inserElement);
}



insertAfter
// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시 
function insertAfter(insertElement,targetElement){
  if(!isElement(insertElement) || !isElement(targetElement)){
    throw new Error('...')
  }

  targetElement.insertAdjacentElement('afterend',inserElement);
}

insertFirst
// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시
function insertFirst(insertElement,targetElement){
  if(!isElement(insertElement) || !isElement(targetElement)){
    throw new Error('...')
  }

  targetElement.insertAdjacentElement('afterbegin',inserElement);
}

insertLast
// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시 
function insertLast(insertElement,targetElement){
  console.log(insertElement);
  console.log(targetElement);
  if(!isElement(insertElement) || !isElement(targetElement)){
    throw new Error('...')
  }

  targetElement.insertAdjacentElement('beforeend',inserElement);
}





// each
// // - data가 없거나 data가 배열이 아니거나 data가 오브젝트일 경우 반복문 순회 

// getArrt
// setAttr

// attr
