import React from 'react';

import { Side, LinkOption, SidebarLink, Span } from './sidebar.styles'
const Sidebar = () => {
    return (
        <Side>
            <SidebarLink> <Span> <i class="fa fa-calendar-check-o" aria-hidden="true"></i>  </Span>  Calendar </SidebarLink>
            <SidebarLink> Clients </SidebarLink>
            <SidebarLink> Billing </SidebarLink>
            <SidebarLink>Reports </SidebarLink>
            <SidebarLink> Account Activity </SidebarLink>
            <SidebarLink> Reminders </SidebarLink>
            <h6> RECENTLY VIEWED </h6>
            <small> Salaheldin Eldib </small><br />
            <small> Lenora D.Hernandez </small><br />
            <small> Michelle Hale </small><br />
            <small>Anthony Berry </small><br />
            <small> Christopher Randall </small> <br />
            <LinkOption> Privacy Off </LinkOption>


        </Side>

    );
}

export default Sidebar;