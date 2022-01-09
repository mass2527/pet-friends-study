import { ReactElement } from 'react';
import Styled from './styled';

interface BasicTemplateProps {
  header?: ReactElement;
  aside?: ReactElement;
  main: ReactElement;
  footer?: ReactElement;
}

const BasicTemplate = ({ header, aside, main, footer }: BasicTemplateProps) => {
  return (
    <Styled.Wrapper>
      {header && <Styled.Header>{header}</Styled.Header>}
      <Styled.InnerWrapper>
        {aside && <Styled.Aside>{aside}</Styled.Aside>}
        {main && <Styled.Main>{main}</Styled.Main>}
      </Styled.InnerWrapper>
      {footer && <Styled.Footer>{footer}</Styled.Footer>}
    </Styled.Wrapper>
  );
};

export default BasicTemplate;
