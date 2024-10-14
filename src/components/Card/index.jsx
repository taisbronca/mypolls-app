/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardButton,
  Divider,
  CardContent,
} from "./styles";
import ModalPoll from "../Modal";
import { FiEdit } from "react-icons/fi";

export function Card({
  title,
  options,
  description,
  isNewPoll = false,
  pollData = null,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (data) => {
    if (isNewPoll) {
      console.log("Creating new poll:", data);
    } else {
      console.log("Editing poll:", data);
    }
  };

  return (
    <CardContainer>
      <CardHeader>
        <span>{title}</span>
        {!isNewPoll && (
          <FiEdit
            style={{ cursor: "pointer", color: "#ff6200" }}
            onClick={openModal}
          />
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
                  <span>{option.votes}</span>
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
        onSubmit={handleSubmit}
        pollData={pollData}
        mode={isNewPoll ? "create" : "edit"}
      />
    </CardContainer>
  );
}

export default Card;
