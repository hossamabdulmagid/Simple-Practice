import React from 'react'
import { H2, Container, ContainerRight, ContainerLeft, ContainerCenter} from './reports.styles'

const Reports = () => {
    return (
        <div >
            <H2>Reports</H2>

            <Container className="container-fluid">
                <ContainerLeft>
                    <h5>Projected income for April 2020</h5>
                    <h2>$89,062.08 </h2>
                    <p>2492 Appointments (2001 Clients)	</p>
                </ContainerLeft>

                <ContainerCenter>
                    <h5> Income from March 2020</h5>
                    <h2>$13,185.14 </h2>
                    <p>1029 Appointments (951 Clients)	</p>
                </ContainerCenter>

                <ContainerRight>
                    <h5> 2020 income year-to-date</h5>
                    <h2> $64,897.47</h2>
                    <p>3240 Appointments (2528 Clients)</p>
                </ContainerRight>

            </Container>
            <img src='Capture.PNG' alt="" />
            <h5>Practice Reports </h5>
            <p> Dig deeper into your practice with reports that help you focus on your clients, your insurance billing, and your practice’s overall health. Learn more </p>
        </div>

    );
}

export default Reports;


