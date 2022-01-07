import { ComponentProps, FunctionComponent } from 'react';

interface ButtonProps extends ComponentProps<'button'> {}

const Button: FunctionComponent<ButtonProps> = ({ children, type = 'button', ...rest }) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

export default Button;
