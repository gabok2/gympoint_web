import React from 'react';

import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/header.svg';
import { signOut } from '../../store/modules/auth/actions';
import { Container, Content, Profile } from './styles';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.auth.profile);

  function sair() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <NavLink activeStyle={{ color: '#111' }} to="student">
            Alunos
          </NavLink>
          <NavLink activeStyle={{ color: '#111' }} to="plano">
            Planos
          </NavLink>
          <NavLink activeStyle={{ color: '#111' }} to="matricula">
            Matrículas
          </NavLink>
          <NavLink activeStyle={{ color: '#111' }} to="pedido">
            Pedidos de Auxílio
          </NavLink>
        </nav>

        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <button type="submit" onClick={sair} to="profile">
              sair do sistema
            </button>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}
