import styles from "./Experience.module.css"

const Experience = () => {
    return (
        
        // <div className={ `col-md-4 `}>
            <div className={`col-6 col-md-3 card px-0 ${styles.educationCard}`}>
            <div className="card-body">
                <h4 class="m-4">
                    {/* <i class="bi-search"></i> */}
                    {/* <i className="bi-mortarboard"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
                    <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"/>
                    </svg>
                </h4>
                <h6 className="card-subtitle mb-2 text-muted">2000</h6>
                <h5 className="card-title ">Higher Secondary</h5>
                
                <p className="card-text mb-4">Maharashtra State Board</p>

            </div>
            </div>
        // </div>
        
    )
}

export default Experience