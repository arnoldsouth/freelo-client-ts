// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import { SummonerDto } from '../../types/loltypes/SummonerDto';
import {
  Button,
  FormControl,
  // FormLabel,
  Input,
  Sheet,
  Typography,
} from '@mui/joy';

// import { useNavigate } from 'react-router-dom';

const LolSearch = () => {
  const [summonerNameInput, setSummonerNameInput] = useState('');
  const [summonerData, setSummonerData] = useState<SummonerDto | null>(null);
  const [error, setError] = useState<string | null>(null);
  // const navigate = useNavigate();

  const handleSearch = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `/lol/summoner/profile/${summonerNameInput}`
      );
      // navigate(`/lol/search/${summonerNameInput}`);

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
        sx={
          {
            // width: 300,
            // width: 500,
            // mx: 'auto', // margin left & right
            // my: 4, // margin top & bottom
            // py: 3, // padding top & bottom
            // px: 2, // padding left & right
            // display: 'flex',
            // flexDirection: 'column',
            // gap: 2,
            // borderRadius: 'sm',
            // boxShadow: 'md',
          }
        }
        // variant="outlined"
      >
        <form onSubmit={handleSearch}>
          <FormControl>
            {/* <FormLabel>Player Search</FormLabel> */}
            <Sheet sx={{ display: 'flex', flexDirection: 'row' }}>
              <Input
                placeholder="Player Search"
                value={summonerNameInput}
                onChange={(e) => setSummonerNameInput(e.target.value)}
              />
              <Button sx={{ mt: 1 /* margin top */ }} type="submit">
                Search
              </Button>
            </Sheet>
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
            <Typography fontSize="sm">Name: {summonerData.name}</Typography>

            <Typography fontSize="sm">
              Summoner Level: {summonerData.summonerLevel}
            </Typography>
            {/* Render other data from summonerData */}
          </div>
        </Sheet>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default LolSearch;
