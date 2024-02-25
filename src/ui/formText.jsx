const FormText = ({ type = "text", label, width, defaultValue, height }) => {
  return (
    <div className="form-floating m-3" style={{ width: width, height: height }}>
      <p>{label}</p>
      <input type="number" min={0} defaultValue={defaultValue} />
    </div>
  );
};

export default FormText;
