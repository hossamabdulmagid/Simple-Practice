import React from 'react';
import { LinkOptions, Button, LinkStyle, Spaned, COL, LinkOption, RapparedButton ,Span} from './billing.styles';
const Billing = () => {
    return (
        <div>
            <h7>  Recent Transactions</h7>
            <Button>03/16/2020 - 04/15/2020 </Button>
            <COL className="container-fluid">
                <div className="row">
                    <div className="col-1">
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                        <Spaned>APR  </Spaned>
                        <br />
                        <Spaned>15</Spaned>
                        <br />
                    </div>
                    <div className="col-5">
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>
                        <br />
                        <Spaned> Session with <LinkOption>  Scout G. Durwood </LinkOption></Spaned>
                        <br />
                        <Spaned>90834 Follow Up</Spaned>


                    </div>
                    <div className="col-4">
                        <Span>+$15</Span>
                        <Span>+$25</Span>
                        <Span>+$415</Span>
                        <Span>+$715</Span>
                        <Span>+$125</Span>
                        <Span>+$165</Span>
                        <Span>+$1115</Span>
                        <Span>+$125</Span>
                        <Span>+$2125</Span>
                        <Span>+$115</Span>
                        <Span>+$315</Span>
                        <Span>+$125</Span>

                    </div>
                    <div className="col-2">
                        <LinkStyle>Billing Documents </LinkStyle>
                        <LinkStyle> Export Transactions</LinkStyle>
                        <LinkStyle>Card Transactions </LinkStyle>
                        <LinkStyle>Insurance </LinkStyle>


                    </div>

                </div>
            </COL>
            <RapparedButton>
                <LinkOptions> 1</LinkOptions>
                <LinkOptions> 2</LinkOptions>
                <LinkOptions> 3</LinkOptions>
                <LinkOptions> 4</LinkOptions>
                <LinkOptions> ...</LinkOptions>
                <LinkOptions> Next <i class="fa fa-angle-right" aria-hidden="true"></i></LinkOptions>
                <LinkOptions> Last <i class="fa fa-angle-double-right" aria-hidden="true"></i></LinkOptions>

            </RapparedButton>
        </div>

    );
}

export default Billing;
