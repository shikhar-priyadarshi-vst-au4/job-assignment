import React from "react";
import { connect } from "react-redux";
import { update, Delete, retrieve } from "../../Redux/listReducer/list.actions";
const List = (props) => {
  console.log(props.state);
  return <div>happy</div>;
};
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps)(List);
