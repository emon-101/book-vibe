import { useEffect, useState } from "react";

export default function ErrorPage() {
  const [glitch, setGlitch] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const tailwind = document.createElement("script");
    tailwind.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(tailwind);

    const daisyLink = document.createElement("link");
    daisyLink.rel = "stylesheet";
    daisyLink.href = "https://cdn.jsdelivr.net/npm/daisyui@4.12.10/dist/full.min.css";
    document.head.appendChild(daisyLink);

    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap";
    document.head.appendChild(font);

    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 180);
    }, 3200);

    const dotsInterval = setInterval(() => {
      setDots((p) => (p.length >= 3 ? "" : p + "."));
    }, 500);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        .font-bebas { font-family: 'Bebas Neue', cursive !important; }
        .font-dm  { font-family: 'DM Mono', monospace !important; }

        .glitch-text {
          position: relative;
          display: inline-block;
          font-family: 'Bebas Neue', cursive;
          font-size: clamp(100px, 22vw, 180px);
          line-height: 1;
          letter-spacing: -2px;
          background: linear-gradient(135deg, #f97316 0%, #ef4444 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          user-select: none;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: '404';
          position: absolute;
          top: 0; left: 0;
          font-family: 'Bebas Neue', cursive;
          font-size: inherit;
          letter-spacing: inherit;
          line-height: inherit;
          -webkit-text-fill-color: transparent;
        }
        .glitch-active::before {
          background: linear-gradient(135deg, #06b6d4, #3b82f6);
          -webkit-background-clip: text;
          background-clip: text;
          animation: gb .18s steps(2) forwards;
        }
        .glitch-active::after {
          background: linear-gradient(135deg, #f43f5e, #f97316);
          -webkit-background-clip: text;
          background-clip: text;
          animation: ga .18s steps(2) forwards;
        }
        @keyframes gb {
          0%   { clip-path: inset(0 0 85% 0); transform: translate(-4px,2px); }
          50%  { clip-path: inset(40% 0 40% 0); transform: translate(4px,-2px); }
          100% { clip-path: inset(80% 0 5% 0); transform: translate(-2px,0); }
        }
        @keyframes ga {
          0%   { clip-path: inset(60% 0 10% 0); transform: translate(4px,0); }
          50%  { clip-path: inset(20% 0 60% 0); transform: translate(-4px,2px); }
          100% { clip-path: inset(5% 0 80% 0); transform: translate(2px,-2px); }
        }
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(28px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes scanline { 0%{top:-5%} 100%{top:105%} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }

        .anim-0 { animation: fadeUp .65s cubic-bezier(.22,1,.36,1) both; }
        .anim-1 { animation: fadeUp .65s .1s cubic-bezier(.22,1,.36,1) both; }
        .anim-2 { animation: fadeUp .65s .2s cubic-bezier(.22,1,.36,1) both; }
        .anim-3 { animation: fadeUp .65s .3s cubic-bezier(.22,1,.36,1) both; }
        .anim-4 { animation: fadeUp .65s .4s cubic-bezier(.22,1,.36,1) both; }

        .cursor-blink {
          display:inline-block; width:8px; height:15px;
          background:#f97316; vertical-align:middle;
          border-radius:1px; animation: blink 1s step-end infinite;
        }
        .scanline {
          position:absolute; left:0; right:0; height:2px;
          background:linear-gradient(90deg,transparent,rgba(249,115,22,.25),transparent);
          animation: scanline 4s linear infinite;
          pointer-events:none;
        }
        .float-el { animation: float 4s ease-in-out infinite; }
        .grid-bg {
          background-image:
            linear-gradient(rgba(249,115,22,.05) 1px, transparent 1px),
            linear-gradient(90deg,rgba(249,115,22,.05) 1px, transparent 1px);
          background-size: 48px 48px;
        }
      `}</style>

      <div
        data-theme="night"
        className="grid-bg relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12"
        style={{ background: "#0d0f14" }}
      >
        {/* Glow orbs */}
        <div className="absolute rounded-full pointer-events-none" style={{ width:500,height:500,top:"-15%",right:"-8%",background:"radial-gradient(circle,rgba(249,115,22,.12) 0%,transparent 70%)",filter:"blur(60px)" }} />
        <div className="absolute rounded-full pointer-events-none" style={{ width:400,height:400,bottom:"-12%",left:"-6%",background:"radial-gradient(circle,rgba(239,68,68,.1) 0%,transparent 70%)",filter:"blur(60px)" }} />

        <div
          className="card w-full max-w-lg shadow-2xl anim-0"
          style={{ background:"rgba(20,24,35,.88)", border:"1px solid rgba(249,115,22,.18)", backdropFilter:"blur(16px)" }}
        >
          <div className="card-body items-center text-center gap-5 py-10 px-8">

            {/* Badge */}
            <div className="float-el anim-0">
              <div className="badge badge-error badge-outline gap-2 px-4 py-3 font-dm text-xs tracking-widest">
                <span className="inline-block w-2 h-2 rounded-full bg-error animate-pulse" />
                SYSTEM ERROR
              </div>
            </div>

            {/* 404 glitch */}
            <div className="anim-1">
              <span className={`glitch-text${glitch ? " glitch-active" : ""}`}>404</span>
            </div>

            {/* Divider */}
            <div className="divider divider-warning w-full my-0 anim-1">
              <span className="font-dm text-warning text-xs tracking-widest opacity-70">NOT FOUND</span>
            </div>

            {/* Heading */}
            <div className="anim-2">
              <h1 className="font-bebas text-4xl text-base-content tracking-wide mb-2">
                Page Has Gone Missing
              </h1>
              <p className="font-dm text-sm text-base-content/50 leading-relaxed" style={{ minHeight:"1.4em" }}>
                The resource you requested could not be located{dots}
              </p>
            </div>

            {/* Terminal */}
            <div
              className="mockup-code w-full text-left anim-3"
              style={{ background:"rgba(10,12,20,.95)", border:"1px solid rgba(249,115,22,.2)", position:"relative", overflow:"hidden" }}
            >
              <div className="scanline" />
              <pre data-prefix="$"><code className="font-dm text-xs text-error">STATUS: 404 NOT FOUND</code></pre>
              <pre data-prefix="$"><code className="font-dm text-xs text-warning">PATH: /unknown/route</code></pre>
              <pre data-prefix="$"><code className="font-dm text-xs text-info">ACTION: REDIRECT RECOMMENDED</code></pre>
              <pre data-prefix=">"><code className="font-dm text-xs"><span className="cursor-blink" /></code></pre>
            </div>

            {/* Stats */}
            <div
              className="stats stats-horizontal shadow w-full anim-3"
              style={{ background:"rgba(10,12,20,.7)", border:"1px solid rgba(249,115,22,.12)" }}
            >
              <div className="stat">
                <div className="stat-title font-dm text-xs">Error Code</div>
                <div className="stat-value text-error font-bebas text-3xl">404</div>
              </div>
              <div className="stat">
                <div className="stat-title font-dm text-xs">Status</div>
                <div className="stat-value text-warning font-bebas text-3xl">Lost</div>
              </div>
              <div className="stat">
                <div className="stat-title font-dm text-xs">Fix</div>
                <div className="stat-value text-info font-bebas text-3xl">Go↑</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap justify-center w-full anim-4">
              <button className="btn btn-outline btn-warning font-dm tracking-wider flex-1" onClick={() => window.history.back()}>
                ← Go Back
              </button>
              <button className="btn btn-error font-dm tracking-wider flex-1" onClick={() => window.location.href = "/"}>
                Return Home
              </button>
            </div>

            <p className="font-dm text-xs text-base-content/30 anim-4">
              If this keeps happening, please contact support.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}