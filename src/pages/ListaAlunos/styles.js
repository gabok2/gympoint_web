import styled from 'styled-components';

import Button from '../../components/Button';

export const Container = styled.div`
  flex-direction: column;
  margin-left: 7%;
  display: flex;

  table {
    width: 98%;

    td {
      text-align: left;

      padding: 18px;

      width: 40%;

      border-bottom: 1px solid #eee;
    }
    th {
      text-align: left;
      padding: 20px;
    }
  }
`;

export const Tabela = styled.div`
  margin-top: 20px;
  background-color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-right: 7%;
`;

export const Row = styled.div`
  display: flex;
  margin-top: 2%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const SubmitButton = styled(Button)`
  width: 142px;
  height: 36px;
  margin-left: 55%;
`;
export const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 6%;

  svg {
    position: relative;
    right: 87%;
  }
  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 170px;
    height: 30px;
    color: #999;
    padding-left: 28px;
  }
`;
