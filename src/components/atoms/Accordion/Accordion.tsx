import { ReactChild } from 'react';
import Styled from './styled';

interface AccordionProps {
  title: string;
  children: ReactChild;
  open?: boolean;
}

const Accordion = ({ title, children, open = true }: AccordionProps) => {
  return (
    <Styled.Wrapper open={open}>
      <summary>{title}</summary>
      {children}
    </Styled.Wrapper>
  );
};

export default Accordion;
