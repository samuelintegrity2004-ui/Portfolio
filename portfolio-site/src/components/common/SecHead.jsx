import './SecHead.css';

export function SecHead({ title, accent, sub }) {
  return (
    <div className="sec-head">
      <h2>{title} <span>{accent}</span></h2>
      <p>{sub}</p>
    </div>
  );
}
