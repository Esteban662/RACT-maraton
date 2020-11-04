import './App.css';
import React from 'react'
import ResultList from './Components/ResultList';
import SearchBox from './Components/SearchBox';

export default class App extends React.Component{
  constructor(){
    super()
    this.state={
      search : "",
      products : {}

    }
  }
  componentDidMount() {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=atari%202600`)
        .then((res) => {
            return res.json()
        }).then((json) => {
            this.setState({products: json})
        })
  }
  send =(value)=>{
    const valor= value
    fetch("https://api.mercadolibre.com/sites/MLA/search?q="+encodeURI(valor))
    .then((res)=>{return res.json()})
    .then((json)=>{
      this.setState({products: json})
    })
    
  }
  render(){
    return(
      <>
      <h1 style={{color:"#CDDDDA", paddingLeft:250 }}>Guayerd - MELI</h1>
      <SearchBox send={this.send}/>
      <br/>
      <ResultList arrProducts={this.state.products.results || []} />
      </>
    )
  }
}

