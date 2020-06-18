export const checkEmpty = (data) => {
  return (
    !!data.Name.value &&
    !data.Name.helpermsg &&
    !!data.Email.value &&
    !data.Name.helpermsg &&
    !!data.DOB.value &&
    !data.DOB.helpermsg &&
    !!data.Portfolio.value &&
    !data.Portfolio.helpermsg &&
    !!data.Skills &&
    !!data.Hobbies &&
    !!data.Gender
  );
};

export const Validator = (e) => {
  if (["Name"].includes(e.target.name)) {
    let status = /[a-zA-Z]+/g.test(e.target.value);
    console.log(status);
    if (!status) {
      return { helpermsg: "a-z or A-Z can only be used" };
    }
  } else if (["Portfolio"].includes(e.target.name)) {
    let status = /(https?:\/\/)?([\w])+\.{1}([a-zA-Z]{2,63})([\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/g.test(
      e.target.value
    );
    if (!status) {
      return { helpermsg: "invalid URL Format" };
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
