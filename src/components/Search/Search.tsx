// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import { SummonerDto } from '../../types/SummonerDto';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy';

const Search = () => {
  const [summonerNameInput, setSummonerNameInput] = useState('');
  const [summonerData, setSummonerData] = useState<SummonerDto | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `/lol/summoner/profile/${summonerNameInput}`
      );
      setSummonerData(response.data);
      setSummonerNameInput('');
      setError(null);
    } catch (error) {
      setSummonerData(null);
      setError('Axios data fetch error from backend');
    }
  };

  return (
    <div>
      <Sheet
        sx={{
          width: 300,
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
        <form onSubmit={handleSearch}>
          <FormControl>
            <FormLabel>Player Search</FormLabel>
            <Input
              placeholder="Enter player name"
              value={summonerNameInput}
              onChange={(e) => setSummonerNameInput(e.target.value)}
            />
            <Button sx={{ mt: 1 /* margin top */ }} type="submit">
              Search
            </Button>
          </FormControl>
        </form>
      </Sheet>

      {summonerData && (
        <Sheet
          sx={{
            width: 300,
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
          <div>
            {/* <pre>{JSON.stringify(summonerData, null, 2)}</pre> */}

            {/* <Typography level="body-xs">ID: {summonerData.id}</Typography>
            <Typography level="body-xs">
              Account ID: {summonerData.accountId}
            </Typography>
            <Typography level="body-xs">Puuid: {summonerData.puuid}</Typography> */}
            <Typography fontSize="sm">Name: {summonerData.name}</Typography>
            <Typography fontSize="sm">
              Summoner Level: {summonerData.summonerLevel}
            </Typography>
          </div>
        </Sheet>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Search;
