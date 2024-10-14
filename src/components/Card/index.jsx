/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
import { deletePoll } from "../../services/pollServices";
import ModalPoll from "../Modal";
import {
    CardBody,
    CardButton,
    CardContainer,
    CardContent,
    CardHeader,
    Divider,
} from "./styles";

export function Card({
  title,
  options,
  description,
  isNewPoll = false,
  pollData = null,
  addPollToState,
  updatePollInState,
  removePollFromState
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  async function deletePollId() {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to reverse this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete!",
      cancelButtonText: "No, cancel!",
    });

    if (result.isConfirmed) {
      try {
        const pollId = pollData?.id;

        if (pollId) {
          await deletePoll(pollId);
          removePollFromState(pollId); 
          Swal.fire("Deleted!", "Your poll was deleted.", "success");
        } else {
          throw new Error("Poll ID not found.");
        }
      } catch (error) {
        console.error(error);
        Swal.fire(
          "Erro!",
          "An error occurred while deleting the poll.",
          "error"
        );
      }
    }
  }

  return (
    <CardContainer>
      <CardHeader>
        <span>{title}</span>
        {!isNewPoll && (
          <div>
            <FiEdit
              style={{
                cursor: "pointer",
                color: "#ff6200",
                marginRight: "10px",
              }}
              onClick={openModal}
            />
            <FiTrash2
              style={{ cursor: "pointer", color: "#ff4d4f" }}
              onClick={deletePollId}
            />
          </div>
        )}
      </CardHeader>
      <Divider />
      <CardContent>
        <CardBody>
          {isNewPoll ? (
            <p>{description}</p>
          ) : (
            <ul>
              {options?.map((option, index) => (
                <li key={index}>
                  <span>{option.option}</span>
                  <span>{option?.votes}</span>
                </li>
              ))}
            </ul>
          )}
        </CardBody>
        {isNewPoll && <CardButton onClick={openModal}>Add Poll</CardButton>}
      </CardContent>
      <ModalPoll
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        pollData={pollData}
        mode={isNewPoll ? "create" : "edit"}
        addPollToState={addPollToState}
        updatePollInState={updatePollInState}
      />
    </CardContainer>
  );
}

export default Card;
