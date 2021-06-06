import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
//import Layout from "../components/Layout/Layout";
import { getAuthenticationToken } from "../services/api"; 
import * as routes from "./paths";

interface Props extends RouteProps {
  isPrivate?: boolean;
}

const RouteWrapper: React.FC<Props> = ({ isPrivate, ...props}) => {
  const signed = getAuthenticationToken();

  if (!signed && isPrivate) {
    return <Redirect to={routes.LOGIN} />;
  }

  if (signed && !isPrivate) {
    return <Redirect to={routes.HOME} />;
  }

  if (isPrivate) {
    return (
        null
     /*  <Layout>
        <Route {...props} />
      </Layout> */

    );
  }

  return <Route {...props} component={props.component} />;

};

export default RouteWrapper;