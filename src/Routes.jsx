var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Base = require('./components/Base.jsx');
var Login = require('./components/Login.jsx');
var Register = require('./components/Register.jsx');

var RoutesManagement = (
  <Router>
    <Route path="/" component={Base} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
  </Router>
);

module.exports = RoutesManagement;
