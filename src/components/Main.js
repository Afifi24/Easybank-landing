import React from 'react'
import styled from 'styled-components'
export default function Main() {
  return (
    <Mainstyle>
     <div className="main-content">
        <div className="main-text">
            <h1>Next generation degital banking</h1>
            <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing and much more.</p>
            <button>Requist Invite</button>
        </div>
       
        <div className="main-image">
        <img src="../images/image-mockups.png" alt="" />
        </div>
        
     </div>
    </Mainstyle>
  )
}

const Mainstyle = styled.div`
min-height: 100vh;
background-color: #FAFAFA;
padding-top: 12vh;

.main-content{
width: 80%;
margin: auto;
min-height: 80vh;
display: flex;
align-items: center;
justify-content: space-between;
padding-bottom: 3rem;

.main-text{
    flex: 1;
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
    h1{
        font-size: 3rem;
        font-weight: 300;
        color: #2D314D;
    }
    p{
        margin: 1rem 0rem;
        line-height: 30px;
        max-width: 420px;
        color: #777;
    }
    @media(max-width:892px){
        order: 2;
    }
    @media(max-width:600px){
       text-align: center;
       h1{
        font-size: 2rem;
       }
    }
}
.bg{
    
    
}
.main-image{
    flex: 1;
    background-image: url('../images/bg-intro-desktop.svg');
    background-position:right bottom;
    background-repeat:no-repeat;
    background-size:cover;
    img{
        width: 100%;
        height: 100%;
       
    }
    @media(max-width:892px){
        order: 1;
        img{
            /* width: 500px;
            height: 600px; */
        }
    }
}
/* media query */
@media(max-width:892px){
        flex-direction: column;
    }
}
`