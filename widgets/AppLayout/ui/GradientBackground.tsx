function GradientBackground() {
  return (
    <div className="absolute h-full min-h-[2000px] w-full overflow-hidden">
      <div className="absolute left-1/2 h-1/3 w-1/2 animate-float rounded-full bg-pink-300 blur-3xl md:blur-[100px]" />
      <div className="animation-delay-2000 absolute right-2/4 top-0 h-1/4 w-2/5 animate-float rounded-full bg-violet-400 blur-3xl saturate-200 md:blur-[100px]" />
      <div className="animation-delay-4000 absolute right-2/3 top-2/4 h-1/4 w-1/5 animate-float rounded-full bg-blue-400 blur-3xl saturate-200 md:blur-[100px]" />
      <div className="animation-delay-6000 absolute bottom-1/4 left-1/2 h-1/5 w-1/5 animate-float rounded-full bg-emerald-300 blur-3xl md:blur-[100px]" />
      <div className="animation-delay-8000 absolute bottom-0 right-0 h-1/3 w-1/2 animate-float rounded-l-full bg-emerald-800 blur-3xl md:blur-[100px]" />
    </div>
  );
}

export default GradientBackground;
