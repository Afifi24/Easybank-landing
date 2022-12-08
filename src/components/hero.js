import React from 'react'
import styled from 'styled-components'
export default function Hero() {
  return (
    <Herostyle>
      <div className="hero">
        <h2>Why choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        <div className="hero-grid">
        <div className="card">
            <img src="../images/icon-online.svg" alt="" />
            <h2>Online Banking</h2>
            <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world</p>
        </div>
        <div className="card">
            <img src="../images/icon-budgeting.svg" alt="" />
            <h2>Simple Budgeting</h2>
            <p>See exactly where your money goes each month. Recieve notiications when your're close to hitting your limits.</p>
        </div>
        <div className="card">
            <img src="../images/icon-onboarding.svg" alt="" />
            <h2>Fast Onboarding</h2>
            <p>We don't do branches. Open your account in minutes online and start taking control o your fanances right away.</p>
        </div>
        <div className="card">
            <img src="../images/icon-api.svg" alt="" />
            <h2>Open API</h2>
            <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
        </div>
        
        </div>
      </div>
    </Herostyle>
  )
}

const Herostyle = styled.div`
min-height:75vh;
background-color: #F3F4F6;
padding: 2rem 0rem;
.hero{
    width: 80%;
    margin: auto;
    h2{
        font-weight: 300;
        color: #2D314D;
    }
    p{
        margin: 2rem 0rem;
        max-width: 470px;
        color: #777;
        line-height: 25px;
       
    }
.hero-grid{
    display: flex;
    align-items: center;
    gap: 2rem;
    .card{
        h2{
            margin: 1rem 0rem;
            font-weight: 300;
        }
        @media(max-width:892px){
      text-align: center;
    }
    }
    @media(max-width:892px){
        flex-direction: column;
    }
}
@media(max-width:892px){
       text-align: center;
       p{
        text-align: center;
        max-width: 700px;
       }
    }
}

`