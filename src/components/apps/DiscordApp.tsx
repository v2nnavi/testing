import React, { useState } from 'react';

export default function DiscordApp() {
  const [activeChannel, setActiveChannel] = useState('general');
  const channels = ['general', 'random', 'announcements'];
  
  return (
    <div className="flex h-full bg-[#36393f]">
      {/* Servers sidebar */}
      <div className="w-[72px] bg-[#202225] p-2 flex flex-col gap-2">
        <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white cursor-pointer">
          D
        </div>
        <div className="w-12 h-12 bg-[#36393f] rounded-full flex items-center justify-center text-white hover:bg-[#3ba55c] cursor-pointer transition-colors">
          +
        </div>
      </div>

      {/* Channels sidebar */}
      <div className="w-60 bg-[#2f3136] text-[#8e9297]">
        <div className="p-4 border-b border-[#202225]">
          <h2 className="font-bold text-white">Discord Server</h2>
        </div>
        <div className="p-2">
          <div className="mb-2 text-sm uppercase font-semibold">Text Channels</div>
          {channels.map(channel => (
            <div
              key={channel}
              className={`flex items-center p-2 cursor-pointer rounded ${
                activeChannel === channel 
                  ? 'bg-[#393c43] text-white' 
                  : 'hover:bg-[#36393f] hover:text-[#dcddde]'
              }`}
              onClick={() => setActiveChannel(channel)}
            >
              # {channel}
            </div>
          ))}
        </div>
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col min-w-0">
        <div className="p-4 border-b border-[#202225] text-white font-semibold">
          # {activeChannel}
        </div>
        <div className="flex-1 p-4 text-[#dcddde] overflow-y-auto">
          <div className="mb-4">
            <span className="text-indigo-400 font-medium">User1</span>
            <span className="text-xs text-[#72767d] ml-2">Today at 12:00</span>
            <div>Welcome to #{activeChannel}!</div>
          </div>
          <div className="mb-4">
            <span className="text-indigo-400 font-medium">User2</span>
            <span className="text-xs text-[#72767d] ml-2">Today at 12:01</span>
            <div>Hey there! 👋</div>
          </div>
        </div>
        <div className="p-4 bg-[#36393f]">
          <input
            type="text"
            placeholder={`Message #${activeChannel}`}
            className="w-full bg-[#40444b] text-[#dcddde] rounded p-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>
    </div>
  );
}