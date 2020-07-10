import styled from 'styled-components';

const ImageContainer = styled.div`
  display: ${({ user }) => (user ? 'none' : 'inline-block')};
  order: ${props => (props.user ? '1' : '0')};
  padding: 6px;
  margin-right: 2rem;
`;

export default ImageContainer;
