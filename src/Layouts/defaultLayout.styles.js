import styled from 'styled-components';

export const Style = styled.div`
  width: calc(100% - 200px);
  margin-left: calc(200px);
  padding-top: 100px;
  transition: all 0.2s;
  &.narrow {
    width: calc(100% - 60px);
    margin-left: 60px;
  }
`;
