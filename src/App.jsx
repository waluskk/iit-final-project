import React, { useState } from 'react';
import { Scissors, Loader2, Copy, CheckCircle } from 'lucide-react';

const App = () => {
  // Stan aplikacji
  const [step, setStep] = useState('input');
  const [formData, setFormData] = useState({
    text: '',
    style: 'brutal',
    email: ''
  });
  const [summary, setSummary] = useState('');

  // Obsługa formularza
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Symulacja działania
  const handleSubmit = async () => {
    if (!formData.text) return alert("Don't be shy, yap a little.");
    setStep('loading');

    // Baza gotowych odpowiedzi
    const fakeResponses = {
      brutal: [
        "TL;DR: Stop wasting time. Just do the work. Nobody cares about the excuses.",
        "Real talk: This email could have been a 5-word SMS."
      ],
      bullet: [
        "• The main point is missing.\n• Action required: ASAP.\n• Deadline: Yesterday.",
        "• Too much fluff.\n• Focus on KPIs."
      ],
      "5yo": [
        "Okay tiny human! 🧸 The bad man wants money.",
        "It's like when you want a cookie 🍪 but mom says 'later'."
      ],
      slang: [
        "No cap 🧢, this text is mid. Just ghost them.",
        "Bestie, the tea is hot ☕ but the point is invalid."
      ]
    };

    const styleResponses = fakeResponses[formData.style] || fakeResponses['brutal'];
    const randomResponse = styleResponses[Math.floor(Math.random() * styleResponses.length)];
    const randomDelay = Math.floor(Math.random() * 2000) + 1500;

    setTimeout(() => {
      setSummary(randomResponse);
      setStep('result');
    }, randomDelay);
  };

  const reset = () => {
    setStep('input');
    setFormData({ text: '', style: 'brutal', email: '' });
    setSummary('');
  };

  // POPRAWKA: Dodano \n (nowa linia) na końcu każdego zdania, żeby tekst był pionowy!
  const singleBlock = `INITIALIZING YAP_PROTOCOL v1.0.2 // \nSCANNING INPUT STREAM... // \nDETECTING FLUFF... 89% DETECTED // \nENGAGING NEURAL CUTTERS // \nDELETING 'HOPE THIS EMAIL FINDS YOU WELL' // \nPURGING 'JUST CIRCLING BACK' // \nOPTIMIZING BANDWIDTH // \nCOMPRESSING THOUGHTS // \nGENERATING TL;DR // \nSYSTEM NOMINAL // \nNO CAP DETECTED // \nWAITING FOR INPUT // \n`.repeat(5);

  const VideoFrame = ({ src, label, positionClasses }) => (
    <div className={`fixed ${positionClasses} w-[20%] h-[50%] border-[#333] border-2 bg-black z-10 hidden xl:block`}>
      <div className="absolute top-2 left-2 z-20 bg-black/80 text-[#ccff00] text-[10px] px-2 py-0.5 font-bold border border-[#ccff00]/30">
        {label} // REC
      </div>
      <div className="absolute inset-0 bg-[#050505]/50 z-10 mix-blend-multiply pointer-events-none"></div>
      <video 
        autoPlay loop muted playsInline
        className="w-full h-full object-cover grayscale contrast-125 brightness-75 opacity-70"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-mono flex items-center justify-center p-4 selection:bg-[#ccff00] selection:text-black relative overflow-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        body { font-family: 'Space Mono', monospace; }
        
        /* Animacja pionowa */
        @keyframes vertical-scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        
        .neo-box { box-shadow: 6px 6px 0px 0px #333; transition: all 0.2s ease; }
        .neo-box:active { transform: translate(2px, 2px); box-shadow: 2px 2px 0px 0px #333; }
        .input-focus:focus { outline: none; border-color: #ccff00; box-shadow: 4px 4px 0px 0px #ccff00; }
      `}</style>

      {/* --- WARSTWA 1: ANIMACJA TEKSTU (ŚRODEK) --- */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none flex justify-center items-center overflow-hidden">
          {/* Kontener animacji */}
          <div 
            style={{ animation: 'vertical-scroll 60s linear infinite' }} 
            className="text-center text-xs leading-loose text-[#ccff00]/20 whitespace-pre-line"
          >
            {/* Renderujemy ten sam blok tekstu 2 razy, żeby animacja była płynna (jak jeden się kończy, drugi wchodzi) */}
            {singleBlock}
            {singleBlock}
          </div>
      </div>

      {/* --- WARSTWA 2: 4 FILMY (RAMKI PO BOKACH) --- */}
      <VideoFrame 
        label="CAM_01" 
        positionClasses="top-0 left-0 border-r-2 border-b-2" 
        src="/1.mp4" 
      />
      <VideoFrame 
        label="CAM_02" 
        positionClasses="bottom-0 left-0 border-r-2 border-t-2" 
        src="/2.mp4" 
      />
      <VideoFrame 
        label="CAM_03" 
        positionClasses="top-0 right-0 border-l-2 border-b-2" 
        src="/3.mp4" 
      />
      <VideoFrame 
        label="CAM_04" 
        positionClasses="bottom-0 right-0 border-l-2 border-t-2" 
        src="/4.mp4" 
      />

      {/* --- WARSTWA 3: GŁÓWNA APLIKACJA --- */}
      <div className="w-full max-w-2xl border-2 border-[#333] bg-[#0a0a0a] p-8 relative z-30 shadow-[0_0_100px_rgba(0,0,0,0.9)]">
        <div className="absolute top-0 left-0 bg-[#ccff00] text-black px-2 py-1 text-xs font-bold border-b-2 border-r-2 border-[#333]">
          v1.0.0 // NO_YAP_ZONE
        </div>

        <div className="mb-8 mt-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter uppercase mb-2">
            Project <span className="text-[#ccff00] underline decoration-wavy decoration-2">YAPPER</span>
          </h1>
          <p className="text-gray-500 text-sm">Eliminate yapping from your life.</p>
        </div>

        {step === 'input' && (
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-bold text-gray-400">The Yap (Paste it here)</label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                placeholder="Paste the overly long email/essay/rant here..."
                className="w-full h-48 bg-[#111] border-2 border-[#333] p-4 text-sm resize-none input-focus transition-all text-white placeholder-gray-600"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-gray-400">Summary Vibe</label>
                <div className="relative">
                  <select name="style" value={formData.style} onChange={handleInputChange} className="w-full bg-[#111] border-2 border-[#333] p-3 text-sm appearance-none input-focus cursor-pointer text-white">
                    <option value="brutal">🔪 Brutally Honest</option>
                    <option value="bullet">📝 Bullet Points</option>
                    <option value="5yo">👶 Explain like I'm 5</option>
                    <option value="slang">🧢 Gen-Z Slang</option>
                  </select>
                  <div className="absolute right-4 top-4 pointer-events-none text-gray-500">▼</div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-bold text-gray-400">Where to send it?</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="user@example.com" className="w-full bg-[#111] border-2 border-[#333] p-3 text-sm input-focus text-white placeholder-gray-600" />
              </div>
            </div>
            <button onClick={handleSubmit} className="w-full bg-[#ccff00] text-black font-bold text-lg py-4 border-2 border-[#ccff00] hover:bg-transparent hover:text-[#ccff00] transition-all neo-box flex items-center justify-center gap-2 mt-4 cursor-pointer">
              <Scissors className="w-5 h-5" /> SUMMARIZE THE YAP
            </button>
          </div>
        )}

        {step === 'loading' && (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
            <Loader2 className="w-12 h-12 text-[#ccff00] animate-spin" />
            <div className="space-y-1">
              <p className="text-lg font-bold">Cutting the clutter...</p>
              <p className="text-xs text-gray-500 font-mono">Simulating n8n heavy lifting...</p>
            </div>
          </div>
        )}

        {step === 'result' && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-[#111] border-2 border-[#ccff00] p-6 relative">
              <div className="absolute -top-3 left-4 bg-[#0a0a0a] px-2 text-[#ccff00] text-xs font-bold uppercase">Result</div>
              <p className="whitespace-pre-line leading-relaxed text-white">{summary}</p>
            </div>
            {formData.email && (
              <div className="flex items-center gap-2 text-xs text-gray-400 justify-center">
                <CheckCircle className="w-4 h-4 text-[#ccff00]" />
                <span>Copy sent to {formData.email}</span>
              </div>
            )}
            <div className="grid grid-cols-2 gap-4">
               <button className="bg-[#222] text-white py-3 border-2 border-[#333] hover:border-white transition-all font-bold text-sm flex items-center justify-center gap-2 cursor-pointer" onClick={() => navigator.clipboard.writeText(summary)}>
                <Copy className="w-4 h-4" /> COPY
              </button>
              <button onClick={reset} className="bg-transparent text-gray-400 py-3 border-2 border-[#333] hover:text-white hover:border-white transition-all font-bold text-sm cursor-pointer">
                NEW YAP
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;