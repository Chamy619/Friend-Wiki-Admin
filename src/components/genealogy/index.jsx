import AddButton from './AddButton';
import GenealogyTable from './GenealogyTable';
import FormDialog from './FormDialog';

function Genealogy({ list, showDialog, open, closeDialog, handleChange, form, addKing }) {
  return (
    <div>
      <AddButton showDialog={showDialog} />
      <GenealogyTable list={list} />
      <FormDialog open={open} closeDialog={closeDialog} handleChange={handleChange} form={form} addKing={addKing} />
    </div>
  );
}

export default Genealogy;
