import styled from 'styled-components';
import Button from '../../../components/Button';

export const Container = styled.div`
  display: flex;

  align-items: center;
  margin-top: 10%;
  flex-direction: column;
`;
export const Content = styled.div`
  background-color: #fff;
  display: flex;
  height: 218px;
  width: 900px;
  padding: 10px;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
`;

export const SubmitButton = styled(Button)`
  width: 142px;
  height: 36px;
  margin-left: 380px;
  background-color: #999;
  svg {
    position: relative;
    right: 15px;
  }
`;

export const RegisterButton = styled(Button)`
  margin-left: 30px;
  width: 142px;
  height: 36px;
  svg {
    position: relative;
    right: 10px;
  }
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  label {
    margin-bottom: 10px;
    font-weight: bold;
  }
  input {
    text-align: center;
    width: 253px;
    height: 45px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  label {
    margin-bottom: 10px;
    font-weight: bold;
  }
  input {
    background-color: #eee;
    text-align: center;
    width: 253px;
    height: 45px;
    border: 1px solid #eee;
    border-radius: 4px;
  }
`;
export const FormTitulo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  label {
    margin-bottom: 10px;
    font-weight: bold;
  }
  input {
    text-align: center;
    height: 45px;
    border: 1px solid #eee;
    border-radius: 4px;
    width: 800px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
