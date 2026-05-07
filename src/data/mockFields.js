// Assuming AI extracted JSON looks like the one below with details and page coordinates 

export function extractFieldsFromPDF() {
  return [
    {
      id: "firstName",
      label: "First Name",
      type: "text",
      value: "John",
      page: 1,
      message:'Max 15 char allowed',
      rect: { x: 180, y: 278, width: 138, height: 21 },
    },
    {
      id: "lastName",
      label: "Last Name",
      type: "text",
      value: "Doe",
      page: 1,
      message:'Max 15 char allowed',
      rect: { x: 180, y: 315, width: 138, height: 21 },
    },
    
    {
      id: "dob",
      label: "Date of Birth",
      type: "date",
      value: "",
      rect: { x: 430, y: 210, width: 90, height: 21 },

    },
    {
      id: "accountNo",
      label: "Account Number",
      type: "number",
      value: 1234567,
      page: 1,
      message:'Only 7 digits allowed',
      rect: { x: 185, y: 360, width: 138, height: 21 },
    },
    {
      id: "accountType",
      label: "Account Type",
      type: "toggle",
      options: {
        savings: {
          label: "Savings",
          rect: { x: 184.5, y: 402 },
        },
        current: {
          label: "Current",
          rect: { x: 270, y: 403 },
        },
      },
      value: "savings",
    },
    
    {
      id: "terms",
      label: "I agree to the terms and conditions of the statement.",
      type: "checkbox",
      value: false,
      page: 2,
      rect: { x: 73, y: 464, width: 16, height: 18 },
    },
  ];
}
