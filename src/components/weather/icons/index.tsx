import React from 'react';

interface IconProps {
        className?: string;
        size?: number;
}

export const SunnyIcon: React.FC<IconProps> = ({ className = "w-32 h-32" }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                    <filter id="sunShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#FF8C00" floodOpacity="0.4"/>
                    </filter>
            </defs>
            <g filter="url(#sunShadow)">
                    <circle cx="100" cy="100" r="50" fill="#FFA500" />
                    <line x1="100" y1="20" x2="100" y2="40" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
                    <line x1="100" y1="160" x2="100" y2="180" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
                    <line x1="180" y1="100" x2="160" y2="100" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
                    <line x1="40" y1="100" x2="20" y2="100" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
                    <line x1="157" y1="43" x2="143" y2="57" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
                    <line x1="57" y1="143" x2="43" y2="157" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
                    <line x1="157" y1="157" x2="143" y2="143" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
                    <line x1="57" y1="57" x2="43" y2="43" stroke="#FFA500" strokeWidth="8" strokeLinecap="round" />
            </g>
    </svg>
);

export const CloudyIcon: React.FC<IconProps> = ({ className = "w-32 h-32" }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                    <filter id="cloudShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.3"/>
                    </filter>
            </defs>
            <g filter="url(#cloudShadow)">
                    <path d="M60 120C60 97.9 77.9 80 100 80C122.1 80 140 97.9 140 120"
                          fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                    <ellipse cx="100" cy="120" rx="40" ry="30" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                    <ellipse cx="70" cy="125" rx="30" ry="25" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2"/>
                    <ellipse cx="130" cy="125" rx="30" ry="25" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2"/>
            </g>
    </svg>
);

export const PartlyCloudyIcon: React.FC<IconProps> = ({ className = "w-32 h-32" }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                    <filter id="partlySunShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FF8C00" floodOpacity="0.4"/>
                    </filter>
                    <filter id="partlyCloudShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.3"/>
                    </filter>
            </defs>
            <g filter="url(#partlySunShadow)">
                    <circle cx="80" cy="70" r="30" fill="#FFA500" />
                    <line x1="80" y1="25" x2="80" y2="35" stroke="#FFA500" strokeWidth="6" strokeLinecap="round" />
                    <line x1="120" y1="70" x2="110" y2="70" stroke="#FFA500" strokeWidth="6" strokeLinecap="round" />
                    <line x1="107" y1="43" x2="100" y2="50" stroke="#FFA500" strokeWidth="6" strokeLinecap="round" />
            </g>
            <g filter="url(#partlyCloudShadow)">
                    <path d="M70 130C70 110 85 95 105 95C125 95 140 110 140 130"
                          fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                    <ellipse cx="105" cy="130" rx="35" ry="25" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                    <ellipse cx="80" cy="135" rx="25" ry="20" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2"/>
                    <ellipse cx="130" cy="135" rx="25" ry="20" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2"/>
            </g>
    </svg>
);

export const RainyIcon: React.FC<IconProps> = ({ className = "w-32 h-32" }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                    <filter id="rainCloudShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.35"/>
                    </filter>
                    <filter id="rainDropShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0066CC" floodOpacity="0.4"/>
                    </filter>
            </defs>
            <g filter="url(#rainCloudShadow)">
                    <path d="M60 100C60 80 75 65 95 65C115 65 130 80 130 100"
                          fill="#B8B8B8" stroke="#A0A0A0" strokeWidth="2"/>
                    <ellipse cx="95" cy="100" rx="35" ry="25" fill="#B8B8B8" stroke="#A0A0A0" strokeWidth="2"/>
                    <ellipse cx="70" cy="105" rx="25" ry="20" fill="#A8A8A8" stroke="#909090" strokeWidth="2"/>
                    <ellipse cx="120" cy="105" rx="25" ry="20" fill="#A8A8A8" stroke="#909090" strokeWidth="2"/>
            </g>
            <g filter="url(#rainDropShadow)">
                    <line x1="75" y1="130" x2="70" y2="150" stroke="#4A90E2" strokeWidth="6" strokeLinecap="round" />
                    <line x1="95" y1="135" x2="90" y2="155" stroke="#4A90E2" strokeWidth="6" strokeLinecap="round" />
                    <line x1="115" y1="130" x2="110" y2="150" stroke="#4A90E2" strokeWidth="6" strokeLinecap="round" />
            </g>
    </svg>
);

export const SnowyIcon: React.FC<IconProps> = ({ className = "w-32 h-32" }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                    <filter id="snowCloudShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#000000" floodOpacity="0.3"/>
                    </filter>
                    <filter id="snowflakeShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#00BCD4" floodOpacity="0.4"/>
                    </filter>
            </defs>
            <g filter="url(#snowCloudShadow)">
                    <path d="M60 100C60 80 75 65 95 65C115 65 130 80 130 100"
                          fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                    <ellipse cx="95" cy="100" rx="35" ry="25" fill="#FFFFFF" stroke="#E0E0E0" strokeWidth="2"/>
                    <ellipse cx="70" cy="105" rx="25" ry="20" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2"/>
                    <ellipse cx="120" cy="105" rx="25" ry="20" fill="#F5F5F5" stroke="#D0D0D0" strokeWidth="2"/>
            </g>
            <g filter="url(#snowflakeShadow)">
                    <circle cx="75" cy="135" r="6" fill="#4DD0E1" stroke="#00BCD4" strokeWidth="2"/>
                    <circle cx="95" cy="140" r="6" fill="#4DD0E1" stroke="#00BCD4" strokeWidth="2"/>
                    <circle cx="115" cy="135" r="6" fill="#4DD0E1" stroke="#00BCD4" strokeWidth="2"/>
                    <circle cx="85" cy="155" r="6" fill="#4DD0E1" stroke="#00BCD4" strokeWidth="2"/>
                    <circle cx="105" cy="155" r="6" fill="#4DD0E1" stroke="#00BCD4" strokeWidth="2"/>
            </g>
    </svg>
);

export const ThunderstormIcon: React.FC<IconProps> = ({ className = "w-32 h-32" }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                    <filter id="stormCloudShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#000000" floodOpacity="0.5"/>
                    </filter>
                    <filter id="lightningShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFD700" floodOpacity="0.6"/>
                    </filter>
            </defs>
            <g filter="url(#stormCloudShadow)">
                    <path d="M60 90C60 70 75 55 95 55C115 55 130 70 130 90"
                          fill="#606060" stroke="#505050" strokeWidth="2"/>
                    <ellipse cx="95" cy="90" rx="35" ry="25" fill="#606060" stroke="#505050" strokeWidth="2"/>
                    <ellipse cx="70" cy="95" rx="25" ry="20" fill="#555555" stroke="#454545" strokeWidth="2"/>
                    <ellipse cx="120" cy="95" rx="25" ry="20" fill="#555555" stroke="#454545" strokeWidth="2"/>
            </g>
            <g filter="url(#lightningShadow)">
                    <path d="M100 110L85 135H95L90 160L110 130H100L105 110H100Z"
                          fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
            </g>
    </svg>
);

export const FoggyIcon: React.FC<IconProps> = ({ className = "w-32 h-32" }) => (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                    <filter id="fogShadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.25"/>
                    </filter>
            </defs>
            <g filter="url(#fogShadow)">
                    <line x1="40" y1="80" x2="160" y2="80" stroke="#D8D8D8" strokeWidth="10" strokeLinecap="round" opacity="0.9" />
                    <line x1="50" y1="100" x2="150" y2="100" stroke="#C8C8C8" strokeWidth="10" strokeLinecap="round" opacity="0.95" />
                    <line x1="40" y1="120" x2="160" y2="120" stroke="#D8D8D8" strokeWidth="10" strokeLinecap="round" opacity="0.9" />
                    <line x1="50" y1="140" x2="150" y2="140" stroke="#C8C8C8" strokeWidth="10" strokeLinecap="round" opacity="0.85" />
            </g>
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

export const RecentlyIcon: React.FC<IconProps> = ({ className = "w-5 h-5" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M12 7V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const WeatherAppIcon: React.FC<IconProps> = ({ className = "w-10 h-10" }) => (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="35" r="20" fill="#FFA500" />
            <line x1="50" y1="10" x2="50" y2="17" stroke="#FFA500" strokeWidth="4" strokeLinecap="round" />
            <line x1="75" y1="35" x2="68" y2="35" stroke="#FFA500" strokeWidth="4" strokeLinecap="round" />
            <line x1="68" y1="20" x2="63" y2="25" stroke="#FFA500" strokeWidth="4" strokeLinecap="round" />
            <path d="M35 60C35 48 43 40 55 40C67 40 75 48 75 60" fill="#E0E0E0" />
            <ellipse cx="55" cy="60" rx="20" ry="15" fill="#E0E0E0" />
            <ellipse cx="40" cy="63" rx="15" ry="12" fill="#D0D0D0" />
            <ellipse cx="70" cy="63" rx="15" ry="12" fill="#D0D0D0" />
    </svg>
);