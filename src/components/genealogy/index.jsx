import AddButton from './AddButton';
import GenealogyTable from './GenealogyTable';
import FormDialog from './FormDialog';

function Genealogy({
  list,
  showDialog,
  open,
  closeDialog,
  handleChange,
  form,
  handleDialogConfirm,
  handleUpdateClick,
}) {
  return (
    <div>
      <AddButton showDialog={showDialog} />
      <GenealogyTable list={list} handleUpdateClick={handleUpdateClick} />
      <FormDialog
        open={open}
        closeDialog={closeDialog}
        handleChange={handleChange}
        form={form}
        handleDialogConfirm={handleDialogConfirm}
      />
    </div>
  );
}

export default Genealogy;
