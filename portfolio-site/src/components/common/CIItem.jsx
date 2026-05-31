import './CIItem.css';

export function CIItem({ emoji, label, value, href }) {
  const isImage = emoji?.startsWith('/');
  
  return (
    <div className="ci-item">
      {isImage ? (
        <img src={emoji} alt={label} className="ci-icon" />
      ) : (
        <span className="ci-emoji">{emoji}</span>
      )}
      <div>
        <h4>{label}</h4>
        {href ? <a href={href}>{value}</a> : <p>{value}</p>}
      </div>
    </div>
  );
}
