import React from "react";

const AlertContext = React.createContext({
   error: "",
   success: "",
   errorHandler: ()=>{},
   successHandler: ()=>{}
});

export default AlertContext;
