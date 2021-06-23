import { FC } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import * as routes from './paths';
import RouteWrapper from './RouteWrapper';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import MonitoredProducts from '../pages/MonitoredProducts/MonitoredProducts';
import ProductsMix from '../pages/ProductsMix/ProductsMix';

const Routes: FC = () => {
    return (
        <Router>
            <Switch>
                <RouteWrapper path={routes.HOME} component={Dashboard} isPrivate/> 
                <RouteWrapper path={routes.PRODUCTS} component={ MonitoredProducts } isPrivate/> 
                <RouteWrapper path={routes.MIX_DE_PRODUTOS} component={ ProductsMix } isPrivate />
                <RouteWrapper path='/' component={Login} />                               
            </Switch>
        </Router>
    )


}; export default Routes;