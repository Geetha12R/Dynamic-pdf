export const validateInput = (value, type) => {
  // Validation for text user input
  // If validation changes, updates can be done here #Single Responsibility
  let newValue = value;
  let error = null;
  let textLimit = 15;

  // limiting characters to 15 and only alphabets with a max of two dots
  if (type === "text") {
    newValue = newValue.replace(/[^a-zA-Z. ]/g, "").slice(0, textLimit);

    // capitalize first letter
    newValue = newValue.charAt(0).toUpperCase() + newValue.slice(1);

    const len = newValue.trim().length;

    if (len === 0) {
      error = "Field is required";
    } else if (len < 2) {
      error = "Min 2 characters required";
    } else {
      error = null;
    }
  }

  // Number field, doesn't accept characters/special characters
  // only 7 digits allowed for account number
  let allowedDigits = 7;
  if (type === "number") {
    newValue = newValue.replace(/\D/g, "").slice(0, 7);

    // validations for account number field
    if (Number(newValue) === 0) {
      error = "Account number cannot be zero";
    } else if (newValue.length === 0) {
      error = "Field is required";
    } else if (newValue.length < allowedDigits) {
      error = "Account number must be " + allowedDigits + " digits";
    } else {
      error = null;
    }
  }
  if (type === "date") {
    if (!newValue) {
      error = "Field is required";
    } else {
      error = null;
    }
  }
  return { newValue, error };
};

export const dobLimit = () => {
  const today = new Date();

// oldest allowed DOB (100 years ago)
const minDateObj = new Date();
minDateObj.setFullYear(today.getFullYear() - 100);

// youngest allowed DOB (must be 18+)
const maxDateObj = new Date();
maxDateObj.setFullYear(today.getFullYear() - 18);

const minDate = minDateObj.toISOString().split("T")[0];
const maxDate = maxDateObj.toISOString().split("T")[0];
  return { minDate, maxDate };
};
