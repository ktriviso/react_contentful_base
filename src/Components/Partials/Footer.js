import React from 'react';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<nav>
					<ul>
						<li>
							<Link to={{ pathname: '/' }}>Home</Link>
						</li>
					</ul>
				</nav>
			</footer>
		);
	}
}
