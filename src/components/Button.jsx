/* eslint-disable react/prop-types */
const Button = ({ label, type }) => {
  return (
    <button
      type={type}
      className=" w-full text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
    >
      {label}
    </button>
  );
};

export default Button;
