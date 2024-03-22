// pages/login.js
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { authentication } from '@/settings/firebase.setting';
import { useRouter } from 'next/router';
import { useSession,signIn } from 'next-auth/react';

const validationRules = yup.object().shape({
    
})

export default function Login() {
    const {data:session} = useSession();

    const {touched,values,errors} = useFormik({
        initialValues:{password:''}
    })

    const router = useRouter()

    if (session) {
      router.push('/chat')
    }

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
      <p>New user? <Link href="/signup">Sign up here</Link></p>
      <button onClick={() => signIn('google')} >Google</button>
    </div>
  );
}
