import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginButton from '../../components/home/LoginButton';

function HomeContainer({ history }) {
  const { user } = useSelector(({ user }) => ({ user: user.user }));

  useEffect(() => {
    if (user) {
      history.push('/user');
    }
  }, [history, user]);

  const goLogin = () => {
    history.push('/login');
  };

  return <LoginButton goLogin={goLogin} />;
}

export default withRouter(HomeContainer);
