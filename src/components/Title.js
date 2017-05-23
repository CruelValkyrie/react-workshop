import React, {Component} from 'react'

class Title extends Component {
  render(){
    return(<h4 className={this.props.className}>
        {this.props.content}
      </h4>)
  }
}

export default Title;
