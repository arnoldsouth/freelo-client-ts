import axios from 'axios';
import { useEffect, useState } from 'react';

import { LeagueListDto } from '../../types/LeagueListDto';
import { Sheet, Typography } from '@mui/joy';

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
        setError('Axios data fetch error from backend: challengerLeaderboard');
      }
    };

    fetchChallengerLeaderboard();
  }, []);

  const players = challengerLeaderboard;

  return (
    <div>
      {/* <pre>{JSON.stringify(challengerLeaderboard, null, 2)}</pre> */}

      {challengerLeaderboard && (
        <Sheet
          sx={{
            width: 900,
            mx: 'auto', // margin left & right
            my: 4, // margin top & bottom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <Typography level="h2">Challenger Leaderboard</Typography>

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
        </Sheet>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Leaderboard;
