import styles from "./Profile.module.css"

const Profile = () => {

    const imageDivStyle = {   
        // backgroundImage: "linear-gradient(" + "rgba(42, 47, 66, 0.5), rgba(115, 165, 223, 0.5)" + ")," + `url(${process.env.PUBLIC_URL}${"profile.jpeg"})` ,
        backgroundImage: "linear-gradient(" + "rgba(42, 47, 66, 0.5), rgba(115, 165, 223, 0.5)" + ")," + `url(https://res.cloudinary.com/dteo3hyzd/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1655734794/Society%20App/img1_vlbr42.jpg)` ,
        // backgroundImage: "linear-gradient(" + "rgba(42, 47, 66, 0.5), rgba(115, 165, 223, 0.5)" + ")," + `url(https://res.cloudinary.com/dteo3hyzd/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1633459243/Society%20App/ld7l5mdktmorqh2by7h9.png)` ,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        // height: "100%"
        
    }

    return (
        <div className={` ${styles.carouselOuter}`}>
            <div className={`row  ${styles.carouselFinal}`}>
                <div className={`col-md-4`} style={imageDivStyle}></div>
                
                <div className={`col-md-8 ${styles.hDiv}`}>
                    <h1>Pranav Gupta</h1>
                    <h3>Role at Company</h3>
                    <p>City, State, Country</p>
                    <span className="py-2"></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet cursus s?it amet dictum sit amet justo. Potenti nullam ac tortor vitae purus faucibus. Lacus vel facilisis volutpat est ve</p>
                    <h5 className="pt-4 pb-1">Actor, Dancer, Influencer, Vlogger</h5>
                    <p className="pt-2 pb-3">Employment Status: Full-Time</p>
                    <div>
                        <button className="btn btn-sm border-white text-white">Email</button>
                        <span className="p-2"></span>
                        <button className="btn btn-sm border-white text-white">Whatsapp</button>
                    </div>
                    
                    
                </div>
                
            </div>
        </div>
    )
}

export default Profile