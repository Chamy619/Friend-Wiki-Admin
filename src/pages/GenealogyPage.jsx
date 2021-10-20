import Template from '../components/common/Template';
import GenealogyTable from '../components/genealogy/GenealogyTable';
import AddButton from '../components/genealogy/AddButton';

function GenealogyPage() {
  return (
    <Template title="나댐왕 관리">
      <AddButton />
      <GenealogyTable />
    </Template>
  );
}

export default GenealogyPage;
