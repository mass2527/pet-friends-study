import styled from '@emotion/styled';

const Wrapper = styled.div``;

const Header = styled.header`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 60px;
  padding: 8.5px 17px;
  border-bottom: 1px solid lightgrey;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const Aside = styled.aside`
  min-width: 300px;
  padding: 8.5px;
`;

const Main = styled.main`
  flex: 1;
  min-height: 100vh;
`;

const Footer = styled.footer`
  border-top: 1px solid lightgrey;
  padding: 8.5px 17px;
`;

export default { Wrapper, Header, InnerWrapper, Aside, Main, Footer };
