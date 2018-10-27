// Higher Order Component (HOC) - A Component that renders another component
// Goal is to reuse code
// Render hijacking 
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p> The info is : {props.info}</p>
    </div>
)

// This is the higher order component 

const withAdminWarning = (WrappedComponent) =>{
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    )

}


const requireAuthentication = (WrappedComponent) =>{ 
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to view the info</p>
            )}
            
        </div>
    )
}
const AuthInfo = requireAuthentication(Info)




ReactDOM.render(<AuthInfo isAuthenticated={true} info="this is the deets"/>, document.getElementById('app'))