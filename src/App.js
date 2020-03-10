import React from 'react';
import { HashRouter as Router, Route, Switch }
from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFoundPage from './components/pages/NotFoundPage';
import { Provider }from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Test from './components/test/Test';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header name="Contact Manager"/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts}/>
              <Route exact path="/contact/add" component={AddContact}/>
              <Route exact path="/contact/edit/:id" component={EditContact}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/test" component={Test}/>
              <Route component={NotFoundPage}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
