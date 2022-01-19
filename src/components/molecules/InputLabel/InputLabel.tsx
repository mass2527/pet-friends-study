import { ComponentProps, CSSProperties } from 'react';

import Styled from './styled';
import { forwardRef } from 'react';

interface InputLabelProps extends ComponentProps<'input'> {
  label: string;
  placeholder?: string;
  direction?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
}

const InputLabel = forwardRef<HTMLInputElement, InputLabelProps>(
  ({ label, placeholder, direction = 'column', alignItems = 'flex-start', ...rest }, ref) => {
    return (
      <Styled.Label direction={direction} alignItems={alignItems} placeholder={placeholder}>
        <div>{label}</div>
        <input ref={ref} {...rest} />
      </Styled.Label>
    );
  }
);

export default InputLabel;
