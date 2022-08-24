{
  /* 
  const obj = {
    name:'tiger',
    age: '31'
  }


  const {a,b} = obj

  console.log(a,b);

  for( const [key,value] of Object.entries(obj)){

    console.log(key,value);
    

    console.log(key,value);
  }
 */
}

(() => {
  const [rolligDiceButton, recordButton, resetButton] = Array.from(
    document.querySelectorAll('.buttonGroup > button')
  );
  const recordListWrapper = document.querySelector('.recordListWrapper');

  // 이벤트 핸들러 연결
  

  let count = 0;
  let total = 0;

  const clearRecordList = () =>{
    let tbody = recordListWrapper.querySelector('tbody');
    tbody.innerHTML = ''; 
  }


  const renderRecordListItem = () =>{
      
    let tbody = recordListWrapper.querySelector('tbody');
    let cube = document.querySelector('#cube');
    
    let diceValue = Number(cube.dataset.dice);

    const newRecordListItem = /* html */ `
      <tr>
        <td>${++count}</td>
        <td>${diceValue}</td>
        <td>${total += diceValue}</td>
      </tr>
    `

    // tbody.insertAdjacentHTML('beforeend',newRecordListItem)
    insertLast(tbody,newRecordListItem);
    recordListWrapper.scrollTop = recordListWrapper.scrollHeight;
    
  }
  

  const handleRollingDice = (() => {
    let isRolling = false;
    let diceAnimationPlay;

    return () => {
      if (!isRolling) {
        
        diceAnimationPlay = setInterval(diceAnimation,200);


        disableElement(recordButton)
        disableElement(resetButton)
        
        // toggleElement(recordButton,'lock')


      } else {
        
        clearInterval(diceAnimationPlay);

        enableElement(recordButton)
        enableElement(resetButton)
        
      }

      isRolling = !isRolling;
    };
  })();

  const handleRecord = () => {
    
    visibleElement(recordListWrapper);
    renderRecordListItem();
  }


  const handleReset = () => {
    invisibleElement(recordListWrapper);
    disableElement(recordButton);
    disableElement(resetButton);
    clearRecordList();
    total = 0;
    count = 0;
  }


  /* bind events -------------------------------------------------------------- */

  bindEvent(rolligDiceButton, 'click', handleRollingDice);
  bindEvent(recordButton, 'click', handleRecord);
  bindEvent(resetButton, 'click', handleReset);
})();
