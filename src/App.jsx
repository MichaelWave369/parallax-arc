import { useMemo, useState } from 'react';

const MODES = {
  ledger: { label: 'Ledger Orb', note: 'honest baseline curve', scale: 1, className: 'ledger' },
  phi: { label: 'Phi Arc', note: 'golden long-form drift', scale: 1.18, className: 'phi' },
  janus: { label: 'Janus Pulse', note: 'mirror-mode double read', scale: 0.86, className: 'janus' },
};

export default function App() {
  const [angle, setAngle] = useState(45);
  const [power, setPower] = useState(50);
  const [gravity, setGravity] = useState(9.8);
  const [mode, setMode] = useState('ledger');
  const [turn, setTurn] = useState(1);

  const result = useMemo(() => {
    const theta = (angle * Math.PI) / 180;
    const velocity = power * MODES[mode].scale;
    const range = (velocity * velocity * Math.sin(2 * theta)) / gravity;
    const drift = Math.sin(turn * 1.618) * 7.5;
    return { velocity, range: Math.max(0, range), drift };
  }, [angle, gravity, mode, power, turn]);

  return (
    <main className="shell">
      <section className="hero-panel">
        <p className="eyebrow">Parallax Labs / public MIT prototype</p>
        <h1>Parallax Arc</h1>
        <p className="subtitle">A neon browser arc game with formula receipts, distance intuition, and Parallax-style modes.</p>
      </section>

      <section className="game-card">
        <div className={`stage ${MODES[mode].className}`}>
          <div className="moon" />
          <div className="terrain" />
          <div className="pad left">Vessel</div>
          <div className="pad right">Mirror</div>
          <div className="arc-line" style={{ transform: `rotate(${-angle}deg) scaleX(${0.7 + power / 120})` }} />
          <div className="range-tag">turn {turn} · drift {result.drift.toFixed(1)}</div>
        </div>
      </section>

      <section className="control-grid">
        <label><span>Angle: {angle}°</span><input type="range" min="5" max="85" value={angle} onChange={(event) => setAngle(Number(event.target.value))} /></label>
        <label><span>Power: {power}</span><input type="range" min="10" max="100" value={power} onChange={(event) => setPower(Number(event.target.value))} /></label>
        <label><span>Gravity: {gravity}</span><input type="range" min="4" max="18" step="0.1" value={gravity} onChange={(event) => setGravity(Number(event.target.value))} /></label>
        <label><span>Mode</span><select value={mode} onChange={(event) => setMode(event.target.value)}>{Object.entries(MODES).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></label>
      </section>

      <section className="action-row">
        <button onClick={() => setTurn((value) => value + 1)}>Log Arc</button>
        <div className="mode-note"><strong>{MODES[mode].label}</strong><span>{MODES[mode].note}</span></div>
      </section>

      <section className="ledger-panel">
        <h2>Formula Lens</h2>
        <p>R = v² · sin(2θ) / g</p>
        <p>Mode-adjusted velocity: {result.velocity.toFixed(2)}</p>
        <p>Clean range estimate: {result.range.toFixed(2)} arc-units</p>
      </section>
    </main>
  );
}
