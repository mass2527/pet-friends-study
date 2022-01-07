import styled from '@emotion/styled';

const Label = styled.label`
  display: flex;
  flex-direction: column;

  span:first-of-type {
    font-weight: 600;
  }
`;

const Placeholder = styled.span`
  color: #888;
`;

export default { Label, Placeholder };
