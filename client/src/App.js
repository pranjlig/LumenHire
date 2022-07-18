import './App.css';
import React from "react";

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom' 

import Navbar from './components/Navbar/Navbar';
import Carousel from './components/Carousel/Carousel'
import CardSet from './components/CardSet/CardSet'
import Auth from './components/Auth/Auth'
import PortfolioForm from './components/PortfolioForm/PortfolioForm';
import PortfolioUpdateForm from './components/PortfolioUpdateForm/PortfolioUpdateForm';
import PortfolioCardSet from './components/PortfolioCardSet/PortfolioCardSet';
import Portfolio from './components/Portfolio/Portfolio';
import Alert from './components/Alert/Alert'

import AuthContext from "./context/auth-context"
import AlertContext from "./context/alert-context"

import img1 from './assets/img1.jpeg';
import img2 from './assets/img2.jpeg';
import img3 from './assets/img3.jpeg';
import img4 from './assets/img4.jpeg';
import img5 from './assets/img5.jpeg';
import { useState, useEffect} from "react"



function App() {

  const [user, setUser] = useState(null)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const errorHandler = (error) => {
    setError(error)
   }

  const successHandler = (success) => {
    setSuccess(success)
   }
 
  const loginHandler = (user) => {
    setUser(user)
   }
 
  const logoutHandler = () => {
    setUser(null)
   }
 
  useEffect(() => {
    
  }, [])

  return (
    <AuthContext.Provider
       value={{
          user: user,
          loginHandler: loginHandler,
          logoutHandler: logoutHandler
       }}
     >
      <div className="App">
        {/* <Navbar /> */}
        <Router>
          <Navbar />
          <AlertContext.Provider
            value={{
                error: error,
                success: success,
                errorHandler: errorHandler,
                successHandler: successHandler
            }}
          >
            {error && <Alert type="error" message={error}/>}
            {success && <Alert type="success" message={success}/>}
            
          
          <Routes>
            <Route exact path="/signup" element={<Auth title={"Sign Up"} />} />  
            <Route exact path="/login" element={<Auth title={"Log in"} />} />  
            <Route exact path="/users/:id/make-portfolio" element={<PortfolioForm />} />  
            <Route exact path="/users/:id/view-portfolio" element={<Portfolio images={[img1, img2, img3, img4, img5]}/>} />  
            <Route exact path="/users/:id/edit-portfolio" element={<PortfolioUpdateForm images={[img1, img2, img3, img4, img5]}/>} />  
            <Route exact path="/actor" element={<PortfolioCardSet images={[img1, img2, img3, img4, img5]}/>} />  

            <Route exact path="/" element={<div>
              <Carousel />
              <CardSet />
            </div>} />
            {/* </Route> */}
          </Routes>
          </AlertContext.Provider>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
