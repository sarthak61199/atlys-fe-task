import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1 md:gap-2">
        {label && (
          <label htmlFor={props.id} className="text-xs md:text-sm font-semibold">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`text-xs md:text-sm bg-[#F4F4F4] p-3 md:p-4 rounded-xl placeholder:text-xs md:placeholder:text-sm transition-colors focus:bg-white focus:ring-2 focus:ring-[#5057EA]/20 focus:outline-none ${
            error ? "border border-red-500" : ""
          } ${className}`}
          {...props}
        />
        {error && <span className="text-xs md:text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
