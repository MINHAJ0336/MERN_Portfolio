const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  icon: Icon,
  className = '',
  disabled = false,
  target,
  rel,
  ...rest
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base font-semibold',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:brightness-110 active:scale-[0.98] border border-indigo-400/20',
    secondary:
      'bg-slate-900/80 text-slate-200 border border-slate-700/80 hover:bg-slate-800 hover:text-white hover:border-slate-600 active:scale-[0.98] backdrop-blur-sm',
    outline:
      'border-2 border-indigo-500/60 text-indigo-300 hover:bg-indigo-500/10 hover:border-indigo-400 active:scale-[0.98]',
    ghost:
      'text-slate-300 hover:text-white hover:bg-slate-800/60 active:scale-[0.98]',
    whatsapp:
      'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/50 active:scale-[0.98] border border-emerald-400/30',
  };

  const baseClasses =
    'inline-flex items-center justify-center gap-2.5 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        onClick={onClick}
        {...rest}
      >
        {Icon && <Icon className="text-lg shrink-0" />}
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={combinedClasses}
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon className="text-lg shrink-0" />}
      <span>{children}</span>
    </button>
  );
};

export default Button;
