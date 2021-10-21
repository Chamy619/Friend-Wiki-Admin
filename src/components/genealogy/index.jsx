import AddButton from './AddButton';
import GenealogyTable from './GenealogyTable';
import FormDialog from './FormDialog';
import DeleteDialog from './DeleteDialog';

function Genealogy({
  list,
  showDialog,
  open,
  closeDialog,
  handleChange,
  form,
  handleDialogConfirm,
  handleUpdateClick,
  removeDialog,
  handleDeleteClick,
  closeRemoveDialog,
  handleRemove,
}) {
  return (
    <>
      <AddButton showDialog={showDialog} />
      <GenealogyTable list={list} handleUpdateClick={handleUpdateClick} handleDeleteClick={handleDeleteClick} />
      <FormDialog
        open={open}
        closeDialog={closeDialog}
        handleChange={handleChange}
        form={form}
        handleDialogConfirm={handleDialogConfirm}
      />
      <DeleteDialog open={removeDialog} onClose={closeRemoveDialog} form={form} handleRemove={handleRemove} />
    </>
  );
}

export default Genealogy;
