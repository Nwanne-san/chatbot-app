import { useFormik } from 'formik';
import * as yup from 'yup';
import { authentication } from '@/settings/firebase.setting';
import { useRouter } from 'next/router';
import { useSession,signIn } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const validationRules = yup.object().shape({
    username:yup.string()
    .required()
    .min(4,'must have 4 characters'),
    email:yup.string()
    .required('this field is compulsory'),
    password:yup.string().
    required().min(6,'must be up to 6 characters')
})

export default function Login() {
    const {data:session} = useSession();
    
    const router = useRouter()
    if (session) {
      router.push('/chat')
    }

    const handleGoogleEmailPasswordCreateAccount = async (userName,userEmail,userPassword) => {
      createUserWithEmailAndPassword(authentication,userName,userEmail,userPassword)
      .then((success) => {
        alert(`${success.providerId} created successfully`);
        console.log(success)
      })
      .catch((error) => {
        console.log(error)
      })
    }

    const {handleBlur, handleChange, handleSubmit, errors, values, touched} = useFormik({
      initialValues:{username:'',email:'', password:''},
      onSubmit: values => {
        handleGoogleEmailPasswordCreateAccount(values.username,values.email,values.password)
      },
      validationSchema: validationRules
    })

  return (
    <div className='w-full h-screen flex gap-5 justify-center  items-center'>
      <div className='w-[360px] py-3 px-4 flex flex-col gap-3'>
        <h1 className='font-sans font-extrabold flex justify-center text-3xl'>Sign Up</h1> 
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <input 
          id='username'
          type="text" 
          placeholder="Username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className='px-3 py-2 border-none rounded-lg focus:border-none ' 
          />
          <input 
          id='email'
          type="email" 
          value={values.email}
          placeholder="Email address"
          onChange={handleChange}
          onBlur={handleBlur}
          className='px-3 py-2 border-none rounded-lg  '
          />{errors.email && touched.email ? <span className='text-red-500'>{errors.email}</span> : null}
          <input
          id='password'
          type="password"
          value={values.password}
          placeholder="Password"
          onChange={handleChange}
          className='px-3 py-2 border-none rounded-lg focus:border-none '/>
          {errors.password && touched.password ?<span className='text-red-600'>{errors.password}</span> : null}
          <button type="submit">Sign Up</button>
        </form>
        
        <button onClick={() => signIn('google')} >Google</button>
      </div>
      <div className='w-[360px] py-3 px-4 flex flex-col gap-3'>
        <h1 className='font-sans font-extrabold flex justify-center text-3xl'>Login</h1> 
        <form className='flex flex-col gap-3'>
          <input 
          id='userName'
          type="text" 
          placeholder="Username"
          onChange={handleChange} 
          className='px-3 py-2 border-none rounded-lg ' 
          />
          <input
          id='pass'
          type="password"
          value={values.pass}
          placeholder="Password"
          className='px-3 py-2 border-none rounded-lg '
           />
          {errors.pass && touched.pass ?<span className='text-red-600'>{errors.password}</span> : null}
          <button type="submit">Login</button>
        </form>
        
        <button onClick={() => signIn('google')} >Google</button>
      </div>
    </div>
  );
}
