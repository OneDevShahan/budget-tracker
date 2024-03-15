import React from 'react'

function Alert(props) {

    const Capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
    <div style={{marginTop: "3.5rem"}}>
          {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{Capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>}
    </div>
  )
}

export default Alert;