import { useDispatch } from 'react-redux';

import { AppDispatch } from '../../app/store/store';

const useAppDispatch = () => useDispatch<AppDispatch>();
export default useAppDispatch;
