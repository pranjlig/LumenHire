import styles from "./PortfolioCardSet.module.css"
import ProfileCard from "../ProfileCard/ProfileCard"

const PortfolioCardSet = (props) => {
    return (
        <div>
            {props.images.map((profile) => {
                return <ProfileCard />
            })}
        </div>
    )
}

export default PortfolioCardSet