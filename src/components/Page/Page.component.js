import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GlobalStyle } from 'components/styles/global';

const StyledPage = styled.div`
  background: ${props => props.theme.white};
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  margin: 0 auto;
  padding: 0;
`;

const PageComponent = ({ children }) => (
  <StyledPage>
    <GlobalStyle />
    <Inner>{children}</Inner>
  </StyledPage>
);

PageComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageComponent;
