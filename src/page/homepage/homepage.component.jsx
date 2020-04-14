import React, { useState } from 'react';
import {
    Logo,
    HeaderColor,
    LinkOption,
    DIV,
    H4style,
    Section,
    Form,
    Phargraph,
    LabelEmail,
    Footer,
    LabelPassword,
    Input,
    LinkLogo,
    LinkSignIn,
    DivRapperedLinks,
    Linked
} from './homepage.styles'
const HomePage = () => {
    const [userCredentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = async event => {
        event.preventDefault();
    };
    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    };
    return (
        <>
            <HeaderColor>
                <LinkLogo > <Logo src="logo.jpg" />  </LinkLogo>
            </HeaderColor>
            <DIV>
                <H4style> Welcome back to SimplePractice.</H4style>
                <small> Have a great  <span> Monday. </span></small>
            </DIV>
            <Section>
                <Form onSubmit={handleSubmit}>
                    <div>
                        <LabelEmail>
                            Username
                        </LabelEmail>
                        <LinkOption> Forgot username? </LinkOption>
                        <Input
                            name='email'
                            type='email'
                            handleChange={handleChange}
                            label='email'
                            required />
                    </div>
                    <div>
                        <LabelPassword>
                            Password
                    </LabelPassword>
                        <LinkOption> Forgot Password? </LinkOption>
                        <Input
                            name='password'
                            type='password'
                            handleChange={handleChange}
                            label='password'
                            required />
                    </div>
                    <LinkSignIn to='/Calendar' onClick={handleSubmit}>Sign In</LinkSignIn>
                </Form>
                <DivRapperedLinks >By clicking “Sign In”, you agree to our
                    <Linked> Terms of Service, Refund Policy, </Linked>
                      and <Linked>Privacy Policy.</Linked>
                </DivRapperedLinks>
            </Section>
            <Phargraph>
                Don’t have an account?
            <Linked> Sign up for free </Linked> <br />
            Not a customer?
            <Linked> Ask us a question</Linked> <br />
                <Footer> © 2020 SimplePractice | <Linked>Terms</Linked> | <Linked>Privacy</Linked></Footer>
            </Phargraph>
        </>
    );
}
export default HomePage;


