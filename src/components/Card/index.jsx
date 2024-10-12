import { useState } from "react";
import {
  CardContainer,
  CardHeader,
  CardBody,
  CardButton,
  Divider,
  CardContent,
} from "./styles";
import ModalNewPoll from "../Modal/ModalNewPoll";

export function Card({ title, description }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <CardContainer>
      <CardContent>
        <CardHeader>{title}</CardHeader>
        <Divider />
        <CardBody>{description}</CardBody>
        <CardButton onClick={openModal}>Add Poll</CardButton>
      </CardContent>
      <ModalNewPoll isOpen={isModalOpen} onRequestClose={closeModal} /> 
    </CardContainer>
  );
}

export default Card;
