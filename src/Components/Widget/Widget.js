import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Widget() {
    return (
        <div>
            <span>
                Image
            </span>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">About</Nav.Link>
                <Nav.Link eventKey="link-1">Experience</Nav.Link>
                <Nav.Link eventKey="link-2">Education</Nav.Link>
                <Nav.Link eventKey="link-3">
                    Interests
                </Nav.Link>
                <Nav.Link eventKey="link-3">
                    Awards
                </Nav.Link>
            </Nav>
        </div>
    );
}

export default Widget;