import React from 'react';

import { SidebarContainer, ViewedLinks, LinkOption, SidebarLink, Span, H4style, ContainerList, Ul, Li, Buttondiv } from './sidebar.styles'
const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <SidebarLink to='/Calendar'><Span><i className="fa fa-calendar-check-o" aria-hidden="true"></i></Span>Calendar</SidebarLink>
                <SidebarLink to="/Clients"><Span><i className="fa fa-user" aria-hidden="true"></i></Span>Clients</SidebarLink>
                <SidebarLink to="/Billing"><Span><i className="fa fa-credit-card" aria-hidden="true"></i></Span>Billing</SidebarLink>
                <SidebarLink to="/Reports"><Span><i className="fa fa-tasks" aria-hidden="true"></i></Span>Reports</SidebarLink>
                <SidebarLink to="/Account"><Span><i className="fa fa-bars" aria-hidden="true"></i></Span>Account Activity</SidebarLink>
                <SidebarLink to="/Reminders"><Span><i className="fa fa-bell" aria-hidden="true"></i></Span>Reminders</SidebarLink>
                <H4style> RECENTLY VIEWED </H4style>
                <ContainerList>
                    <Ul>
                        <Li><ViewedLinks  to=""> Salaheldin Eldib </ViewedLinks></Li>
                        <Li><ViewedLinks  to=""> Lenora D.Hernandez </ViewedLinks></Li>
                        <Li><ViewedLinks  to=""> Michelle Hale </ViewedLinks></Li>
                        <Li><ViewedLinks  to="">Anthony Berry </ViewedLinks></Li>
                        <Li><ViewedLinks  to=""> Christopher Randall </ViewedLinks></Li>
                    </Ul>
                </ContainerList>
                <Buttondiv><LinkOption to=""> <i className="fa fa-unlock-alt" aria-hidden="true"></i> Privacy Off </LinkOption> </Buttondiv>
            </SidebarContainer>
        </>
    );
}

export default Sidebar;