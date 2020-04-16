import React from 'react'
import { H2, Container, ContainerRight, ContainerLeft, ContainerCenter, Card, H7, LinkedOptions, Phargraph, LinkedOption,IMG } from './reports.styles'

const Reports = () => {
    return (
        <>        <div className="container-fluid">
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
            <IMG src='Capture.PNG' alt="" />
            <h5>Practice Reports </h5>
            <p> Dig deeper into your practice with reports that help you focus on your clients, your insurance billing, and your practice’s overall health.
               <LinkedOptions> Learn more </LinkedOptions>
            </p>
        </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <Card>
                            <H7>Client Reports</H7>
                            <LinkedOption>Appointment Status</LinkedOption>
                            <Phargraph>Find unpaid appointments & unwritten notes</Phargraph>
                            <LinkedOption>Outstanding Balances</LinkedOption>
                            <Phargraph> See all clients carrying a balance</Phargraph>
                            <LinkedOption>Attendance</LinkedOption>
                            <Phargraph> Track client attendance patterns</Phargraph>
                            <LinkedOption>Invoices</LinkedOption>
                            <Phargraph> Check the status of all invoices for your practice</Phargraph>
                            <LinkedOption>Unpaid Invoices</LinkedOption>
                            <Phargraph> Identify clients with past due invoices</Phargraph>
                            <LinkedOption>Emails Sent</LinkedOption>
                            <Phargraph> Review all emails sent over the last 30 days</Phargraph>
                            <LinkedOption>Text & Voice Reminders Sent</LinkedOption>
                            <Phargraph> Review all reminders sent over the last 30 days </Phargraph>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card>
                            <H7> Insurance Reports</H7>
                            <LinkedOption>Unpaid Insurance Appointments</LinkedOption>
                            <Phargraph>Find appointments with unpaid claims</Phargraph>
                            <LinkedOption>Claim Aging</LinkedOption>
                            <Phargraph>Track unpaid amounts by insurance payer</Phargraph>
                            <LinkedOption>Claims Filed</LinkedOption>
                            <Phargraph>Review all electronic claims filed by your practice</Phargraph>
                            <LinkedOption>Electronic Payment Reports</LinkedOption>
                            <Phargraph>Locate all ERAs for your practice</Phargraph>
                            <LinkedOption>Insurance Processing Fees</LinkedOption>
                            <Phargraph>See your claim filing and coverage report fees</Phargraph>
                            <LinkedOption>Coverage Reports</LinkedOption>
                            <Phargraph> Review your clients' insurance coverage</Phargraph>
                        </Card>
                    </div>
                    <div className="col-4">
                        <Card>
                            <H7> Practice Income Reports</H7>
                            <LinkedOption>Overall Income by Month</LinkedOption>
                            <Phargraph> Income Charged by Clinician</Phargraph>
                            <LinkedOption>Appointment Status</LinkedOption>
                            <Phargraph> Review billing history by clinician</Phargraph>
                            <LinkedOption>Income Received by Clinician</LinkedOption>
                            <Phargraph>Run payroll and track income by clinician</Phargraph>
                            <LinkedOption>2019 Tax Report</LinkedOption>
                            <Phargraph>Export your 2019 expenses and income</Phargraph>
                            <LinkedOption>Payouts</LinkedOption>
                            <Phargraph>Check the status of payouts to your bank</Phargraph>
                            <LinkedOption>Referral Sources</LinkedOption>
                            <Phargraph> See what marketing channels are most effective</Phargraph>
                        </Card>
                    </div>

                </div>
            </div>
        </>

    );
}

export default Reports;


