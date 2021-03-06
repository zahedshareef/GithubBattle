const React = require('react');
const ReactRouter = require('react-router-dom');

const Router = ReactRouter.BrowserRouter;
const { Route } = ReactRouter;
const { Switch } = ReactRouter;
const Nav = require('./Nav');
const Popular = require('./Popular');
const Home = require('./Home');
const Battle = require('./Battle');

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/battle" component={Battle} />
            <Route path="/popular" component={Popular} />
            <Route render={() => <p>Not Found</p>} />
          </Switch>
        </div>
      </Router>
    );
  }
}
module.exports = App;
