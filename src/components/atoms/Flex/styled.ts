import styled from '@emotion/styled';
import { FlexProps } from './Flex';

const Wrapper = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ spacing }) => spacing && `${spacing * 5}px`};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export default { Wrapper };
