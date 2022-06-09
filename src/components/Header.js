import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Container>
        
        <Logo src= "/images/logo.png" />
        <Forms>
            <input type="text" placeholder='Search your needs' />
            <div>
                <i type="submit" className="fa-solid fa-magnifying-glass fa-xl"style={{color:'white'}} />
            </div>
        </Forms>
        <Button>
            <Login>
                Login
                <div></div>
            </Login>
            <LoggedIn>
                <div>
                    <i className="fa-regular fa-comment fa-xl"></i>
                </div>
                <div>
                    <i className="fa-regular fa-bell fa-xl"></i>
                </div>
                <div>
                    <i className="fa-regular fa-user fa-xl"></i>
                </div>
            </LoggedIn>
            <Sell>
                <span style={{fontSize:'25px', marginRight:'5px'}}>+</span> SELL
            </Sell>
        </Button>
    </Container>
  )
}

export default Header

const Container = styled.div`
    background-color: #ffffffdd;
    box-shadow: 0px 2px #cccccc;
    width: 90vw;
    height: 68px;
    padding: 0px 5vw;
    overflow: hidden;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.img`
    height: 100%;
`
const Button = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Login = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #3d3b3bec;
    margin-right: max(1vw, 2px);
    transition: all 0.25s ease-out;
    &:hover {
        color: #4b44a2;
        cursor: pointer;
        div{
            background-color: transparent;
        }
    }
    div {
        margin: 2px auto;
        width: 85%;
        height: 3px;
        border-radius: 100px;
        background-color: black;
    }
`
const Sell = styled.div`
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 800;
    padding: 4px 8px;
    margin-left: max(1vw, 2px);
    background-color: whitesmoke;
    border-radius: 40px;
    box-shadow: 0px 2px #cccccc;
    border: solid green 6px;
    transition: all 0.25s ease-out;

    &:hover {
        color: #4b44a2;
        cursor: pointer;
    }
`
const Forms = styled.form`
    height: 35px;
    width: 50%;
    padding: 0px 0px 0px 8px;
    margin-right: 5%;
    border: solid;
    overflow: hidden;
    border-radius: 10px;
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;  
    visibility: visible;
    @media (max-width:768px) {
        visibility: hidden;
    }
    div{
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: black;
    } 
    input{
        margin-left: 12px;
        background-color: transparent;
        outline: none;
        border: none;
        font-size: 20px;
        width: max-content;
    }
    
`

const LoggedIn = styled.div`
    display: flex;
    align-items: center;
    div{
        margin: 0 0.5vw;
        width: 45px;
        height: 45px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        :hover{
            cursor: pointer;
            background-color: lightblue;
        }
    }
    div:nth-child(3){
        background-color: orange;
        color: white;
    }
`