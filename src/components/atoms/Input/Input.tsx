import { ComponentProps, FunctionComponent } from 'react';

export interface InputProps extends ComponentProps<'input'> {}

const Input: FunctionComponent<InputProps> = (props) => {
  return <input {...props} />;
};

export default Input;
