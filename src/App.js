import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminView from './pages/AdminView';
import Login from './pages/Login';
import Landing from './pages/Landing';
import UserView from './pages/UserView';
import PageNotFound from './pages/PageNotFound';
import AdminUpload from './Layouts/AdminUpload';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* <Route path="/" exact copmonent={Landing} /> */}
          <Route path="/welcome" component={Landing} />
          <Route path="/admin"  exact component={AdminView} />
          <Route path="/signin" component={Login} />
          <Route path="/register" component={SignUp} />
          <Route path="/user" component={UserView} />
          {/* <Route path="/signin" component={Login} /> */}
          <Route path="/admin/upload" component={AdminUpload} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
