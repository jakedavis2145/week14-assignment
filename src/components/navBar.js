import React from "react";

export default class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <nav  id="dropdown" className="navbar navbar-expand-sm navbar-dark bg-success">
                <a id="site-name" className="navbar-brand" href="page.js"><u>Movie Review App</u></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a id="site-name" className="nav-link" href="index.html"><u>Home</u></a>
                        </li>
                    </ul>
                </div>
          </nav>
        </div>
        );
    }

}