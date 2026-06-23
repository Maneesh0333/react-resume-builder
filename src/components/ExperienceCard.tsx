import { useFieldArray } from "react-hook-form";
import type {
  Control,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import type { ResumeType } from "../types/resume.types";
import InputField from "./InputField";
import { Briefcase } from "lucide-react";

type Props = {
  index: number;
  remove: (index: number) => void;
  register: UseFormRegister<ResumeType>;
  errors: FieldErrors<ResumeType>;
  control: Control<ResumeType>;
};

export function ExperienceCard({
  index,
  remove,
  register,
  errors,
  control,
}: Props) {
  const {
    fields,
    append,
    remove: removeBullet,
  } = useFieldArray({
    control,
    name: `experience.${index}.bullets`,
  });

  return (
    <div className="mb-5 rounded-xl border border-gray-200 p-5">
      <div className="mb-4 flex justify-between">
        <span className="flex items-center gap-2 font-semibold text-slate-800">
          <Briefcase size={18} className="text-indigo-500" />
          Experience {index + 1}
        </span>

        <button
          type="button"
          onClick={() => remove(index)}
          className="cursor-pointer rounded-lg border border-red-600 px-3 py-2 text-sm font-semibold text-red-600"
        >
          Remove
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <InputField
          label="Company"
          name={`experience.${index}.company`}
          placeholder="Google"
          register={register}
          errors={errors}
        />

        <InputField
          label="Job Title"
          name={`experience.${index}.title`}
          placeholder="Software Engineer"
          register={register}
          errors={errors}
        />

        <InputField
          label="Location"
          name={`experience.${index}.location`}
          placeholder="Remote"
          register={register}
          errors={errors}
        />

        <InputField
          type="month"
          label="Start Date"
          name={`experience.${index}.startDate`}
          register={register}
          errors={errors}
        />

        <InputField
          type="month"
          label="End Date"
          name={`experience.${index}.endDate`}
          register={register}
          errors={errors}
        />

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            {...register(`experience.${index}.current`)}
            className="h-4 w-4"
          />

          <label className="text-sm text-slate-700">
            Currently working here
          </label>
        </div>

        <div className="md:col-span-2">
          <label className="mb-3 block text-sm font-medium">
            Responsibilities & Achievements
          </label>

          {fields.map((field, bulletIndex) => (
            <div key={field.id} className="mb-2 flex gap-2">
              <div className="w-full">
                <InputField
                  name={`experience.${index}.bullets.${bulletIndex}.text`}
                  placeholder="Led migration reducing latency by 40%"
                  register={register}
                  errors={errors}
                />
              </div>

              <button
                type="button"
                onClick={() => removeBullet(bulletIndex)}
                className="cursor-pointer rounded-lg border border-red-500 px-3 text-red-500"
              >
                ✕
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={() => append({ text: "" })}
            className="mt-2 text-sm font-medium cursor-pointer text-indigo-600 hover:text-indigo-700"
          >
            + Add Bullet Point
          </button>
        </div>
      </div>
    </div>
  );
}
