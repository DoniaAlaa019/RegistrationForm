import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OpportunityDetails from './components/OpportunityDetails';
import File from './components/Files';
import Contact from './components/Contacts';
import TeamSpase from './components/TeamSpace';

function App() {
  return (

    <div>
        <OpportunityDetails />
        <File />
        <Contact />
        <TeamSpase />
    </div>
  );
}

export default App;
