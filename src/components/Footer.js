import React from 'react'
import styled from 'styled-components'
export default function Footer() {
  return (
    <Footerstyle>
    <div className="content">
      <div className="social-media">
        <div className="logo"><img src="../images/logo.svg" alt="" /></div>
        <ul className='icon'>
          <li><img src="../images/icon-facebook.svg" alt="" /></li>
          <li><img src="../images/icon-youtube.svg" alt="" /></li>
          <li><img src="../images/icon-twitter.svg" alt="" /></li>
          <li><img src="../images/icon-pinterest.svg" alt="" /></li>
          <li><img src="../images/icon-instagram.svg" alt="" /></li>
        </ul>
      </div>
      <div className="navbar">
          <ul className='first'>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className='first'>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
      </div>
      <div className="copyright">
        <button>Request Invite</button>
        <p>&copy; Easybank. All Rights Reserved</p>
      </div>
    </div>
    </Footerstyle>
  )
}
const Footerstyle = styled.div`
min-height: 40vh;
background-color:#2D314D ;
.content{
  width: 80%;
  margin: auto;
  padding: 2rem 0rem;
  display: flex;
  align-items: center;
  gap: 5rem;
  .social-media{
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 30vh;
    .logo{
      height: 2.5rem;
      width: 11rem;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      
  }

  .icon{
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    li{
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      border-radius:50%;

      &:hover{
        background-color: #9698A6;
      }
    }
    @media(max-width:892px){
     margin-top: 2rem;
     
    }
  }
  }
  .navbar{
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1;
    height: 26vh;
    .first{
      list-style: none;
      display:flex ;
      flex-direction: column;
      align-items: flex-start;
      justify-content: space-around;
      height: 100%;
      @media(max-width:892px){
  align-items: center;
  li{
    margin: 0.5rem 0rem;
  }
     
    }
      li{
        cursor: pointer;
        color: #fff;
        &:hover{
          color: #777;
        }
      }
    }
    @media(max-width:892px){
     flex-direction: column;
     
    }
  }
  .copyright{
    flex: 1;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    button{
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
    }
   p{
    color: #96938F;
    margin-top: 1.5rem;
   }
   @media(max-width:892px){
  align-items: center;
     
    }
  }
  /* media query */
  @media(max-width:892px){
     flex-direction: column;
     align-items: center;
     
    }
}

`