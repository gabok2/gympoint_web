import React from 'react';

import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({ children, ...rest }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Container {...rest}>
      <Text>{children}</Text>
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
