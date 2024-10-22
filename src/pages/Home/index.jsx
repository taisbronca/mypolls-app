//import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import {
  createPoll,
  deletePoll,
  editPoll,
  getAllPollsByUser,
} from "../../services/pollServices.js";
import { BodyContainer, CardsContainer, MainContainer } from "./styles";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

export default function Home() {
  const queryClient = useQueryClient();

  const {
    data: polls,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["polls"],
    queryFn: getAllPollsByUser,
  });

  const addPollMutation = useMutation({
    mutationFn: createPoll,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["polls"],
      });
    },
  });

  const updatePollMutation = useMutation({
    mutationFn: ({ body, id }) => editPoll(body, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["polls"],
      });
    },
  });

  const deletePollMutation = useMutation({
    mutationFn: deletePoll,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["polls"],
      });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading polls: {error.message}</p>;

  const handleAddPoll = (newPoll) => {
    addPollMutation.mutate(newPoll);
  };

  const handleUpdatePoll = (updatedPollData, pollId) => {
    updatePollMutation.mutate({ body: updatedPollData, id: pollId });
  };

  const handleRemovePoll = (pollId) => {
    deletePollMutation.mutate(pollId);
  };

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
            addPollToState={handleAddPoll}
          />
          {polls?.data.pollsByUser.map((poll) => (
            <Card
              key={poll.id}
              title={poll.title}
              options={poll.options}
              pollData={poll}
              updatePollInState={handleUpdatePoll}
              removePollFromState={handleRemovePoll}
            />
          ))}
        </CardsContainer>
      </BodyContainer>
    </MainContainer>
  );
}
