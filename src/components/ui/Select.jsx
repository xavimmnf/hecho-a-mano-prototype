import './Select.css';

export function Select({ children, className = '' }) {
  return <select className={`select ${className}`}>{children}</select>;
}

export function SelectTrigger({ children, className = '' }) {
  return <div className={`select-trigger ${className}`}>{children}</div>;
}

export function SelectContent({ children }) {
  return <div className="select-content">{children}</div>;
}

export function SelectItem({ children, value }) {
  return (
    <option value={value} className="select-item">
      {children}
    </option>
  );
}
