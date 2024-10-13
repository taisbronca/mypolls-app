import { useState, useEffect } from "react";
import { ModalContainer, Backdrop, CloseIcon, OptionsDiv } from "./styles";
import { FiTrash2 } from "react-icons/fi";

const ModalPoll = ({
  isOpen,
  onRequestClose,
  onSubmit,
  pollData = null,
  mode = "create",
}) => {
  const [pollTitle, setPollTitle] = useState("");
  const [pollOptions, setPollOptions] = useState([{ option: "" }]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (mode === "edit" && pollData) {
      setPollTitle(pollData.title || "");
      setPollOptions(pollData.options || [{ option: "" }]);
    }
  }, [pollData, mode]);

  const handleOptionChange = (index, value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index].option = value;
    setPollOptions(updatedOptions);
  };

  const addOption = () => {
    setPollOptions([...pollOptions, { option: "" }]);
  };

  const removeOption = (index) => {
    const updatedOptions = pollOptions.filter((_, i) => i !== index);
    setPollOptions(updatedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      title: pollTitle,
      options: pollOptions.filter((opt) => opt.option.trim() !== ""),
    });

    setPollTitle("");
    setPollOptions([{ option: "" }]);
    onRequestClose();
  };

  if (!isOpen) return null;

  return (
    <Backdrop onClick={onRequestClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onRequestClose}>✖</CloseIcon>
        <h2>{mode === "edit" ? "Edit Poll" : "Create New Poll"}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="poll-title">Poll Title</label>
          <input
            id="poll-title"
            type="text"
            placeholder="Poll Title"
            value={pollTitle}
            onChange={(e) => setPollTitle(e.target.value)}
            required
          />

          <label>Poll Options</label>
          {pollOptions.map((option, index) => (
            <OptionsDiv key={index}>
              <input
                type="text"
                placeholder={`Option ${index + 1}`}
                value={option.option}
                onChange={(e) => handleOptionChange(index, e.target.value)}
                required
              />
              <button
                style={{
                  backgroundColor:
                    hoveredIndex === index ? "#AB222E" : "#F75A68",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => removeOption(index)}
              >
                <FiTrash2 />
              </button>
            </OptionsDiv>
          ))}

          <button type="button" onClick={addOption}>
            Add Option
          </button>
          <button type="submit">
            {mode === "edit" ? "Update Poll" : "Create Poll"}
          </button>
        </form>
      </ModalContainer>
    </Backdrop>
  );
};

export default ModalPoll;
