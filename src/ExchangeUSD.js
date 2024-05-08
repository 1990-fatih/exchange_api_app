import axios from 'axios'
import React, { Component } from 'react'

export default class ExchangeUSD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         stand:"",
         menge:"",
         ergebnis:"",
         base:"USD"
      }
    }

    componentDidMount(){
        axios.get(`https://open.er-api.com/v6/latest/${this.state.base}`)
        .then(res=>{

            console.log(res)

            this.setState({stand:res.data.rates.EUR})
        })

        
    }

    mengeHandler=(event)=>{

      this.setState({menge:event.target.value})

    }

    changeHandler=(event)=>{

      this.setState({ergebnis:this.state.menge * this.state.stand})

      event.preventDefault()
    }

  render() {
    return (
        <div>
             <form onSubmit={this.changeHandler}>
            <label>Dolar: </label>
            <input onChange={this.mengeHandler}
             value={this.state.menge} type="number"/>
            <button type="submit">Exchange</button>
            <p>Eur: {this.state.ergebnis} </p>
        </form>
        </div>
       
    )
  }
}
