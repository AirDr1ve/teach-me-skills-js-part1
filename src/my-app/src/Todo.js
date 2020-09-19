import React, {Component} from 'react'

export default class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          list: []
        };
      }
  
    async componentDidMount() {
        
           const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
               
           if(!response.ok){
               throw new Error('error')
           }

           const list = await response.json();
           
    }
          render(){
              return(
              <div>{list.map(item => (<li key={item.id}></li>))}</div>
              )
          }
    };