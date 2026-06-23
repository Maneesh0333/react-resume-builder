import { useFieldArray, useFormContext, useFormState } from "react-hook-form";
import type { ResumeType } from "../types/resume.types";
import Button from "./Button";
import { ExperienceCard } from "./ExperienceCard";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const { control, register } = useFormContext<ResumeType>();

  const { errors } = useFormState({
    control,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "experience",
  });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex gap-3 max-sm:flex-col">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-slate-800">Work Experience</h2>
          <p className="text-sm text-slate-500">
            Your professional journey and achievements
          </p>
        </div>

        <Button
          type="button"
          onClick={() =>
            append({
              company: "",
              title: "",
              location: "",
              startDate: "",
              endDate: "",
              current: false,
              bullets: [],
            })
          }
        >
          Add Experience
        </Button>
      </div>

      {fields.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 py-10 text-center">
          <Briefcase size={40} className="mb-3 text-slate-300" />

          <h3 className="text-sm font-medium text-slate-700">
            No experience added yet
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Click "Add Experience" to get started.
          </p>
        </div>
      )}

      {fields.map((field, index) => (
        <ExperienceCard
          key={field.id}
          index={index}
          remove={remove}
          register={register}
          errors={errors}
          control={control}
        />
      ))}
    </div>
  );
}
