import AddButton from './AddButton';
import GenealogyTable from './GenealogyTable';
import AddDialog from './AddDialog';

function Genealogy({ list, showAddDialog, addDialogOpen, closeAddDialog, handleChange, form, addKing }) {
  return (
    <div>
      <AddButton showAddDialog={showAddDialog} />
      <GenealogyTable list={list} />
      <AddDialog
        open={addDialogOpen}
        closeAddDialog={closeAddDialog}
        handleChange={handleChange}
        form={form}
        addKing={addKing}
      />
    </div>
  );
}

export default Genealogy;
