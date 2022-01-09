import { ComponentProps, CSSProperties } from 'react';
import Input from 'components/atoms/Input';

import Styled from './styled';
import Flex from 'components/atoms/Flex';

interface InputLabelProps extends ComponentProps<'input'> {
  label: string;
  placeholder?: string;
  direction?: CSSProperties['flexDirection'];
  alignItems?: CSSProperties['alignItems'];
}

const InputLabel = ({
  label,
  placeholder,
  className,
  direction = 'column',
  alignItems = 'flex-start',
  ...rest
}: InputLabelProps) => {
  return (
    <Styled.Label
      direction={direction}
      alignItems={alignItems}
      className={className}
      placeholder={placeholder}
    >
      <div>{label}</div>
      <Input {...rest} />
    </Styled.Label>
  );
};

export default InputLabel;
