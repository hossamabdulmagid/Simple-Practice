import React from 'react';
import HomePage from './page/homepage/homepage.component'
import Navbar from './components/navbar/navbar.component'
import Sidebar from './components/sidebar/sidebar.component'
import Calendar from './components/calendar/calendar.component'
import Clients from './components/clients/clients.component'
import Billing from './components/billing/billing.component'
import Reports from './components/reports/reports.component'
import Account from './components/account/account.component'
import Reminders from './components/reminders/reminders.component'
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Navbar />

    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-8">
          <Switch>

            <Route path='/Calendar' component={Calendar} />
            <Route path='/Clients' component={Clients} />
            <Route path='/Billing' component={Billing} />
            <Route path='/Reports' component={Reports} />
            <Route path='/Account' component={Account} />
            <Route path='/Reminders' component={Reminders} />
          </Switch>
        </div>
      </div>



    </div>
</>
  );
}

export default App;
