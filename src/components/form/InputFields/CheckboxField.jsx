import { motion } from "framer-motion";
import {
  checkboxChecked,
  checkboxClass,
  checkboxContainer,
  checkboxUnchecked,
  commonFlexBox,
} from "../formStyles";
import { memo } from "react";

 function CheckboxField({ label, value, error, onChange, onSelect }){
  const stateClass = value ? checkboxChecked : checkboxUnchecked;
  const note = error ? "border-red-500" : "";
  return (
    <div className={commonFlexBox}>
      <motion.div
        className={checkboxContainer}
        onClick={() => onChange(!value)}
        onFocus={onSelect}
        whileTap={{ scale: 0.97 }}
      >
        {/* checkbox box displays tick when selected*/}
        <div className={`${checkboxClass} ${stateClass} ${note}`}>
          {value && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className="text-white text-sm"
            >
              ✓
            </motion.span>
          )}
        </div>
          {/* displays content belonging to checkbox */}
        <span className="text-sm font-bold text-gray-700">{label}</span>
      </motion.div>

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default memo(CheckboxField);
