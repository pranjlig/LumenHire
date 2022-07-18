import styles from "./Navbar.module.css"
import userImage from '../../assets/user.png';
import { useLocation } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'

import AuthContext from "../../context/auth-context";
import { useContext } from "react"; 


const Navbar = () => {

    const location = useLocation().pathname;
    const authCtx = useContext(AuthContext)

    const navigate = useNavigate()

    const logout = () => {
        authCtx.logoutHandler()
        return navigate("/")
        
    }

    return (
            <nav className={`navbar navbar-expand-lg  ${styles.nav}`}>
            <div className="container-fluid ">
                <Link to="/" className={`navbar-brand fs-3 fw-bold  ${styles.brand}`} href="#">LumenHire</Link>
                {location !== "/signup" && location !== "/login" && <form className="d-flex col-lg-6 offset-lg-2" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className={`btn ${styles.searchButton}`} type="submit">Search</button>
                </form>}
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end mr-2" id="navbarSupportedContent">
                
                <ul className="navbar-nav mb-2 mb-lg-0 pr-0 mr-0 ">
                    
                    <li className="nav-item">
                    <Link to="/"  className={`nav-link ${location === "/" && "active"}`}>Home</Link>
                    </li>
                    {location === "/signup" &&
                    <li className="nav-item">
                    <Link to="/login"  className={`nav-link`}>Log In</Link>
                    </li>
                    }
                    {location === "/login" &&
                    <li className="nav-item">
                    <Link to="/signup"  className={`nav-link`}>Sign Up</Link>
                    </li>
                    }
                    {location !== "/signup" && location !== "/login" && authCtx.user && 
                    
                    <li className="nav-item dropdown">
                    <a className="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={userImage} className={styles.userImage} height="30px"/>
                    </a>
                    
                        <ul className="dropdown-menu dropdown-menu-end pr-2" aria-labelledby="navbarDropdownMenuLink">
                            {!authCtx.user.isPortfolioMade && <li><Link to={`/users/${authCtx.user._id}/make-portfolio`}  className={`dropdown-item ${styles.profileOptions}`}>Make</Link></li>} 
                            <li><Link to={`/users/${authCtx.user._id}/view-portfolio`}  className={`dropdown-item ${styles.profileOptions}`}>View</Link></li>
                            <li><Link to={`/users/${authCtx.user._id}/edit-portfolio`}  className={`dropdown-item ${styles.profileOptions}`}>Edit</Link></li>
                            <li><Link to={`/users/${authCtx.user._id}/share-portfolio`}  className={`dropdown-item ${styles.profileOptions}`}>Share</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className={`dropdown-item ${styles.profileOptions}`} onClick={logout}>Logout</li>
                        </ul>
                    </li>
                    }
                    {location !== "/signup" && location !== "/login" && !authCtx.user && 
                        <li className="nav-item">
                        <Link to="/signup"  className={`nav-link`}>Sign Up</Link>
                        </li>
                    }
                    {location !== "/signup" && location !== "/login" && !authCtx.user && 
                        <li className="nav-item">
                        <Link to="/login"  className={`nav-link`}>Log In</Link>
                        </li>
                    }                    
                </ul>
                
                </div>
            </div>
            </nav>
    )
}

export default Navbar