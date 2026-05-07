import './Textarea.css';

export function Textarea({ className = '', ...props }) {
  return <textarea className={`textarea ${className}`} {...props} />;
}
