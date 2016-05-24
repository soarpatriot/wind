
import React, {Component, PropTypes}  from 'react'
import ReactDom from 'react-dom'
import  Menu  from './menu'
import  MenuItem  from './menu-item'

export default class Nav extends Component{
  render(){
    let submenus = [{itemName:'main1'},{itemName:'main2'}]
    let submenus1 = [{itemName:'m1'},{itemName:'m2'}]
    return (
          <div className='menu-nav'>
            
            <ul className='nav'>
              <Menu submenus={submenus} itemName='主页'/>
              <Menu submenus={submenus1} itemName='统计'/>
             </ul> 
          </div>
 
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


