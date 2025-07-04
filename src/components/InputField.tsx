import { FieldError, UseFormRegister } from "react-hook-form";

type InputFieldProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  type?: string;
  defaultValue?: string;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputField = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-1 w-full md:w-1/4">
      <label className="text-xs text-gray-600 font-medium">
        {label}
      </label>
      <input
        type={type}
        {...register(name)}
        defaultValue={defaultValue}
        className={`p-2 rounded-md text-sm w-full border 
          ${error ? "border-red-400" : "border-gray-300"} 
          focus:ring-2 focus:ring-blue-400`}
        {...inputProps}
      />
      {error?.message && (
        <span className="text-xs text-red-500">{error.message}</span>
      )}
    </div>
  );
};

export default InputField;
