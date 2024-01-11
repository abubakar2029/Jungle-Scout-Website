import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormData = {
  cardNumber: string;
  expires: string;
  cvc: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  zip: string;
  country: string;
  state: string;
};

const PaymentForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Credit Card Information */}
      <label>
        Card Number
        <input type="text" {...register('cardNumber')} />
      </label>
      <label>
        Expires
        <input type="text" {...register('expires')} />
      </label>
      <label>
        CVC
        <input type="text" {...register('cvc')} />
      </label>

      {/* Billing Address */}
      <label>
        First Name
        <input type="text" {...register('firstName')} />
      </label>
      <label>
        Last Name
        <input type="text" {...register('lastName')} />
      </label>
      <label>
        Address
        <input type="text" {...register('address')} />
      </label>
      <label>
        City
        <input type="text" {...register('city')} />
      </label>
      <label>
        Zip
        <input type="text" {...register('zip')} />
      </label>
      <label>
        Country
        <input type="text" {...register('country')} />
      </label>
      <label>
        State
        <input type="text" {...register('state')} />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PaymentForm;
