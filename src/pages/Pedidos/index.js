/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container, Tabela, Row } from './styles';

export default function ListaAlunos() {
  const [help, setHelp] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('help-orders');

      setHelp(response.data);
    }
    load();
  }, [help]);

  return (
    <Container>
      <Row>
        <h2>Pedidos de auxílio </h2>
      </Row>

      <Tabela>
        <table>
          <tr>
            <th>Aluno</th>
          </tr>
          {help.map(helps => (
            <tr key={helps.id}>
              <td>{helps.student.name}</td>

              <td>
                <Link style={{ color: '#006db5' }} to="editar">
                  responder
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </Tabela>
    </Container>
  );
}
