import React, { useState } from "react";
import Input from "../../Components/Input/Input";
import { connect } from "react-redux";
import { Button } from "../../Components/Button/Button";
import { create, update } from "../../Redux/listReducer/list.actions";
import { useLocation } from "react-router-dom";
const Validator = (e) => {
  if (["Name", "Portfolio"].includes(e.target.name)) {
    let status = /[a-zA-Z]+/g.test(e.target.value);
    console.log(status);
    if (!status) {
      return { helpermsg: "a-z or A-Z can only be used" };
    }
  } else if (["Email"].includes(e.target.name)) {
    let status = /.+@.[a-zA-Z]+.com/.test(e.target.value);
    console.log(status);
    if (!status) {
      return { helpermsg: "incorrect email format" };
    }
  }
  return { helpermsg: "" };
};

const Form = (props) => {
  const location = useLocation();
  let initState = {
    Name: { value: "", helpermsg: "" },
    Email: { value: "", helpermsg: "" },
    DOB: { value: "", helpermsg: "" },
    Portfolio: { value: "", helpermsg: "" },
    Hobbies: "",
    Gender: "",
    Skills: "",
  };
  const [prev, setPrev] = useState(!!location.state ? location.state.val : "");
  const [data, setData] = useState(
    !!location.state ? location.state.val : initState
  );
  const changeHandler = (e) => {
    let { helpermsg } = Validator(e);
    if (["Name", "Email", "DOB", "Portfolio"].includes(e.target.name)) {
      setData({
        ...data,
        [e.target.name]: { value: e.target.value, helpermsg },
      });
    }
  };
  const submit = () => {
    if (
      !!data.Name.value &&
      !!data.Email.value &&
      !!data.DOB.value &&
      !!data.Portfolio.value &&
      !!data.Skills &&
      !!data.Hobbies &&
      !!data.Gender
    ) {
      props.dispatch(!!location.state ? update(prev, data) : create(data));
    }
  };
  return (
    <div>
      <div>
        <Input
          part={"input"}
          name={"Name"}
          value={data.Name.value}
          helpermsg={data.Name.helpermsg}
          type={"text"}
          data={data}
          changeHandler={changeHandler}
        />
      </div>
      <div>
        <Input
          part={"input"}
          name={"Email"}
          value={data.Email.value}
          helpermsg={data.Email.helpermsg}
          type={"text"}
          data={data}
          changeHandler={changeHandler}
        />
      </div>
      <div>
        <Input
          part={"input"}
          name={"DOB"}
          value={data.DOB.value}
          helpermsg={data.DOB.helpermsg}
          type={"date"}
          data={data}
          changeHandler={changeHandler}
        />
      </div>
      <div>
        <Input
          part={"input"}
          name={"Portfolio"}
          value={data.Portfolio.value}
          helpermsg={data.Portfolio.helpermsg}
          type={"text"}
          data={data}
          changeHandler={changeHandler}
        />
      </div>
      <div>
        <Input
          part={"checkbox-and-radio"}
          name={"Hobbies"}
          value={data.Hobbies}
          iterator={["Cricket", "Hockey", "Boxing"]}
          helpermsg={""}
          type={"checkbox"}
          data={data}
          setData={setData}
        />
      </div>
      <div>
        <Input
          part={"checkbox-and-radio"}
          name={"Gender"}
          value={data.Gender}
          iterator={["Male", "Female"]}
          helpermsg={""}
          type={"radio"}
          data={data}
          setData={setData}
        />
      </div>
      <div>
        <Input
          part={"checkbox-and-radio"}
          name={"Skills"}
          value={data.Skills}
          iterator={["C++", "Java", "Python", "GoLang", "Javascript"]}
          helpermsg={""}
          type={"checkbox"}
          data={data}
          setData={setData}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          button={!!location.state ? "Update" : "Create"}
          submit={submit}
        />
      </div>
    </div>
  );
};

export default connect()(Form);
