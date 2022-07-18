import styles from "./Portfolio.module.css"
import Profile from "./Profile/Profile"
import EducationSet from "./EducationSet/EducationSet"
import ExperienceSet from "./ExperienceSet/ExperienceSet"
import AchievementSet from "./AchievementSet/AchievementSet"
import SkillSet from "./SkillSet/SkillSet"
import AdditionalInformationSet from "./AdditionalInformationSet/AdditionalInformationSet"




const Portfolio = (props) => {

    return (
        <div>
            <Profile />
            <EducationSet />
            <SkillSet />
            <ExperienceSet />
            <AchievementSet />
            <AdditionalInformationSet />
            <div className={`row d-flex justify-content-center mb-3 ${styles.imageSection}`}>
                { props.images.map((img) => {  
                    return (
                        <>
                            
                        <div className={`col-sm-2 ${styles.imageDiv}`}>
                            <img src={"https://res.cloudinary.com/dteo3hyzd/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1633459779/Society%20App/ia6t4yf2zbmuhsddimuv.jpg"} className="img-thumbnail" alt="" />
                            {/* <div className="form-check-inline">
                                <input type="checkbox" id="image-{i}" name="deleteImages[]"/>
                                <input type="checkbox" id="image-{i}" name="deleteImages[]" value={img.filename} />
                            </div>
                            <label for="image-{=i}" >Delete?</label> */}
                        </div>
                        <div className={`col-sm-2 ${styles.imageDiv}`}>
                            <img src={"https://res.cloudinary.com/dteo3hyzd/image/upload/w_1000,ar_1:1,c_fill,g_auto/v1655734794/Society%20App/img1_vlbr42.jpg"} className="img-thumbnail" alt="" />
                            {/* <div className="form-check-inline">
                                <input type="checkbox" id="image-{i}" name="deleteImages[]"/>
                                <input type="checkbox" id="image-{i}" name="deleteImages[]" value={img.filename} />
                            </div>
                            <label for="image-{=i}" >Delete?</label> */}
                        </div>
                        </>
                        
                    )
                
                    })}
            </div>
        </div>
    )
}

export default Portfolio