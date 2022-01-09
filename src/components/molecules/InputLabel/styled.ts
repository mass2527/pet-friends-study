import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface LabelProps {
  direction: CSSProperties['flexDirection'];
  alignItems: CSSProperties['alignItems'];
  placeholder?: string;
}

const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ alignItems }) => alignItems};
  gap: 5px;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;

  > div {
    display: flex;
    flex-direction: column;

    &::after {
      content: ${({ placeholder }) => placeholder && `'${placeholder}'`};
      color: #888;
      font-size: 14px;
    }
  }
`;

export default { Label };
