import React from 'react';
import {PlayerInfo} from "./types";

interface ProfileHeaderProps {
    playerInfo: PlayerInfo,
    noam: string,
    handleResumeDownload: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
                                                         playerInfo,
                                                         noam,
                                                         handleResumeDownload
                                                     }) => {
    return (
        <div className="relative h-64 md:h-80 bg-gray-900">
            <div className="absolute inset-x-0 bottom-8 p-4 md:p-8 flex flex-col md:flex-row items-center md:items-end gap-4">
                <img
                    src={noam}
                    height={300}
                    width={300}
                    className="hidden md:block w-40 md:w-64 lg:w-72 h-auto -mb-8 md:-mb-16"
                    alt="Profile"
                />

                <div className="flex-1 text-center md:text-left">
                    <div className="text-gray-400 text-sm md:text-base mb-1 md:mb-2 font-light">
                        {playerInfo.topic1} | {playerInfo.topic2}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4 text-white font-serif">
                        {playerInfo.name}
                    </h1>
                </div>

                <button
                    onClick={handleResumeDownload}
                    className="px-4 md:px-6 py-2 border-2 border-red-400 text-red-500 text-sm md:text-base
                   rounded-full hover:bg-red-400 hover:text-white transition-colors"
                >
                    RESUME
                </button>
            </div>
        </div>
    );
};

export default ProfileHeader;