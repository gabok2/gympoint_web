import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '../../../services/history';
import api from '../../../services/api';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    // Criar rota get students
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Baerer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/student');
  } catch (err) {
    toast.error('Falha na autenticação');
    yield put(signInFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('persist/REHYDRATE', setToken),
]);
