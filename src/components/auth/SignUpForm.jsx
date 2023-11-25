import style from './auth.module.scss';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import logoImg from '../../assets/logo.png';
import ellipseImg from '../../assets/Ellipse-468.png';
import {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {Select} from 'antd';
import {toast} from 'react-toastify';
import {Link, useNavigate} from 'react-router-dom';

export default function SignUpForm () {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm ();

  const [isLoading, setIsLoading] = useState (false);

  const [isVisible, setIsVisible] = useState (false);

  const toggleVisibility = () => setIsVisible (!isVisible);

  const handleChange = value => {
    console.log (`selected ${value}`);
  };

  const navigate = useNavigate ();

  const onSubmit = async data => {
    try {
      setIsLoading (true);

      const response = await fetch (
        'https://medical-adherence.onrender.com/api/v1/auth/create-health-provider',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers as needed
          },
          body: JSON.stringify (data),
        }
      );

      const result = await response.json ();

      if (response.ok) {
        toast.success ('Health provider signed up successfully.');
        navigate ('/auth/login');
      } else {
        console.error ('Error:', result);
        toast.error ('Failed to sign up. Please try again later.');
      }
    } catch (error) {
      console.error ('Error:', error);
      toast.error ('An unexpected error occurred. Please try again later.');
    } finally {
      setIsLoading (false);
    }
  };
  return (
    <div>
      <div
        className={`left fixed flex h-screen w-[400px] items-center justify-center ${style.left}`}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={logoImg} width={100} height="auto" alt="logo" />
          <p className={`text-2xl font-normal leading-normal text-white font-['Mochiy_Pop_One']`}>
            MedikTrakka
          </p>
        </div>
      </div>
      <div className="h-full w-full py-24">
        <img
          src={ellipseImg}
          width={100}
          height="auto"
          className="absolute right-0 top-0"
          alt="Ellipse image"
        />
        <div className="w-full pl-[450px] pr-4">
          <h2 className="text-[32px] font-semibold text-zinc-800">
            Create your account
          </h2>
          <p className="text-base font-normal text-zinc-600">
            Welcome! Select method to Sign up:
          </p>
          <form
            className="mt-8 flex max-w-[600px] flex-col gap-8"
            onSubmit={handleSubmit (onSubmit)}
          >
            <div className="grid grid-cols-2 w-full gap-x-5 gap-y-[27px]">
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  First Name
                </label>
                <input
                  {...register ('firstName', {
                    required: 'First name is required',
                  })}
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter first name here"
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.firstName &&
                  <p className="formError" role="alert">
                    {errors.firstName.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="lastName"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Last Name
                </label>
                <input
                  {...register ('lastName', {
                    required: 'First name is required',
                  })}
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter last name here"
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.lastName &&
                  <p className="formError" role="alert">
                    {errors.lastName.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Email"
                  className="text-sm font-semibold leading-tight text-slate-800"
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
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.email &&
                  <p className="formError" role="alert">
                    {errors.email.message}
                  </p>}
              </div>

              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="hospital"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Hospital
                </label>
                <input
                  {...register ('hospital', {
                    required: 'Hospital is required',
                  })}
                  type="text"
                  id="hospital"
                  name="hospital"
                  placeholder="This is the name your patients will see"
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.hospital &&
                  <p className="formError" role="alert">
                    {errors.hospital.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Age"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Age
                </label>
                <input
                  {...register ('age', {
                    required: 'Age is required',
                    pattern: {
                      value: /^[0-9]*$/,
                      message: 'Invalid format',
                    },
                  })}
                  type="text"
                  id="age"
                  name="age"
                  placeholder="Age"
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.age &&
                  <p className="formError" role="alert">
                    {errors.age.message}
                  </p>}
              </div>
              <div className="relative w-full flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Password"
                  className="text-sm font-semibold leading-tight text-slate-800"
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
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
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
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="specialization"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Specialization
                </label>
                <input
                  {...register ('specialization', {
                    required: 'Specialization is required',
                  })}
                  type="text"
                  id="specialization"
                  name="specialization"
                  placeholder="Specialization"
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.specialization &&
                  <p className="formError" role="alert">
                    {errors.specialization.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Sex"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Sex
                </label>
                <Controller
                  control={control}
                  name="sex"
                  defaultValue="male"
                  rules={{required: 'Please select your sex'}}
                  render={({field}) => (
                    <Select
                      {...field}
                      onChange={handleChange}
                      className="h-10 w-full rounded-lg shadow"
                      options={[
                        {
                          value: 'male',
                          label: 'Male',
                        },
                        {
                          value: 'female',
                          label: 'Female',
                        },
                      ]}
                    />
                  )}
                />
                {errors.sex &&
                  <p className="formError" role="alert">
                    {errors.sex.message}
                  </p>}
                {errors.sex &&
                  <p className="formError" role="alert">
                    {errors.sex.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Phone Number
                </label>
                <input
                  {...register ('phoneNumber', {
                    required: 'Phone Number is required',
                  })}
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.phoneNumber &&
                  <p className="formError" role="alert">
                    {errors.phoneNumber.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Address"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Address
                </label>
                <input
                  {...register ('address', {
                    required: 'Address is required',
                  })}
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  className="h-10 w-full rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.address &&
                  <p className="formError" role="alert">
                    {errors.address.message}
                  </p>}
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 justify-start">
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
                    className="flex h-[49px] w-[350px] items-center justify-center gap-2 rounded-lg bg-blue-700 px-12 py-3 text-base font-semibold leading-normal tracking-tight text-white"
                  >
                    Create Account
                  </button>}
              <div className="flex items-center justify-center gap-1">
                <p className="text-sm font-semibold text-zinc-800">
                  Already have an account?
                </p>
                <Link
                  to="/auth/login"
                  className="text-sm font-semibold text-blue-700"
                >
                  Log in
                </Link>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
