import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from "react-icons/fa";

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }
    
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <h5>Royal <span>Garden</span></h5>
                        </Link>
                        <button className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
