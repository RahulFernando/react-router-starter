import React from 'react';
import { Route } from 'react-router-dom';

const Welcome = () => {
  return (
    <section>
      Welcome 
      <Route path='/welcome/new-user'>
        <p>Welcome New User</p>
      </Route>
    </section>
  );
};

export default Welcome;
