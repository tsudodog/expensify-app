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
            <p>The following information is confidential.</p>
            <WrappedComponent {...props} />
        </div>
    )

}

const AdminInfo = withAdminWarning(Info)


ReactDOM.render(<AdminInfo info="this is the deets"/>, document.getElementById('app'))