import { forwardRef } from 'react';
import { ComponentProps } from 'react';

const Input = forwardRef<HTMLInputElement, ComponentProps<'input'>>((props, ref) => (
  <input ref={ref} {...props} />
));

export default Input;
