import { motion } from "framer-motion";
import {
  textContent,
  textContentInvalid,
  textContentValid,
  commonFlexBox,
  labelStyle,
} from "../formStyles";
import { dobLimit } from "@/utils/inputValidation";

export const DateField = ({
  label,
  value,
  error,
  message,
  onType,
  onSelect,
}) => {
  const stateClass = error ? textContentInvalid : textContentValid;
  const note = error ? "text-red-500" : "text-green-500";
  const today = new Date();

  return (
    <div className={commonFlexBox}>
      {/* label */}
      <label className={labelStyle}>{label}</label>

      {/* input wrapper (for animation control) */}
      <motion.input
        type="date"
        value={value}
        onFocus={onSelect}
        onChange={onType}
        // today (DOB cannot be in future)
        max={dobLimit().maxDate} 
        min={dobLimit().minDate}
        whileFocus={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`${textContent} ${stateClass}`}
      />

      {/* indicates error / valid message */}
      <motion.span
        key={error ? "error" : "success"}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={`text-xs ${note}`}
      >
        {error ? error : message}
      </motion.span>
    </div>
  );
};
