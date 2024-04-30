import React from "react";
// TODO: import useFormik from formik library
import {useFormik} from "formik";

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:''
    },
    onSubmit: values => {
      alert("Login Successful");
      //console.log('form:', values);
    },
    validate: values => {
      let errors = {};
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(!values.emailField) {
        errors.email = "Field required";
      }
      else {
        if (!values.emailField.match(validRegex)) errors.email = "Username should be an email";  
      }
      if(!values.pswField) errors.password = "Field required";
      return errors;
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <div>Email</div>
        <input id="emailField" type="text" onChange={formik.handleChange} value={formik.values.emailField}/>
        {formik.errors.email ? <div id="emailError" style={{color: 'red'}}>{formik.errors.email}</div>:null}
        <div>Password</div>
        <input id="pswField" type="text" onChange={formik.handleChange} value={formik.values.pswField}/>
        {formik.errors.password ? <div id="pswError" style={{color: 'red'}}>{formik.errors.password}</div>:null}
        <br/>
        <button id="submitBtn" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
