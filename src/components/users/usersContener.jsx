import React from 'react';
import Users from './usersPage.js';
import { actionCreatorUserFollowed,
	actionCreatorUserUnFollowed,
	actionCreatorToggleFollowButton,
	getUsersThinkCreator,
	setCurrentPageThunkCreator,
	followUserThunkCreator,
	unfollowUserThunkCreator } from './../../redux/reducerUsers.js';
import { connect } from 'react-redux';

class UsersAPIContener extends React.Component {
	componentDidMount(){
		this.props.getUsersThinkCreator(this.props.pageSize, this.props.currentPage)
	}
	getUsersData (pageNumber, pageSize, setCurrentPageThunkCreator) {
		setCurrentPageThunkCreator(pageSize, pageNumber);
	}
	render () {

		return(
		 	<Users
		 		totalUsersCount={this.props.totalUsersCount}
		 		pageSize={this.props.pageSize}
		 		currentPage={this.props.currentPage}
		 		followUser={this.props.followUser}
		 		unfollowUser={this.props.unfollowUser}
		 		usersData={this.props.usersData}
		 		togglePreloader={this.props.togglePreloader}
		 		getUsersData = {this.getUsersData}
		 		ACToggleFollowButton = {this.props.ACToggleFollowButton}
		 		toggleFollowButton = {this.props.toggleFollowButton}
		 		setCurrentPageThunkCreator = {this.props.setCurrentPageThunkCreator}
		 		followUserThunkCreator = {this.props.followUserThunkCreator}
		 		unfollowUserThunkCreator = {this.props.unfollowUserThunkCreator}
		 	/>	
		);}
}

let mapStateToProps = ( state ) => { 
	return ( {
		usersData: state.usersPage.items,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		togglePreloader: state.usersPage.togglePreloader,
		toggleFollowButton: state.usersPage.toggleFollowButton
	} );
}
let mapDispatchToProps = ( dispatch ) => {
	return(
		{
			followUser: ( id ) => { dispatch(actionCreatorUserFollowed( id ) ) },
			unfollowUser: ( id ) => { dispatch(actionCreatorUserUnFollowed( id ) ) },
			ACToggleFollowButton: (toggleFollowButtonData) => { dispatch( actionCreatorToggleFollowButton(toggleFollowButtonData) ) },
			getUsersThinkCreator: (pageSize, currentPage) => { dispatch( getUsersThinkCreator(pageSize, currentPage) ) },
			setCurrentPageThunkCreator: (pageData, newCurrentPage) => { dispatch( setCurrentPageThunkCreator(pageData, newCurrentPage) ) },
			followUserThunkCreator: ( userID ) => { dispatch(followUserThunkCreator( userID ) ) },
			unfollowUserThunkCreator: ( userID ) => { dispatch(unfollowUserThunkCreator( userID ) )}
		});
}

const UsersContener = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContener);

export default UsersContener;