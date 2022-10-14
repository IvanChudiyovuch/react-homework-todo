import { Container, Title } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Task manager Welcome page!
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Container>
  );
}
