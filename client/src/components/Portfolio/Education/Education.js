import styles from "./Education.module.css"

const Education = () => {
    return (
        
        // <div className={ `col-md-4 `}>
            <div className={`col-6 col-md-3 card px-0 ${styles.educationCard}`}>
            <div className="card-body">
                <h4 class="m-4">
                    {/* <i class="bi-search"></i> */}
                    {/* <i className="bi-mortarboard"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2a2f42" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
                        <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
                        <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
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

export default Education