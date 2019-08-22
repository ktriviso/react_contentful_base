import React from 'react';
import { Link } from 'react-router-dom';


{/* @TODO replace links with content from contentful */}
export default class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div id="footer-top">
                    <ul>
                        <li>
                            <img src="https://359964.smushcdn.com/1229831/wp-content/uploads/2019/02/Logo_White-300x52.png?lossy=1&strip=1&webp=1"/>
                        </li>
                    </ul>
					<ul>
						<li>915 Silver Spring Ave</li>
						<li>Silver Spring, MD 20910</li>
						<li>
							<a>(800)914-4133</a>
						</li>
					</ul>
					<ul>
						<li>
							<Link to={{ pathname: '/' }}>Check Availability</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Apartment Interiors</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Building Amnities</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Neighboorhood</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Gallery</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Contact Us</Link>
						</li>
					</ul>
					<ul>
						<li>
							<Link to={{ pathname: '/' }}>Live Chat</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Lease Online</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Schedule a Tour</Link>
						</li>
                        <br/>
						<li>
							<Link to={{ pathname: '/' }}>Guarntee Program</Link>
						</li>
						<li>
							<Link to={{ pathname: '/' }}>Resident Portal</Link>
						</li>
					</ul>
                    <ul>
                        <li>
                            <Link to={{ pathname: '/' }}><img className="icon" src="images/facebook.png"/></Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/' }}><img className="icon" src="images/instagram.png"/></Link>
                        </li>
                    </ul>
				</div>
				<div id="footer-bottom">
                    <ul>
                        <li>© 2019 Thayer & Spring Apartments</li>
                        <li>All rights reserved</li>
                    </ul>
                    <ul>
                        <li>
                            <Link to={{ pathname: '/' }}>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/' }}>Terms of Use</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/' }}>Brookfield Properties<br/>Customer Service</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link to={{ pathname: '/' }}><img src="https://thayerspringapts.com/wp-content/uploads/2019/03/brookfieldlogo-nav.svg"/></Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/' }}><img src="https://thayerspringapts.com/wp-content/uploads/2019/03/eho-logo-white.svg"/></Link>
                        </li>
                        <li>
                            <Link to={{ pathname: '/' }}><img src="https://thayerspringapts.com/wp-content/uploads/2019/03/handicap-logo-white.svg"/></Link>
                        </li>
                    </ul>

                </div>
			</footer>
		);
	}
}
