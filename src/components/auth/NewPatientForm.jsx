import style from './auth.module.scss';
import logoImg from '../../assets/logo.png';
import ellipseImg from '../../assets/Ellipse2.png';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {Select} from 'antd';
import {useNavigate} from 'react-router-dom';

export default function NewPatientForm () {
  const {register, handleSubmit, reset, formState: {errors}} = useForm ();

  const [isLoading, setIsLoading] = useState (false);

  const navigate = useNavigate ();

  const handleChange = value => {
    console.log (`selected ${value}`);
  };

  const onSubmit = async data => {
    setIsLoading (true);
    setIsLoading (false);
    console.log (data);
  };

  return (
    <div className="flex h-[1024px]">
      <div className="w-2/5" />
      <div
        className={`left fixed flex h-screen w-[400px] items-center justify-center ${style.left}`}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <img src={logoImg} width={100} height="auto" alt="logo" />
          <p className={`text-2xl font-normal leading-normal text-white`}>
            MedikTrakka
          </p>
        </div>
      </div>
      <div className="h-full w-full border pt-10">
        <div className="flex h-11 items-center justify-between px-5">
          <div className="flex items-center gap-3">
            <div className="h-[42px] w-[17px]  rounded bg-blue-700" />
            <h3 className="text-xl font-semibold leading-[31.04px] text-black">
              New Patient - Dr Obi
            </h3>
          </div>
        </div>
        <img
          src={ellipseImg}
          width={100}
          height="auto"
          className="absolute right-0 top-0"
          alt="Ellipse image"
        />

        <div className="mt-[82px]">
          <form
            className="mt-8 flex flex-col gap-8"
            onSubmit={handleSubmit (onSubmit)}
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-[27px] px-12">
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="fullName"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Full Name
                </label>
                <input
                  {...register ('fullName', {
                    required: 'Full name is required',
                  })}
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="E.g Victoria Okwuokenye"
                  className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.fullName &&
                  <p className="formError" role="alert">
                    {errors.fullName.message}
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
                  })}
                  type="text"
                  id="age"
                  name="age"
                  placeholder="age"
                  className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.age &&
                  <p className="formError" role="alert">
                    {errors.age.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Sex"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Sex
                </label>
                <Select
                  defaultValue="Male"
                  onChange={handleChange}
                  className="h-10 w-[360px] rounded-lg shadow"
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
                {/* {errors.email && (
                  <p className="formError" role="alert">
                    {errors.email.message}
                  </p>
                )} */}
              </div>
              <div className="relative flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Medical Condition/Illness"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Medical Condition/Illness
                </label>
                <input
                  {...register ('medicalConditionIllness', {
                    required: 'Medical Condition/Illness is required',
                  })}
                  type="text"
                  id="medicalConditionIllness"
                  name="medicalConditionIllness"
                  placeholder="E.g Depression"
                  className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.medicalConditionIllness &&
                  <p className="formError" role="alert">
                    {errors.medicalConditionIllness.message}
                  </p>}
              </div>
            </div>

            <div className="px-5">
              <hr />
            </div>

            <div className="grid grid-cols-2 gap-x-5 gap-y-[27px] px-12">
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Name of Medication"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Name of Medication
                </label>
                <input
                  {...register ('nameOfMedication', {
                    required: 'Name of Medication is required',
                  })}
                  type="text"
                  id="nameOfMedication"
                  name="nameOfMedication"
                  placeholder="E.g Cipro"
                  className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.nameOfMedication &&
                  <p className="formError" role="alert">
                    {errors.nameOfMedication.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Dosage"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Dosage
                </label>
                <input
                  {...register ('dosage', {
                    required: 'Dosage is required',
                  })}
                  type="text"
                  id="dosage"
                  name="dosage"
                  placeholder="No of tablets"
                  className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.dosage &&
                  <p className="formError" role="alert">
                    {errors.dosage.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Frequency (Daily)"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Frequency (Daily)
                </label>
                <Select
                  defaultValue="Once"
                  onChange={handleChange}
                  className="h-10 w-[360px] rounded-lg shadow"
                  options={[
                    {
                      value: 'once',
                      label: 'Once',
                    },
                    {
                      value: 'twice',
                      label: 'Twice',
                    },
                  ]}
                />
                {/* {errors.frequencyDaily && (
                  <p className="formError" role="alert">
                    {errors.frequencyDaily.message}
                  </p>
                )} */}
              </div>
              <div className="relative flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Hourly Intervals"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Hourly Intervals
                </label>
                <input
                  {...register ('hourlyIntervals', {
                    required: 'Hourly Intervals is required',
                  })}
                  type="text"
                  id="hourlyIntervals"
                  name="hourlyIntervals"
                  placeholder="When should the patient be reminded?"
                  className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.hourlyIntervals &&
                  <p className="formError" role="alert">
                    {errors.hourlyIntervals.message}
                  </p>}
              </div>
              <div className="relative flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Duration"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Duration
                </label>
                <input
                  {...register ('duration', {
                    required: 'Duration is required',
                  })}
                  type="text"
                  id="duration"
                  name="duration"
                  placeholder="E.g Depression"
                  className="h-10 w-[360px] rounded-lg border border-gray-300 bg-white px-3.5 py-2.5 shadow"
                />
                {errors.duration &&
                  <p className="formError" role="alert">
                    {errors.duration.message}
                  </p>}
              </div>
              <div className="flex flex-col items-start justify-start gap-1.5 self-stretch">
                <label
                  htmlFor="Mode of Administration"
                  className="text-sm font-semibold leading-tight text-slate-800"
                >
                  Mode of Administration
                </label>
                <Select
                  defaultValue="Oral"
                  onChange={handleChange}
                  className="h-10 w-[360px] rounded-lg shadow"
                  options={[
                    {
                      value: 'Oral',
                      label: 'Oral',
                    },
                  ]}
                />
                {/* {errors.email && (
                  <p className="formError" role="alert">
                    {errors.email.message}
                  </p>
                )} */}
              </div>
            </div>

            <div className="flex items-center justify-center mt-[64px]">
              <button
                type="submit"
                className="flex h-[49px] w-[360px] items-center justify-center gap-2 rounded-lg bg-blue-700 px-12 py-3 text-base font-semibold leading-normal tracking-tight text-white"
              >
                Save Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
