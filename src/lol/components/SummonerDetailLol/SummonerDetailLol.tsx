import { Sheet, Typography } from '@mui/joy';
import React from 'react';
import { SummonerDto } from '../../types/SummonerDto';

interface SummonerDetailProps {
  summonerData: SummonerDto | null;
}

const SummonerDetailLol: React.FC<SummonerDetailProps> = ({ summonerData }) => {
  return (
    <div>
      <pre>{JSON.stringify(summonerData, null, 2)}</pre>

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
        {summonerData && (
          <div>
            <Typography fontSize="sm">Name: {summonerData.name}</Typography>

            <Typography fontSize="sm">
              Summoner Level: {summonerData.summonerLevel}
            </Typography>
            {/* Render other data from summonerData */}
          </div>
        )}
      </Sheet>
    </div>
  );
};

export default SummonerDetailLol;
