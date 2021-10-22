import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AdminView from './pages/AdminView';
import Login from './pages/Login';
import Landing from './pages/Landing';
import UserView from './pages/UserView';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={AdminView}/> 
          <Route path="/login" component={Login} />
          <Route path="/landing" component={Landing} />
          <Route path="/user" component={UserView} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
