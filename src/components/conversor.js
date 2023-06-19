import React, { Component } from 'react';

export default class Conversor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      moedaA_valor: "",
      moedaB_valor: 0,
    }

    this.converter = this.converter.bind(this);
  }

  converter() {
    // Remova o trecho de código que faz a chamada à API original
    // let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
    // let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=y`

    // Utilize um valor fixo para simular a resposta da API
    let cotacao = 4.8; // Valor fixo de exemplo

    let moedaB_valor = (parseFloat(this.state.moedaA_valor) * cotacao).toFixed(2) 
    this.setState({
      moedaB_valor
    });
  }

  render() {
    return (
      <div className="conversor">
        <p>Conversor de moeda</p>
        <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
        <input type="text" onChange={(event) => this.setState({moedaA_valor: event.target.value})}></input>
        <button type="button" value="Converter" onClick={this.converter}>clique aqui</button>
        <h2>{this.state.moedaB_valor}</h2>
      </div>
    )
  }
}
