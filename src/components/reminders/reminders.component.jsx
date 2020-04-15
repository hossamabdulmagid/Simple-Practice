import React from 'react';

import { H2, Span, LinkOption } from './reminders.styles'
const Reminders = () => {
    return (
        <div>
            <H2> Reminders</H2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1">
                        <Span><i class="fa fa-pencil" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-usd" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-pencil" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-smile-o" aria-hidden="true"></i> </Span>
                        <Span><i class="fa fa-heartbeat" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-pencil" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-pencil" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-file-o" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-credit-card-alt" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-credit-card-alt" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-pencil" aria-hidden="true"></i></Span>
                    </div>

                    <div className="col-8">
                        <Span>170 clients or contacts in your account may be duplicates.your account will continue operating as it has been.
                          <LinkOption> Review now </LinkOption> </Span>
                        <Span> You have 283 clients with a balance due</Span>
                        <Span>You have 4 emails that could not be delivered.</Span>
                        <Span>You have not done a Mental status exam for these 103 clients.</Span>
                        <Span> You have not done a Diagnosis and Treatment plan for these 99 clients.</Span>
                        <Span>You have 42 clients that did not complete document requests</Span>
                        <Span>You have 45 insurance payments with unallocated amounts</Span>
                        <Span>You have 4 appointments with missing notes</Span>
                        <Span>Client Makenna E. Murphy has an expired credit card </Span>
                        <Span>Client Pickle Ploense has an expired credit card</Span>
                        <Span>You have 13 denied claims</Span>
                    </div>
                    <div className="col-3">
                        <Span><i class="fa fa-times" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-chevron-down" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-chevron-down" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-chevron-down" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-chevron-down" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-chevron-down" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-chevron-down" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-chevron-down" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-chevron-down" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-times" aria-hidden="true"></i></Span>
                        <Span><i class="fa fa-times" aria-hidden="true"></i></Span>


                    </div>

                </div>
            </div>
        </div>
    );
}


export default Reminders;