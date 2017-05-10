import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProfileCard from './containers/profile_card'
import Content from './containers/content'
import Navbar from './containers/navbar'
import Loading from './components/loading'
import $ from 'jquery'

var description = 'A just-outside-of-the-city boy with a penchant for shorts and Ruby.'
var username = 'Ian Peter Greenburg'

class App extends Component {
  constructor(){
    super()
    this.state = {
      content: 'home',
      loading: true
    }
  }
  go(i){
    this.setState({
      content: i.target.id
    })
  }
  doneLoading(){
    this.setState({
      loading: false
    })
  }
  componentDidMount(){
    setTimeout(this.doneLoading.bind(this), 2400);
  }
  componentDidUpdate(prevProps, prevState) {
    setTimeout(function(){
      $('.App').css('opacity', 1)
    }, 1000)
  }

  render() {
    if (this.state.loading){
      return (
        <Loading />
        )
    }
    return (
      <div className="App full-height">
        <Navbar
          logo={logo}
          onClick={(i) => this.go(i)}
        />
        <div className='container-fluid top-padding'>
          <div className='col-md-2'>
            <ProfileCard username={username} description={description}/>
          </div>
          <div className='col-md-8'>
            <Content content={this.state.content}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
