const TextArea = ({ label, height, helpId = "floatingTextarea2" }) => {
  return (
    <div className="form-floating m-3">
      <textarea
        className="form-control textArea"
        placeholder={label}
        style={{ height: height, paddingTop: "40px", overflowWrap: "break-word" }}
        id={helpId}
      ></textarea>
      <label className="label-size" htmlFor={helpId}>
        {label}
      </label>
    </div>
  );
};

export default TextArea;
