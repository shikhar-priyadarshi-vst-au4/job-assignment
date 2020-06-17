import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { update, Delete } from "../../Redux/listReducer/list.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const styled = {
  table: { width: "100%" },
  head: {
    textAlign: "left",
    border: "0.6px solid rgba(39, 39, 39, 0.14)",
    borderRadius: "0.5em",
    boxShadow: "rgba(74, 68, 68, 0.42) 1px 2px 5px 1px",
  },
  item: {
    border: "0.6px solid rgba(39, 39, 39, 0.14)",
    borderRadius: "0.5em",
    boxShadow: "rgba(74, 68, 68, 0.42) 1px 2px 5px 1px",
  },
  field: { padding: "2em 2em" },
};
const List = ({ Lists, message, ...props }) => {
  const [modal, setModal] = useState(false);
  let history = useHistory();
  console.log(props);
  return (
    <Fragment>
      <table style={styled.table}>
        <thead>
          <tr style={styled.head}>
            {[
              "Name",
              "Email",
              "DOB",
              "Portfolio",
              "Skills",
              "Hobbies",
              "Gender",
            ].map((v, i) => (
              <th style={styled.field} key={i}>
                {v}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Lists.map((val, index) => (
            <tr key={index} style={styled.item}>
              <td style={styled.field}>{val.Name.value}</td>
              <td style={styled.field}>{val.Email.value}</td>
              <td style={styled.field}>{val.DOB.value}</td>
              <td style={styled.field}>{val.Portfolio.value}</td>
              <td style={styled.field}>{val.Skills}</td>
              <td style={styled.field}>{val.Hobbies}</td>
              <td style={styled.field}>{val.Gender}</td>
              <td style={styled.field}>
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ cursor: "pointer" }}
                  onClick={() => props.dispatch(Delete(val))}
                />
              </td>
              <td style={styled.field}>
                <FontAwesomeIcon
                  icon={faEdit}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    history.push({ pathname: "/user/form", state: { val } })
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  let { Lists, message } = state;
  return { Lists, message };
};
export default connect(mapStateToProps)(List);
