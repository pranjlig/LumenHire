import React from "react";

const AuthContext = React.createContext({
   user: null,
   loginHandler: ()=>{},
   logoutHandler: ()=>{}
});

export default AuthContext;