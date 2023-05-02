import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import App from './App';

function Links() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/App" component={App} />
      </Routes>
    </BrowserRouter>
  );
}

export default Links;