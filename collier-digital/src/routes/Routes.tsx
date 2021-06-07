import { FC } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as routes from './paths';
import RouteWrapper from './RouteWrapper';
import Login from '../pages/Login/Login';

const Routes: FC = () => {
    return (
        <Router>
            <Switch>
                <RouteWrapper path='/' component={Login} />                
            </Switch>
        </Router>
    )


}; export default Routes;