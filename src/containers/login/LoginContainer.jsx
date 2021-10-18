import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login, changeField, initialForm } from '../../modules/auth';
import Login from '../../components/login/Login';

function LoginContainer({ history }) {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const { form, auth, loginError } = useSelector(({ auth }) => ({
    form: auth.login,
    auth: auth.auth,
    loginError: auth.loginError,
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
      history.push('/');
    }
  }, [auth, loginError, history]);

  useEffect(() => {
    if (loginError) {
      setError(true);
    }
  }, [loginError]);

  return <Login form={form} error={error} onChange={onChange} onSubmit={onSubmit} />;
}

export default withRouter(LoginContainer);
