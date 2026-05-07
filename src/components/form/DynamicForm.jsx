"use client";

import { useForm } from "@/store/useForm";
import TextField from "./InputFields/TextField";
import ToggleField from "./InputFields/ToggleField";
import CheckboxField from "./InputFields/CheckboxField";
import { motion } from "framer-motion";
import { formHeader, formMotion } from "./formStyles";
import { DateField } from "./InputFields/DateField";

const formVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function DynamicForm() {
  // utilising actions and selectors
  const { fields, activeField, selectField, updateFieldValue } = useForm();

  // handles form field selection
  const handleSelect = (id) => () => selectField(id);
  // handles form field value update
  const handleType = (id, type) => (e) =>
    updateFieldValue(id, e.target.value, type);

  // handles rendering different fields
  const renderField = (field) => {
    // calls TextField for input type text or number
    if (field.type === "text" || field.type === "number") {
      return (
        <TextField
          key={field.id}
          id={field.id}
          label={field.label}
          type={field.type}
          value={field.value}
          error={field.error}
          message={field.message}
          activeField={activeField}
          onSelect={handleSelect(field.id)}
          onType={handleType(field.id, field.type)}
        />
      );
    }

    // calls ToggleField for a set of radio buttons with values
    if (field.type === "toggle") {
      return (
        <ToggleField
          key={field.id}
          label={field.label}
          value={field.value}
          options={field.options}
          onSelect={handleSelect(field.id)}
          onChange={(val) => updateFieldValue(field.id, val, field.type)}
        />
      );
    }

    // calls checkbox field to display its content
    if (field.type === "checkbox") {
      return (
        <CheckboxField
          key={field.id}
          label={field.label}
          value={field.value}
          error={field.error}
          message={field.message}
          onSelect={handleSelect(field.id)}
          onChange={(val) => updateFieldValue(field.id, val, field.type)}
        />
      );
    }
    // calls DateField for input type date
    if (field.type === "date") {
      return (
        <DateField
          key={field.id}
          id={field.id}
          label={field.label}
          value={field.value}
          error={field.error}
          message={field.message}
          isActive={activeField}
          onSelect={() => selectField(field.id)}
          onType={(e) => updateFieldValue(field.id, e.target.value, field.type)}
        />
      );
    }

    return null;
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={formVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={formMotion}
    >
      <h2 className={formHeader}>PDF Form</h2>
      {/* calls renderer for every field */}
      {fields.map(renderField)}
    </motion.div>
  );
}
