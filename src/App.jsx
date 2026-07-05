import { useMemo, useState } from 'react';

export default function App() {
  const [angle, setAngle] = useState(45);
  const [power, setPower] = useState(50);
  const [gravity, setGravity] = useState(9.8);

  const range = useMemo(() => {
    const theta = (angle * Math.PI) / 180;
    const velocity = power;
    return (velocity * velocity * Math.sin(2 * theta)) / gravity;
  }, [angle, power, gravity]);

  return (
    <main className="shell">
      <section className="hero-panel">
        <p className="eyebrow">Parallax Labs / public MIT prototype</p>
        <h1>Parallax Arc</h1>
        <p className="subtitle">A neon browser arc game with formula receipts.</p>
      </section>

      <section className="game-card">
        <div className="stage">
          <div className="moon" />
          <div className="terrain" />
          <div className="pad left">Vessel</div>
          <div className="pad right">Mirror</div>
          <div className="arc-line" style={{ transform: `rotate(${-angle}deg)` }} />
        </div>
      </section>

      <section className="control-grid">
        <label><span>Angle: {angle}°</span><input type="range" min="5" max="85" value={angle} onChange={(event) => setAngle(Number(event.target.value))} /></label>
        <label><span>Power: {power}</span><input type="range" min="10" max="100" value={power} onChange={(event) => setPower(Number(event.target.value))} /></label>
        <label><span>Gravity: {gravity}</span><input type="range" min="4" max="18" step="0.1" value={gravity} onChange={(event) => setGravity(Number(event.target.value))} /></label>
      </section>

      <section className="ledger-panel">
        <h2>Formula Lens</h2>
        <p>R = v² · sin(2θ) / g</p>
        <p>Clean range estimate: {range.toFixed(2)} arc-units</p>
      </section>
    </main>
  );
}
