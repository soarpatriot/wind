
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'
import  MenuItem  from './menu-item'

export default class Menu extends Component{
  render(){
    const {dispatch, submenus, itemName} = this.props
    return (
      <li ref="navLi">
        <a ref="activeLink" href="#" onClick={(e)=> this.handleClick(e)}>{itemName}</a>
        <ul className='nav'>
          {submenus.map((item, index) =>
            <MenuItem itemName={item.itemName} key={index} />
          )}
        </ul>
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
  itemName: PropTypes.string.isRequired,
  submenus: PropTypes.arrayOf(PropTypes.shape({
    itemName: PropTypes.string.isRequired
  }).isRequired)
}

