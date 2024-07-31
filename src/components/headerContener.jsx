import React from 'react';
import Header from './header.js';
import { getMeDataAuth } from './../redux/reducerAuth.js';
import { connect } from 'react-redux';

class headerContenerAPI extends React.Component {
	componentDidMount (props) {
		this.props.getMeDataAuth();
	}
	render () {
		return (
			<Header {...this.props} />);
	}
}

const mapStateToProps = (state) => {
	return (
	{
		Authefication: state.auth
	})
}

const mapDispatchToProps = {
	getMeDataAuth: getMeDataAuth
}

const headerContener = connect(mapStateToProps, mapDispatchToProps)(headerContenerAPI);
export default headerContener;