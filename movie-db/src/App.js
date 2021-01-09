import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import ResetPasswordConfirm from './Components/ResetPasswordConfirm';
import ResetPassword from './Components/ResetPassword';
import { Provider } from 'react-redux';
import store from './store';
import Layout from './Layout';
import Activate from './Components/Activate';
import Home from "./Components/Home";


const App = () => {
  return (
    <Provider store={store}>
        <Router>
            <Layout>
                <Switch>
                    <Route exact path='/' component={Signup} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                    <Route exact from='/Movie-DB/movies' component={Home} />
                </Switch>
            </Layout>
        </Router>
    </Provider>
  );
}

export default App