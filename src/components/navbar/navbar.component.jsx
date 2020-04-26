import React from 'react';
import {
    HeaderContainer,
    LinkLogo,
    Logo,
    Input,
    RapperdLink,
    LinkOption,
    Span,
    LinkStyles,
    DivContainer
} from './navbar.styles';
const Navbar = () => {
    return (
        <>
        <header>
            <HeaderContainer>
                <LinkLogo to="/"> <Logo src="logo.jpg" />  </LinkLogo>
                <DivContainer><Input type="search" className="form-control" placeholder="Search Clients" /> </DivContainer>
                <RapperdLink>
                    <LinkOption to="/"><Span><i className='fas'>&#xf067;</i>Create</Span></LinkOption>
                    <LinkOption  to="/"><Span><i className='far'>&#xf27a;</i> Message </Span></LinkOption>
                    <LinkStyles to="/"><Span>Eran Free Creadit!</Span></LinkStyles>
                    <LinkOption to="/"><Span><i className="fa">&#xf013;</i> My Account</Span></LinkOption>
                </RapperdLink>
            </HeaderContainer>
        </header>
        </>
    );
};
export default Navbar;