import { Link } from 'react-router-dom'


const MobileNavbar = ({ setIsMenuOpen }) => {
    return (
        <div className='w-screen fixed top-0 z-20 lg:hidden'>
            <div className='w-1/2 h-screen flex flex-col p-8 bg-wallpaper2'>
                <Link
                    to='/'
                >
                    <svg version="1.0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="500.000000pt"
                        height="500.000000pt"
                        viewBox="0 0 500.000000 500.000000"
                        preserveAspectRatio="xMidYMid meet"
                        className='w-11 h-11 text-primary duration-200 hover:rotate-6 hover:text-purple-600'>
                        <metadata>
                            Created by potrace 1.16, written by Peter Selinger 2001-2019
                        </metadata>
                        <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                            fill="#000000"
                            stroke="none">
                            <path d="M2800 4519 c-50 -10 -159 -47 -177 -62 -8 -5 -57 -1 -135 13 -219 40
-462 30 -642 -27 -257 -81 -462 -296 -522 -546 -4 -19 -17 -33 -38 -42 -252
-108 -381 -200 -481 -340 -112 -158 -156 -326 -157 -595 -1 -137 11 -213 49
-307 l24 -62 -39 -53 c-105 -140 -155 -331 -132 -500 30 -214 144 -391 288
-444 63 -23 67 -27 104 -96 62 -117 203 -210 374 -248 65 -14 127 -20 230 -20
185 0 177 -8 184 183 3 78 4 170 2 204 l-3 63 -75 0 c-41 0 -90 6 -108 14 -70
29 -87 102 -38 157 26 30 32 31 127 38 l100 6 3 148 c1 81 6 147 10 148 63 5
141 7 155 3 10 -3 17 -15 17 -30 0 -62 60 -146 125 -175 85 -39 196 -14 253
57 15 18 34 59 43 91 l16 58 111 3 112 3 2 -213 3 -213 295 0 295 0 5 95 c6
104 18 136 56 150 48 19 84 12 115 -21 27 -28 28 -36 31 -127 l3 -97 298 -3
c278 -2 297 -1 298 15 0 10 1 54 2 98 l2 80 60 6 c71 7 113 26 150 71 42 50
58 95 53 154 -6 70 -36 122 -93 163 -39 28 -59 36 -114 40 l-66 6 -3 36 -3 36
98 6 c54 4 162 7 240 7 162 0 160 -1 201 90 77 172 84 508 16 724 -58 182
-155 318 -314 441 -64 49 -186 120 -250 145 -40 15 -51 28 -100 107 -185 300
-407 478 -684 548 -79 20 -121 25 -215 24 -64 -1 -136 -5 -161 -10z m304 -133
c40 -25 69 -90 61 -136 -9 -53 -58 -98 -116 -106 -43 -6 -46 -4 -72 30 -43 56
-97 40 -97 -29 0 -63 78 -125 157 -125 45 0 126 37 167 76 48 45 79 127 74
190 -3 30 -3 54 0 54 10 0 121 -67 170 -102 84 -62 193 -178 256 -273 32 -48
61 -95 63 -104 3 -12 -10 -21 -46 -34 -27 -9 -73 -33 -103 -53 -51 -35 -54
-35 -78 -19 -155 101 -311 86 -408 -40 -39 -51 -41 -86 -6 -114 32 -25 56 -16
86 35 24 41 56 60 118 69 38 5 54 1 100 -22 60 -31 60 -29 35 -121 -19 -71
-11 -131 25 -201 34 -67 134 -131 205 -131 40 0 110 30 143 61 29 27 33 37 30
72 -3 35 -7 43 -30 51 -23 8 -32 5 -67 -27 -30 -27 -50 -37 -74 -37 -45 0 -95
34 -113 75 -57 138 65 285 259 311 51 7 93 -9 221 -83 109 -64 240 -194 288
-288 103 -200 103 -314 -1 -408 -64 -58 -159 -97 -239 -97 -93 0 -151 93 -105
171 18 30 67 59 100 59 45 0 59 59 20 85 -21 13 -29 13 -75 0 -158 -47 -211
-221 -105 -344 57 -67 161 -88 274 -55 63 18 166 73 193 103 11 12 23 21 28
21 23 0 -2 -213 -36 -293 l-14 -34 -188 -6 c-104 -4 -228 -7 -276 -7 -52 0
-88 -4 -88 -10 0 -6 -47 -10 -122 -10 l-123 1 -39 57 c-41 62 -82 96 -143 118
-55 19 -92 17 -180 -11 -70 -22 -81 -29 -106 -67 -15 -23 -27 -52 -27 -64 0
-12 -7 -25 -16 -28 -9 -3 -98 -6 -198 -6 l-183 0 -6 83 c-4 45 -7 211 -7 368
l0 287 35 26 c59 45 115 66 180 66 167 0 262 -144 184 -278 -26 -46 -24 -78 7
-98 24 -16 27 -16 52 2 75 55 102 219 52 317 -85 169 -304 226 -477 125 -18
-11 -33 -18 -34 -16 -5 20 -8 115 -14 484 l-8 432 24 13 c13 7 62 23 109 36
103 28 261 28 304 -1z m-624 -44 l85 -18 5 -449 c3 -248 4 -453 3 -457 -2 -3
-27 3 -55 14 -68 26 -183 21 -243 -10 -47 -23 -120 -99 -136 -140 -6 -15 -11
-57 -11 -94 0 -71 25 -130 81 -190 43 -48 111 -32 111 25 0 8 -16 34 -35 57
-83 99 -64 188 50 241 73 34 170 15 221 -42 21 -24 22 -31 26 -506 l5 -482
-21 -5 c-12 -3 -92 -6 -178 -6 l-158 0 0 -80 c0 -73 -2 -82 -27 -110 -16 -16
-43 -33 -60 -36 -28 -6 -38 -1 -68 29 -34 34 -35 37 -35 116 l0 81 -90 0 c-87
0 -90 1 -96 24 -9 37 22 127 56 164 49 51 106 75 176 75 33 0 71 -6 83 -12 18
-10 27 -9 47 4 57 37 34 86 -52 111 -78 22 -147 15 -228 -25 -110 -54 -179
-152 -192 -273 l-7 -67 -56 -3 -56 -3 -5 -155 -5 -155 -56 -6 c-79 -8 -136
-48 -172 -119 -24 -46 -28 -63 -23 -108 10 -109 86 -188 190 -199 l56 -6 0
-107 0 -108 -35 -4 c-19 -2 -74 0 -122 4 -235 22 -386 116 -434 271 -16 50
-18 52 -60 59 -63 11 -143 53 -180 95 -82 94 -132 288 -110 428 17 102 86 237
161 311 33 33 60 62 60 66 0 4 -6 13 -13 20 -49 50 -97 164 -97 229 0 33 8 35
70 13 133 -47 312 44 354 180 29 93 4 193 -64 250 -39 32 -74 33 -94 4 -22
-32 -20 -41 19 -88 29 -34 35 -50 35 -87 0 -125 -140 -193 -272 -134 -26 12
-50 26 -53 30 -10 18 17 217 41 297 55 186 211 348 423 440 83 36 118 37 186
4 90 -45 125 -98 125 -188 0 -45 -5 -66 -21 -86 -56 -72 -169 -76 -169 -6 0
53 -53 79 -92 43 -24 -22 -24 -89 2 -131 59 -96 211 -104 307 -15 91 85 112
198 60 323 -26 63 -26 66 -9 90 25 34 98 70 143 70 46 0 95 -33 132 -88 22
-32 35 -42 56 -42 89 0 54 125 -57 202 -42 29 -56 33 -128 36 -71 3 -87 1
-130 -21 -27 -14 -66 -43 -87 -65 l-39 -39 -39 21 c-37 20 -39 23 -34 56 4 19
18 62 33 95 74 169 205 295 373 356 106 39 108 39 102 -16 -12 -103 46 -211
139 -258 87 -44 167 -32 222 33 30 36 29 74 -1 98 -23 17 -40 15 -62 -7 -36
-36 -59 -43 -96 -31 -66 22 -107 104 -90 180 13 61 23 64 185 56 80 -4 183
-15 230 -24z m956 -1766 c14 -11 16 -18 8 -26 -8 -8 -15 -7 -28 5 -31 31 -16
47 20 21z"/>
                            <path d="M3785 1626 c-74 -32 -135 -112 -135 -178 0 -56 -4 -57 -150 -60
l-135 -3 -3 -196 -2 -196 87 -6 c82 -5 89 -7 115 -36 36 -40 37 -89 4 -128
-22 -26 -31 -28 -113 -33 l-88 -5 -3 -199 -2 -198 202 4 c195 4 206 5 271 32
82 35 167 108 209 183 16 29 36 53 44 53 45 0 133 47 184 99 80 81 108 167
120 380 5 86 10 177 10 204 l0 47 -159 0 -159 0 -7 48 c-9 63 -26 101 -61 136
-60 60 -160 82 -229 52z m144 -141 c23 -22 26 -36 31 -118 l5 -92 158 -3 158
-3 -6 -107 c-8 -141 -29 -239 -63 -291 -33 -51 -104 -89 -183 -97 -59 -7 -79
-23 -79 -64 0 -63 -97 -156 -193 -185 -26 -8 -97 -15 -159 -16 l-113 -1 0 78
0 78 45 9 c132 26 215 174 164 295 -29 69 -97 122 -177 137 l-37 7 0 79 0 79
133 0 c90 0 137 4 145 12 7 7 12 45 12 99 0 86 1 88 32 114 26 22 39 26 67 21
19 -3 46 -17 60 -31z"/>
                            <path d="M1870 1285 c0 -132 -3 -177 -12 -179 -7 -2 -31 -9 -54 -15 -81 -22
-143 -82 -164 -162 -31 -114 70 -258 181 -259 24 0 39 -5 43 -16 3 -9 6 -83 6
-165 l0 -149 511 2 511 3 -1 150 c-1 83 2 155 6 161 5 6 26 14 48 17 96 15
182 125 171 219 -11 105 -80 180 -183 203 -18 3 -34 11 -34 16 -1 5 -3 14 -4
19 -1 6 -3 82 -4 170 l-1 160 -204 0 c-177 0 -205 -2 -210 -16 -3 -9 -6 -54
-6 -100 0 -76 -2 -87 -24 -109 -34 -34 -71 -41 -113 -21 -46 22 -63 66 -63
166 l0 80 -200 0 -200 0 0 -175z"/>
                        </g>
                    </svg>


                </Link>

                <ul>
                    <li className='mb-5'>
                        <a href="/" className='menu-item'>Inicio</a>
                    </li>
                    <li className='mb-5'>
                        <a href="/professionals" className='menu-item'>Professionales</a>
                    </li>
                    <li className='mb-5'>
                        <a href="/courses" className='menu-item'>Cursos</a>
                    </li>
                    <li className='mb-5'>
                        <a href="/about" className='menu-item'>Sobre Nosotros</a>
                    </li>
                    <li className='mb-5'>
                        <a href="/testimonios" className='menu-item'>Estudiantes</a>
                    </li>
                </ul>

                <Link to="/contact" className='h-10 bg-accent text-white text-lg px-6 rounded hover:bg-wallpaper hover:text-primary items-center p-2 justify-center md:block '> Contactanos</Link>
            </div>

            <div onClick={() => {
                setIsMenuOpen(false)
            }} className='w-screen h-screen bg-black/50 fixed top-0 -z-10' />

        </div>
    )
}

export default MobileNavbar