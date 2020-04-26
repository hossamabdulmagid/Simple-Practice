import React from 'react';

import { Links, H2, Footter } from './footer.styles'
const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <Footter>
                    <H2> © 2020 SimplePractice ·</H2>
                    <Links to="" >   Terms</Links> · <Links  to=""> Privacy & Security </Links> . <Links  to="">Support</Links> · <Links  to="">Licensed Content </Links>
                </Footter>
            </div>
        </>
    );
}
export default Footer;