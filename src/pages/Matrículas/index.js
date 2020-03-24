/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { MdAdd, MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import api from '../../services/api';
import { Container, Tabela, Row, SubmitButton } from './styles';

export default function ListaAlunos() {
  const [registrations, setRegistrations] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('registrations');
      const data = response.data.map(registration => ({
        ...registration,

        startFormatted: format(
          parseISO(registration.start_date),
          "d 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
        endeFormatted: format(
          parseISO(registration.end_date),
          "d 'de' MMMM 'de' yyyy",
          {
            locale: pt,
          }
        ),
      }));

      setRegistrations(data);
    }
    load();
  }, []);

  return (
    <Container>
      <Row>
        <h2>Gerenciando Matrículas</h2>
        <SubmitButton>
          <MdAdd size={20} color="#FFF" />
          CADASTRAR
        </SubmitButton>
      </Row>

      <Tabela>
        <table>
          <tr>
            <th>Aluno</th>
            <th>Plano</th>
            <th>Início</th>
            <th>Término</th>
            <th>Ativa</th>
          </tr>
          {registrations.map(registration => (
            <tr key={registration.id}>
              <td>{registration.student.name}</td>
              <td>
                {registration.plan
                  ? registration.plan && registration.plan.title
                  : registration.plan}
              </td>

              <td>{registration.startFormatted}</td>
              <td>{registration.endeFormatted}</td>
              <td>
                <MdCheckCircle
                  color={registration.active ? '#18c718' : '#999'}
                  size={20}
                />
              </td>
              <td>
                <Link style={{ color: '#006db5' }} to="editar">
                  editar
                </Link>
              </td>
              <td>
                <Link style={{ color: '#ee4e62' }} to="apagar">
                  apagar
                </Link>
              </td>
            </tr>
          ))}
        </table>
      </Tabela>
    </Container>
  );
}
