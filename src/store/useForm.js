"use client";

import { useDispatch, useSelector } from "react-redux";
import { setActiveField, updateField } from "@/store/formSlice";
import { validateInput } from "@/utils/inputValidation";

export const useForm = () => {
  const dispatch = useDispatch();

  // GLOBAL selector to get fields and current active field id
  const { fields, activeField } = useSelector((state) => state.form);

  // list of actions available
  const selectField = (id) => {
    dispatch(setActiveField(id));
  };

  const updateFieldValue = (id, value, type) => {
    // input validation before store update
    let {newValue,error}=validateInput(value,type);

    dispatch(updateField({ id, value: newValue, error }));
};

  return {
    fields,
    activeField,
    selectField,
    updateFieldValue,
  };
};
