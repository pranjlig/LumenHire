import styles from  "./PortfolioForm.module.css";
import Input from "../Input/Input"
import { useState, useRef, useContext } from "react"
import { useLocation } from 'react-router-dom';
import axios from "axios"

import AlertContext from "../../context/alert-context";



const PortfolioForm = () => {

    const location = useLocation().pathname;
    const alertCtx = useContext(AlertContext)

    const name = useRef()
    const gender = useRef()
    const age = useRef()
    const employmentStatus = useRef()
    const email = useRef()
    const phone1 = useRef()
    const phone2 = useRef()
    const city = useRef()
    const state = useRef()
    const country = useRef()
    const currentRole = useRef()
    const currentWorking = useRef()
    const shortDescription = useRef()

    const [profileImage, setProfileImage] = useState({
        file: null,
    })

    const [moreImages, setMoreImages] = useState({
        files: [], 
    })

    const imgImageHandler = (e) => {
        setProfileImage({ file: e.target.files[0]})
    }

    const fileSelectedHandler = (e) => {
        if (e.target.files.length > 5){
            alertCtx.errorHandler("Please do not select more than 5 photographs in 'More Photographs' section")
        }
        setMoreImages({ files: [...e.target.files]})
    }


    const [education, setEducation] = useState([{
        year: "",
        education: "",
        university: "",
    }])

    const [experience, setExperience] = useState([{
        year: "",
        role: "",
        work: "",
    }])
    const [additionalInformation, setAdditionalInformation] = useState([{
        title: "",
        url: "",
        description: "",
    }])

    const [titles, setTitles] = useState([""])
    const [skillsCount, setSkillsCount] = useState([""])
    const [achievementCount, setAchievementCount] = useState([""])
    
    // *********************** Education *****************************************

    const educationChangeHandler = (i, e) => {        
        const newFormValues = [...education];
        newFormValues[i][e.target.name] = e.target.value;
        setEducation(newFormValues);
    }

    const addEducation = () => {
        setEducation((prevEducation) => {
            return [ ...prevEducation, {
                year: "",
                education: "",
                university: "",
                }]
        })
    }
    const removeEducation = (i) => {

        setEducation((prevEducation) => {
            const newFormValues = [...prevEducation]; 
            newFormValues.splice(i, 1);
            return newFormValues
        })
    }

    // *********************** Experience *****************************************

    const experienceChangeHandler = (i, e) => {
        const newFormValues = [...experience];
        newFormValues[i][e.target.name] = e.target.value;
        setExperience(newFormValues);
    }

    const addExperience = () => {
        setExperience((prevExperience) => {
            return [ ...prevExperience, {
                year: "",
                role: "",
                work: "",
            }]
        })
    }
    const removeExperience = (i) => {
        const newFormValues = [...experience];
        newFormValues.splice(i, 1);
        setExperience(newFormValues)
    }

        // *********************** Additional Information *****************************************

        const addInfoChangeHandler = (i, e) => {
            const newFormValues = [...additionalInformation];
            newFormValues[i][e.target.name] = e.target.value;
            setAdditionalInformation(newFormValues);
        }
    
        const addAdditionalInformation = () => {
            setAdditionalInformation((prevAdditionalInformation) => {
                return [ ...prevAdditionalInformation, {
                    title: "",
                    url: "",
                    description: "",
                }]
            })
        }
        const removeAdditionalInformation = (i) => {
            const newFormValues = [...additionalInformation];
            newFormValues.splice(i, 1);
            setAdditionalInformation(newFormValues)
        }

    // *********************** Skill *****************************************

    const skillChangeHandler = (i, e) => {
        const newFormValues = [...skillsCount];
        newFormValues[i] = e.target.value;
        setSkillsCount(newFormValues);
    }

    const addSkillsCount = () => {
        setSkillsCount((prevSkillsCount) => {
            return [ ...prevSkillsCount, ""]
        })
    }
    const removeSkillsCount = (i) => {
        const newFormValues = [...skillsCount];
        newFormValues.splice(i, 1);
        setSkillsCount(newFormValues)
    }

    // *********************** Achievement *****************************************

    const achievementChangeHandler = (i, e) => {
        const newFormValues = [...achievementCount];
        newFormValues[i] = e.target.value;
        setAchievementCount(newFormValues);
    }

    const addAchievementCount = () => {
        setAchievementCount((prevAchievementCount) => {
            return [ ...prevAchievementCount, ""]
        })
    }
    const removeAchievementCount = (i) => {
        const newFormValues = [...achievementCount];
        newFormValues.splice(i, 1);
        setAchievementCount(newFormValues)
    }

    // *********************** Title *****************************************

    const workingTitleChangeHandler = (i, e) => {
        const newFormValues = [...titles];
        newFormValues[i] = e.target.value;
        setTitles(newFormValues);
    }

    const addTitles = () => {
        setTitles((prevTitles) => {
            return [ ...prevTitles, ""]
        })
    }
    const removeTitles = (i) => {
        const newFormValues = [...titles];
        newFormValues.splice(i, 1);
        setTitles(newFormValues)
    }


    const submitHandler = async (e) => {
        e.preventDefault();
        
        console.log(
            name.current.value,
            gender.current.value,
            age.current.value,
            employmentStatus.current.value,
            email.current.value,
            phone1.current.value,
            phone2.current.value,
            city.current.value,
            state.current.value,
            country.current.value,
            currentRole.current.value,
            currentWorking.current.value,
            shortDescription.current.value,
            profileImage,
            moreImages,
            education,
            experience,
            additionalInformation,
            titles,
            skillsCount,
            achievementCount,
            
        )
        const formData = {
            name: name.current.value,
            gender: gender.current.value,
            age: age.current.value,
            employmentStatus: employmentStatus.current.value,
            email: email.current.value,
            phone1: phone1.current.value,
            phone2: phone2.current.value,
            location: {
                city: city.current.value,
                state: state.current.value,
                country: country.current.value,
            },
            currentRole: currentRole.current.value,
            currentWorking: currentWorking.current.value,
            shortDescription: shortDescription.current.value,
            profileImage: null,
            photographs: [],
            education: education,
            experience: experience,
            additionalInformation: additionalInformation,
            titles: titles,
            skilles: skillsCount,
            achievements: achievementCount,
        }

        // const cloudinary_data = new FormData()
        // cloudinary_data.append("file", profileImage.file)
        // cloudinary_data.append("upload_preset", "portfolio-app")
        // cloudinary_data.append("cloud_name", "dteo3hyzd")
        // cloudinary_data.append("folder", "Portfolio")


        // const cloudinary_response = await axios.post(
        //     "https://api.cloudinary.com/v1_1/dteo3hyzd/image/upload",
        //     cloudinary_data
        // )
        // formData.profileImage = cloudinary_response.data.url

        const uploaders = moreImages.files.map(async (file) => {
            const cloudinary_multiple_data = new FormData()
            cloudinary_multiple_data.append("file", profileImage.file)
            cloudinary_multiple_data.append("upload_preset", "portfolio-app")
            cloudinary_multiple_data.append("cloud_name", "dteo3hyzd")
            cloudinary_multiple_data.append("folder", "Portfolio")

            // const res  = await axios.post("https://api.cloudinary.com/v1_1/dteo3hyzd/image/upload", cloudinary_multiple_data)
            // formData.photographs.push(res.data.url)
            // return res.data.url
            return axios.post("https://api.cloudinary.com/v1_1/dteo3hyzd/image/upload", cloudinary_multiple_data, {
                // headers: { "X-Requested-With": "XMLHttpRequest" },
            })
            .then(response => {
                console.log(formData.photographs)
                formData.photographs.push(response.data.url)
              })
        })
        console.log(uploaders)

        const cloudinary_multiple_response = await axios.all(uploaders)
        console.log("cloudinary_multiple_response ", cloudinary_multiple_response)

        const response = await axios.post(`http://localhost:8082${location}`, formData)

        console.log("server response", response)

        name.current.value = ""
        gender.current.value = ""
        age.current.value = ""
        employmentStatus.current.value = ""
        email.current.value = ""
        phone1.current.value = ""
        phone2.current.value = ""
        city.current.value = ""
        state.current.value = ""
        country.current.value = ""
        currentRole.current.value = ""
        currentWorking.current.value = ""
        shortDescription.current.value = ""

        setEducation([{
            year: "",
            education: "",
            university: "",
        }])
        setExperience([{
            year: "",
            role: "",
            work: "",
        }])
        setAdditionalInformation([{
            title: "",
            url: "",
            description: "",
        }])
        setProfileImage({
            file: null,
        })
        setMoreImages({
            files: [],
        })
        setTitles([""])
        setSkillsCount([""])
        setAchievementCount([""])

    }

    return (
        <div className={styles.mainSection}>
            <form action="" className={`row ${styles.group}`} encType="multipart/form-data"  onSubmit={submitHandler}>
                <h1 className="fw-bolder my-4">Let's Begin!</h1>
                <div className={`col-md-6 ${styles.container}`}>
                    <Input type="text" ref={name} label="Name" name="name"/>
                </div>
                
                
                <div className="row w-100">
                    
                    <div className={`col-md-4 ${styles.container} ${styles.group}`}>
                        <select name="gender" id="" ref={gender} className={styles.input}>
                            <option value="Select Gender">Select Gender</option>
                            <option value="Female">Female</option>
                            <option value="Male">Male</option>
                            <option value="Non-Binary">Non-Binary</option>
                            <option value="Transgender">Transgender</option>
                            <option value="Intersex">Intersex</option>
                            <option value="I prefer not to say">I prefer not to say</option>
                        </select>
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                    </div>
                    <div className={`col-md-4 ${styles.container} ${styles.group}`}>
                        <select name="age" id="" ref={age} className={styles.input} >
                            <option value="Select Age Group">Select Age Group</option>
                            <option value="Below 18">Below 18</option>
                            <option value="18-30">18-30</option>
                            <option value="31-40">31-40</option>
                            <option value="41-50">41-50</option>
                            <option value="51-60">51-60</option>
                            <option value="Above 60">Above 60</option>
                        </select>
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                    </div>
                    <div className={`col-md-4 ${styles.container} ${styles.group}`}>
                        <select name="employmentStatus" ref={employmentStatus} id="" className={` ${styles.input}`} >
                            <option value="" className={``}>Employment Status</option>
                            <option value="Full-Time">Full-Time</option>
                            <option value="Part-Time">Part-Time</option>
                            <option value="Unemployed">Unemployed</option>
                            <option value="Self-Employed">Self-Employed</option>
                            <option value="Homemaker">Homemaker</option>
                            <option value="Student">Student</option>
                            <option value="Retired">Retired</option>
                        </select>
                        <span className={styles.highlight}></span>
                        <span className={styles.bar}></span>
                    </div>
                        
                    <div className={`col-12 ${styles.container}`}>
                    <div className="row">
                            <h3>Contact</h3>
                            <div className="col-md-4">
                                <Input label="Email" name="email" type="email" ref={email} />
                            </div>
                            <div className="col-md-4 ">
                                <Input label="Phone No (Whatsapp)" name="phone1" ref={phone1} type="number" />
                            </div>
                            <div className="col-md-4">
                                <Input label="Alternate Phone No" name="phone2" ref={phone2} type="number"/>
                            </div>
                    </div>
                    
                </div>
                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">
                            <h3>Location</h3>
                            <div className="col-md-4">
                                <Input label="City" name="city" type="text" ref={city} />
                            </div>
                            <div className="col-md-4">
                                <Input label="State" name="state" type="text" ref={state} />
                            </div>
                            <div className="col-md-4">
                                <Input label="Country" name="country" type="text" ref={country} />
                            </div>
                        </div>
                        
                    </div>
                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">
                            <h3>Current Working</h3>
                            <div className="col-md-6">
                                <Input label="Role" name="currentRole" ref={currentRole} type="text"/>
                            </div>
                            <div className="col-md-6">
                                <Input label="Company" name="currentWorking" ref={currentWorking} type="text"/>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">

                            <h3 className="mb-3">Professional/Working Titles</h3>
                            {titles.map((val, index) => {
                                return (
                                <div className="col-md-4 d-flex justify-content-around align-items-center" key={index}>
                                    <Input label="" name="workingTitle" type="text" index={index} value={val} onChange={workingTitleChangeHandler}/>
                                    <button type="button"  className="btn btn-sm  text-white border border-white" onClick={() => removeTitles(index)}>Remove</button>
                                </div>
                                )
                            })}
                            <div>
                            <button className="btn btn-sm text-white border border-white" type="button" onClick={() => addTitles()}>Add More</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">

                            <h3 className="mb-3">Education</h3>
                            
                            {education.map((val, index) => {
                                return (
                                    <div className={`col-12 row mt-3`} key={index}>
                                            <div className="col-md-3">
                                                <Input label="Year (eg 2000)"  name="year" type="number" value={val.year} index={index} onChange={educationChangeHandler}/>
                                            </div>
                                            <div className="col-md-4">
                                                <Input label="Education" name="education" type="text" index={index} value={val.education} onChange={educationChangeHandler}/>
                                            </div>
                                            <div className="col-md-4">
                                                <Input label="School/University" name="university" type="text" index={index} value={val.university} onChange={educationChangeHandler}/>
                                            </div>
                                            <button type="button"  className={`btn btn-sm  text-white border border-white col-md-1 h-1 mb-4 ${styles.removeButton}`} onClick={() => removeEducation(index)}>Remove</button>
                                            
                                        </div>
                                        
                                )
                            })}
                            <div>
                            <button className="btn btn-sm text-white border border-white" type="button" onClick={() => addEducation()}>Add More</button>
                            </div>
                        </div>
                        
                    </div>
                    
                    
                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">

                            <h3 className="mb-3">Experience</h3>
                            {experience.map((val, index) => {
                                return (
                                    <div className={`col-12 row mt-3`} key={index}>
                                            <div className="col-md-3">
                                                <Input label="Year (eg 1999-2002)" name="year" value={val.year} type="text" index={index} onChange={experienceChangeHandler}/>
                                            </div>
                                            <div className="col-md-4">
                                                <Input label="Role" name="role" type="role" value={val.role} index={index} onChange={experienceChangeHandler}/>
                                            </div>
                                            <div className="col-md-4">
                                                <Input label="Work" name="work" type="work" index={index} value={val.work} onChange={experienceChangeHandler}/>
                                            </div>
                                            <button type="button"  className={`btn btn-sm  text-white border border-white col-md-1 h-1 mb-4 ${styles.removeButton}`} onClick={() => removeExperience(index)}>Remove</button>
                                        </div>
                                        
                                )
                            })}
                            <div>
                            <button className="btn btn-sm text-white border border-white" type="button" onClick={() => addExperience()}>Add More</button>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">

                            <h3 className="mb-3">Skills/Technologies</h3>
                            {skillsCount.map((val, index) => {
                                return (
                                <div className="col-md-4 d-flex justify-content-around align-items-center" key={index}>
                                    <Input label="" name="skill" type="text" index={index} value={val} onChange={skillChangeHandler}/>
                                    <button type="button"  className="btn btn-sm  text-white border border-white" onClick={() => removeSkillsCount(index)}>Remove</button>
                                
                                </div>
                                )
                            })}
                            <div>
                            <button className="btn btn-sm text-white border border-white" type="button" onClick={() => addSkillsCount()}>Add More</button>
                            </div>
                        </div>
                        
                    </div>
                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">

                            <h3 className="mb-3">Achievements</h3>
                            {achievementCount.map((val, index) => {
                                return (
                                <div className="col-md-4 d-flex justify-content-around align-items-center" key={index}>
                                    <Input label="" name="achievement" type="text" index={index} value={val} onChange={achievementChangeHandler}/>
                                    <button type="button"  className="btn btn-sm  text-white border border-white" onClick={() => removeAchievementCount(index)}>Remove</button>
                                    
                                </div>
                                )
                            })}
                            
                            
                            <div>
                            <button className="btn btn-sm text-white border border-white" type="button" onClick={() => addAchievementCount()}>Add More</button>
                            </div>
                        </div>
                        
                    </div>
                    
                     <div className={`col-12 ${styles.container}`}>
                        <div className="row">

                            <h3 className="mb-3">Primary Headshot Photo <span>(Will be displayed as profile picture)</span></h3>
                            <div className="input-group my-3">
                        
                                <input type="file" id="file" name="profileImage" accept="image/*" onChange={(e) => {imgImageHandler(e)}} className={styles.input}/>
                            </div>
                            
                        </div>
                        
                    </div>

                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">

                            <h3 className="mb-3">Additional Information <span>(Links to projects, videos, etc)</span></h3>
                            {additionalInformation.map((val, index) => {
                                return (
                                    <div className={`col-12 row mt-3`} key={index}>
                                            <div className="col-md-3">
                                                <Input label="Title" name="title" value={val.title} type="text" index={index}  onChange={addInfoChangeHandler}/>
                                            </div>
                                            <div className="col-md-4">
                                                <Input label="Url" name="url" value={val.url} type="text" index={index} onChange={addInfoChangeHandler}/>
                                            </div>
                                            <div className="col-md-4">
                                                <Input label="Description" name="description" value={val.description} type="text" index={index} onChange={addInfoChangeHandler}/>
                                            </div>
                                            <button type="button"  className={`btn btn-sm  text-white border border-white col-md-1 h-1 mb-4 ${styles.removeButton}`} onClick={() => removeAdditionalInformation(index)}>Remove</button>
                                        </div>
                                        
                                )
                            })}
                            <div>
                            <button className="btn btn-sm text-white border border-white" type="button" onClick={() => addAdditionalInformation()}>Add More</button>
                            </div>
                        </div>
                        
                    </div>

                    <div className={`col-12 ${styles.container}`}>
                        <div className="row">

                            <h3 className="mb-3">More Photographs</h3>
                            <div className="input-group my-3">
                        
                                <input type="file" id="file" name="moreImages" accept="image/*" onChange={(e) => fileSelectedHandler(e)} className={styles.input} multiple/>
                            </div>
                            
                        </div>
                        
                    </div>
                    

                    <div className={`col-12 ${styles.container}`}>
                            <h3 className="mb-3">Short Description</h3>
                            <textarea name="shortDescription" id="" rows="5" ref={shortDescription} maxLength="250" minLength="130" className="w-100 text-white border border-white"></textarea>
                    </div>
                    
                    
                </div>
                <div className={`col-12 ${styles.container}`}>
                <button type="submit" className={`btn btn-lg border-white text-white ${styles.submitButton}`}>Submit</button>
                </div>
                
                
                
            </form>
        </div>
    )
}

export default PortfolioForm