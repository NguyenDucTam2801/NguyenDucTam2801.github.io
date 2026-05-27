import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineAlert = () => {
    const isOnline = useOnlineStatus();

    if (isOnline) return null;

    return (
        <div className="fixed bottom-6 right-6 w-80 bg-[#1a1a1a] text-white p-4 rounded-xl border border-red-500/30 shadow-2xl flex items-center gap-3 z-50 animate-bounce">
            {/* Pulsing Red Offline Dot */}
            <div className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-red-500"></span>
            </div>

            <div className="flex-1">
                <h4 className="font-bold text-sm">You are offline</h4>
                <p className="text-xs text-gray-400">Some features may be unavailable.</p>
            </div>
        </div>
    );
};