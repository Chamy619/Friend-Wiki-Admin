import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { list } from '../../modules/genealogy';
import GenealogyTable from '../../components/genealogy/GenealogyTable';

function GenealogyContainer() {
  const dispatch = useDispatch();
  const { genealogyList, error, loading } = useSelector(({ genealogy, loading }) => ({
    genealogyList: genealogy.list,
    error: genealogy.error,
    loading: loading['genealogy/LIST'],
  }));

  useEffect(() => {
    dispatch(list());
  }, [dispatch]);

  return <GenealogyTable list={genealogyList} />;
}

export default GenealogyContainer;
