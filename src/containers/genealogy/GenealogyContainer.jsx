import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { list, initialForm, changeField, write, setForm, update } from '../../modules/genealogy';
import Genealogy from '../../components/genealogy';

function GenealogyContainer() {
  const dispatch = useDispatch();
  const { genealogyList, error, form, loading } = useSelector(({ genealogy, loading }) => ({
    genealogyList: genealogy.list,
    error: genealogy.error,
    form: genealogy.form,
    loading: loading['genealogy/LIST'],
  }));
  const [open, setOpen] = useState(false);

  const showDialog = () => {
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
    dispatch(initialForm());
  };

  const handleUpdateClick = (id) => {
    dispatch(setForm(id));
    showDialog();
  };

  const handleChange = (event) => {
    dispatch(changeField({ name: event.target.name, value: event.target.value }));
  };

  const handleDialogConfirm = () => {
    if (!form._id) {
      dispatch(write(form));
    } else {
      dispatch(update({ ...form, id: form._id }));
    }
    dispatch(list());
    closeDialog();
  };

  useEffect(() => {
    dispatch(list());
  }, [dispatch]);

  return (
    <Genealogy
      list={genealogyList}
      showDialog={showDialog}
      open={open}
      closeDialog={closeDialog}
      handleChange={handleChange}
      form={form}
      handleDialogConfirm={handleDialogConfirm}
      handleUpdateClick={handleUpdateClick}
    />
  );
}

export default GenealogyContainer;
