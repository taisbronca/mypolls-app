import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import {  getAllPollsByUser } from "../../services/pollServices.js";
import { BodyContainer, CardsContainer, MainContainer } from "./styles";

export default function Home() {
  const [polls, setPolls] = useState([]);

  async function findAllPollsByUser() {
    const pollsResponse = await getAllPollsByUser();
    setPolls(pollsResponse.data.pollsByUser);
  }

  useEffect(() => {
    findAllPollsByUser();
  }, []);


  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <h1>My Polls</h1>
        <CardsContainer>
          <Card
            title="Add a new poll"
            description="Do you need a new poll? Use the button below!"
            isNewPoll={true}
          />
          {polls &&
            polls.map((poll) => (
              <Card
                key={poll.id}
                title={poll.title}
                options={poll.options}
                pollData={poll}
              />
            ))}
        </CardsContainer>
      </BodyContainer>
    </MainContainer>
  );
}
