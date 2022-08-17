(() => {
  
  const [rollingDiceButton, recordButton, resetButton] = Array.from(
    document.querySelectorAll('.buttonGroup > button')
  );
  const recordListWrapper = document.querySelector('.recordListWrapper')
  memo('recordListWrapper',()=> document.querySelector('.recordListWrapper'))

  
  console.log(recordListWrapper);
  // 주사위를 굴려서 랜덤 수(1~6)를 반환하는 함수
  function rollingDice() {
    return getRandomMinMax(1, 6);
  }

  // 이벤트 핸들러 연결

  let count = 0;
  let total = 0;

  function renderRecordListItem() {
    const tbody = memo('recordListWrapper').querySelector('tbody');

  
    let diceValue = Number(memo('duce').dataset.dice);
    const newRecordListItem = /* html */ `
        <tr>
          <td>${++count}</td>
          <td>${diceValue}</td>
          <td>${(total += diceValue)}</td>
        </tr>
      `;
  
      // insertLast(tbody,newRecordListItem); 
      tbody.insertAdjacentHTML('beforeend',newRecordListItem);
  }

  
  
  const handleRolligDice = (() => {
    let isRolling = false;
    let diceAnimationPlay;
    

    return () => {
      
      

      if (!isRolling) {
        diceAnimationPlay = setInterval(diceAnimation, 200);
        disableElement(recordButton)
        disableElement(resetButton)
        
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
    
    
    
  }


  /* bind events -------------------------------------------------------------- */



  bindEvent(rollingDiceButton, 'click', handleRolligDice);
  bindEvent(recordButton, 'click', handleRecord);
  bindEvent(resetButton, 'click', handleReset);



  
  
})();
