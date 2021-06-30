import AutoComplete from './components/session1/AutoComplete';
import Login from './components/session2/Login';
import VotePage from './components/session3/VotePage';
import styled from 'styled-components';

function App() {
  return (
    <Container>
      <AutoComplete />
      <Login />
      <VotePage />
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 16px 24px;
`;

export default App;
