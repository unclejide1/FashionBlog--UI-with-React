import React from 'react';
import {FootDiv} from './styled-components'

const Footer = () => {
    return (
        <FootDiv>
            <footer>
                <div className="container">
                <div className="6u">
					<h2>Contact Us</h2>
					    <ul className="alt">
						    <li>NJusticeJ@Gmail.com</li>
							<li>08137058179</li>
					    </ul>
				</div>
                <div className="6u">
							<h2>Aliquam Interdum</h2>
							<ul className="alt">
								<li>Twitter</li>
								<li>Facebook</li>
								<li>Instagram</li>
								<li>LinkedIn</li>
								<li>Pinterest</li>
							</ul>
			    </div>
                </div>
                <div className="container">
                <ul className="copyright containerLow">
						<li>© Untitled. All rights reserved.</li>
						<li>Design: <a href="http://templated.co">TEMPLATED</a></li>
						<li>Images: <a href="http://unsplash.com">Unsplash</a></li>
					</ul>
                </div>
            </footer>
        </FootDiv>
    );
};

export default Footer;