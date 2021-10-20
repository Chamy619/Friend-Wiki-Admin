import Template from '../components/common/Template';
import GenealogyContainer from '../containers/genealogy/GenealogyContainer';
import AddButton from '../components/genealogy/AddButton';

function GenealogyPage() {
  return (
    <Template title="나댐왕 관리">
      <AddButton />
      <GenealogyContainer />
    </Template>
  );
}

export default GenealogyPage;
