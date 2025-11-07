import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../app/store/store.ts';

const useAppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;
