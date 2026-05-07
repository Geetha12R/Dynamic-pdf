// formatter for numbers to space them out
export const spaceDigits = (value) => {
            return value
              ?.toString()
              .replace(/\D/g, "")
              .split("")
              .join("\u00A0\u00A0\u00A0\u00A0");
          };