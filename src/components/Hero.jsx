export default function Hero() {
  const treeSvgStr = `<svg id="tree-svg" viewBox="-20 -60 540 780" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
    <defs>
      <!-- Trunk gradient for depth -->
      <linearGradient id="trunk-grad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#2a1610"/>
        <stop offset="35%" stop-color="#4a2a18"/>
        <stop offset="70%" stop-color="#6b3d1e"/>
        <stop offset="100%" stop-color="#3a1c0d"/>
      </linearGradient>
      <!-- Bark texture highlight -->
      <linearGradient id="bark-hl" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#8c5530" stop-opacity="0.8"/>
        <stop offset="100%" stop-color="#a86840" stop-opacity="0.1"/>
      </linearGradient>
      
      <!-- Blossom gradients for soft, voluminous feel -->
      <radialGradient id="blossom-base" cx="40%" cy="30%" r="60%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9"/>
        <stop offset="40%" stop-color="#fce4ee" stop-opacity="0.85"/>
        <stop offset="85%" stop-color="#f2a8be" stop-opacity="0.6"/>
        <stop offset="100%" stop-color="#e07898" stop-opacity="0.1"/>
      </radialGradient>
      <radialGradient id="blossom-dark" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#f5b8cc" stop-opacity="0.85"/>
        <stop offset="70%" stop-color="#e890a8" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="#d4637e" stop-opacity="0.0"/>
      </radialGradient>
      <radialGradient id="blossom-light" cx="30%" cy="30%" r="50%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
        <stop offset="50%" stop-color="#fce8f0" stop-opacity="0.7"/>
        <stop offset="100%" stop-color="#f9d0e0" stop-opacity="0.1"/>
      </radialGradient>

      <!-- Drop shadow for the entire canopy to add depth against the background -->
      <filter id="canopy-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="15" flood-color="#ca8a9b" flood-opacity="0.15" />
      </filter>
    </defs>

    <!-- ══ STYLISED ORGANIC TRUNK ══ -->
    <g filter="drop-shadow(0px 8px 12px rgba(42, 22, 16, 0.25))">
      <!-- Base shadow thickness -->
      <path d="M230 720 C222 680 215 630 220 580 C225 530 240 490 255 460 C270 430 288 410 285 370 C282 330 265 300 258 260 C250 220 270 180 290 140" stroke="#1c0b05" stroke-width="76" stroke-linecap="round" fill="none" />
      
      <!-- Main body block -->
      <path d="M230 720 C222 680 215 630 220 580 C225 530 240 490 255 460 C270 430 288 410 285 370 C282 330 265 300 258 260 C250 220 270 180 290 140" stroke="url(#trunk-grad)" stroke-width="64" stroke-linecap="round" fill="none" />
      
      <!-- Texture stroke (bark ridges) -->
      <path d="M236 718 C230 680 226 630 230 580 C234 530 248 490 261 460 C274 430 291 410 288 370 C285 330 270 300 264 260 C258 220 275 180 292 144" stroke="url(#bark-hl)" stroke-width="24" stroke-linecap="round" fill="none" />
      <path d="M222 715 C215 675 208 625 212 580 C216 535 232 495 245 465 C258 435 276 415 274 375 C272 335 258 305 250 265" stroke="#3a1c0d" stroke-width="12" stroke-linecap="round" fill="none" opacity="0.6"/>
      <path d="M242 700 C238 660 234 620 238 580 C242 540 258 500 272 470 C284 445 295 425 292 390" stroke="#b0744e" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.4"/>
    </g>

    <!-- ══ MAJOR BRANCHES ══ -->
    <g filter="drop-shadow(0px 4px 6px rgba(42, 22, 16, 0.2))">
      <!-- Left thick cascade branch -->
      <path d="M255 460 C230 460 190 465 140 445 C90 425 50 405 10 395 C-20 385 -45 385 -55 390" stroke="#25120a" stroke-width="32" stroke-linecap="round" fill="none" />
      <path d="M255 460 C230 460 190 465 140 445 C90 425 50 405 10 395 C-20 385 -45 385 -55 390" stroke="url(#trunk-grad)" stroke-width="24" stroke-linecap="round" fill="none" />
      <path d="M248 456 C220 456 180 461 135 442 C90 423 55 403 15 393" stroke="url(#bark-hl)" stroke-width="10" stroke-linecap="round" fill="none" opacity="0.8"/>
      
      <!-- Sub-branches Left -->
      <path d="M140 445 C120 420 100 395 80 375 C60 350 40 330 35 310" stroke="#3a1c0d" stroke-width="14" stroke-linecap="round" fill="none" />
      <path d="M10 395 C0 370 -10 350 -25 330" stroke="#3a1c0d" stroke-width="10" stroke-linecap="round" fill="none" />
      
      <!-- Right extended branch -->
      <path d="M285 370 C310 350 350 335 390 325 C430 315 470 310 510 315 C540 320 560 330 570 340" stroke="#25120a" stroke-width="28" stroke-linecap="round" fill="none" />
      <path d="M285 370 C310 350 350 335 390 325 C430 315 470 310 510 315 C540 320 560 330 570 340" stroke="url(#trunk-grad)" stroke-width="20" stroke-linecap="round" fill="none" />
      <path d="M292 365 C315 345 352 331 390 322 C428 313 468 308 505 313" stroke="url(#bark-hl)" stroke-width="8" stroke-linecap="round" fill="none" opacity="0.8"/>
      
      <!-- Sub-branches Right -->
      <path d="M390 325 C405 300 420 275 435 255" stroke="#3a1c0d" stroke-width="12" stroke-linecap="round" fill="none" />
      <path d="M510 315 C515 295 520 275 515 250" stroke="#3a1c0d" stroke-width="10" stroke-linecap="round" fill="none" />

      <!-- Back Left mid branch -->
      <path d="M258 260 C230 250 190 235 150 220 C110 205 70 195 40 190" stroke="#2a1610" stroke-width="22" stroke-linecap="round" fill="none" />
      <path d="M258 260 C230 250 190 235 150 220 C110 205 70 195 40 190" stroke="#4a2a18" stroke-width="16" stroke-linecap="round" fill="none" />
      <path d="M150 220 C130 195 110 170 100 145" stroke="#3a1c0d" stroke-width="10" stroke-linecap="round" fill="none" />

      <!-- Top Right balancing branch -->
      <path d="M265 185 C295 165 335 150 375 140 C415 130 455 125 485 130" stroke="#25120a" stroke-width="18" stroke-linecap="round" fill="none" />
      <path d="M265 185 C295 165 335 150 375 140 C415 130 455 125 485 130" stroke="#5a301a" stroke-width="12" stroke-linecap="round" fill="none" />
      <path d="M375 140 C385 115 400 95 415 75" stroke="#3a1c0d" stroke-width="8" stroke-linecap="round" fill="none" />

      <!-- Crown apices -->
      <path d="M290 140 C285 110 275 80 270 50 C265 20 270 -10 280 -40" stroke="#2a1610" stroke-width="16" stroke-linecap="round" fill="none" />
      <path d="M290 140 C285 110 275 80 270 50 C265 20 270 -10 280 -40" stroke="#6b3d1e" stroke-width="10" stroke-linecap="round" fill="none" />
      <path d="M270 50 C250 30 230 15 210 -5" stroke="#3a1c0d" stroke-width="8" stroke-linecap="round" fill="none" />
    </g>

    <!-- ══ LUSH BLOSSOM CANOPY ══ -->
    <g filter="url(#canopy-shadow)">
      
      <!-- BACK LAYER (Darker, smaller clusters for depth) -->
      <g>
        <!-- Left lowest -->
        <circle cx="20" cy="460" r="45" fill="url(#blossom-dark)" />
        <circle cx="80" cy="470" r="50" fill="url(#blossom-dark)" />
        <circle cx="-30" cy="420" r="40" fill="url(#blossom-dark)" />
        <!-- Right lowest -->
        <circle cx="560" cy="370" r="40" fill="url(#blossom-dark)" />
        <circle cx="490" cy="380" r="45" fill="url(#blossom-dark)" />
        <!-- Left mid -->
        <circle cx="30" cy="230" r="50" fill="url(#blossom-dark)" />
        <circle cx="90" cy="260" r="55" fill="url(#blossom-dark)" />
        <!-- Right mid -->
        <circle cx="480" cy="180" r="50" fill="url(#blossom-dark)" />
        <!-- Crown back -->
        <circle cx="210" cy="-10" r="50" fill="url(#blossom-dark)" />
        <circle cx="330" cy="-20" r="45" fill="url(#blossom-dark)" />
      </g>

      <!-- MID LAYER (Main volumetric body) -->
      <g>
        <!-- Far left cascade -->
        <circle cx="0" cy="380" r="70" fill="url(#blossom-base)" />
        <circle cx="60" cy="410" r="80" fill="url(#blossom-base)" />
        <circle cx="120" cy="400" r="75" fill="url(#blossom-base)" />
        <circle cx="160" cy="460" r="60" fill="url(#blossom-base)" />
        <circle cx="35" cy="320" r="65" fill="url(#blossom-base)" />
        <circle cx="-25" cy="340" r="55" fill="url(#blossom-base)" />
        
        <!-- Right extended branch -->
        <circle cx="350" cy="330" r="70" fill="url(#blossom-base)" />
        <circle cx="420" cy="310" r="85" fill="url(#blossom-base)" />
        <circle cx="490" cy="300" r="80" fill="url(#blossom-base)" />
        <circle cx="550" cy="320" r="65" fill="url(#blossom-base)" />
        <circle cx="440" cy="245" r="55" fill="url(#blossom-base)" />
        <circle cx="520" cy="250" r="60" fill="url(#blossom-base)" />
        
        <!-- Left mid structure -->
        <circle cx="130" cy="220" r="75" fill="url(#blossom-base)" />
        <circle cx="80" cy="180" r="70" fill="url(#blossom-base)" />
        <circle cx="170" cy="160" r="60" fill="url(#blossom-base)" />
        <circle cx="40" cy="170" r="55" fill="url(#blossom-base)" />
        
        <!-- Right top counterbalance -->
        <circle cx="360" cy="150" r="70" fill="url(#blossom-base)" />
        <circle cx="410" cy="110" r="75" fill="url(#blossom-base)" />
        <circle cx="470" cy="130" r="65" fill="url(#blossom-base)" />
        <circle cx="390" cy="70" r="50" fill="url(#blossom-base)" />
        
        <!-- Crown / Top sweeping crest -->
        <circle cx="280" cy="70" r="95" fill="url(#blossom-base)" />
        <circle cx="230" cy="40" r="85" fill="url(#blossom-base)" />
        <circle cx="330" cy="30" r="80" fill="url(#blossom-base)" />
        <circle cx="270" cy="-20" r="70" fill="url(#blossom-base)" />
        <circle cx="210" cy="-30" r="60" fill="url(#blossom-base)" />
        <circle cx="320" cy="-50" r="55" fill="url(#blossom-base)" />
        <circle cx="260" cy="-60" r="50" fill="url(#blossom-base)" />
      </g>

      <!-- FOREGROUND LAYER (Bright, crisp highlights rendering individual clustered pop) -->
      <g>
        <!-- Left highlights -->
        <circle cx="70" cy="390" r="45" fill="url(#blossom-light)" />
        <circle cx="10" cy="360" r="35" fill="url(#blossom-light)" />
        <circle cx="130" cy="375" r="40" fill="url(#blossom-light)" />
        <circle cx="45" cy="300" r="30" fill="url(#blossom-light)" />
        <circle cx="120" cy="200" r="40" fill="url(#blossom-light)" />
        <circle cx="60" cy="155" r="35" fill="url(#blossom-light)" />
        
        <!-- Right highlights -->
        <circle cx="430" cy="290" r="50" fill="url(#blossom-light)" />
        <circle cx="500" cy="285" r="45" fill="url(#blossom-light)" />
        <circle cx="360" cy="310" r="35" fill="url(#blossom-light)" />
        <circle cx="540" cy="300" r="30" fill="url(#blossom-light)" />
        <circle cx="410" cy="95" r="40" fill="url(#blossom-light)" />
        <circle cx="460" cy="115" r="35" fill="url(#blossom-light)" />
        
        <!-- Crown highlights -->
        <circle cx="270" cy="45" r="55" fill="url(#blossom-light)" />
        <circle cx="225" cy="20" r="45" fill="url(#blossom-light)" />
        <circle cx="330" cy="10" r="40" fill="url(#blossom-light)" />
        <circle cx="280" cy="-30" r="35" fill="url(#blossom-light)" />
      </g>

      <!-- TINY ACCENT PETAL CLUSTERS (Adding crisp detail) -->
      <g fill="#ffffff" opacity="0.8">
        <circle cx="260" cy="30" r="5" /><circle cx="265" cy="38" r="4" /><circle cx="255" cy="35" r="3" />
        <circle cx="425" cy="285" r="6" /><circle cx="435" cy="290" r="4" />
        <circle cx="65" cy="385" r="5" /><circle cx="75" cy="380" r="4" /><circle cx="68" cy="395" r="3" />
        <circle cx="220" cy="10" r="4" /><circle cx="320" cy="0" r="5" />
        <circle cx="115" cy="195" r="5" /><circle cx="125" cy="190" r="3" />
        <circle cx="405" cy="85" r="4" /><circle cx="415" cy="90" r="5" />
      </g>

      <!-- SCATTERED FALLING PETALS (Larger and softer) -->
      <g fill="#f2a8be" opacity="0.9">
        <path d="M 360 -40 Q 365 -45 370 -40 Q 365 -35 360 -40" transform="rotate(15 360 -40)" />
        <path d="M 180 -10 Q 186 -16 190 -10 Q 184 -4 180 -10" transform="rotate(-25 180 -10)" />
        <path d="M 160 80 Q 168 72 175 80 Q 166 86 160 80" transform="rotate(45 160 80)" />
        <path d="M -70 280 Q -64 274 -60 280 Q -66 286 -70 280" transform="rotate(-15 -70 280)" />
        <path d="M 150 510 Q 158 502 165 510 Q 156 516 150 510" transform="rotate(30 150 510)" />
        <path d="M 580 210 Q 588 202 595 210 Q 586 216 580 210" transform="rotate(-40 580 210)" />
        <path d="M 390 460 Q 398 452 405 460 Q 396 466 390 460" transform="rotate(20 390 460)" />
        <path d="M 330 200 Q 338 192 345 200 Q 336 206 330 200" transform="rotate(-10 330 200)" />
        <path d="M 230 500 Q 238 492 245 500 Q 236 506 230 500" transform="rotate(55 230 500)" />
      </g>
    </g>

    <!-- GRASS TUFTS IN POT (More detailed and organic) -->
    <g strokeLinecap="round" fill="none" opacity="0.85">
      <path d="M185 715 C182 690 178 670 172 650" stroke="#3d6e24" strokeWidth="4" />
      <path d="M192 715 C190 695 188 675 185 655" stroke="#4a8030" strokeWidth="3" />
      <path d="M205 714 C203 692 201 672 198 652" stroke="#5b9c3a" strokeWidth="3" />
      <path d="M212 714 C211 690 210 670 208 650" stroke="#4a8030" strokeWidth="4" />
      <path d="M235 713 C236 690 238 670 242 650" stroke="#3d6e24" strokeWidth="4" />
      <path d="M245 714 C247 692 249 672 254 652" stroke="#5b9c3a" strokeWidth="3" />
      <path d="M262 714 C265 695 268 675 273 655" stroke="#4a8030" strokeWidth="3" />
      <path d="M272 715 C276 690 280 670 286 650" stroke="#3d6e24" strokeWidth="4" />
      <path d="M305 714 C307 692 309 672 312 652" stroke="#4a8030" strokeWidth="3" />
      <path d="M315 715 C318 690 322 670 328 650" stroke="#5b9c3a" strokeWidth="4" />
    </g>

    <!-- Soil surface in pot -->
    <ellipse cx="248" cy="716" rx="108" ry="14" fill="#241005" opacity="0.4" />
    <ellipse cx="248" cy="713" rx="92" ry="9" fill="#3a1c0d" opacity="0.5" />
    <path d="M165 715 C190 705 306 705 331 715 C310 720 186 720 165 715 Z" fill="#180a02" opacity="0.3"/>
  </svg>`;

  return (
    <section id="hero">
      <div className="hero-text">
        <p className="h-eyebrow">Full Stack Developer · Dehradun, India</p>
        <h1 className="h-name">Vaibhav<em>Rawat</em></h1>
        <p className="h-role">Building products end-to-end · 3+ years · React · Node.js · Cloud</p>
        <p className="h-desc">Full Stack Developer shipping web applications from interactive React frontends to scalable
          Node.js backends and cloud-integrated pipelines. EdTech · B2B SaaS · Compliance Tooling.</p>
        <div className="h-links">
          <a href="mailto:vaibhavr325@gmail.com">vaibhavr325@gmail.com</a>
          <a href="https://linkedin.com/in/vaibhavrawatt" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/va1bhav-rawat" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </div>
        <a
          className="h-resume"
          href="https://drive.google.com/file/d/1Bd4ddgQUO1Zr-5vAXiUxXyE1U4DVzJ-u/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume ↓
        </a>
      </div>
      <div className="tree-scene">
        <div className="bonsai-display">
          <div id="tree-wrap" dangerouslySetInnerHTML={{ __html: treeSvgStr }} />
          <div className="bonsai-pot">
            <div className="pot-body">
              <div className="pot-lip"></div>
              <div className="pot-glaze-line"></div>
            </div>
            <div className="pot-feet">
              <div className="pot-foot"></div>
              <div className="pot-foot"></div>
              <div className="pot-foot"></div>
            </div>
            <div className="pot-shadow-floor"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
