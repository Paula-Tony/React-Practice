function Separator({ bg, text }) {
  return (
    <div
      className={`text-center mb-4 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2
    before:top-1/2 relative before:content-['']
    before:absolute before:w-1/2 before:h-0.5 before:${text}
    `}
    >
      <i className={`fa-solid fa-star px-8 relative ${bg}`}></i>
    </div>
  );
}

export default Separator;
