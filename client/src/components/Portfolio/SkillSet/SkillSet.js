import Skill from "../Skill/Skill"
import styles from "./SkillSet.module.css"


const SkillSet = () => {
    return (
        <div className={`row justify-content-evenly ${styles.educationDiv}`}>
            <h1 className="">Skills</h1>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    )
}

export default SkillSet