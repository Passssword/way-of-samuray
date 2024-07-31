import React from 'react';
import Profile from './profile.js';
import withAuthRedirect from './../../redux/withAuthRedirect.jsx';
import { actionCreatorChangeTextProfile, actionCreatorAddPostProfile, addProfileDataAC } from './../../redux/reducerProfile.js';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContenerAPI extends React.Component {
	componentDidMount() {
		if (this.props.match.isExact) {
			axios.get("https://social-network.samuraijs.com/api/1.0/profile/"+
			this.props.match.params.userId).then( response => {
				console.log(response.data);
				console.log(this.props);
				this.props.addProfileData(response.data);
			});
		}
		else {this.render()}
		
	}
	render() {
		return(
		<Profile
			{...this.props}
			profilePage={this.props.profilePage}
			sendProfileMessage={this.props.sendProfileMessage}
			changeTextInTextarea={this.props.changeTextInTextarea}
			isAuth={this.props.isAuth}
			/>
		) }
}

const withProfileRedirect = withAuthRedirect(ProfileContenerAPI);
const mapStateToProps = (state) => {
	return (
	{
		profilePage: state.profilePage,
		isAuth: state.auth.isAuthToggle
	})
}

const mapDispatchToProps = {
	sendProfileMessage: actionCreatorAddPostProfile,
	changeTextInTextarea: actionCreatorChangeTextProfile,
	addProfileData: addProfileDataAC }
const ShowTheRouteProfileContenerAPI = withRouter(withProfileRedirect);
const ProfileContener = connect(mapStateToProps, mapDispatchToProps)(ShowTheRouteProfileContenerAPI);

export default ProfileContener;