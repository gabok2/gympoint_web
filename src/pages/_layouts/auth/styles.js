import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background-color: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: #fff;
  height: 50%;
  width: 100%;
  max-width: 360px;
  border-radius: 4px;

  form {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    img {
      margin-bottom: 50px;
    }

    h3 {
      margin-bottom: 10px;
    }

    input {
      border: 1px solid #eee;
      border-radius: 4px;
      height: 44px;
      padding: 15px;
      color: #111;

      margin: 0 0 10px;
      &::placeholder {
        color: #999;
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: normal;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
        background: ${darken(0.03, '#ee4d52')};
      }
    }
    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }
`;
