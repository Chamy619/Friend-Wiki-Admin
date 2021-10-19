import HeaderContainer from '../containers/common/HeaderContainer';
import UserTable from '../components/user/UserTable';
import Title from '../components/common/Title';

function UserPage() {
  return (
    <div style={{ width: '100%' }}>
      <HeaderContainer />
      <Title text="사용자 정보" />
      <UserTable />
    </div>
  );
}

export default UserPage;
