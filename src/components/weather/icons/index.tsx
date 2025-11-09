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

export const CurrLocIcon: React.FC<IconProps> = ({ className = 'w-[35px] h-[35px]' }) => (
    <svg
        className={className}
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect width="35" height="35" fill="url(#pattern0_17_271)"/>
        <defs>
            <pattern id="pattern0_17_271" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_17_271" transform="scale(0.0151515)"/>
            </pattern>
            <image
                id="image0_17_271"
                width="66"
                height="66"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE9klEQVR4nO2ca4hVVRTHf3PnRnStCLO3VghCWJGG9CAfQ1GovSDpYUFlBkF96EFlD8QeSESR0of62ocKsgzCz5aIQilmamn2mDIa0zC8zURONTmxaW1YbPY9s/c599xzxnv+sGDmzt5rrb3O2Xuv1x2oUBrUhLoaS4BB4HfgHroUE4BhYFTI/NygCzFNGcGS+azrMK0yxP+oDCGoDNHthjgO6AOuCDDEZcBVQC/H0OLvANYATVnsigBDrJDfDwHvAIvGq1FOBB4G9nkWG2MITT8IT+N/jAvcBhzwLOQf4GPgmgBDXA18Aox4xuyXN6S0OBv4yKP45+I+T0xxWJ4K3Afs8IxdC5xJyTATGHAU3QosAHracGsYHjcA25zxPwMzKAkWAkNKuT+BxwMOt/M8hjCfJaEOPAUcUXMGxeCFYoHsfavUd8AFgXNN6L1Hzd2d8Pa4uBD43jl/zAMpBDPkaVhlPgVOj+QxGVgldE7k3DOALUr+kGzRjuIs50z4rKBrbYLItnoMiG4dw1olvF+eTlGYBHyj9FnXKcGLlFBzaE2neEx3DtBb8xbYEIfGClyWko85KOcCLwBvCT0PzM6Qv3xS6XVAvNvc8JAStk2us1hcC3zpuTot7VLeZwx6xXexfB5JwSNYkL6ybiQejwH/JhjB0kjKhSxUPH6UoC/Xs2FHxJ1vsRg4GmAES0dT7HWj03bF43ZywNtKwNLIuacAv7V48rtkq/gCrF+BkyNl3avmv0cO2+KQUt5cWTF4wrPITcD5asxUYLNn3KORsiYqb/dwu7fHbKXYxhTzNzqL+0UiSxfGwAedsSYcj8V6Nd9kxdqGS+WqXJaSsbu4NxLGvumMNdd1LOYqfWdRIvzhLG55wtjlzlgTzxTiu0+NoHMDbw/XbzAJnFZY54z9IoB/TXSJ0b2RVJAdjrjeLH0tUWQSXvdcjdd5xs33XLGvjcF7CrA3hd7DvsJzTSrSoynJhNFJ6PPM+QtYKQfxHOAl4G/POPP3JKzOoHfTdelrGQ0x1lMz2+erFHx3MjZWtdMQyGuSZmvsDkyqPJiC9wMBfCc7ma5QMtHq3a2YNnI6LA1OinzrmhERZE87D8tO4JUIQ7xMCTFLOSjzMvA5zcl4t6LBFG68xry8HKq+jC6vxsoAQ7yYUcaGvFzsugQwaYMuNxI9PMbZ4FbFYjBJBV3NPHISa5SyJtTNgmcTDPF0Rt735xmGI+V9K2B7isSMxgktKuX75G9p0SP5jVwTM3VJf1khWctsd3kMcWdGnjcrXj/llapD8ohW0NaMzRs9kpyx/DZnfMvqTpout+Qt4uDo3geTecoCk5x5VfyLLAekwTOdTOfbRhBd+S5DgediJzwwOnYEH5ao5GectG+LKPnZ7piyFIF1UWdAdOsoZjptAVtSvBlTJJ+wOiC5E9IWYHKrpWgU6QcuCpxbczJLeyIbRfrV3BFpLSoU8503Y1i8w3qHWoeGymAEi0ukscvtprupjc1k13uayfYXuR1awbT6fdAi3bbUE6iFthcukUz2qCcT3vGDMQa3OD0Ueh9viGg4Xe+cP5YO5hVD5IHjJR+4t40tyKZM+JyE8eMOvdJO8K6qhscYwuQT3pfIN7cAqgijzAEuDzDElbI9jpnFJ6Frv7jiojKEoDKEoDKEoDKEoOEkU45061eibeG5KdSyINstqFX/NoHy4D9e/P+0/AvEkwAAAABJRU5ErkJggg=="
            />
        </defs>
    </svg>
);

export const HumidityIcon: React.FC<IconProps> = ({ className = 'w-[60px] h-[51px]' }) => (
    <svg
        className={className}
        viewBox="0 0 60 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect width="60" height="50.1266" fill="url(#pattern0_17_96)"/>
        <defs>
            <pattern id="pattern0_17_96" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_17_96" transform="scale(0.0126582 0.0151515)"/>
            </pattern>
            <image
                id="image0_17_96"
                width="79"
                height="66"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE8AAABCCAYAAAAWqotYAAAHZ0lEQVR4Xu1cS27jRhAl9UGW1g1GiyyCWHa0zM6+wfgG1g0yN0iOoLmBfAP5BKFvIMNeZEnfQEYSBAP98l65WuanyW6qZzXTBAiPqK6urldV1OA9NtPz8/NDmiZZkqQJjmwwGNyvcPDDqcd0Oh1vt9uPsL/GOcI5PRwO+HtYpWlvnaYp58+enp7uT/VBO/gZ7ff7j7vd7hpzjuFjjMs8c3zO8Tnv9/tZr9djTOsQXxcXFxIP5pRYMP9rSvAsk9L5XIHMfZyaQBDMDJMTNOcBHwRygQDvuiSMgcDPDRzMnE7eBywA4rJLwhDTFIm5RTyMiUVwPLDuh3QymfyhFZJgwFV1MRi0pNOm7DGQDQIZpOmNxcEj5mPGWWlrZg3zmUo8q/hCVaYLJIxA1qrEBKKgsbqKx4upNP07LlTih8rYnPE0JYxFgK4RwGA3rQD2yljw3ZpzSK+ag4b/bTazYZoS6V9sWcWiMr2urVgbxUCWAGEOEHLbHLwG0GcKBNqBxV9aCocQTAJOoKpgJWwbfLck4M/Pz2ZNNXeTyY9otR9mGMfkVhPGeSS5mvgSWIXJ7rVqFyUwm4JjppEBgsj2qGavZGYCUQfLpjlt16e/Tsebvzc3mKMxYW92e5w9/kMCQeUsu9zHWBhowZv3hDlX+YIR8+FwSD/WIqil2zYlWvsa13nyMH+lFXnz5025SyBtCdtsNrz5j0yL86bPVuSpfqyBOKEoDOAPGn9kWNU8tcUlFrYkAGM8zh9NL/C6LOx7GhvBC8h2BC+CF4BAgGmsvAheAAIBprHyIngBCASYxsqL4AUgEGAaKy+CF4BAgGmsvBDwwKtdga14aePeAuYXqhwMhnCD8PPqw1ac6o+xGFswxg+nzuOyIyuDMaMqDW9Y1s+nglnQFT7BgZVcVJJzCeqHfpzUT1MwZLGVIifnaD2gmYAwTRZd6PfqROQ2QZX9poSq0PFCwzdoGPyePN3cVzwpBWIlhhvzSa7O0O+5O+vnCCQpBeKy0WDJSnsnzIhYsGERsNJKh9EwisoTCcKajgErijSZqlFkWNfaiswCbVQgObK9dEQ6fkFykSSjBiAkJ098phpVXVCGC6TWmThpcdOKFJVUVygFQhab60uSLej0Ae3NIWSnod8r+ZSEGUmBLa4ayZmu7XoHBl146/Jxz7UpMbuq/WCQFt/+I/T7DHat9LsleNEV0I7UL1rb0dDizGyTXlJfe+kK6Xi2o5P2RwJIvzOeWsIcPtiej1jfAjEtqmx566/tT6Df+wCxSTwpOLYKJK6Fme+1RQhiq17SFoiPLyYM9y7G49BLpGsoYhGwxiLw/q+KBih8/3a/H/VRvph87aown6CKY1T6E4lSW0hasU0h6+rDjFdthh956xL9AjExJC+B3Bu8Uxf4LdtF8AKyG8GL4AUgEGAaKy+CF4BAgGmsvAheAAIBprHyIngBCASYxsqL4AUgEGAaKy8EPDALv8PePOH51TQGffryA1kYcGljs8YiARmw7qNpQSMxLIx8l6YDUEm7NUjVR1+WxLWeAmFKFualRsODcV31Wp5Kdzm4vLy85XO/ys21DQ/SS0gnwcdtUVewsf9GL8Hfu1NoLaXibqsstkvDIIsqT5u7xBObQOICufK9l17SFEjdV0kOKH7tpZd4ilgPcs8zBKSSjxQ8SvQ7s4drGU55iBv095qtSI0An69xHtvyrWWMrpCQjc2LShwrhq2suodt3wf9ZMkW8wyFoBRiFP7ox6bG3enT8fRzZH21xXjLIDt9a0nmCnbUZcyD3GZuVjR9lQ6ptDdNJjcVbP3B0Er6lKb9m/1hd9bhV8VbV9CkcZtVZ72EdDzOue92grpe0liZVcxIx1PZIx2f1wC1ZKR0yYgnWi3VjS2cXFrBN5Amf28J+8KEsSpLFamVzKri3jhrIK44zPfa+jPtGCp5pY0trDBWV7rD5pi/mjfHSIf5Oi04p9w4OlUU7+KPgH5tjcTm/1Q/ncHrEvy3PjaCF5DhCF4ELwCBANNYeRG8AAQCTGPlRfACEAgwjZUXwQtAIMA0Vl4ELwCBANNYeSHggZz8U+0z/OWTkdaXwnT1oXT8GHYkGakv8BVCxzdIqJ+867zV8fp055U+vE06S/wIrQS6DOMfTqHfq34Mi114YvURGsbPoP7LBehLv1sc1PYrOMDxot+bAinqCo7dC170u8WPvKvK9oon1TAmGTZ5yKuQLAtwOnXx/WR9WdGFhdkISK89Eo5NK0LMGj8qEdSe5vcpjDZNpkDMlrcSvNPv9VcHwYhtzcP8lXZkW7JVKlm77w3xmP/K/pi/YXMPO2xX6NW2K8hrkHDKA9aFduQtgOfxcNHxju0KxzedKRtu9ohITJV4rHR8k4Yhrw6yizSNDcLNLa2vD7K1cNc9Epp5oyt4b71iYVAvwRqomdTeKdVwe2nVZJy/thXO//ims0I7MoBl6E1Z9kh82bAS5XVIWtEMUtqRPwBUuyCDLhoC9b6sLwEr7nyS9lb9QpTC4fBfvEMqz9smdYLnvaLvcOD/FvLQ0UBul94AAAAASUVORK5CYII="
            />
        </defs>
    </svg>
);

export const PressureIcon: React.FC<IconProps> = ({ className = 'w-[58px] h-[58px]' }) => (
    <svg
        className={className}
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect width="58" height="58" fill="url(#pattern0_17_86)"/>
        <defs>
            <pattern id="pattern0_17_86" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_17_86" transform="scale(0.015625)"/>
            </pattern>
            <image
                id="image0_17_86"
                width="64"
                height="64"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export const SunriseIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
    <svg
        className={className}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect width="48" height="48" fill="url(#pattern0_17_114)"/>
        <defs>
            <pattern id="pattern0_17_114" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_17_114" transform="scale(0.02)"/>
            </pattern>
            <image
                id="image0_17_114"
                width="50"
                height="50"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAEWklEQVRoQ+1aTWgTQRTe2TTBSIsIiSAUiyIWTTZtDIoXpbUUDz0oOQqepC1aaxU8eFCJ9iQIaq0/VcGLHq0IIhQtRvRQWmqSJjXtRaiiCOZWKWnSzfrNdiMhzc9sdqf0sAtLJ9k3733f+5mZ7CsROF9er7efmkgkEvd4miI8lYPEgCIrtwVRIKIoXo7H4zd52eNGRJKk3lwu9xDA8zYUQsgFRGaIBxkuRGg6KYpyVwNMchiIgqDQzyAzwCPNTCfSKkk92VzukQb6Igjd0cZnMH7Ai4ypRJBO3UinEQ2smkYej0eNxOzsLJGkFqTbCk03ATVzHjUzbFaamUakFAkKspAI/Qy5HpBVI2YmGVOIIJ26kU4jtBbqRLEfnr6f93QxEY1MH8ioyzHI9EL+idHImEIEYH8CyHbc55BCah1UIqJF6iz+DqP4fyEFGzcEEZ/PdxhAHDMzM+PFgFYjkkONJNc4DfM6IJ/BvE8bgkglEJQITbkkit0o2ErzuSovVey8yFhEWD1batVinatHzooIq7esiLB6SpOzUovVYVZqsXpqHVOLHj8UnMGO6MSmS5x7jehCY0DYImLAeVymWhHh4lYDSq2IGHAel6ncI4KXdR+BfDN+lx/gwmAdN8T/77UsIgwe4J5a1qGRIQqFIswR2RoIbNklCEvT09NZPTY8nr2oEVF996tnXltbW93i4qID9pZY5jEph9L6VCr1AwoX7HZ7ZyQS+cOinMrUklp+v9+dyWTG8Bay0eVy7QiHw+lq9piIBAIBezqdnoSyViiPg0wHKxkQ0XWMpySy2ew4WhAS7EXcbvdBEFkxhQhVUmgAZOacTmf71NTU72oG9DwvspGEjaOsNpgikgejGpLhLVmRzCZjhATFp4tIicjEkMOHWHK4UmRQg5tQgxNIpxa9qZvXq5tIAZl3GO9BvTQV1ksoFBJHR0fb0f84DmB+yOwGOBvG8xhHbTbbq2AwGIYcfbetXngrvy0ryws2Ujdvt4u6FhNDROhk6kUsj/VYHlN5ZThXdWJ8C6B9pSNATyuENkRjuC+hwfM+L4cFxdXQ0PC31ujWFJFikABOQCKE769q6Rq1EfIY/egPDofjO5VfXl5uglw7CPTQFMJXeCzfiMeT1/Gdeh4zcplCBH3BQaTSFQCimxdtvT0rB04jfRrPhzB2Qn4Qm+U1IyToXMNEEIkuAHpDSSD/j8Visc8soGiXC+THKBn0EbtA/i3LvHIyhojQjRIpMw8wO2GgG559qgeMJLWiw5sZIUT85kq4msNC9Y2PCxFEIwgSL6E8ih9O+/XmOk0zdIQjK6gZROUEovJajyMKZQ1FBMePF1B2EndfcTeXFRDqi7aqaXf3OZxxinVesZwhIojIHLzajJXJg73kay0gUCteWZbjIJIEkX216FCLHWCi2nJYqw7+81a3HzS51X/OWXPBCRME6fEFT+gOXOUqVlNObXk1qzM0VKpYaR15iULJKuAm/wH1GCPmUJ/rfAAAAABJRU5ErkJggg=="
            />
        </defs>
    </svg>
);

export const SunsetIcon: React.FC<IconProps> = ({ className = 'w-12 h-12' }) => (
    <svg
        className={className}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect width="48" height="48" fill="url(#pattern0_17_109)"/>
        <defs>
            <pattern id="pattern0_17_109" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_17_109" transform="scale(0.02)"/>
            </pattern>
            <image
                id="image0_17_109"
                width="50"
                height="50"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD/ElEQVRoQ+2ZTUgUYRjH90OlDaXL2smSIBLaj9qk6FJoIh08FHsMOpUKmZnQoaBiy0MEUWj2oQVd6pgRRCEVbR8HUWxdVksvgQURtDdD1M3dfu82E8O2uu/MzpjBDCzz7swzz/P/P//neWfmHafD4s3v978mxNrx8fGdVoZyWulc+Pb5fBmxn5iYsDSWpc5tIgbKxFZENml2j8hmSrGzS0s2YXZpyWbKLq08mQoGg/50Ou3lMSSae3q50uK6hkwmk0okEm90CvCXuSnNzvNUAkA+vB/nUeSmNspSRDh+DLtep9P5lQRUrQoigDoKkH6HI+1wuUrayfANFVg+IoFAoA0Frwsbl8vViv2dVUFEgABcM+D6xJgsnyTLPfmetbBrxe6WQuIEJHqLJZGNaYYT1UcOmU7IdGsVsYqE6UQUZVrI+G2RJMrmDONLCtFO9lcVxTogmS0tszZTFVFB0fztNH+38l+NkX0voexMJ2GJIpoyU3vhDxFt75ilhOrHEkU0ynSgzDWlzE7T2JfNJrAiREQQUWZib3ZP5CbEUkWsyn4+vzaRlcy2TCxbEZksraSNrchKZlsmluWK2Gu/MjJobCxXxF5FsRUpkIHa2tp1mMyOjo6m9CTLaGnV1dWVzMzMlBFvViaeVI/gtDyZTH7B4XRpaWljLBb7LuNc2BghEgqFKhcWFgZ5f6nyer0bo9HoXKF4UkRQo3Rubm4YZ9txnoBMgywZiLzlugzLRHsLgRHnBYlUKvWS95gAf2OVlZW7IPKz0LVSRHIDQGbS4/HUj4yMfCsUQM95LQlifCTGPtkY0kSsJlMMCYFNF5E8ZOLU8G6ZGl5OGXpwDT04RDlt+126GyjdZ9J9aIiIhsxzxlvol2ptv0QiEdfAwEA9y0AHABbCZjPg3IynGI+53e5H4XA4il1aJcca8PrFxcVp7Kb0TiaqD92KqBeKLDI9ljM9JtVjPFc1Mr4C6OByCgA4zu8UixEvVDsmFG9FRcUPo+oaJqIFCnAnJCIcO6eU6xhA+/m9Kisr+yxs5+fnq7Gr51iLKCExkzG+CJkL7LNrXsVsphBhKbSLUjoLIHHzEovY95YCp5A+wvkexh7su5iazxdDwnCPaIOiRBOAnggS1P/+eDz+TgYUfbEH8oOCDEurTZB/KnPdUjZFKSJulJTMFGA2EaCZzN7VAwYlxTpxH0n4xOxXI3Pjs4QIaoQh8VDMRizA7dBb66LMIBMTPYMqB1HlsZ5EaG2LUoTHjwc4O8SvLfdLlSwg5aOP+HJ1n2Qclr0u164oIigySTZrmJl83Es+GAEhvj9yD0mIRxKIbDXiI9vsgBlTpkOjPv75dSRhyEl5vAeJuAP/z9vwLxEBFuY4HCkWAAAAAElFTkSuQmCC"
            />
        </defs>
    </svg>
);

export const UvIcon: React.FC<IconProps> = ({ className = 'w-[58px] h-[58px]' }) => (
    <svg
        className={className}
        viewBox="0 0 58 58"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect width="58" height="58" fill="url(#pattern0_17_81)" />
        <defs>
            <pattern id="pattern0_17_81" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_17_81" transform="scale(0.015625)" />
            </pattern>
            <image
                id="image0_17_81"
                width="64"
                height="64"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);

export const WindIcon: React.FC<IconProps> = ({ className = 'w-[60px] h-[60px]' }) => (
    <svg
        className={className}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
    >
        <rect width="60" height="59.2405" fill="url(#pattern0_17_91)" />
        <defs>
            <pattern id="pattern0_17_91" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlinkHref="#image0_17_91" transform="scale(0.0126582 0.0128205)" />
            </pattern>
            <image
                id="image0_17_91"
                width="79"
                height="78"
                preserveAspectRatio="none"
                xlinkHref="data:image/png;base64,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"
            />
        </defs>
    </svg>
);
