import React from "react"

class Header extends React.Component{
    render(){
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm  bg-white rounded">
                    <div className="container-fluid">
                        <a className="navbar-brand headerLogoFont" href="#"><img src="logo.svg" alt="Logo"/> <strong>Intuguine</strong> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navAnchorsShift">
                            <a className="nav-link active headerLinkFont" href="#"> <strong>Home</strong> </a>
                            <a className="nav-link active headerLinkFont" href="#"> <strong>Brands</strong> </a>
                            <a className="nav-link active headerLinkFont" href="#"> <strong>Transporters</strong> </a>
                            <a className="nav-link active headerLinkFont" href="#"> <img src="profile.svg"  alt="profile" height="35" width="35" /> <span className="fa fa-angle-down"></span> </a>
                        </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Header