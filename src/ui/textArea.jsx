import { TextareaAutosize } from "@mui/material";
import { styled } from "@mui/system";
const TextArea = ({ label, height }) => {
  const Textarea = styled(TextareaAutosize)(
    () => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 4px;
    border: 1px solid #909090;

    &:focus{
    outline: 1px solid gray;
    }
  `
  );

  return (
    <div className="Textarea">
      <Textarea aria-label="minimum height" minRows={3} placeholder={label} />
    </div>
  );
};

export default TextArea;
