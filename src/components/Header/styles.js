import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  height: 64px;

  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 15px;
      padding: 5px 10px;
      border-right: 1px solid #eee;
    }
    a {
      padding: 10px;
      font-weight: bold;
      color: #999;
    }
  }
`;

export const Profile = styled.div`
  display: flex;

  align-items: center;

  div {
    margin-right: 20px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    button {
      border: 0;
      margin-top: 2px;
      text-align: right;
      color: #ee4d64;
    }
  }
`;
