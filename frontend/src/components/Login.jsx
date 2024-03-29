import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'

// Step5 : Validation Schema
const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup.string().required('required').min(8)

})

const Login = () => {

  // Step1 : Formik Initialization
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    // Step4 : what happens when form is submitted
    onSubmit : (values , {resetForm}) => {
      console.log(values)
      resetForm()
    },
    // Step6 : Validation Schema
    validationSchema: LoginSchema
  })
  return (
    <div style={{
      backgroundImage: `url(${'https://cdn.dribbble.com/userupload/13761608/file/original-798dd7acef125aea9d002b09ec3dea18.png?resize=1200x900'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      }}>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card w-25">
            <h2 className="mt-3 text-center txt">Top-5-Eduguru</h2>
            <img
              className="logo d-flex mx-auto"
              src="https://media.istockphoto.com/id/877235850/vector/book-icon.jpg?s=612x612&w=0&k=20&c=FSTH3SrcKKTSH09LLkucwABRWOKHRYPmEjxqBjEDjxc="
              alt=""
            />
            {/* Step2 : Handling when submit */}
            <form onSubmit={loginForm.handleSubmit}>
              {/* Step3 : Fields Handling */}
              <input
                className="mt-3 w-75 d-flex mx-auto p-2 rounded"
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
              />
              <span style={{color:'red', fontsize: '50px', marginLeft: '10px'}}>{loginForm.errors.email}</span>
              <input
                className="mt-3 w-75 d-flex mx-auto p-1 rounded"
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
              />
              <span style={{color:'red', fontsize: '10'}}>{loginForm.touched.password && loginForm.errors.password}</span>
              <button type='submit' className="mt-3 btn btn-primary d-flex mx-auto">Login</button>
            </form>
          </div>
        </div>

    </div>
  )
}

export default Login