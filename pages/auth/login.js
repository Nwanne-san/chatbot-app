import { useFormik} from 'formik';
import * as yup from 'yup';
import { signIn, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
import { authentication } from '@/settings/firebase.setting';

//validation rules
const validationRules = yup.object().shape({
    email:yup.string().email()
    .required('field is compulsory'),
    password:yup.string()
    .required()
    .min(8, 'must be up to 8 characters')
    .max(20, 'max of 20 characters')
    
})

export default function Signup() {
    const {data:session} = useSession(); //shows the info of the active account
    console.log(session) 

    const router = useRouter();

    if (session) { //meaning if the session is active
        router.push('/chat')
    }

    const handleGoogleEmailPasswordCreateAccount = async (userEmail,userPassword) => {
        createUserWithEmailAndPassword(authentication,userEmail,userPassword)
        .then((user) => {
            alert(`${user} created successfully`);
            console.log(user)
        })
        .catch((error) => console.log(error))
    };

    const {handleBlur,handleSubmit,handleChange,errors,touched,values} =  useFormik({
        initialValues:{username:'',email:'',password:''}, //the IDs are used here
        onSubmit: values => { //this block of code runs only if no errors occur
            handleGoogleEmailPasswordCreateAccount(values.email,values.password) 
        },
        validationSchema:validationRules //returns the yup function, and handles errors
    })

  return (
    <div className='w-full h-screen flex gap-5 justify-center  items-center'>
      <div className='flex justify-center py-3 px-6'>
        <div className='w-[360px] py-3 px-6 flex flex-col gap-3 bg-slate-600'>
          <h1 className='font-sans font-extrabold flex justify-center text-3xl'>Sign Up</h1>
          <form className='flex flex-col p-4 gap-3' onSubmit={handleSubmit}>
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
        <div className='flex justify-center place-items-center'>
          <div className='w-[360px] py-3 px-6 flex flex-col gap-3 bg-slate-600'>
            <h1 className='font-sans font-extrabold flex justify-center text-3xl'>Login</h1>
            <form className='flex flex-col p-4 gap-3'>
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
      </div>
    </div>
  );
}
