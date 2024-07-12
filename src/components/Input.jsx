import { forwardRef } from "react";

// eslint-disable-next-line react/prop-types
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 border-b-2 text-stone-600 bg-stone-200 border-stone-300 rounded-sm focus:outline-none focus:border-stone-600";
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-stone-500 uppercase text-sm font-bold">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
