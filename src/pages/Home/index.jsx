import { Header } from "../../components/Header";
import { MainContainer, CardsContainer, BodyContainer } from "./styles";
import { Card } from "../../components/Card";
import { getAllPolls } from "../../services/pollServices.js";
import {  useEffect, useState } from "react";

export default function Home() {
  const [polls, setPolls] = useState([]);

  async function findPoll() {
    const pollsResponse = await getAllPolls();
    setPolls(pollsResponse.data.results);
  }

  // async function findAllPolls() {
  //   try {
  //     const token = Cookies.get("token");
  //     const response = await getAllPolls(token);
  //     setPolls(response.data.results);
  //   } catch (error) {
  //     console.error("Error fetching polls:", error.message);
  //   }
  // }

  useEffect(() => {
    findPoll();
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
