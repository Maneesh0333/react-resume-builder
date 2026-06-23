import { get } from "react-hook-form";
import type {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from "react-hook-form";

type Props<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  type?: "number" | "text" | "url" | "email" | "month";
  placeholder?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};

function InputField<T extends FieldValues>({
  name,
  label,
  type = "text",
  placeholder,
  register,
  errors,
}: Props<T>) {
  const error = get(errors, name);

  return (
    <div>
      {label && (
        <label className="mb-2 block text-sm font-medium">{label}</label>
      )}

      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-gray-200 outline-indigo-600 px-3 py-2"
      />

      {error?.message && (
        <p className="mt-1 text-sm text-red-500">{String(error.message)}</p>
      )}
    </div>
  );
}

export default InputField;
