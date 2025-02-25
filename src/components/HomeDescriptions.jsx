export const HomeDescriptions = () => {
  return (
    <ul className="grid grid-cols-1 lg:grid-cols-3 p-5 gap-10 m-10">
      {descriptions.map((desc, index) => (
        <li
          key={index}
          className="flex flex-col gap-3 bg-[#edf6fc] p-10 rounded-lg shadow"
        >
          <h4 className="font-bold text-xl text-center">{desc.title}</h4>
          <p className="text-center">{desc.description}</p>
        </li>
      ))}
    </ul>
  );
};

const descriptions = [
  {
    title: '성격 유형 검사',
    description:
      '자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.',
  },
  {
    title: '성격 유형 이해',
    description:
      '다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.',
  },
  {
    title: '팀 평가',
    description:
      '팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.',
  },
];
