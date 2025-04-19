import React from 'react';

interface LogoProps {
  name?: string;
  size?: string;
  bgColor?: string;
  textColor?: string;
}

const Logo: React.FC<LogoProps> = ({
  name = 'Rahul Kankariya',
  size = 'w-32 h-32',
  bgColor = 'bg-black',
  textColor = 'text-[#c7ae6a]',
  
}) => {
  return (
    <div
      className={`rounded-full font-poppins p-4 text-center flex items-center justify-center mx-auto mb-4 ${bgColor} ${textColor} ${size} text-base`}
    >
      {name}
    </div>
  );
};

export default Logo;
