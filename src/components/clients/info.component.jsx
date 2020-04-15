import React from 'react';
import { Col, OptionLink } from './clients.styles'
import { Dropdown } from 'react-bootstrap'
const Info = () => {
    return (
        <>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">NAME</div>
                    <div className="col-3">CONTACT INFO</div>
                    <div className="col-3">RELATIONSHIP</div>
                    <div className="col-3"></div>
                </div>
            </Col>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <OptionLink>Maria Augustina Recla</OptionLink>
                    </div>
                    <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-comment" aria-hidden="true"></i>
                    </div>
                    <div className="col-3">
                        Family Membe <OptionLink> Tracie Davis </OptionLink> <br />
                    Emergency contact<OptionLink> Tracie Davis </OptionLink>
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manage
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <OptionLink>Jess Adams </OptionLink>
                    </div>
                    <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-comment" aria-hidden="true"></i>
                    </div>
                    <div className="col-3">
                        Clinician: Tehila Abrekov
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manage
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <OptionLink>Susan Allen</OptionLink>
                    </div>
                    <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-comment" aria-hidden="true"></i>
                    </div>
                    <div className="col-3">
                        Other for <OptionLink> Keeli Shaw </OptionLink> <br />
                    Emergency contact for <OptionLink>  Keeli Shaw</OptionLink>
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manage
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <OptionLink>Sean Allen</OptionLink>
                    </div>
                    <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-comment" aria-hidden="true"></i>
                    </div>
                    <div className="col-3">
                        Family Membe <OptionLink> Tracie Davis </OptionLink> <br />
                    Emergency contact<OptionLink> Tracie Davis </OptionLink>
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manage
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <OptionLink>Shannon Allen</OptionLink>
                    </div>
                    <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-comment" aria-hidden="true"></i>
                    </div>
                    <div className="col-3">
                        Family Membe <OptionLink> Tracie Davis </OptionLink> <br />
                    Emergency contact<OptionLink> Tracie Davis </OptionLink>
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manage
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <OptionLink>Carrie Anderson</OptionLink>
                    </div>
                    <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-comment" aria-hidden="true"></i>
                    </div>
                    <div className="col-3">
                        Family Membe <OptionLink> Tracie Davis </OptionLink> <br />
                    Emergency contact<OptionLink> Tracie Davis </OptionLink>
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manage
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <OptionLink>CJennifr Biggs</OptionLink>
                    </div>
                    <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-comment" aria-hidden="true"></i>
                    </div>
                    <div className="col-3">
                        Family Membe <OptionLink> Tracie Davis </OptionLink> <br />
                    Emergency contact<OptionLink> Tracie Davis </OptionLink>
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manage
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col>
            <Col className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <OptionLink>jennifer Bokowski</OptionLink>
                    </div>
                    <div className="col-3">(631) 678-1332 Mobile <i class="fa fa-phone" aria-hidden="true"></i> <br />
                    jessica.ashley.davis@gmail.com <i class="fa fa-comment" aria-hidden="true"></i>
                    </div>
                    <div className="col-3">
                        Family Membe <OptionLink> Tracie Davis </OptionLink> <br />
                    Emergency contact<OptionLink> Tracie Davis </OptionLink>
                    </div>
                    <div className="col-3">
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">
                                Manage
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </Col>
        </>
    );
}
export default Info