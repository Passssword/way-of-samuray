import React from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';


const withAuthRedirect = (Component) => {
	class extendedComponent extends React.Component {
		render () {
			//Redirect to login page
			if( this.props.isAuth == false ) return ( <Redirect to={'/login'} /> );
			<Component {...this.props} />}
	}

	// let 
	return extendedComponent;
}

export default withAuthRedirect;