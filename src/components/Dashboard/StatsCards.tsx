// components/StatCard.tsx
import React from "react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  color?: string;
  fontColor?:string
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon = null,
  color = "white",
  fontColor="black"
}) => {
  console.log(`Callbg-[${color}] p-3 rounded-xl shadow-md`);
  return (
    <div
      className={`p-3 rounded-xl shadow-md`}
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center gap-4 ">
        {icon && <div className="text-3xl text-gray-700">{icon}</div>}
        <div>
          <h3 className="text-[14px] font-semibold "style={{color:fontColor}}  >{title}</h3>
          <p className="text-[14px] font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
