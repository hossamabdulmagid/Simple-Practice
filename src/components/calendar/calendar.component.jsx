import React from 'react';

import { Button, Col, Coltwo, Colthree, H2, Select, LinkOption, LinkOptions, ColFour } from './calendar.styles'
import { ButtonGroup } from 'react-bootstrap'
const Calendar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Col className="col">

                        <Button> <span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span> </Button>
                        <Button disabled> Today</Button>
                        <Button> <span><i class="fa fa-angle-right" aria-hidden="true"></i> </span></Button>

                    </Col>

                    <Coltwo className="col"> <H2>April 2020 </H2> </Coltwo>
                    <Colthree className="col">
                        <Select>
                            <option>All Office</option>
                            <option>Telemedicine</option>
                            <option>Gardena Office</option>
                            <option>Van Nuys Office</option>
                        </Select>
                        <Select>
                            <option>All Cinicians</option>
                            <option>Dr Ehab Yacoub</option>
                            <option>Pedro  Mornate</option>
                            <option>Richard Heidenfelder</option>
                            <option>Maxine Okafor</option>
                            <option>Andrea Sczesny</option>
                            <option>MONICA KEO</option>
                            <option>Judth Afonta</option>
                            <option>Tehila Abrekov</option>
                            <option>Leslie Langely</option>
                            <option>Thad Matthew Makowaski</option>
                        </Select>
                        <ColFour className="right">
                            <ButtonGroup size="xs">
                                <Button>Left</Button>
                                <Button>Middle</Button>
                                <Button>Right</Button>
                            </ButtonGroup>
                        </ColFour>
                    </Colthree>

                </div>
            </div>


        </>
    );
}


export default Calendar;