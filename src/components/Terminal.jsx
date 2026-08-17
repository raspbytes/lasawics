import { useState, useRef, useEffect } from "react";

// Hardcoded command responses. Add more keys here as you build out pages.
const COMMANDS = {
  whoami: () => "wics_member",
  ls: () => "events/  resources/  opportunities/  hacks/",
  help: () => "about   events   resources   opportunities   hacks   clear",
  about: () =>
    "LASA WiCS+ is a student-led community supporting women and underrepresented\nindividuals in computer science.",
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

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history]);

  function runCommand(raw) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const newLines = [{ type: "input", text: raw }];

    if (cmd === "clear") {
      setHistory([]);
      setCommandLog((log) => [...log, raw]);
      setLogIndex(-1);
      return;
    }

    const handler = COMMANDS[cmd];
    newLines.push({
      type: "output",
      text: handler ? handler() : `command not found: ${cmd}. type 'help' for options`,
    });

    setHistory((h) => [...h, ...newLines]);
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

  return (
    <div
      className="w-full max-w-2xl rounded-xl overflow-hidden border border-[#2a2a52] shadow-xl font-mono text-sm"
      style={{ backgroundColor: "#12123a" }}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2a52]" style={{ backgroundColor: "#0f0f2e" }}>
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-[#8888b0] text-xs">wics@lasa ~</span>
      </div>

      {/* Output */}
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

        {/* Live input line */}
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
  );
}
