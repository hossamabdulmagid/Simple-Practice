import React from 'react';
import { HeaderContainer, LinkLogo, Logo, Input, RapperdLink, LinkOption, Span, LinkStyles, DivContainer } from './navbar.styles'

import Sidebar from '../sidebar/sidebar.component'

const Navbar = () => {
    return (
        <header>
            <HeaderContainer>
                <LinkLogo> <Logo src="logo.jpg" />  </LinkLogo>
                <DivContainer><Input type="search" class="form-control" placeholder="Search Clients" /> </DivContainer>
                <RapperdLink>
                    <LinkOption> <Span> <i class='fas'>&#xf067;</i> Create</Span> </LinkOption>
                    <LinkOption> <Span><i class='far'>&#xf27a;</i>  Message </Span>   </LinkOption>
                    <LinkStyles><Span> Eran Free Creadit!</Span></LinkStyles>
                    <LinkOption><Span> <i class="fa">&#xf013;</i>  My Account</Span></LinkOption>

                </RapperdLink>
            </HeaderContainer>
            <Sidebar />

        </header>
    );
}



export default Navbar;