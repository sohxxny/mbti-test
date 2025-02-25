import { HomeDescriptions } from '../components/HomeDescriptions';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="font-semibold text-lg mt-10">무료 성격 테스트</span>
      <h1 className="font-semibold text-5xl m-4">MBTI</h1>
      <p className="mb-5">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <HomeDescriptions />
      <Link
        to="/test"
        className="px-5 py-3 m-5 font-semibold rounded-lg bg-[#34495e] text-white hover:bg-[#425e79]"
      >
        내 성격 알아보러 가기
      </Link>
    </div>
  );
};

export default Home;
