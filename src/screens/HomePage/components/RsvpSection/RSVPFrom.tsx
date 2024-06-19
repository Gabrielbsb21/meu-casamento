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
    formState: { errors }
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="contact-validation-active"
      id='form-title'
    >
      <div className="flex">
        <div className="input-group">
          <input
            type="text"
            placeholder="Nome"
            {...register('name', { required: true })}
          />
          {errors.name && <span>Nome é obrigatório</span>}
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            {...register('email', { required: true })}
          />
          {errors.email && <span>Email é obrigatório</span>}
        </div>
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
