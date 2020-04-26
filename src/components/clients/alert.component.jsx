import React from 'react';
import Alert from 'react-bootstrap/Alert'

import { SPan, Div, Span, Container, Input, SpaN, LinkOption } from './clients.styles'
const Allert = () => {
    return (
        <Div>
            <Alert variant="success">
                <Container className='custom-control custom-switch'>
                    <Input
                        type='checkbox'
                        className='custom-control-input'
                        id='customSwitches'
                        readOnly
                        label
                    />
                    <label className='custom-control-label' htmlFor='customSwitches'>
                    </label>
                </Container>
                <Alert.Heading>
                    <SPan className="container">
                        <i className="fa fa-check-circle" aria-hidden="true"></i>
                    </SPan>
                    <Span>Show 170 potential duplicates </Span>
                    <br />
                    <SpaN>
                        Simplify your client & contact list by merging duplicated profiles.
                        <LinkOption>Find out more </LinkOption>
                    </SpaN>
                </Alert.Heading>
            </Alert>
        </Div>
    );
}

export default Allert;