import React from "react";
import { connect } from "react-redux";

const List = (props) => {
  return <div>happy</div>;
};
const mapStateToProps = (state) => {
  return { state };
};
export default connect()(List);
