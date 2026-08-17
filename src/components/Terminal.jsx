import { useState, useRef, useEffect } from "react";

// Captain bios. Add a new key here and it automatically shows up in
// `captains` (the list) and becomes openable via `captains/<key>`.
const CAPTAINS = {
  sarah: {
    name: "Sarah Shafi",
    role: "Technical Events and Activities Lead",
    bio: "Loves Cybersecurity, web development, and competitive programming.",
    funFact: "plays tennis and is a chronic spotify listener"
  },
  sahana: {
    name: "Sahana Ranganathan",
    role: "General Management",
    bio: "enter in later",
    funFact: "enter in later"
  },
  adya: {
    name: "Adya Sastry",
    role: "Content and Resources Lead",
    bio: "enter in later",
    funFact: "enter in later"
  },
  camille: {
    name: "Camille Mei",
    role: "Events and Community Lead",
    bio: "enter in later",
    funFact: "enter in later"
  },
  katherine: {
    name: "Katherine Komogortseva",
    role: "Advertising and Outreach Lead",
    bio: "enter in later",
    funFact: "enter in later"
  },
};

// Regular hardcoded commands. Add more keys here as you build out pages.
const COMMANDS = {
  whoami: () => "wics_member",
  ls: () => "captains/  events/  resources/  opportunities/  hacks/",
  help: () => "about   captains   events   resources   opportunities   hacks   clear",
  about: () =>
    "LASA WiCS+ is a student-led community supporting women and underrepresented\nindividuals in computer science.",
  captains: () => Object.keys(CAPTAINS).join("  "),
  events: () => "Welcome Meeting (9/2) -> Intro to Programming (9/9). See /events for the full list.",
  resources: () => "Check the Resources page for slide decks, guides, and past workshop materials.",
  opportunities: () => "Internships, competitions, and volunteering -> see /opportunities",
  hacks: () => "Hackathon details live on the Hackathon page. Stay tuned for dates!",
};

const WELCOME = [
  { type: "output", text: "type 'help' to see available commands" },
];

export default function Terminal() {
  const [history, setHistory] = useState(WELCOME);
  const [input, setInput] = useState("");
  const [commandLog, setCommandLog] = useState([]);
  const [logIndex, setLogIndex] = useState(-1);
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  // The floating panel. `key` is which captain is open (or null = closed).
  // `pos` is where the panel sits on screen, updated live while dragging.
  const [panel, setPanel] = useState({ key: null, pos: { x: 60, y: 40 } });
  const dragState = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function openCaptain(key) {
    setPanel({ key, pos: { x: 60, y: 40 } });
  }

  function closePanel() {
    setPanel((p) => ({ ...p, key: null }));
  }

  // --- Dragging: mousedown on the title bar starts tracking, mousemove
  // updates panel position, mouseup stops. We attach move/up to `window`
  // (not the title bar) so dragging still works if the cursor moves fast.
  function handleDragStart(e) {
    e.preventDefault(); 
    
    window.addEventListener("mousemove", handleDragMove);
    window.addEventListener("mouseup", handleDragEnd);

  }

  function handleDragMove(e) {
    setPanel((p) => ({
      ...p,
      pos: {
        x: p.pos.x + e.movementX,
        y: p.pos.y + e.movementY,
      },
    }));
  }

  function handleDragEnd() {
    window.removeEventListener("mousemove", handleDragMove);
    window.removeEventListener("mouseup", handleDragEnd);
  }

  useEffect(() => {
    // Cleanup in case the component unmounts mid-drag
    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
    };
  }, []);

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory([]);
      setCommandLog((log) => [...log, raw]);
      setLogIndex(-1);
      return;
    }

    let outputText;

    if (cmd.startsWith("captains/")) {
      const key = cmd.split("/")[1];
      const captain = CAPTAINS[key];
      if (captain) {
        openCaptain(key);
        outputText = `opening captains/${key}...`;
      } else {
        outputText = `no such file: captains/${key}`;
      }
    } else {
      const handler = COMMANDS[cmd];
      outputText = handler ? handler() : `command not found: ${cmd}. type 'help' for options`;
    }

    setHistory((h) => [...h, { type: "input", text: raw }, { type: "output", text: outputText }]);
    setCommandLog((log) => [...log, raw]);
    setLogIndex(-1);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandLog.length === 0) return;
      const nextIndex = logIndex === -1 ? commandLog.length - 1 : Math.max(0, logIndex - 1);
      setLogIndex(nextIndex);
      setInput(commandLog[nextIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (logIndex === -1) return;
      const nextIndex = logIndex + 1;
      if (nextIndex >= commandLog.length) {
        setLogIndex(-1);
        setInput("");
      } else {
        setLogIndex(nextIndex);
        setInput(commandLog[nextIndex]);
      }
    }
  }

  const openCaptainData = panel.key ? CAPTAINS[panel.key] : null;

  return (
    <div className="relative w-full max-w-2xl font-mono text-sm">
      {/* Terminal window */}
      <div
        className="rounded-xl overflow-hidden border border-[#2a2a52] shadow-xl"
        style={{ backgroundColor: "#12123a" }}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a52]" style={{ backgroundColor: "#0f0f2e" }}>
          <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <span className="w-3 h-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 text-[#8888b0] text-xs">wics@lasa ~</span>
        </div>

        <div ref={scrollRef} className="px-4 py-4 h-72 overflow-y-auto space-y-1">
          {history.map((line, i) =>
            line.type === "input" ? (
              <div key={i} className="text-[#e8e8f5]">
                <span className="text-[#cbf078]">$</span> {line.text}
              </div>
            ) : (
              <div key={i} className="text-[#8888b0] whitespace-pre-wrap pl-4">
                {line.text}
              </div>
            )
          )}

          <div className="flex items-center text-[#e8e8f5]">
            <span className="text-[#cbf078] mr-2">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
              spellCheck={false}
              className="flex-1 bg-transparent outline-none text-[#e8e8f5] caret-[#f0538a]"
            />
          </div>
        </div>
      </div>

      {/* Floating "text editor" panel for an open captain bio */}
      {openCaptainData && (
        <div
          className="absolute w-80 rounded-lg overflow-hidden border border-[#2a2a52] shadow-2xl select-none"
          style={{ left: panel.pos.x, top: panel.pos.y, backgroundColor: "#1a1a45" }}
        >
          <div
            className="flex items-center justify-between px-3 py-2 cursor-grab active:cursor-grabbing border-b border-[#2a2a52]"
            style={{ backgroundColor: "#0f0f2e" }}
            onMouseDown={handleDragStart}
          >
            <span className="text-[#cbf078] text-xs">captains/{panel.key}.txt</span>
            <button
              onClick={closePanel}
              className="text-[#8888b0] hover:text-[#f0538a] px-1 leading-none"
              aria-label="Close"
            >
              x
            </button>
          </div>
          <div className="p-4 text-[#e8e8f5]">
            <p className="font-bold">{openCaptainData.name}</p>
            <p className="text-[#f0538a] text-xs mb-3">{openCaptainData.role}</p>
            <p className="text-[#c4c4dd] leading-relaxed">{openCaptainData.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
}
