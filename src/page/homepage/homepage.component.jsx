import React from 'react';
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
    return (
        <>
            <HeaderColor>
                <LinkLogo> <Logo src="logo.jpg" />  </LinkLogo>
            </HeaderColor>
            <DIV>
                <H4style> Welcome back to SimplePractice.</H4style>
                <small> Have a great  <span> Monday. </span></small>
            </DIV>
            <Section>
                <Form>
                    <div>
                        <LabelEmail>
                            Username
                        </LabelEmail>
                        <LinkOption> Forgot username? </LinkOption>
                        <Input type="email" required  />
                    </div>
                    <div>
                        <LabelPassword>
                            Password
                    </LabelPassword>
                        <LinkOption> Forgot Password? </LinkOption>
                        <Input type="password" required  />
                    </div>
                    <LinkSignIn>Sign In</LinkSignIn>
                </Form>
                <DivRapperedLinks >By clicking “Sign In”, you agree to our <Linked> Terms of Service, Refund Policy, </Linked>  and <Linked>Privacy Policy.</Linked>  </DivRapperedLinks>
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


