export const VideoBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Image background with monochrome filter */}
      <div className="absolute inset-0">
        <img
          src="/12.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            filter: 'grayscale(100%) contrast(1.3)',
            opacity: 0.85,
          }}
        />
      </div>

      {/* Elegant overlay with gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/30" />

      {/* Luxury soft gradient orbs for depth */}
      <div className="absolute -top-64 -left-64 w-[1000px] h-[1000px] bg-gradient-to-br from-accent/5 via-muted/3 to-transparent rounded-full blur-3xl opacity-20 animate-float"
           style={{ animationDuration: '60s', animationDelay: '0s' }} />

      <div className="absolute -top-32 -right-48 w-[900px] h-[900px] bg-gradient-to-bl from-primary/4 via-transparent to-accent/4 rounded-full blur-3xl opacity-15 animate-float"
           style={{ animationDuration: '65s', animationDelay: '8s' }} />

      {/* Radial vignette for premium look */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.02)_70%,rgba(0,0,0,0.05)_100%)]" />
    </div>
  );
};
