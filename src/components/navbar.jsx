import React, { Component } from 'react';

// const NavBar = (props) => {
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar bg-secondary text-light">
            <div className="container-fluid">
                <a class="navbar-brand text-light" href="#">Counters:
                    <span className="badge badge-pill badge-secondaey">
                        {totalCounters}
                    </span>
                </a>
            </div>
        </nav>

    )

};

// class NavBar extends Component {
//     state = {}
//     render() {

//     }
// }
export default NavBar;