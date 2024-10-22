/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { z } from "zod";
import { UserContext } from "../../contexts/UserContext";
import { createPoll, editPoll } from "../../services/pollServices";
import {
  Backdrop,
  CloseIcon,
  ErrorMessage,
  ModalContainer,
  OptionsDiv,
} from "./styles";

const PollsSchema = z.object({
  title: z.string().nonempty("Title is required."),
  options: z
    .array(
      z.object({
        option: z.string().nonempty("Option is required."),
        votes: z.number().optional(),
      })
    )
    .min(1, "You must provide at least one option."),
});

const ModalPoll = ({
  isOpen,
  onRequestClose,
  pollData = null,
  mode = "create",
}) => {
  const queryClient = useQueryClient();

  const createPollMutation = useMutation({
    mutationFn: createPoll,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["polls"],
      });
    },
  });

  const editPollMutation = useMutation({
    mutationFn: ({ body, id }) => editPoll(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["polls"],
      });
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PollsSchema),
    defaultValues: {
      title: "",
      options: [""],
    },
  });

  const { user } = useContext(UserContext);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "options",
  });

  useEffect(() => {
    if (mode === "edit" && pollData) {
      setValue("title", pollData.title);
      setValue(
        "options",
        pollData.options.map((opt) => ({
          option: opt.option,
          votes: opt.votes || 0,
        }))
      );
    } else {
      reset();
    }
  }, [pollData, mode, setValue, reset]);

  const onSubmit = async (data) => {
    const formattedData = {
      ...data,
      options: data.options.map((option) => ({
        option: option.option,
        votes: 0,
      })),
      user: user._id,
    };

    if (mode === "create") {
      createPollMutation.mutate(formattedData);
      Swal.fire(
        "Poll Created!",
        "Your new poll was created successfully.",
        "success"
      );
    } else {
      editPollMutation.mutate({ body: formattedData, id: pollData.id });
      Swal.fire(
        "Poll Updated!",
        "Your poll was updated successfully.",
        "success"
      );
    }

    onRequestClose();
  };

  const addOption = () => {
    append({ option: "" });
  };

  const removeOption = (index) => {
    remove(index);
  };

  return isOpen ? (
    <Backdrop onClick={onRequestClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseIcon onClick={onRequestClose}>✖</CloseIcon>
        <h2>{mode === "edit" ? "Edit Poll" : "Create New Poll"}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="poll-title">Poll Title</label>
            <input
              id="poll-title"
              type="text"
              placeholder="Poll Title"
              {...register("title")}
            />
            {errors.title && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </div>
          <label>Poll Options</label>
          {fields.map((field, index) => (
            <OptionsDiv key={field.id}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  gap: "5px",
                }}
              >
                <input
                  type="text"
                  placeholder={`Option ${index + 1}`}
                  {...register(`options.${index}.option`)}
                />
                <button type="button" onClick={() => removeOption(index)}>
                  <FiTrash2 />
                </button>
              </div>

              {errors.options?.[index]?.option && (
                <ErrorMessage>
                  {errors.options[index].option.message}
                </ErrorMessage>
              )}
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
  ) : null;
};

export default ModalPoll;
