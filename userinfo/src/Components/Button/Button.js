import React, { Fragment } from "react";

const styled = {
  button: {
    padding: "1em 4em",
    margin: "1em",
    cursor: "pointer",
  },
};

export const Button = (props) => {
  return (
    <Fragment>
      {props.button === "Create" && (
        <button style={styled.button} onClick={() => props.submit()}>
          {props.button}
        </button>
      )}
    </Fragment>
  );
};
