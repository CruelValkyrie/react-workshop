import React, {Component} from 'react'
import Header from './Header'
import Title from './Title'
import SelfSummary from './SelfSummary'

class Content extends Component {
  render(){
    return(<div>
      <Header content="Home" />
      <div>Hi, my name is David, and I don't know how to introduce myself :)</div>

      <Title content="Where am I located?" className="top-padding" />
      Seattle, WA.
      <Title content="What do I work in?" />
      Software Development
      <Title content="Who's my favorite author?" />
      Brandon Sanderson

      <SelfSummary className="top-padding"/>

      </div>)
  }
}

export default Content;
