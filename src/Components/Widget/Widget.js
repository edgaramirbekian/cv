import React, {Component} from 'react';
import Sidebar from 'react-sidebar';
import './styles.scss';

const mql = window.matchMedia(`(min-width: 800px)`);

class Widget extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: false
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render () {
        return (
            <Sidebar
                 open={this.state.sidebarOpen}
                 docked={this.state.sidebarDocked}
                 onSetOpen={this.onSetSidebarOpen}
            >
                <main className="main">
                    <aside className="sidebar">
                        <nav className="nav">
                            <ul>
                                <li className="active"><a href="/">Welcome</a></li>
                                <li><a href="/edu">Education</a></li>
                                <li><a href="/experience">Experience</a></li>
                                <li><a href="/skills">Skills</a></li>
                                <li><a href="/interests">Interests</a></li>
                                <li><a href="/awards">Awards</a></li>
                                <li><a href="https://edgaramirbekian.github.io/resume/resume.pdf">Get PDF</a></li>
                            </ul>
                        </nav>
                    </aside>
                </main>
            </Sidebar>
        );
    }
}

export default Widget;