import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../redux/store';

import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
