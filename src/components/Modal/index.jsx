/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { UserContext } from "../../contexts/UserContext";
import { createPoll, editPoll } from "../../services/pollServices";
import { Backdrop, CloseIcon, ModalContainer, OptionsDiv } from "./styles";

const PollsSchema = z.object({
  title: z.string(),
  options: z
    .array(
      z.object({
        option: z.string(),
        votes: z.number().optional(),
      })
    )
    .min(1),
});

const ModalPoll = ({
  isOpen,
  onRequestClose,
  pollData = null,
  mode = "create",
}) => {
  const { register, handleSubmit, setValue, reset, control } = useForm({
    resolver: zodResolver(PollsSchema),
    defaultValues: {
      title: "",
      options: [{ option: "" }, {votes: 0}],
    },
  });
  const navigate = useNavigate();
  const { user, loading } = useContext(UserContext);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  useEffect(() => {
    if (mode === "edit" && pollData) {
      setValue("title", pollData.title);
      setValue("options", pollData.options.map((opt) => opt.option))
    } else {
      reset();
    }
  }, [pollData, mode, setValue, reset]);

  async function onSubmit(data) {
    try {
      if (loading) {
        console.log("Carregando usuário...");
        return;
      }

      if (!user) {
        console.log("Usuário não autenticado, redirecionando...");
        navigate("/"); 
        return;
      }


      const formattedData = {
        ...data,
        options: data.options.map(option => ({
          option: option.option || option,
          votes: 0,
        })),
        user: user._id,
      };

      if (mode === "create") {
        await createPoll(formattedData);
        console.log(createPoll);
      } else {
        await editPoll(pollData._id, data);
      }
      onRequestClose();
      reset();
    } catch (error) {
      console.error("Erro ao criar/editar a poll:", error.response ? error.response.data : error.message);
  }
  }

  const addOption = () => {
    append({ option: "" });
  };

  const removeOption = (index) => {
    remove(index);
  };

  if (!isOpen) return null;

  return (
    <Backdrop onClick={onRequestClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onRequestClose}>✖</CloseIcon>
        <h2>{mode === "edit" ? "Edit Poll" : "Create New Poll"}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="poll-title">Poll Title</label>
          <input
            id="poll-title"
            type="text"
            placeholder="Poll Title"
            {...register("title")}
            required
          />

          <label>Poll Options</label>
          {fields.map((field, index) => (
            <OptionsDiv key={field.id}>
              <input
                type="text"
                placeholder={`Option ${index + 1}`}
                {...register(`options.${index}.option`)}
                required
              />
              <button type="button" onClick={() => removeOption(index)}>
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
