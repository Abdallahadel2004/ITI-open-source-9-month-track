import { useState } from 'react'
import { useHistory } from "react-router-dom";
import FormInput from '../../companents/FormInput';
function Register(props) {
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleform = (e) => {
    if (e.target.name === "firstname") {
      setFirstname(e.target.value);
      setErrors({
        ...errors,
        errFirstname: e.target.value.length == 0 ? "Please Enter Your First Name" : e.target.value.length < 3 && "Please Enter a Valid First Name"
      })
    }
    if (e.target.name === "lastname") {
      setLastname(e.target.value);
      setErrors({
        ...errors,
        errLastname: e.target.value.length == 0 ? "Please Enter Your Last Name" : e.target.value.length < 3 && "Please Enter a Valid Last Name"
      })
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
      setErrors({
        ...errors,
        errEmail: e.target.value.length == 0 ? "Please Enter Your Email" : e.target.value.length < 3 && "Please Enter a Valid Email" || !e.target.value.includes("@") ? "Please Enter a Valid Email" : false || !e.target.value.includes(".") ? "Please Enter a Valid Email" : false
      })
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
      let errPassword = e.target.value.length == 0 ? "Please Enter Your Password" : e.target.value.length < 3 && "Please Enter a Valid Password";
      let errConfirmPassword = confirmpassword.length == 0 ? errors.errConfirmPassword : e.target.value !== confirmpassword ? "Password and Confirm Password are not the same" : false;
      setErrors({
        ...errors,
        errPassword,
        errConfirmPassword
      })
    }
    if (e.target.name === "confirmpassword") {
      setConfirmpassword(e.target.value);
      let errConfirmPassword = e.target.value.length == 0 ? "Please Enter Your Confirm Password" : e.target.value.length < 3 ? "Please Enter a Valid Confirm Password" : e.target.value !== password ? "Password and Confirm Password are not the same" : false;
      setErrors({
        ...errors,
        errConfirmPassword
      })
    }
  }
  const handelsubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      errFirstname: !firstname ? "Please Enter Your First Name" : firstname.length < 3 && "Please Enter a Valid First Name",
      errLastname: !lastname ? "Please Enter Your Last Name" : lastname.length < 3 && "Please Enter a Valid Last Name",
      errEmail: !email ? "Please Enter Your Email" : (!email.includes("@") || !email.includes(".")) && "Please Enter a Valid Email",
      errPassword: !password ? "Please Enter Your Password" : password.length < 3 && "Please Enter a Valid Password",
      errConfirmPassword: !confirmpassword ? "Please Enter Your Confirm Password" : confirmpassword !== password && "Password and Confirm Password are not the same",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(err => err)) return;
    history.push("/login");
  }

  return (
    <>
      <form className="m-5 p-4 border rounded shadow-sm bg-light" onSubmit={(e) => handelsubmit(e)}>
        <div className="row mb-3">
          <FormInput label="First name" type="text" name="firstname"
            value={firstname} onChange={handleform} error={errors.errFirstname} />
          <FormInput label="Last name" type="text" name="lastname"
            value={lastname} onChange={handleform} error={errors.errLastname} />
        </div>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Password</label>
            <div className="input-group">
              <input type={showPassword ? "text" : "password"} className="form-control" name="password"
                onChange={(e) => handleform(e)} value={password} />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-danger">{errors.errPassword}</p>
          </div>
          <div className="col">
            <label className="form-label">Confirm Password</label>
            <div className="input-group">
              <input type={showConfirmPassword ? "text" : "password"} className="form-control" name="confirmpassword"
                onChange={(e) => handleform(e)} value={confirmpassword} />
              <button type="button" className="btn btn-outline-secondary" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
            <p className="text-danger">{errors.errConfirmPassword}</p>
          </div>
        </div>
        <div className="row mb-3">
          <FormInput label="Email" type="email" name="email"
            value={email} onChange={handleform} error={errors.errEmail} />
        </div>
        <button type="submit" className="btn btn-primary"
          disabled={(errors.errFirstname || errors.errLastname || errors.errPassword || errors.errConfirmPassword || errors.errEmail)}
        >Sign in</button>
      </form>
    </>
  );
}
export default Register;