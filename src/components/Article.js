import React from 'react'
import styled from 'styled-components'
export default function Article() {
  return (
    <Articlestyle>
      <div className="content">
        <h2>Latest Articles</h2>
        <div className="cards">
          <div className="card">
           <div className="image">
           <img src="../images/image-currency.jpg" alt="" />
           </div>
            <div className="card-text">
            <h3>By Claira Robinson</h3>
            <h2>Receive money in any currency with no fees</h2>
            <p>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</p>
            </div>
          </div>
          <div className="card">
            <div className="image">
            <img src="../images/image-restaurant.jpg" alt="" />
            </div>
            <div className="card-text">
            <h3>By Wilson Hutton</h3>
            <h2>Treat yoursel without worrying about money</h2>
            <p>Our simple budgeting feature alloes you to separate out your spending and set realistic limits each month. That means you ...</p>
            </div>
          </div>
          <div className="card">
          <div className="image">
          <img src="../images/image-plane.jpg" alt="" />
          </div>
            <div className="card-text">
            <h3>By Claira Robinson</h3>
            <h2>Take your Easybank card wherever you go</h2>
            <p>We want you to enjoy your travels. This is why we don't charge any fees on purcheses while you're abroad. We'll even show you ...</p>
            </div>
          </div>
          <div className="card">
    <div className="image">
    <img src="../images/image-confetti.jpg" alt="" />
    </div>
            <div className="card-text">
            <h3>By Claira Robinson</h3>
            <h2>Our invite-only Beta accounts are now live!</h2>
            <p>Ater a lot of hard work by the whole team, we're excited to lunch our closed beta. It's easy to request an invite through the site ...</p>
            </div>
          </div>
         
        </div>
      </div>
    </Articlestyle>
  )
}
const Articlestyle = styled.div`
min-height: 100vh;
background-color: #FAFAFA;
.content{
    width: 80%;
    margin: auto;
    padding: 3rem 0rem;
    h2{
      font-weight: 300;
      color: #2D314D;
    }
}
.cards{
  display: flex;
  gap: 1rem;
  @media(max-width:892px){
      flex-direction: column;
      align-items: center;
    }
}
.card{
  .image{
   
    overflow: hidden;
    @media(max-width:892px){
    }
  }
  min-height: 75vh;
  background-color: #fff;
  max-width: 250px;
  flex:1;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
  margin-top: 2rem;
  @media(max-width:892px){
    max-width: 600px;
    
    }
  img{
    width: 100%;
   height: 100%;
   transition: all 0.9s ease;
   &:hover{
    transform: scale(1.3);

   }
  }

  .card-text{
    padding: 1rem;
    h3{
      color: #777;
      font-weight: 300;
      @media(max-width:500px){
        font-size:14px;
      }
    }
    h2{
      margin: 1rem 0rem;
      font-weight: 300;
      font-size:1.2rem;
      color: #2D314D;
      @media(max-width:500px){
        font-size:17px;
      }
    }
    p{
      color: #777;
      line-height: 25px;
      @media(max-width:500px){
        font-size:14px;
      }
    }
  }
}
`