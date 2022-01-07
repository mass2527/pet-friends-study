import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

const Button = ({ children, type = 'button', ...rest }: ButtonProps) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
