import Experience from "../Experience/Experience"
import styles from "./ExperienceSet.module.css"


const ExperienceSet = () => {
    return (
        <div className={`row justify-content-evenly ${styles.educationDiv}`}>
            <h1 className="">Experience</h1>
            <Experience />
            <Experience />
            <Experience />
            
            
        </div>
    )
}

export default ExperienceSet