import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/userRedux';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fff;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 3px 2px -1px rgba(0,0,0,.1);
    background-color: rgba(255,255,255,.8);
`
const NavbarWrapper = styled.div`
    height: 100%;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.span`
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
`
const TopLeft = styled.div``
const TopRight = styled.div`
    display: flex;
    align-items: center;
`

const IconContainer = styled.div`
    position: relative;
    cursor: pointer;
    margin-right: 10px;
    color: #555;
`
const IconBadge = styled.span`
    width: 15px;
    height: 15px;
    position: absolute;
    top: -5px;
    right: 0px;
    background-color: red;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
`

const Auth = styled.p`
    margin: 5px;
`
const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

const Navbar = () => {

    const user = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logoutUser());
        localStorage.clear();
        
    }

    const rndNmr = () => Math.floor(Math.random() * 99) + 1;
    
    return (
        <NavbarContainer>
            <NavbarWrapper>
                <TopLeft>
                    <Logo><Link to="/">vc8bp</Link></Logo>
                </TopLeft>
                <TopRight>
                    {!user ?
                    <>
                    <Auth><Link to="/login">Login</Link></Auth>
                    <Auth>Signup</Auth>
                    </>
                : 
                    <>
                    <Avatar src={user.avatar} alt="avatar" />
                    <Auth onClick={handleLogout}>Logout</Auth>
                    </>
                }
                </TopRight>
            </NavbarWrapper>
        </NavbarContainer>
    )
}

export default Navbar
