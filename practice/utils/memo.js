// 함수 구현 
// 구현 사양 
// memo(key, () => value)
// memo(key)



const memo =  (() =>{

  const cache = {}
  

  return (key,callback) => {

    console.log(cache);
    if(!key || typeof key !== 'string'){
      throw new Error('...')
    }
      
    if(!callback) return cache[key]
      
    if(cache[key]){
      return cache[key] = callback();
    }else{
      return cache[key] = callback();
    }
  }

})();







