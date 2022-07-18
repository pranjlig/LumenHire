import styles from "./AdditionalInformation.module.css"

const AdditionalInformation = () => {
    return (
        <div class={`card w-75 mx-auto mb-4 p-3 ${styles.cardDiv}`}>
            
            <div class="card-body d-flex flex-column align-items-start">
                <h5 class="card-title fw-bolder mb-3">Special title treatment</h5>
                <p class="card-text mb-3">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class={`btn ${styles.linkButton}`}>Visit Url</a>
            </div>
        </div>
    )
}

export default AdditionalInformation