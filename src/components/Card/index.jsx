/* eslint-disable react/prop-types */
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
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
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
      />
    </CardContainer>
  );
}

export default Card;
