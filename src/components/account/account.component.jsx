import React from 'react';

import { H2, Container, Ul, Li, LinkOption,LinkOptions, RapparForm, InPut, FForm, FFForm, LinkOptionz, Col,Span } from './account.styles'
import { Form } from 'react-bootstrap'

const Account = () => {
    return (
        <>
        <div className="">
            <H2> Account Activity</H2>
            <Container>
                <Ul>
                    <Li>
                        <LinkOption>History </LinkOption>
                    </Li>
                    <Li>
                        <LinkOption>Sign In Events</LinkOption>
                    </Li>
                    <Li>
                        <LinkOption>HIPAA Audit Log</LinkOption>
                    </Li>
                </Ul>
                <RapparForm>
                    <InPut size="sm" type="text" placeholder="Search Clients" />
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
                        <Form.Group sz="xs" controlId="exampleForm.SelectCustom">/
                            <Form.Control as="select" >
                                <option>Last Name</option>
                                <option>First Name</option>
                            </Form.Control>
                        </Form.Group>
                    </FFForm>
                </RapparForm>
            </Container>
            
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">DATE</div>
                        <div className="col-3">TIME</div>
                        <div className="col-3">VIEW</div>
                        <div className="col-3"> 
                        <LinkOptions> Show Details</LinkOptions>
                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz>Maria Augustina Recla</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i> <br/> <br/>
                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz>Jess Adams </LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i><br /> <br />

                        </div>
                        <div className="col-3">
                            Clinician: Tehila Abrekov
                    </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz>Susan Allen</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i><br /> <br />

                        </div>
                        <div className="col-3">
                            Other for <LinkOptionz> Keeli Shaw </LinkOptionz> <br />
                    Emergency contact for <LinkOptionz>  Keeli Shaw</LinkOptionz>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz>Sean Allen</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i><br /> <br />

                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz>Shannon Allen</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i><br /> <br />

                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz>Carrie Anderson</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i><br /> <br />

                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz>CJennifr Biggs</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i><br /> <br />

                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz>jennifer Bokowski</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-envelope" aria-hidden="true"></i><br /> <br />

                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">

                        </div>
                    </div>
                </Col>
        </div>
        </>

    );
}

export default Account;


