/* eslint-disable react/prop-types */
const InputBox = ({ label, placeholder, onChange, type }) => {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-2 py-1 border rounded border-slate-200"
        required
      />
    </div>
  );
};

export default InputBox;