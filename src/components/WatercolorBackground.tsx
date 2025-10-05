export const WatercolorBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Luxury watercolor background - многослойная акварель */}

      {/* Базовый слой - крупные размытые пятна */}
      <div className="absolute -top-64 -left-64 w-[1200px] h-[1200px] bg-gradient-to-br from-gold/12 via-gold-dark/8 to-transparent rounded-full blur-3xl opacity-50 animate-float"
           style={{ animationDuration: '60s', animationDelay: '0s' }} />

      <div className="absolute -top-32 -right-48 w-[1000px] h-[1000px] bg-gradient-to-bl from-gold-dark/10 via-transparent to-gold/6 rounded-full blur-3xl opacity-45 animate-float"
           style={{ animationDuration: '65s', animationDelay: '8s' }} />

      {/* Средний слой - акварельные переходы */}
      <div className="absolute top-1/4 left-1/3 w-[950px] h-[950px] bg-gradient-to-tr from-transparent via-gold/9 via-gold-dark/7 to-transparent rounded-full blur-3xl opacity-40 animate-float"
           style={{ animationDuration: '70s', animationDelay: '15s' }} />

      <div className="absolute top-1/2 -right-32 w-[850px] h-[850px] bg-gradient-to-l from-gold/11 via-gold-dark/6 to-transparent rounded-full blur-3xl opacity-48 animate-float"
           style={{ animationDuration: '58s', animationDelay: '22s' }} />

      <div className="absolute top-2/3 -left-48 w-[900px] h-[900px] bg-gradient-to-r from-gold-dark/9 via-gold/5 to-transparent rounded-full blur-3xl opacity-42 animate-float"
           style={{ animationDuration: '62s', animationDelay: '30s' }} />

      {/* Нижний слой - глубина и переходы между секциями */}
      <div className="absolute bottom-20 right-1/4 w-[1100px] h-[1100px] bg-gradient-to-t from-gold/13 via-gold-dark/8 to-transparent rounded-full blur-3xl opacity-52 animate-float"
           style={{ animationDuration: '68s', animationDelay: '18s' }} />

      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-[1050px] h-[1050px] bg-gradient-to-br from-transparent via-gold-dark/7 via-gold/10 to-transparent rounded-full blur-3xl opacity-46 animate-float"
           style={{ animationDuration: '72s', animationDelay: '25s' }} />

      {/* Акцентные пятна - деликатные детали */}
      <div className="absolute top-[15%] right-[20%] w-[700px] h-[700px] bg-gradient-to-bl from-gold/8 via-transparent to-gold-dark/5 rounded-full blur-3xl opacity-35 animate-float"
           style={{ animationDuration: '55s', animationDelay: '35s' }} />

      <div className="absolute top-[45%] left-[15%] w-[750px] h-[750px] bg-gradient-to-tr from-gold-dark/6 via-gold/7 to-transparent rounded-full blur-3xl opacity-38 animate-float"
           style={{ animationDuration: '63s', animationDelay: '12s' }} />

      <div className="absolute top-[75%] right-[35%] w-[800px] h-[800px] bg-gradient-to-tl from-transparent via-gold/9 to-gold-dark/6 rounded-full blur-3xl opacity-44 animate-float"
           style={{ animationDuration: '59s', animationDelay: '40s' }} />

      {/* Дополнительные переходные пятна для плавности */}
      <div className="absolute top-[35%] right-[45%] w-[650px] h-[650px] bg-gradient-to-br from-gold-dark/5 to-transparent rounded-full blur-3xl opacity-30 animate-float"
           style={{ animationDuration: '56s', animationDelay: '28s' }} />

      <div className="absolute bottom-[15%] left-[25%] w-[720px] h-[720px] bg-gradient-to-t from-gold/10 via-transparent to-gold-dark/4 rounded-full blur-3xl opacity-36 animate-float"
           style={{ animationDuration: '64s', animationDelay: '45s' }} />

      {/* Тонкий верхний слой - шиммер эффект */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/3 via-transparent via-transparent to-gold-dark/3 opacity-20" />

      {/* Деликатная вуаль */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(218,165,32,0.08)_0%,transparent_50%)] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(194,154,108,0.06)_0%,transparent_50%)] opacity-40" />
    </div>
  );
};
