import Flex from 'components/atoms/Flex';
import { ChangeEvent } from 'react';
import Styled from './styled';

export interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  options: Option[];
  name: string;
  checked: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({ label, options, name, checked, onChange }: RadioGroupProps) => {
  return (
    <Flex direction='column' spacing={1} alignItems='flex-start'>
      <Styled.Label>{label}</Styled.Label>
      <Flex direction='column' alignItems='flex-start'>
        {options.map(({ label, value }) => (
          <Styled.InputLabel
            key={value}
            type='radio'
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            checked={checked === value}
            direction='row-reverse'
            alignItems='center'
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default RadioGroup;
