import { createSlice } from "@reduxjs/toolkit";

// Setting up initial state for fields in the form and current active field
const initialState = {
  fields: [],
  activeField: null
};

// Slice for form reducer to support multiple reducers in the future instead of one giant reducers
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    // to set all the fields and values of the form
    setFields: (state, action) => {
      state.fields = action.payload;
    },
    // to set current active field
    setActiveField: (state, action) => {
      state.activeField = action.payload;
    },
    // to update form field values on change
    updateField: (state, action) => {
      const { id, value, error } = action.payload;
      // finds the field to update
      const field = state.fields.find((f) => f.id === id);
      field.error=error
      // if field exists then update value - safe checks
      if (field) { 
        field.value = value;
      }
    },
  },
});

// exporting actions and reducer
export const { setFields, setActiveField, updateField } = formSlice.actions;
export default formSlice.reducer;