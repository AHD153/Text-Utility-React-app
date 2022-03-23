import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';




export default function Navbar(props) {

    return <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li> */}
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button type="Submit" className="btn btn-primary">Search</button>
                    </form> */}

                    {/* <div className={`form-check form-switch text-${props.mode==='light'?'Success':'light'} mx-2`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable Pink Dark Mode`}</label>
                    </div>

                    <div className={`form-check form-switch text-${props.mode==='light'?'primary':'light'} mx-2`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable Grey Dark Mode`}</label>
                    </div> */}

                    <div className={`form-check form-switch text-${props.mode==='light'? 'dark':'light'} mx-2`}>
                        <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable Blue Dark Mode`}</label>
                    </div>
                </div>
            </div>
        </nav>
    </div>;
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired // Add isRequired to complete your components means add in the important things.
}

Navbar.defaultProps = {
    title: 'Title Here'  // default values you want to display
}