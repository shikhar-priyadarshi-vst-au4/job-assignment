import React, { Fragment } from "react";

const styled = {
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "1em 20em",
  },
  label: {
    margin: "0.5em",
    fontSize: "1.6em",
  },
  input: {
    padding: "1em 1em",
  },
  checkbox_radio: { display: "flex", fontSize: "1.8em", margin: "0.4em" },
};
function Input(props) {
  return (
    <Fragment>
      <div style={styled.root}>
        {props.part === "input" && (
          <Fragment>
            <label style={styled.label}>{props.name}</label>
            <input
              name={props.name}
              value={props.value}
              type={props.type}
              style={styled.input}
              onChange={(e) => props.changeHandler(e)}
            />
            <small style={{ color: `${!props.value ? "#e7305b" : ""}` }}>
              {!props.value ? "Field is empty" : props.helpermsg}
            </small>
          </Fragment>
        )}

        {props.part === "checkbox-and-radio" && (
          <div style={{ display: "flex" }}>
            <label style={styled.label}>{props.name}</label>
            {props.iterator.map((v, i) => (
              <div style={styled.checkbox_radio} key={i}>
                <input
                  name={props.name}
                  type={props.type}
                  style={styled.input}
                  checked={props.value === v ? true : false}
                  onChange={(e) =>
                    props.setData({ ...props.data, [e.target.name]: v })
                  }
                />
                <div>{v}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Input;
