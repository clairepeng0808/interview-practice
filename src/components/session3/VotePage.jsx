import CandidateSection from './CandidateSection';
import { useState } from 'react';

// list data
const candidates = [
  {
    id: 1,
    name: 'Kiki',
    vote: 0,
    pic: 'https://i.pinimg.com/originals/78/82/e8/7882e83a28c2f9bd98f00e64e8d1f45a.jpg',
  },
  {
    id: 2,
    name: 'Miki',
    vote: 0,
    pic: 'https://thumb.spokesman.com/XLxxyYwl8sxnF5sv45a0MoBqH_I=/media.spokesman.com/photos/2020/11/17/SteamboatWillie.png',
  },
  {
    id: 3,
    name: 'Doraemon',
    vote: 0,
    pic: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png',
  },
  {
    id: 4,
    name: 'Doraemon2',
    vote: 0,
    pic: 'https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png',
  },
];

// cast vote api
// api doc
// url: https://jsonplaceholder.typicode.com/posts
// method: POST
// required param: id

export default function VotePage() {
  const [data, setData] = useState(candidates);
  return (
    <div className="App">
      <CandidateSection candidates={data} setData={setData} />
    </div>
  );
}
