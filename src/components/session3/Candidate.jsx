import styled from 'styled-components';
import { useState } from 'react';

const Candidate = ({ info, setData, candidates }) => {
  const [vote, setVote] = useState(info.vote);

  const handleVoteClick = () => {
    const newCandidates = [...candidates];
    let target = newCandidates.find((item) => item.id === info.id);
    setVote(vote + 1);
    target.vote = vote + 1;
    setData(newCandidates);
  };

  return (
    <CandidateWrapper>
      <CImage src={info.pic} />
      <Info>
        <InfoWrapper>
          <Name>
            {info.name}
            <span>({info.vote})</span>
          </Name>
          <VoteButton onClick={handleVoteClick}>Vote</VoteButton>
        </InfoWrapper>
      </Info>
    </CandidateWrapper>
  );
};

const CandidateWrapper = styled.div`
  width: 45%;
  height: 100px;
  border: 1px solid gray;
  display: flex;
`;

const CImage = styled.img`
  height: 100%;
  width: 50%;
  object-fit: contain;
`;

const Info = styled.div`
  padding: 4px 16px;
  margin: 12px auto;
  display: flex;
`;

const InfoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.div``;

const VoteButton = styled.button``;

export default Candidate;
