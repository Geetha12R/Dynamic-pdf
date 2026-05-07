const formMotion ="w-full max-w-xl bg-white backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl p-8";

const formHeader ="text-2xl font-bold text-black-500 underline decoration-red-500 decoration-3 underline-offset-4 mb-10";

// ------text classes
const commonFlexBox="w-full max-w-sm flex flex-col gap-1 mb-5";

const labelStyle = "text-sm font-bold text-gray-700";

const textContent = "w-1/2 p-1.5 border rounded outline-none transition-all duration-200 focus:ring-2 "

const textContentInvalid = "border-red-500 focus:ring-red-200";

const textContentValid = "border-green-300 focus:ring-green-200";

// ------toggle classes

const toggleFlexBox = "flex flex-col gap-2 mb-6";

const toggleBtnGroup = "flex gap-3 flex-wrap";

const toggleButton ="px-4 py-2 rounded-full text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-300";

const toggleBtnSelected ="bg-red-500 text-white shadow-md border border-red-500";

const toggleBtnUnselected = "bg-white text-gray-700 border border-gray-300 hover:border-red-400 hover:text-red-500";

// -------checkbox classes

const checkboxContainer ="flex items-center gap-2 cursor-pointer";

const checkboxClass ="w-5 h-5 flex items-center justify-center border rounded transition-colors duration-200";

const checkboxChecked= "bg-red-500 border-red-500";

const checkboxUnchecked = "bg-white border-gray-400"

export {formMotion, formHeader, commonFlexBox, labelStyle, textContent, textContentInvalid, textContentValid,
    toggleFlexBox,toggleBtnGroup,toggleButton, toggleBtnSelected,  toggleBtnUnselected,
    checkboxContainer, checkboxClass, checkboxChecked, checkboxUnchecked
};