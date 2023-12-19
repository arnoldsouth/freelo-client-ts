// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import { SummonerDto } from '../../types/SummonerDto';

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
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={summonerNameInput}
          onChange={(e) => setSummonerNameInput(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {summonerData && (
        <div>
          <pre>{JSON.stringify(summonerData, null, 2)}</pre>

          <div>
            ----------------------------------------------------------------------------
          </div>

          <p>ID: {summonerData.id}</p>
          <p>Account ID: {summonerData.accountId}</p>
          <p>Puuid: {summonerData.puuid}</p>
          <p>Name: {summonerData.name}</p>
          <p>Summoner Level: {summonerData.summonerLevel}</p>
        </div>
      )}

      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Search;
