const FormInput = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-4 bg-gray-100 rounded-lg outline-none text-gray-600"
    />
  );
};

export default FormInput;
