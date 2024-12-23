import React, { useState } from 'react';
import DesktopIcon from './DesktopIcon';
import Window from './Window';
import { ComputerDesktopIcon, DocumentTextIcon, FolderIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import DiscordApp from './apps/DiscordApp';

export default function Desktop() {
  const [windows, setWindows] = useState<Array<{ id: string; title: string; isOpen: boolean; isMaximized: boolean }>>([
    { id: 'computer', title: 'My Computer', isOpen: false, isMaximized: false },
    { id: 'documents', title: 'My Documents', isOpen: false, isMaximized: false },
    { id: 'programs', title: 'Program Files', isOpen: false, isMaximized: false },
    { id: 'discord', title: 'Discord', isOpen: false, isMaximized: false },
  ]);

  const toggleWindow = (id: string) => {
    setWindows(windows.map(win => 
      win.id === id ? { ...win, isOpen: !win.isOpen } : win
    ));
  };

  const closeWindow = (id: string) => {
    setWindows(windows.map(win => 
      win.id === id ? { ...win, isOpen: false, isMaximized: false } : win
    ));
  };

  const toggleMaximize = (id: string) => {
    setWindows(windows.map(win => 
      win.id === id ? { ...win, isMaximized: !win.isMaximized } : win
    ));
  };

  const getWindowContent = (id: string) => {
    switch (id) {
      case 'discord':
        return <DiscordApp />;
      default:
        return (
          <div className="p-4 bg-white">
            <h2 className="text-lg font-bold mb-4">Content for {windows.find(w => w.id === id)?.title}</h2>
            <p>This is a sample window content.</p>
          </div>
        );
    }
  };

  return (
    <div className="flex-1 bg-[#008080] p-2 relative bg-[url('/windows-bg.png')] bg-cover bg-center">
      <div className="grid grid-cols-1 gap-4 w-20">
        <DesktopIcon 
          icon={<ComputerDesktopIcon />} 
          label="My Computer" 
          onClick={() => toggleWindow('computer')} 
        />
        <DesktopIcon 
          icon={<DocumentTextIcon />} 
          label="My Documents" 
          onClick={() => toggleWindow('documents')} 
        />
        <DesktopIcon 
          icon={<FolderIcon />} 
          label="Program Files" 
          onClick={() => toggleWindow('programs')} 
        />
        <DesktopIcon 
          icon={<ChatBubbleLeftRightIcon />} 
          label="Discord" 
          onClick={() => toggleWindow('discord')} 
        />
      </div>

      {windows.map(window => (
        window.isOpen && (
          <Window
            key={window.id}
            title={window.title}
            isMaximized={window.isMaximized}
            onClose={() => closeWindow(window.id)}
            onMaximize={() => toggleMaximize(window.id)}
          >
            {getWindowContent(window.id)}
          </Window>
        )
      ))}
    </div>
  );
}