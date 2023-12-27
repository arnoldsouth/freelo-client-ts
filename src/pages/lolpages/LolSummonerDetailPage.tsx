import SummonerDetailLol from '../../components/LolSummonerDetail/LolSummonerDetail';
import { SummonerDto } from '../../types/loltypes/SummonerDto';

interface SummonerDetailProps {
  summonerData: SummonerDto | null;
}

const LolSummonerDetailPage: React.FC<SummonerDetailProps> = ({
  summonerData,
}) => {
  return (
    <div>
      <SummonerDetailLol summonerData={summonerData} />
    </div>
  );
};

export default LolSummonerDetailPage;
