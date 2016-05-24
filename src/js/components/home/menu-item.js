
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'

export default class MenuItem extends Component{
  render(){
    const {dispatch, itemName} = this.props
    return (
      <li ref="navLi">
        <a ref="activeLink" href="#" onClick={(e)=> this.handleClick(e)}>{itemName}</a>
      </li>
    )
  }


  handleClick(e){
    let className = this.refs.navLi.className;
    let classNameLink = this.refs.activeLink.className;
    className = (className == 'active' ? '': 'active')
    classNameLink = (classNameLink == 'active' ? '': 'active')
    this.refs.navLi.className = className;
    this.refs.activeLink.className = classNameLink;
  }
}

MenuItem.propTypes = {
  itemName: PropTypes.string.isRequired
}

