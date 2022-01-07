import { ComponentProps } from 'react';

export interface InputProps extends ComponentProps<'input'> {}

const Input = (props: InputProps) => {
  return <input {...props} />;
};

export default Input;
