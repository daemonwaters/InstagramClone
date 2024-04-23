import { useDispatch, useSelector } from "react-redux";
import { AppDisptach, RootState } from "../lib/store";

export const useAppDispatch = useDispatch.withTypes<AppDisptach>();
export const useAppSelector = useSelector.withTypes<RootState>();
