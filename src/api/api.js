import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})
export const usersAPI = {
	getUsers (pageSize, currentPage) {
		return( instance.get("users?count="+pageSize+"&page="+currentPage,
				{ withCredentials: true } ).then(response => { return (response.data) })
		);
	},
	getMeData () {
		return( instance.get('auth/me',
				{ withCredentials: true } ).then(response => { return (response.data) })
		);
	},
	followUser_DAL_API (userID) {
		return(instance.post('follow/'+userID, {}, { withCredentials: true } ).then( response => {
			return(response.data.resultCode); } )
			);
	},
	unfollowUser_DAL_API (userID) {
		return( instance.delete('follow/'+userID).then( response => {
			return(response.data.resultCode); } )
			);
	}
}