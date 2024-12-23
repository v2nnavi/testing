import React from 'react';
import { 
  ComputerDesktopIcon, 
  DocumentTextIcon, 
  Cog6ToothIcon,
  PowerIcon
} from '@heroicons/react/24/solid';

interface StartMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StartMenu({ isOpen, onClose }: StartMenuProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute bottom-10 left-0 w-64 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] z-50"
      onMouseLeave={onClose}
    >
      <div className="p-1 space-y-1">
        <StartMenuItem icon={<ComputerDesktopIcon />} text="Programs" />
        <StartMenuItem icon={<DocumentTextIcon />} text="Documents" />
        <StartMenuItem icon={<Cog6ToothIcon />} text="Settings" />
        <div className="border-t border-[#808080] my-1" />
        <StartMenuItem icon={<PowerIcon />} text="Shut Down" />
      </div>
    </div>
  );
}

function StartMenuItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 p-2 hover:bg-[#000080] hover:text-white cursor-pointer">
      <div className="w-4 h-4">{icon}</div>
      <span>{text}</span>
    </div>
  );
}