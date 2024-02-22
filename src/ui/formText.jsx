const FormText = ({ type = "text", label, width, defaultValue, height }) => {
  return (
    <div className="form-floating m-3" style={{ width: width }}>
      <input
        type={type}
        className="form-control"
        placeholder={label}
        defaultValue={defaultValue}
        style={{ height: height }}
      />
      <label className="label-size" htmlFor="floatingInput">
        {label}
      </label>
    </div>
  );
};

export default FormText;
