import styles from "./AdditionalInformationSet.module.css"
import AdditionalInformation from "../AdditionalInformation/AdditionalInformation"

const AdditionalInformationSet = () => {
    return (
        <div className={`${styles.infoDiv}`}>
            <h1>Additional Information</h1>
            <h4>(Projects, Videos, etc.)</h4>
            <AdditionalInformation />
            <AdditionalInformation />
            <AdditionalInformation />
            <AdditionalInformation />
        </div>
        
    )
}

export default AdditionalInformationSet