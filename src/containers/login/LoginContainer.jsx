import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, changeField, initialForm } from '../../modules/auth';
import { check } from '../../modules/user';
import Login from '../../components/login/Login';

function LoginContainer({ history }) {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { form, auth, loginError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    loginError: auth.loginError,
    user: user.user,
  }));

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(login({ username: form.username, password: form.password }));
  };

  const onChange = (event) => {
    dispatch(changeField({ form: 'login', name: event.target.name, value: event.target.value }));
  };

  useEffect(() => {
    dispatch(initialForm());
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      dispatch(check());
    }
  }, [auth, dispatch]);

  useEffect(() => {
    if (loginError) {
      setError(true);
    }
  }, [loginError]);

  useEffect(() => {
    if (user) {
      history.push('/');

      dispatch(initialForm());

      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [history, user, dispatch]);

  return <Login form={form} error={error} onChange={onChange} onSubmit={onSubmit} />;
}

export default withRouter(LoginContainer);
