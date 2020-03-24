import React, { useState, useMemo } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@unform/web';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { formatPrice } from '../../../util/format';
import {
  Container,
  Content,
  Header,
  RegisterButton,
  FormItem,
  Row,
  FormTitulo,
  Price,
  SubmitButton,
} from './styles';
import history from '../../../services/history';
import api from '../../../services/api';
import Input from '../../../components/Input';

export default function PlanRegister() {
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState(0);

  const totalPrice = useMemo(() => {
    return formatPrice(price * duration);
  }, [duration, price]);

  // eslint-disable-next-line no-shadow
  async function onHandleSubmit({ title, duration, price }) {
    try {
      await api.post('plans', {
        title,
        duration,
        price,
      });
      toast.success('Registro realizado com sucesso');
      history.push('/plano');
    } catch (e) {
      toast.error('Falha no registro');
    }
  }

  return (
    <Container>
      <Header>
        <h2>Gerenciando Planos</h2>

        <SubmitButton type="button" onClick={() => history.goBack()}>
          <MdKeyboardArrowLeft size={20} color="#FFF" />
          Voltar
        </SubmitButton>
        <RegisterButton type="submit" form="register">
          <MdCheck size={20} color="#FFF" />
          Cadastrar
        </RegisterButton>
      </Header>

      <Content>
        <Form onSubmit={onHandleSubmit} id="register">
          <FormTitulo>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label>Título do Plano</label>
            <Input name="title" />
          </FormTitulo>
          <Row>
            <FormItem>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Duração (em meses)</label>
              <Input
                name="duration"
                onChange={e => setDuration(e.target.value)}
              />
            </FormItem>
            <FormItem>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Preço mensal</label>
              <Input name="price" onChange={e => setPrice(e.target.value)} />
            </FormItem>
            <Price>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>Preço Total</label>
              <Input name="total_price" value={totalPrice} disabled />
            </Price>
          </Row>
        </Form>
      </Content>
    </Container>
  );
}
