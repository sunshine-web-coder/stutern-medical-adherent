import style from './auth.module.scss';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import logoImg from '../../assets/logo.png';
import ellipseImg from '../../assets/Ellipse-468.png';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {toast} from 'react-toastify';
import {loginUser} from '../../libs/ApiService';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../redux/authActions';

export default function LoginForm () {
  const dispatch = useDispatch();
  const {register, handleSubmit, reset, formState: {errors}} = useForm ();

  const [isLoading, setIsLoading] = useState (false);

  const [isVisible, setIsVisible] = useState (false);

  const toggleVisibility = () => setIsVisible (!isVisible);

  const navigate = useNavigate ();

  const onSubmit = async data => {
    try {
      setIsLoading (true);

      const {success, token, user, error} = await loginUser (data);

      if (success) {
        dispatch(setToken(token));
        dispatch(setUser(user));

        console.log (token);
        console.log (user);
        // Redirect to the dashboard or any other page after successful login
        toast.success ('Health Provider logged in successfully');
        navigate ('/dashboard');
      } else {
        console.error ('Login Error:', error);
        toast.error (error);
      }
    } finally {
      setIsLoading (false);
    }
  };

  return (
    <div className="flex">
      <div className="w-2/5" />
      <div
        className={`left fixed flex h-screen w-2/5 items-center justify-center ${style.left}`}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={logoImg} width={100} height="auto" alt="logo" />
          <p
            className={`text-2xl font-normal leading-normal text-white font-['Mochiy_Pop_One']`}
          >
            MedikTrakka
          </p>
        </div>
      </div>
      <div className="h-full w-3/5 py-24">
        <img
          src={ellipseImg}
          width={100}
          height="auto"
          className="absolute right-0 top-0"
          alt="Ellipse image"
        />
        <div className="mx-auto max-w-[360px]">
          <h2 className="text-[32px] font-semibold text-zinc-800">
            Log in to your account
          </h2>
          <p className="text-base font-normal text-zinc-600">
            Welcome back! Select method to Log in:
          </p>
          {/* <div className="mt-8 inline-flex h-11 w-[360px] items-center justify-center gap-3">
            <button
              type="button"
              className="flex h-11 shrink grow basis-0 items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white p-2.5 shadow"
            >
              <Image
                src={googleLogo}
                width={23}
                height={23}
                alt="google logo"
              />
            </button>
            <button
              type="button"
              className="flex h-11 shrink grow basis-0 items-center justify-center gap-3 rounded-lg bg-blue-600 p-2.5 shadow"
            >
              <Image src={fbLogo} width={23} height={23} alt="fb logo" />
            </button>
          </div>
          <div className="mt-8 flex h-3.5 w-[360px] items-center justify-start gap-2">
            <div className="h-[0px] w-[119px] border border-gray-300"></div>
            <div className="font-['Open Sans'] text-[10px] font-normal text-zinc-800">
              Or continue with Email
            </div>
            <div className="h-[0px] w-[119px] border border-gray-300"></div>
          </div> */}
          <form
            className="mt-8 flex flex-col gap-8"
            onSubmit={handleSubmit (onSubmit)}
          >
            <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
              <label
                htmlFor="Email"
                className="font-['Open Sans'] text-sm font-semibold leading-tight text-slate-800"
              >
                Email
              </label>
              <input
                {...register ('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Invalid email address',
                  },
                })}
                type="email"
                id="email"
                name="email"
                placeholder="victoria@almondhospital.com"
                className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
              />
              {errors.email &&
                <p className="formError" role="alert">
                  {errors.email.message}
                </p>}
            </div>
            <div className="relative flex flex-col items-start justify-start gap-1.5 self-stretch">
              <label
                htmlFor="Password"
                className="font-['Open Sans'] text-sm font-semibold leading-tight text-slate-800"
              >
                Password
              </label>
              <input
                {...register ('password', {
                  required: 'Password is required',
                })}
                type={isVisible ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="**********"
                className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
              />
              {errors.password &&
                <p className="formError" role="alert">
                  {errors.password.message}
                </p>}

              <button
                type="button"
                className="absolute right-[13px] top-[32px]"
                onClick={toggleVisibility}
              >
                {isVisible
                  ? <FaEye className="pointer-events-none text-2xl text-gray-500" />
                  : <FaEyeSlash className="pointer-events-none text-2xl text-gray-500" />}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="remember"
                    className="text-sm font-semibold leading-tight text-slate-800"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                to="#"
                className="font-['Open Sans'] text-sm font-semibold leading-tight text-blue-700 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {isLoading
              ? <button
                  disabled
                  type="button"
                  className="h-[49px] w-[350px] rounded-lg bg-blue-700 px-12 py-3 text-base font-semibold leading-normal tracking-tight text-white"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="me-3 inline h-4 w-4 animate-spin text-white"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="#E5E7EB"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentColor"
                    />
                  </svg>
                  Loading...
                </button>
              : <button
                  type="submit"
                  className="flex h-[49px] w-[360px] items-center justify-center gap-2 rounded-lg bg-blue-700 px-12 py-3 text-base font-semibold leading-normal tracking-tight text-white"
                >
                  Login
                </button>}
            <div className="flex items-center justify-center gap-1">
              <p className="font-['Open Sans'] text-sm font-semibold text-zinc-800">
                Don’t have an account?
              </p>
              <Link
                to="/"
                className="font-['Open Sans'] text-sm font-semibold text-blue-700"
              >
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
