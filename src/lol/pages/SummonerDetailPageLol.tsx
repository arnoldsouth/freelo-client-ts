import SummonerDetailLol from '../components/SummonerDetailLol/SummonerDetailLol';
import { SummonerDto } from '../types/SummonerDto';

interface SummonerDetailProps {
  summonerData: SummonerDto | null;
}

const SummonerDetailPageLol: React.FC<SummonerDetailProps> = ({
  summonerData,
}) => {
  return (
    <div>
      <SummonerDetailLol summonerData={summonerData} />
    </div>
  );
};

export default SummonerDetailPageLol;
