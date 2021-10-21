import AddButton from './AddButton';
import GenealogyTable from './GenealogyTable';
import FormDialog from './FormDialog';
import DeleteDialog from './DeleteDialog';
import LoadingCircle from '../common/LoadingCircle';
import AlertMessage from '../common/AlertMessage';

function Genealogy({
  loading,
  error,
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
  if (loading) {
    return <LoadingCircle />;
  }

  if (error) {
    return <AlertMessage />;
  }

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
