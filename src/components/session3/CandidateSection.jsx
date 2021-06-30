import Candidate from './Candidate';
import styled from 'styled-components';

const CandidateSection = ({ candidates, setData }) => {
  return (
    <Wrapper>
      {candidates.map((candidate) => {
        return (
          <Candidate
            candidates={candidates}
            info={candidate}
            setData={setData}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export default CandidateSection;
