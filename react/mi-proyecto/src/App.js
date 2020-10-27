import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state ={
      loading: false,
      error: null,
      data: undefined,
      value: undefined
    };

    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
    this.handlerText = this.handlerText.bind(this);
  }

  peopleGetName = (name) => new Promise((resolve, reject) => { 
    fetch(`https://swapi.dev/api/people/?search=${name}`)
    .then(response => {
        if(response.status != 404) return response.json()
        return false
    })
    .then(json => resolve(json)) 
  })


  handlerText(e){
    var text = e.target.value;
    this.setState({value : text});
  }  

  handleClick() {
    let name = this.state.value;   
    this.peopleGetName(name).then(data => {
      console.log(data)
      this.setState({
        loading: true,
        data: data
      });
    })
   
  }

  
    
  render() {

    const { error, loading, data, value } = this.state;

        if (!loading) {
          
        return (
          <div className="App">

          
                <header className="">
                 
                <div>
                <form>
                  <label>
                    <p>Indicar Nombre</p>
               
                    <input type="text" name="name" onChange={this.handlerText.bind(this)}/>
                  </label>
                    <input type="button" value="Buscar" onClick={this.handleClick.bind(this)}/>
               
                </form>
                </div>
                </header>
          
        
          </div>)
      } else if(Array.isArray(data.results) && data.results.length != 0) {
         {
          return (
         
            <div className="App">
    
              <ul>
                {data.results.map(item => (
                  <li key={item.name}>
                    {item.name} 
                  </li>
                ))}
              </ul>
            
            </div>)
        }
        
      } else {
        return (
        <div className="App">
    
          <h1>No se encontraron datos</h1>
      
        </div>)
      }


  }
}

export default App;
