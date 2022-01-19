import { CSSProperties } from 'react';

import Styled from './styled';

export interface FlexProps {
  children: (JSX.Element | null | boolean)[];
  spacing?: number;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  direction?: CSSProperties['flexDirection'];
}

const Flex = ({
  children,
  spacing,
  justifyContent,
  alignItems = 'center',
  direction = 'row',
}: FlexProps) => {
  return (
    <Styled.Wrapper
      spacing={spacing}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Styled.Wrapper>
  );
};

export default Flex;
