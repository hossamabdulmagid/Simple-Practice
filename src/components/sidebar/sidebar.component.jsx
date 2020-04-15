import React from 'react';

import { SidebarContainer, ViewedLinks, LinkOption, SidebarLink, Span, H4style, ContainerList, Ul, Li, Buttondiv } from './sidebar.styles'
const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <SidebarLink to='/Calendar'><Span><i class="fa fa-calendar-check-o" aria-hidden="true"></i></Span>Calendar</SidebarLink>
                <SidebarLink to="/Clients"><Span><i class="fa fa-user" aria-hidden="true"></i></Span>Clients</SidebarLink>
                <SidebarLink to="/Billing"><Span><i class="fa fa-credit-card" aria-hidden="true"></i></Span>Billing</SidebarLink>
                <SidebarLink to="/Reports"><Span><i class="fa fa-tasks" aria-hidden="true"></i></Span>Reports</SidebarLink>
                <SidebarLink to="/Account"><Span><i class="fa fa-bars" aria-hidden="true"></i></Span>Account Activity</SidebarLink>
                <SidebarLink to="/Reminders"><Span><i class="fa fa-bell" aria-hidden="true"></i></Span>Reminders</SidebarLink>
                <H4style> RECENTLY VIEWED </H4style>
                <ContainerList>
                    <Ul>
                        <Li><ViewedLinks> Salaheldin Eldib </ViewedLinks></Li>
                        <Li><ViewedLinks> Lenora D.Hernandez </ViewedLinks></Li>
                        <Li><ViewedLinks> Michelle Hale </ViewedLinks></Li>
                        <Li><ViewedLinks>Anthony Berry </ViewedLinks></Li>
                        <Li><ViewedLinks> Christopher Randall </ViewedLinks></Li>
                    </Ul>
                </ContainerList>
                <Buttondiv><LinkOption> <i class="fa fa-unlock-alt" aria-hidden="true"></i> Privacy Off </LinkOption> </Buttondiv>
            </SidebarContainer>
        </>
    );
}

export default Sidebar;