import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = forwardRef(
  (
    {
      children,
      variant = 'default',
      size = 'default',
      asChild = false,
      className = '',
      ...props
    },
    ref,
  ) => {
    const classNames = `btn btn-${variant} btn-${size} ${className}`.trim();

    if (asChild && props.href) {
      return (
        <Link to={props.href} className={classNames}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classNames} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button };
