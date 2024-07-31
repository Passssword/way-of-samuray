


/*Компонента не используется*/

import React from 'react';
import Post from './post.js';
import StoreContext from './../../redux/StoreContext.js';

const PostContener = () => {
	return (
		<StoreContext.Consumer>
			{ (store) => {
				return (
					<Post />
				)}
			}
		</StoreContext.Consumer>
		);
}

export default PostContener;