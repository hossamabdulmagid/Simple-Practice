import React from 'react';
import Allert from './alert.component'
import { H1, FForm, RapparForm, InPut, FFForm } from './clients.styles';
import Info from './info.component'
import { Form } from 'react-bootstrap'
const Clients = () => {
    return (
        <div className="container-fluid">
            <H1>Clients & Contacts </H1>
            <Allert />
            <RapparForm>
                <InPut size="sm" type="text" placeholder="Search" />
                <FForm>
                    <Form.Group sz="xs" controlId="exampleForm.SelectCustom">
                        <Form.Control as="select" >
                            <option>All Clinicians</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </FForm>
                <FForm>
                    <Form.Group sz="xs" controlId="exampleForm.SelectCustom">
                        <Form.Control as="select">
                            <option>Cleints </option>
                            <option>Contact</option>
                            <option>Cleint & Contact </option>
                            <option>Recently Viewed Cleints</option>
                            <option>In Active Cleints</option>
                        </Form.Control>
                    </Form.Group>
                </FForm>
                <FFForm>
                    <Form.Group sz="xs" controlId="exampleForm.SelectCustom">
                        <Form.Control as="select" >
                            <option>Last Name</option>
                            <option>First Name</option>
                        </Form.Control>
                    </Form.Group>
                </FFForm>
            </RapparForm>
            <Info />
        </div>
    );
}
export default Clients;
