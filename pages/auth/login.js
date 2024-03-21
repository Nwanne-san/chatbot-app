// pages/login.js
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup'

const validationRules = yup.object().shape({
    
})

export default function Login() {
    const {touched,values,errors} = useFormik({
        initialValues:{password:''}
    })


  return (
    <div>
      <h1>Login or Sign Up</h1>
      <form >
        <input type="text" placeholder="Username" />
        <input 
        type="password" 
        value={values.password}
        placeholder="Password"
         />
        {errors.password && touched.password ? <span className='text-red-600'>{errors.password}</span> : null}
        <button type="submit">Login</button>
      </form>
      <p>New user? <Link href="/signup"><a>Sign up here</a></Link></p>
    </div>
  );
}
