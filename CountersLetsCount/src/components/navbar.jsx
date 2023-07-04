import React, { Component } from 'react';

// const NavBar = (props) => {
const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar bg-secondary text-light ">
            <div className="container-fluid">
                <a class="navbar-brand text-light mx-auto" href="#">Active Counters:
                    <span className="badge badge-pill badge-success m-2">
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