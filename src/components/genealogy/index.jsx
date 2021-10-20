import AddButton from './AddButton';
import GenealogyTable from './GenealogyTable';
import AddDialog from './AddDialog';

function Genealogy({ list }) {
  return (
    <>
      <AddButton />
      <GenealogyTable list={list} />
      <AddDialog open={true} />
    </>
  );
}

export default Genealogy;
