import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  attend: string;
  guest: string;
  meal: string;
  reason: string;
};

const RSVPFrom: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contact-validation-active">
      <div className="flex">

      </div>
      <div className="submit-area">
        <button type="submit" className="theme-btn">
          Enviar
        </button>
      </div>
    </form>
  );
};

export default RSVPFrom;
