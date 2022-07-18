import styles from "./Card.module.css"

const Card = (props) => {
    const imageDivStyle = {   
        backgroundImage: "linear-gradient(" + "rgba(42, 47, 66, 0.8), rgba(115, 165, 223, 0.7)" + ")," + `url(${process.env.PUBLIC_URL}${props.card.img})` ,
        backgroundPosition: 'center',
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        height: "100%"
    }

    return (
        <div className={`row ${styles.card} `}>
            {props.card.isLeft && 
            <div className={`col-md-3 h-100`} style={imageDivStyle}>
            </div>
            }
            <div className={`col-md-9 my-2 ${styles.details}`}>
                <h3 className={`${styles.title}`}>{props.card.title}</h3>
                <p>{props.card.description}</p>
            </div>
            {!props.card.isLeft && 
            <div className={`col-md-3 `} style={imageDivStyle}>
            </div>
            }
            {!props.card.isLeft && <div className={styles.imageDiv}></div>}
        </div>
    )
}

export default Card