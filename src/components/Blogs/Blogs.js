import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h3 className='mt-3 text-center text-primary'>Questions</h3>
            <Accordion className='w-50 mt-5 mx-auto' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is the difference between `authorization` and `authentication`?</Accordion.Header>
                    <Accordion.Body>
                        The authority of users is checked in the authorization process for accessing resources, whereas the identity of users is checked in the authentication process for allowing access to the system.
                        In other words, authorization process users are validated but in authentication process users are verified.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using `firebase`? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        For the time being, I'm utilizing Firebase for user authentication and website hosting. It enables users to simply integrate email-password authentication as well as authentication via other platforms like Google, Github, and Facebook.

                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does `firebase` provide other than authentication</Accordion.Header>
                    <Accordion.Body>
                        There are many services which Firebase provides other than authentication.
                        <ul>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Hosting</li>
                            <li>Google Analytics</li>
                            <li>Cloud Storage</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;