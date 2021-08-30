import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavBar = styled.nav`
    height: 60px;
    background: #000;
    display: flex;
    justify-content: left;
    align-items: center;
`;

const PageLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 1rem;
    &:hover {
        color: lightblue;
    }
`;

const Header = () => {
    return (
        <NavBar>
            <div className="logo">
                <svg>

                </svg>
            </div>
            <PageLink to='/'>About</PageLink>
            <PageLink to='/Experience'>Experience</PageLink>
            <PageLink to='/Projects'>Projects</PageLink>
            <PageLink to='/Contact'>Contact</PageLink>
        </NavBar>
    )
}

export default Header
