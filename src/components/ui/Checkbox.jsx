import './Checkbox.css';

export function Checkbox({ id, className = '' }) {
  return <input type="checkbox" id={id} className={`checkbox ${className}`} />;
}
