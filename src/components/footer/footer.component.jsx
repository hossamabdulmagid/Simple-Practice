import React from 'react';

import { Links, H2, Footter } from './footer.styles'
const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <Footter>
                    <H2> © 2020 SimplePractice ·</H2>
                    <Links> Terms</Links> · <Links> Privacy & Security </Links> . <Links>Support</Links> · <Links>Licensed Content </Links>
                </Footter>
            </div>
        </>
    );
}
export default Footer;