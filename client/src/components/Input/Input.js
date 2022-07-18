import styles from "./Input.module.css"
import React from "react"

const Input = React.forwardRef((props, ref) => {


    const finalInput = typeof(props.index) == "number"  ? {
        type: props.type,
        name: props.name,
        onChange: (e) => props.onChange(props.index, e),
        value: props.value,
        className: styles.input ,
        required: props.required
    } : {
        type: props.type,
        name: props.name,
        ref: ref,
        className: styles.input ,
        required: props.required
    } 

    return (
    <div className={styles.group}>  
        <input 
            {...finalInput}
        />
        
        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
        <label className={styles.label}>{props.label}</label>
    </div>
    )
})

export default Input