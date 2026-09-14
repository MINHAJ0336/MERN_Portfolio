const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'indigo',
  ...props
}) => {
  const glowBorder = {
    indigo: 'hover:border-indigo-500/40 hover:shadow-indigo-500/10',
    cyan: 'hover:border-cyan-500/40 hover:shadow-cyan-500/10',
    purple: 'hover:border-purple-500/40 hover:shadow-purple-500/10',
  }[glowColor] || 'hover:border-indigo-500/40 hover:shadow-indigo-500/10';

  return (
    <div
      className={`relative bg-slate-900/50 backdrop-blur-xl border border-slate-800/80 rounded-2xl transition-all duration-300 ${
        hoverEffect
          ? `hover:-translate-y-1 hover:shadow-xl ${glowBorder}`
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
