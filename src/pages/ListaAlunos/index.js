/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Container, Tabela, Row, SubmitButton, Search } from './styles';

export default function ListaAlunos() {
  const [students, setStudents] = useState([]);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    async function load() {
      const response = await api.get('students');
      setStudents(response.data);
      setStudentList(response.data);
    }
    load();
  }, []);

  function onHandleFilter(str) {
    if (str.length > 0) {
      const newStudents = students.filter(student => {
        return student.name.includes(str);
      });

      setStudentList(newStudents);
    } else {
      setStudentList(students);
    }
  }

  return (
    <Container>
      <Row>
        <h2>Gerenciando Alunos</h2>
        <SubmitButton>
          <MdAdd size={20} color="#FFF" />
          CADASTRAR
        </SubmitButton>
        <Search>
          <input
            placeholder="Buscar aluno"
            onChange={e => onHandleFilter(e.target.value)}
            type="text
            "
          />
          <MdSearch size={17} color="#999" />
        </Search>
      </Row>

      <Tabela>
        <table>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
          </tr>
          {studentList.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td style={{ paddingRight: 300, paddingLeft: 33 }}>
                {student.age}
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
