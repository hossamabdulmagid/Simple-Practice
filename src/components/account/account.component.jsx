import React, { useEffect } from 'react';
import { H2, Container, Ul, Li, LinkOption, LinkOptions, RapparForm, InPut, FForm, FFForm, LinkOptionz, Col } from './account.styles'
import { Form } from 'react-bootstrap'
import fetchUsers from '../../redux/data/dataAction';
import { connect } from 'react-redux';
const Account = ({ fetchUsers }) => {
    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);
    return (
        <>
            <div className="">
                <H2> Account Activity</H2>
                <Container>
                    <Ul>
                        <Li>
                            <LinkOption to="">History </LinkOption>
                        </Li>
                        <Li>
                            <LinkOption to="">Sign In Events</LinkOption>
                        </Li>
                        <Li>
                            <LinkOption to="">HIPAA Audit Log</LinkOption>
                        </Li>
                    </Ul>
                    <RapparForm>
                        <InPut size="sm" type="text" placeholder="Search Clients" />
                        <FForm>
                            <Form.Group sz="xs" controlId="exampleForm.SelectCustom">
                                <Form.Control as="select" >
                                    <option>All Clinicians</option>
                                    <option>All Clinicians</option>
                                    <option>Dr.Ehab Yacoub</option>
                                    <option>Pedro Morante</option>
                                    <option>Richard Heidenfelder</option>
                                    <option>Maxine Okafor</option>
                                    <option>andrea szzemsy</option>
                                    <option>MONICA KEO</option>
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
                            <LinkOptions to=""> Show Details</LinkOptions>
                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz to="">Maria Augustina Recla</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i className="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i> <br /> <br />
                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz to=""> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz to=""> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz to="">Jess Adams </LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i className="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i><br /> <br />
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
                            <LinkOptionz to="">Susan Allen</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i className="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i><br /> <br />
                        </div>
                        <div className="col-3">
                            Other for <LinkOptionz to=""> Keeli Shaw </LinkOptionz> <br />
                    Emergency contact for <LinkOptionz to="">  Keeli Shaw</LinkOptionz>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz to="">Sean Allen</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i className="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i><br /> <br />
                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz to=""> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz to=""> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz to="">Shannon Allen</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i className="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i><br /> <br />
                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz to=""> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz to=""> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz to="">Carrie Anderson</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i className="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i><br /> <br />

                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz to=""> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz to=""> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz to="">CJennifr Biggs</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i className="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i><br /> <br />
                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz to=""> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz to=""> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </Col>
                <Col className="container-fluid">
                    <div className="row">
                        <div className="col-3">
                            <LinkOptionz to="">jennifer Bokowski</LinkOptionz>
                        </div>
                        <div className="col-3">(631) 678-1332 Mobile <i className="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i className="fa fa-envelope" aria-hidden="true"></i><br /> <br />
                        </div>
                        <div className="col-3">
                            Family Membe <LinkOptionz to=""> Tracie Davis </LinkOptionz> <br />
                    Emergency contact<LinkOptionz to=""> Tracie Davis </LinkOptionz>
                        </div>
                        <div className="col-3">
                        </div>
                    </div>
                </Col>
            </div>
        </>
    );
}
const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
});
export default connect(
    null,
    mapDispatchToProps
)(Account);