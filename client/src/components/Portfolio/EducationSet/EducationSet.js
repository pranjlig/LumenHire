import Education from "../Education/Education"
import styles from "./EducationSet.module.css"


const EducationSet = () => {
    return (
        <div className={`row justify-content-evenly ${styles.educationDiv}`}>
            <h1 className="">Education</h1>
            <Education />
            <Education />
            <Education />
            <Education />
        </div>
    )
}

export default EducationSet