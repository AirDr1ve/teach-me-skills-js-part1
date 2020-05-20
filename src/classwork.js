const obj = {
    name: 'Vitalik',
    name2: 'Vitalik',
    name3: 'Vitalik',
    firstName: 'adsf',
    address: {
      house: 22,
      stret: 'Umanskaya',
      apartment: {
        a: {
          a: {
            
          }
        }
      },
    },
  };
  
  let result = 0;
  function foo(obj) {
   
  
    for (const key in obj) {
        result++
    }
  
  
    return result
  
  }
  
  
  console.log(foo(obj));




  