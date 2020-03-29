import React, { Component } from 'react';
import ErrorEndicator from '../errorEndicator/errorEndicator.js'

export default class ErrorBoundry extends Component {


  state={
    hasError: false 
  }

  componentDidCatch(){
    this.setState({ hasError: true})
  }

  render(){
    if(this.state.hasError){
      return <ErrorEndicator/>
    } 
    return this.props.children
    
  }
}