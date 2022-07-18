import carouselImage from "../../assets/carousel-image.jpg"
import styles from "./Carousel.module.css"

const Carousel = () => {
    return (
        <div className={`${styles.carouselOuter}`}>
            <div className={`row  ${styles.carouselFinal} mx-0`}>
             <div className={`col-lg-4 h-sm-25 h-lg-100 ${styles.hDiv} mx-0`} >
                 <h1 className="mx-auto">Let's make way to get you hired!</h1>
             </div>
             <div className={`col-lg-8 h-sm-75 h-lg-100 ${styles.imageDiv}`}>
           </div>
         </div>
        </div>
        
    )
}

export default Carousel