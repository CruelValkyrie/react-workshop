import React, {Component} from 'react'
import Header from './Header'
import Image from './Image'

class ProfileCard extends Component {
  render(){
    return(<div>
      <Image width="200" height="200" src="http://www.seriouseats.com/images/2016/10/20161018-best-way-to-bake-bacon-18.jpg" />
      <Header content="David Rodriguez Uribe" />
      Just a couple of strips of perfectly cooked crispy bacon.
      </div>)
  }
}

export default ProfileCard;
