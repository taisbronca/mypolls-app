import { Header } from "../../components/Header";
import { MainContainer, CardsContainer, BodyContainer } from "./styles";
import { Card } from "../../components/Card";
import { getAllPolls } from "../../services/pollsServices.js";
import { useEffect, useState } from "react";

export default function Home() {
  let [polls, setPolls] = useState([]);

  async function findAllPolls() {
    const response = await getAllPolls();
    setPolls(response.data.results);
  }

  useEffect(() => {
    findAllPolls();
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
          {polls.map((poll) => (
            <Card key={poll.id} title={poll.title} options={poll.options} pollData={poll} />
          ))}
        </CardsContainer>
      </BodyContainer>
    </MainContainer>
  );
}
