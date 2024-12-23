import React, { useState, useRef, useEffect } from 'react';
import { XMarkIcon, MinusIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/solid';

interface WindowProps {
  children: React.ReactNode;
  title: string;
  isMaximized: boolean;
  onClose: () => void;
  onMaximize: () => void;
}

export default function Window({ children, title, isMaximized, onClose, onMaximize }: WindowProps) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMaximized) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset, isMaximized]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (windowRef.current && !isMaximized) {
      const rect = windowRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
    }
  };

  const windowStyle = isMaximized
    ? {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 'calc(100vh - 40px)', // Subtract taskbar height
        width: '100%',
        zIndex: 10,
      } as React.CSSProperties
    : {
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: '500px',
        height: '300px',
        zIndex: 10,
      } as React.CSSProperties;

  return (
    <div
      ref={windowRef}
      style={windowStyle}
      className="bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] flex flex-col"
    >
      <div
        className="bg-[#000080] text-white px-2 py-1 flex items-center justify-between cursor-move"
        onMouseDown={handleMouseDown}
      >
        <span className="select-none">{title}</span>
        <div className="flex gap-1">
          <button
            className="w-6 h-6 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] flex items-center justify-center hover:bg-[#d4d4d4] active:border-[#808080] active:border-b-white active:border-r-white"
            onClick={onMaximize}
          >
            <ArrowsPointingOutIcon className="w-4 h-4 text-black" />
          </button>
          <button
            className="w-6 h-6 bg-[#c0c0c0] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] flex items-center justify-center hover:bg-[#d4d4d4] active:border-[#808080] active:border-b-white active:border-r-white"
            onClick={onClose}
          >
            <XMarkIcon className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}