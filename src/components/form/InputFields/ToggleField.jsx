import { motion } from "framer-motion";
import {
  labelStyle,
  toggleBtnGroup,
  toggleBtnSelected,
  toggleBtnUnselected,
  toggleButton,
  toggleFlexBox,
} from "../formStyles";
import { memo } from "react";

function ToggleField ({ label, value, options, onChange, onSelect }) {
  return (
    <div className={toggleFlexBox}>
      {/* Label */}
      <label className={labelStyle}>{label}</label>

      {/* Button group */}
      <div className={toggleBtnGroup}>
        {Object.entries(options).map(([key, text]) => {
          const isSelected = value === key;

          return (
            <motion.button
              key={key}
              type="button"
              onClick={() => {
                onSelect?.();
                onChange?.(key);
              }}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className={`${toggleButton} ${isSelected ? toggleBtnSelected : toggleBtnUnselected}`}
            >
              {text.label}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
export default memo(ToggleField);
