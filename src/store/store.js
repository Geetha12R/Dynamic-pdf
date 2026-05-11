"use client";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import formReducer, { setFields } from "./formSlice";
import { extractFieldsFromPDF } from "../data/mockFields";

// store creation with form reducer, allows multiple reducers support
const store = configureStore({
  reducer: {
    form: formReducer,
  },
    preloadedState: {
      form: {
      fields: extractFieldsFromPDF(),
      activeField: null
    }
  }
});
// initially loading the fields from JSON to store
// store.dispatch(setFields(extractFieldsFromPDF()));

export default store;