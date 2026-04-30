export default function BackgroundGlow() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      <div
        className={`
          absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2
          w-[720px] h-[720px] rounded-full
        `}
        style={{
          background:
            "radial-gradient(closest-side, rgba(6,225,255,0.15), transparent 70%)",
        }}
      />
      <div
        className={`
          absolute -left-32 top-1/4
          w-96 h-96 rounded-full
          bg-[var(--color-primary-1)]/20 blur-3xl
        `}
      />
      <div
        className={`
          absolute -right-32 bottom-1/4
          w-96 h-96 rounded-full
          bg-[var(--color-tertiary-1)]/20 blur-3xl
        `}
      />
    </div>
  );
}
