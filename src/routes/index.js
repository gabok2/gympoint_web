import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import ListaAlunos from '../pages/ListaAlunos';
import Planos from '../pages/Planos';
import Matriculas from '../pages/Matrículas';
import Pedidos from '../pages/Pedidos';
import Apagar from '../pages/Apagar';
import CadastroPlanos from '../pages/Planos/CadastroPlanos';
import EditarPlanos from '../pages/Planos/EditarPlanos';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/student" component={ListaAlunos} isPrivate />
      <Route path="/plano" component={Planos} isPrivate />
      <Route path="/matricula" component={Matriculas} isPrivate />
      <Route path="/pedido" component={Pedidos} isPrivate />
      <Route path="/apagar" component={Apagar} isPrivate />
      <Route path="/cadastrar-planos" component={CadastroPlanos} isPrivate />
      <Route path="/editar-plano" component={EditarPlanos} isPrivate />
    </Switch>
  );
}
