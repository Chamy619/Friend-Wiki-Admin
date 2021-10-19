import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { select } from '../../modules/header';
import Header from '../../components/common/Header';
import { useEffect } from 'react';

const MENU_ITEMS = [
  { text: '유저 관리', location: '/user', key: 'user' },
  { text: '나댐왕 관리', location: '/genealogy', key: 'genealogy' },
];

function HeaderContainer({ history, match }) {
  const dispatch = useDispatch();
  const { current } = useSelector(({ header }) => ({
    current: header.current,
  }));

  useEffect(() => {
    const target = match.path.substr(1);
    dispatch(select(target));
  }, [dispatch, match]);

  const linking = (item) => {
    history.push(item.location);
    dispatch(select(item.key));
  };

  return <Header current={current} linking={linking} items={MENU_ITEMS} />;
}

export default withRouter(HeaderContainer);
