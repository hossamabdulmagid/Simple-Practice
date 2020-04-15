import React from 'react';
import Table from '../table/table.component';
import { Button, Col, Coltwo, Colthree, H2, Select, LinkOption } from './calendar.styles'
import { ButtonGroup } from 'react-bootstrap'
const Calendar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <Col className="col-3">
                        <Button> <span> <i class="fa fa-angle-left" aria-hidden="true"></i> </span> </Button>
                        <Button disabled> Today</Button>
                        <Button> <span><i class="fa fa-angle-right" aria-hidden="true"></i> </span></Button>
                    </Col>
                    <Coltwo className="col-3"> <H2>April 2020 </H2> </Coltwo>
                    <Colthree className="col-3">
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
                        <LinkOption> Avalabilty </LinkOption>
                        <ButtonGroup size="xs">
                            <Button>Left</Button>
                            <Button>Middle</Button>
                            <Button>Right</Button>
                        </ButtonGroup>
                    </Colthree>
                </div>
            </div>
            <Table />
        </>
    );
}
export default Calendar;