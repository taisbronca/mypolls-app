import { Header } from "../../components/Header";
import { MainContainer, CardsContainer, BodyContainer } from "./styles";
import { Card } from "../../components/Card";

export default function Home() {


  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <h1>My Polls</h1>
        <CardsContainer>
          <Card
            title="Add a new poll"
            description="Do you need a new poll? Use the button below!"
          />
          
        </CardsContainer>
      </BodyContainer>
    </MainContainer>
  );
}
