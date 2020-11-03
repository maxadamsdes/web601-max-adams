import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import "./RegistrationForm.scoped.css";

function Registration() {
//   const onSubmit = data => {
//     alert(JSON.stringify(data));
//   };
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
      console.log(data);
  }

  const sleep = ms => new Promise(res => setTimeout(res, ms));
  const validateEmail = async (value) => {
    await sleep(1000)
    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(value)) {
          return false;
        }
        else{
          return true;
        }
  }

  return (
    <form className="Registration darkBg" onSubmit={handleSubmit(onSubmit)}>
      <h1>Register</h1>
      <label>First Name:</label>
      <input name="firstName" ref={register ({ required: true, minLength: 2 })} />
      {errors.firstName && errors.firstName.type === "required" && <p>This is required</p> }
      {errors.firstName && errors.firstName.type === "minLength" && <p>This field requires a minimum length of 2</p> }

      <label>Last Name:</label>
      <input name="lastName" ref={register ({ required: true, minLength: 2 })} />
      {errors.lastName && errors.lastName.type === "required" && <p>This is required</p> }
      {errors.lastName && errors.lastName.type === "minLength" && <p>This field requires a minimum length of 2</p> }

      <label>User Type</label>
      <select name="user" ref={register ({ required: true })}>
        <option value="">Select...</option>
        <option value="parent">Parent</option>
        <option value="youth">Youth</option>
        <option value="leader">Leader</option>
      </select>
      {errors.user && errors.user.type === "required" && <p>This is required</p> }

      <label>Gender</label>
      <select name="gender" ref={register ({ required: true })}>
        <option value="">Select...</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      {errors.gender && errors.gender.type === "required" && <p>This is required</p> }

      <label>Email</label>
      <input name="email" ref={register ({ required: true, validate: validateEmail })}/>
      {errors.email && errors.email.type === "required" && <p>This is required</p> }
      {errors.email && errors.email.type === "validate" && <p>Please enter a valid email address</p>}

      <label>College (If applicable)</label>
      <textarea name="college" ref={register ({ minimumLength: 2 })}/>
      {errors.college && errors.college.type === "minLength" && <p>This field requires a minimum length of 2</p> }

      <label>Year (If applicable)</label>
      <select name="year" ref={register ({ required: false })}>
        <option value="">Select...</option>
        <option value="9">Year 9</option>
        <option value="10">Year 10</option>
        <option value="11">Year 11</option>
        <option value="12">Year 12</option>
        <option value="13">Year 13</option>
      </select>

      <input type="submit"/> 
    </form>
  );
}

export default Registration