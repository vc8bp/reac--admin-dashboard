import React from 'react'
import { LineStyle, Timeline, TrendingUp, PermIdentity, Storefront, LocalAtm, Drafts, Feedback, Forum, PieChart } from "@material-ui/icons";
import styled, { css } from "styled-components";
import { Link} from 'react-router-dom';



const SidebarContainer = styled.div`
    position: fixed; 
    top: 50px;
    bottom: 0;
    left: ${props => props.isOpen ? "0%" : "-100%"};
    height: calc(100vh - 50px);
    background-color: rgb(251, 251, 255);
    width: max-content;
    transition: all 0.3s ease-in-out ;
    
`
const SidebarWrapper = styled.div`
    padding: 20px;
    color: #555;
`
const SidebarMenu = styled.div`
    margin-bottom: 10px;
`
const SidebarTitle = styled.h3`
    font-size: 13px;
    color: rgb(187, 186, 186);
`
const SidebarList = styled.ul`
    list-style: none;
    padding: 5px;
`
const SidebarListItem = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;
    &:hover {
        background-color: rgb(240, 240, 255);
    }

    > svg {
        margin-right: 5px;
        font-size: 20px !important;
    }
`

const SlideBar = (props) => {
    

    return (
        <SidebarContainer isOpen={props.isOpen}>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarTitle>Dashboard</SidebarTitle>
                    <SidebarList>
                  
                            <SidebarListItem>
                                <LineStyle />
                                <Link to="/">Home</Link>
                            </SidebarListItem>
                  
                        <SidebarListItem>
                            <PieChart />
                            Analytics
                        </SidebarListItem>
                        <SidebarListItem>
                            <TrendingUp />
                            Sales
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>All Menu</SidebarTitle>
                    <SidebarList>
                        
                        <SidebarListItem>
                            <PermIdentity />
                            <Link to="/user">Users</Link>
                        </SidebarListItem>
                    
                        <SidebarListItem>
                            <Storefront />
                            <Link to="/products">Products</Link>
                        </SidebarListItem>

                        <SidebarListItem>
                            <LocalAtm />
                            Orders
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarTitle>Connect</SidebarTitle>
                    <SidebarList>
                        <SidebarListItem>
                            <Drafts />
                            Mail
                        </SidebarListItem>
                        <SidebarListItem>
                            <Feedback />
                            Feedback
                        </SidebarListItem>
                        <SidebarListItem>
                            <Forum />
                            Messages
                        </SidebarListItem>
                    </SidebarList>
                </SidebarMenu>                   
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default SlideBar