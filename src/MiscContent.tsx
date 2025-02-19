import React from 'react';
import { Film, Tv, Music, TrendingUp } from 'lucide-react';

const MiscContent = () => {
    const sections = [
        {
            title: "Movies",
            icon: <Film className="w-5 h-5 text-red-400" />,
            items: [
                "Memento",
                "No Country for Old Men",
                "Hateful Eight",
                "Tenet",
                "Fight Club"
            ],
            subtitles: [
                "Christopher Nolan - 2000",
                "Coen Brothers - 2007",
                "Quentin Tarantino - 2015",
                "Christopher Nolan - 2020",
                "David Fincher - 1999"
            ]
        },
        {
            title: "TV Shows",
            icon: <Tv className="w-5 h-5 text-red-400" />,
            items: [
                "Game of Thrones",
                "Better Caul Saul",
                "Succession",
                "Breaking Bad",
                "Atlanta"
            ]
        },
        {
            title: "Albums",
            icon: <Music className="w-5 h-5 text-red-400" />,
            items: [
                "channel ORANGE",
                "good kid, m.A.A.d city",
                "Graduation",
                "The House Is Burning",
                "Section.80",
                "Blue Slide Park",
                "Vince Staples",
                "Blonde",
                "CASE STUDY 01",
                "SOS",
            ],
            subtitles: [
                "Frank Ocean - 2012",
                "Kendrick Lamar - 2012",
                "Kanye West - 2007",
                "Isaiah Rashad - 2021",
                "Kendrick Lamar - 2011",
                "Mac Miller - 2011",
                "Vince Staples - 2021",
                "Frank Ocean - 2016",
                "Daniel Caesar - 2019",
                "SZA - 2022",
            ]
        },
        {
            title: "Players I'm Buying Stock In (2/8)",
            icon: <TrendingUp className="w-5 h-5 text-red-400" />,
            items: [
                "Ty Jerome - CLE",
                "Kel’el Ware - MIA",
                "Justin Edwards - PHI",
                "Quentin Grimes - PHI",
                "Jamal Shead - TOR",
                "Aaron Wiggins - OKC",
                "Santi Aldama - MEM",
                "Tari Eason - HOU",
                "Keon Ellis - SAC",
                "Toumani Camara - POR"
            ]
        }
    ];

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {sections.map((section, idx) => (
                    <div key={idx} className="bg-gray-900 rounded-lg p-6 transition-colors">
                        <div className="flex items-center space-x-2 mb-4 border-b border-gray-700 pb-2">
                            {section.icon}
                            <h3 className="text-xl font-bold text-white">
                                {section.title}
                            </h3>
                        </div>
                        <div className="space-y-2">
                            {section.items.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors cursor-pointer"
                                >
                                    <span className="text-red-400 text-sm">{(index + 1).toString().padStart(2, '0')}</span>
                                    <div>
                                        <span className="font-medium">{item}</span>
                                        {section.subtitles && section.subtitles[index] && (
                                            <span className="text-gray-500 text-sm ml-2">| {section.subtitles[index]}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MiscContent;