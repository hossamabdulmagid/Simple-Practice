import React from 'react';
import { HeaderColor, LinkLogo, Logo, Input, RapperdLink, LinkOption, Span, LinkStyles } from './navbar.styles'



const Navbar = () => {
    return (
        <header>
            <HeaderColor>
                <LinkLogo> <Logo src="logo.jpg" />  </LinkLogo>
                <Input type="search" class="form-control" placeholder="Search Clients" />
                <RapperdLink>
                    <LinkOption> <Span> <i class='fas'>&#xf067;</i> Create</Span> </LinkOption>
                    <LinkOption> <Span><i class='far'>&#xf27a;</i>  Message </Span>   </LinkOption>
                    <LinkStyles><Span> Eran Free Creadit!</Span></LinkStyles>
                    <LinkOption><Span> <i class="fa">&#xf013;</i>  My Account</Span></LinkOption>

                </RapperdLink>
            </HeaderColor>
        </header>
    );
}



export default Navbar;