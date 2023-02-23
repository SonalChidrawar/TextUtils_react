import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    // const lower = word.toLowercase()
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  return (
    <div style={{ height: "45px" }}>
      {props.alert && (
        <div>
          <div
            className={`alert alert-${props.alert.type} alert-dismissible fade show`}
            role="alert"
          >
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        </div>
      )}
    </div>
  );
}
