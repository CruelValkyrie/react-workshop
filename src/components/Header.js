import React, {Component} from 'react'

class Header extends Component {
  render(){
    return(<h2>
        {this.props.content}
      </h2>)
  }
}

export default Header;
