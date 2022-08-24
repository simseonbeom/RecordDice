// 함수 구현
// 구현 사양
// memo(key, () => value)
// memo(key)




// cache['hi'] // 'hello' 
// cache['hi'] = 'hello'

const memo = (() => {
  const cache = {}
  
  return  (key,callback) => {
    if(!key || typeof key !== 'string'){
      throw new Error('...')
    }
  
    if(!callback)  return cache[key]
  
  
    if(cache[key]){
      return cache[key]
    }else{
      return cache[key] = callback()
    }
  }
 

})();










