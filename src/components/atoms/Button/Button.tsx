import { ComponentProps } from 'react';

const Button = ({ children, type = 'button', ...rest }: ComponentProps<'button'>) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
