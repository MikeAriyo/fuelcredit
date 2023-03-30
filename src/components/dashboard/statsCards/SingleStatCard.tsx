
interface statsProps {
  title: string;
  icon: any;
  count: string;
}

const StatCard = ({ title, icon, count }: statsProps) => {
  return (
    <div className="block max-w-[250px] rounded-lg bg-white p-6 shadow-md">
      <div>{icon}</div>
      <div className="pt-6">
        <p className="text-[16px] text-[#8f928e]">{title}</p>
        <p className="text-[#1f261e] text-[20px] font-bold">{count}</p>
      </div>
    </div>
  );
};
export default StatCard;
