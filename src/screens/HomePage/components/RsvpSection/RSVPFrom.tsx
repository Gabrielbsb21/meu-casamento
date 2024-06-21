import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormValues = {
  name: string;
  email: string;
  attend: string;
  guestName?: string;
  meal: string;
  message?: string;
};

const RSVPFrom: React.FC = () => {
  const [bringGuest, setBringGuest] = useState(false);
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
      id="form-title"
    >
      <div className="flex flex-col gap-8">
        <div className="input-group">
          <div className="relative z-0 w-full group">
            <input
              type="text"
              {...register('name', { required: 'Nome é obrigatório' })}
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nome
            </label>
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>
        </div>
        <div className="input-group">
          <label className="flex items-center text-lg">
            <input
              type="checkbox"
              onChange={() => setBringGuest(!bringGuest)}
              className="mr-2"
            />
            Levará um acompanhante?
          </label>
        </div>
        {bringGuest && (
          <div className="input-group">
            <div className="relative z-0 w-full group">
              <input
                type="text"
                {...register('guestName')}
                id="floating_guestName"
                className="block py-2.5 px-0 w-full text-lg text-black border-0 border-b-2 border-black focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_guestName"
                className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nome do Acompanhante
              </label>
            </div>
          </div>
        )}
        <div className="input-group">
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              {...register('message')}
              id="floating_message"
              className="block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-black focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_message"
              className="peer-focus:font-medium absolute text-lg text-black duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mensagem Especial
            </label>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          type="submit"
          className="bg-[#657150] text-white inline-block font-medium py-3 px-10 border-0 uppercase relative text-lg transition-all duration-300 hover:bg-[#50593f]"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default RSVPFrom;
