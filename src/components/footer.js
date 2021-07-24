import React from 'react';

function Footer() {
    return (
    <div class="page-footer blue darken-3" id="contactme">
        <div class="container">
            <div class="row">
                <div class="col l6 s12">
                    <h4 class="white-text">Contact Me</h4>
                    <p class="white-text">Check out my LinkedIn, GitHub, or email me at aqprogrammer@gmail.com</p>
                </div>
                <div class="l4 offset-l1 s12">
                    <ul>
                        <li><a class="waves-effect waves-light btn-small footer-btn" id="linkedin-btn" href="https://www.linkedin.com/in/aqprogrammer" target="_blank">LinkedIn</a></li>
                        <li><a class="waves-effect waves-light btn-small footer-btn" id="github-btn" href="https://github.com/the64man1" target="_blank">GitHub</a></li>
                        <li><a class="waves-effect waves-light btn-small footer-btn" id="email-btn" href="mailto:aqprogrammer@gmail.com">Email</a></li>
                    </ul>
                </div>
                <div class="row">
                  <p class="col s12 white-text">Or call/text my Google Voice number: (430) 888-0141‬</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;