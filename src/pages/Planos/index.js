/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { formatPrice } from '../../util/format';
import history from '../../services/history';
import api from '../../services/api';
import { Container, Tabela, Row, SubmitButton } from './styles';

export default function ListaAlunos() {
  const [planos, setPlanos] = useState([]);

  async function load() {
    const response = await api.get('plans');
    const data = response.data.map(plano => ({
      ...plano,

      priceFormatted: formatPrice(plano.price),
    }));

    setPlanos(data);
  }

  useEffect(() => {
    load();
  }, []);

  async function remover(id) {
    try {
      // eslint-disable-next-line no-alert
      if (window.confirm('Quer mesmo fazer isso? '))
        await api.delete(`plans/${id}`);

      load();
    } catch (err) {
      toast.error('Falha pra deletar');
    }
  }

  async function editar(id) {
    history.push(`/editar-plano/${id}`);
    localStorage.setItem('id', id);
  }

  return (
    <Container>
      <Row>
        <h2>Gerenciando Planos</h2>
        <Link to="cadastrar-planos">
          <SubmitButton>
            <MdAdd size={20} color="#FFF" />
            CADASTRAR
          </SubmitButton>
        </Link>
      </Row>

      <Tabela>
        <table>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/MÊS</th>
          </tr>
          {planos.map(plano => (
            <tr key={plano.id}>
              <td>{plano.title}</td>
              <td style={{ paddingLeft: 30 }}>
                {plano.duration}
                <strong>{plano.duration === 1 ? 'mês' : 'meses'}</strong>
              </td>

              <td style={{ paddingLeft: 40 }}>{plano.priceFormatted}</td>

              <td>
                <button
                  style={{ color: '#006db5' }}
                  onClick={() => {
                    editar(plano.id);
                  }}
                  type="button"
                >
                  editar
                </button>
              </td>
              <td>
                <button
                  style={{ color: '#ee4e62' }}
                  onClick={() => {
                    remover(plano.id);
                  }}
                  type="button"
                >
                  apagar
                </button>
              </td>
            </tr>
          ))}
        </table>
      </Tabela>
    </Container>
  );
}
