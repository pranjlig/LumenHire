import styles from "./ProfileCard.module.css"
import { Link } from "react-router-dom"

const ProfileCard = (props) => {
    const imageDivStyle = {   
        backgroundImage: "linear-gradient(" + "rgba(42, 47, 66, 0.8), rgba(115, 165, 223, 0.7)" + ")," + `url(https://res.cloudinary.com/dteo3hyzd/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1655734794/Society%20App/img1_vlbr42.jpg)` ,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        // height: "100%"
    }

    return (
        <div className={`row ${styles.card} `}>
            <div className={`col-md-4`} style={imageDivStyle}>
            </div>
            
            <div className={`col-md-8 my-1  ${styles.details}`}>
                <h3>Pranav Gupta</h3>
                <h5>Role at Company</h5>
                <p>City, State, Country</p>
                {/* <span className="py-2"></span> */}
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus s?it amet dictum sit amet justo. Potenti nullam ac tortor vitae purus faucibus. Lacus vel facilisis volutpat est ve</p>
                <h6 className=" pb-1">Actor, Dancer, Influencer, Vlogger</h6>
                <button className={`btn btn-sm ${styles.button}`}>View Profile</button>
                {/* <p className="pt-1">Employment Status: Full-Time</p> */}
               
            </div>
            
        </div>
    )
}

export default ProfileCard