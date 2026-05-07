import { memo } from "react";
import { motion } from "framer-motion";
import {
  textContent,
  textContentInvalid,
  textContentValid,
  commonFlexBox,
  labelStyle,
} from "../formStyles";

function TextField({
  label,
  value,
  type,
  error,
  message,
  onType,
  onSelect,
}) {
  const stateClass = error ? textContentInvalid : textContentValid;
  const note = error ? "text-red-500" : "text-green-500";

  return (
    <div className={commonFlexBox}>
      {/* label */}
      <label className={labelStyle}>{label}</label>

      {/* input wrapper (for animation control) */}
      <motion.input
        type={type}
        value={value}
        onFocus={onSelect}
        onChange={onType}
        maxLength={type === "text" ? 15 : 7}
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
}

export default memo(TextField);