const FormRow = ({ children }) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-6">
      {children}
    </div>
  );
};

export default FormRow;
