import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const renderMergedProps = (component, ...rest) => {
	const finalProps = Object.assign({}, ...rest);
	return (
			React.createElement(component, finalProps)
	);
};


const PrivateRoute = ({component,...rest}) => (
		<Route {...rest} render={ routeProps => (
			/*client.isAuthenticated()*/true ?
					renderMergedProps(component,routeProps , rest)
					:
					<Redirect to={{
						pathname: '/login',
						state: routeProps.location,
					}}/>
			)}
		/>
);

export default PrivateRoute;