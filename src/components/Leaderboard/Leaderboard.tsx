import axios from 'axios';
import { useEffect, useState } from 'react';

import { LeagueListDto } from '../../types/LeagueListDto';

const Leaderboard = () => {
  const [challengerLeaderboard, setChallengerLeaderboard] = useState<
    LeagueListDto[]
  >([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChallengerLeaderboard = async () => {
      try {
        const response = await axios.get(`lol/league/leaderboard/challenger`);
        setChallengerLeaderboard(
          response.data.entries.sort(
            (a: any, b: any) => b.leaguePoints - a.leaguePoints
          )
        );
        setError(null);
      } catch (error) {
        setChallengerLeaderboard([]);
        setError(`Axios data fetch error from backend: challengerLeaderboard`);
      }
    };

    fetchChallengerLeaderboard();
  }, []);

  const players = challengerLeaderboard;

  return (
    <div>
      {/* <pre>{JSON.stringify(challengerLeaderboard, null, 2)}</pre> */}

      {challengerLeaderboard && (
        <>
          <h1>Challenger Leaderboard</h1>

          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>League Points</th>
                <th>Wins</th>
                <th>Losses</th>
              </tr>
            </thead>

            <tbody>
              {players.map((player: any) => (
                <tr key={player.summonerId}>
                  <td>{player.rank}</td>
                  <td>{player.summonerName}</td>
                  <td>{player.leaguePoints}</td>
                  <td>{player.wins}</td>
                  <td>{player.losses}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Leaderboard;
