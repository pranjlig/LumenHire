import Achievement from "../Achievement/Achievement"
import styles from "./AchievementSet.module.css"


const AchievementSet = () => {
    return (
        <div className={`row justify-content-evenly ${styles.educationDiv}`}>
            <h1 className="">Achievements</h1>
            <Achievement />
            <Achievement />
            <Achievement />
            <Achievement />
        </div>
    )
}

export default AchievementSet