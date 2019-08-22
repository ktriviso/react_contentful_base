import React from 'react';
import { Link } from 'react-router-dom';

{/* @TODO replace links with content from contentful */}
export default class Header extends React.Component {
	render() {
		return (
			<header>
				<div id="header-logo-wrapper">
					<img id="header-logo" src="https://359964.smushcdn.com/1229831/wp-content/uploads/2019/03/thayer-spring-logo-red@2x-300x39.png?lossy=1&strip=1&webp=1"/>
				</div>
					<ul>
						<li>
							<a id="header-contact"><img className="icon" src="images/phone-icon.png"/>4067055376</a>
						</li>
					</ul>
					<ul>
						<li>
							<Link to={{ pathname: '/' }}>Live Chat</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Lease</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Schedule a Tour</Link>
						</li>
						<li><img className="icon" src="images/menu.png"/></li>
					</ul>
			</header>
		);
	}
}
