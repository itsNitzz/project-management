export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-700 py-2 px-4 rounded-md text-xs md:text-base font-semibold text-stone-400 hover:bg-stone-600"
      {...props}>
      {children}
    </button>
  );
}
