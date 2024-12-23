import React from 'react';

interface DesktopIconProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export default function DesktopIcon({ icon, label, onClick }: DesktopIconProps) {
  return (
    <div 
      className="flex flex-col items-center gap-1 w-20 cursor-pointer group select-none"
      onClick={onClick}
    >
      <div className="w-12 h-12 text-white group-hover:text-blue-200">
        {icon}
      </div>
      <span className="text-white text-sm text-center px-1 group-hover:bg-[#000080]">
        {label}
      </span>
    </div>
  );
}