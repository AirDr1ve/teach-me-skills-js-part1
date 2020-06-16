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




  import "./styles.css";

  const obj = {
    id: "",
    tagName: "div",
    classList: [],
    attributes: [],
    children: [
      {
        id: "test",
        tagName: "div",
        classList: [],
        attributes: [],
        children: [
          {
            id: "test",
            tagName: "section",
            classList: [],
            attributes: []
          }
        ]
      }
    ],
    getElemntById: function(){}, 
    getElementsByClassName: function() {},
    getElementsByTagName: function() {}
  };
  
  // if(typeof(o[prop]) === 'object') {
  //   getProp(o[prop]);
  
  function searchId (obj){
    
    for (const key in obj){
      if (typeof(obj[key]) === 'object'  || 'array'){
        searchId(obj[key])
      }
  }
  }
  
  console.log(searchId(obj[key])
  
  

  