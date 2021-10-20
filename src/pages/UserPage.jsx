import UserContainer from '../containers/user/UserContainer';
import Template from '../components/common/Template';

function UserPage() {
  return (
    <Template title="사용자 관리">
      <UserContainer />
    </Template>
  );
}

export default UserPage;
