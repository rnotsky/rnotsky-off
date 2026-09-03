export default function PageGlow() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-1/2
        top-0
        z-0
        h-[500px]
        w-full
        -translate-x-1/2
        overflow-hidden
      "
    >
      <div
        className="
          absolute
          left-1/2
          top-[-260px]
          h-[520px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/20
          blur-[150px]

          sm:h-[560px]
          sm:w-[1000px]

          lg:h-[600px]
          lg:w-[1200px]
        "
      />
    </div>
  );
}