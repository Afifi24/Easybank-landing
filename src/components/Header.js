import React,{useState} from 'react'
import styled from 'styled-components'
export default function Header() {
  const [isopen, setIsopen] = useState(false)
  const OpenClose = ()=>{
    setIsopen(!isopen)
  }
  const Closenav = ()=>{
    setIsopen(false)
  }
  return (
    <Headerstyle>
   <div className="nav">
<div className="logo">
<img src="../images/logo.svg" alt="" />
</div>
    <div className="menu-icon" onClick={OpenClose}>
      <img src={isopen ?"../images/icon-close.svg" :"../images/icon-hamburger.svg" } alt="" />
    </div>
    
    <ul className={isopen?"menu-nav active":"menu-nav"}>
        <li onClick={Closenav} className='nav-item'>Home</li>
        <li onClick={Closenav} className='nav-item'>About</li>
        <li onClick={Closenav} className='nav-item'>Contact</li>
        <li onClick={Closenav} className='nav-item'>Blog</li>
        <li onClick={Closenav} className='nav-item'>Careers</li>
    </ul>
    
        <button className='request'>Request Invite</button>
    
    </div>
   

    </Headerstyle>
  )
}

const Headerstyle = styled.div`
min-height: 12vh;
background-color: #fff;
display: flex;
align-items: center;
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 10;
.nav{
display: flex;
align-items: center;
width: 80%;
margin: auto;
justify-content: space-between;

.logo{

}
.menu-icon{
    display: none;
    /* media query */
    @media (max-width:908px){
      display: flex;
      cursor: pointer;
    }
}
.menu-nav{
    display: flex;
    list-style: none;
    display: flex;
    align-items: center;
    transition:  0.5s ease-in-out;
  .nav-item{
    margin: 0rem 1rem;
    cursor: pointer;
   color: #777;
   transition: all 0.3s ease;
   &:hover {
     color: hsl(136, 65%, 51%);
   }
  }
  /* media query */
  @media (max-width:908px){
    position: absolute;
    left: -200%;
    top: 100%;
    height: 60vh;
    width: 80vw;
    flex-direction: column;
    margin: auto;
    justify-content: space-around;
    background-color: #fff;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    li{
      font-size: 18px;
    }
  }
}
.request{
    width: 9rem;
    height: 2.5rem;
    border-radius:2rem;
    border: none;
    cursor: pointer;
    color: #fff;
    background: linear-gradient(to right, hsl(136, 65%, 51%),hsl(233, 8%, 62%));
    &:hover{
        opacity: 0.8;
    }
    /* media query */
    @media (max-width:908px){
    display: none;
    
    }
}
.active{
  left: 10%;
 
}
}
`