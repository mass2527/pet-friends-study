import { ComponentProps } from 'react';
import Input from 'components/atoms/Input';

import Styled from './styled';

interface InputLabelProps extends ComponentProps<'input'> {
  label: string;
  placeholder?: string;
}

const InputLabel = ({ label, placeholder, ...rest }: InputLabelProps) => {
  return (
    <div>
      <Styled.Label>
        <span>{label}</span>
        <Input {...rest} />
        <Styled.Placeholder>{placeholder}</Styled.Placeholder>
      </Styled.Label>
    </div>
  );
};

export default InputLabel;
