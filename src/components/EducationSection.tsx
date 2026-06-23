import { useFieldArray, useFormContext, useFormState } from "react-hook-form";

import InputField from "./InputField";
import type { ResumeType } from "../types/resume.types";
import Button from "./Button";
import { GraduationCap } from "lucide-react";

function EducationSection() {
  const { register, control } = useFormContext<ResumeType>();

  const { errors } = useFormState({
    control,
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex justify-between">
        <div>
          <h2 className="text-lg font-bold">Education</h2>

          <p className="text-sm text-slate-500">Academic background</p>
        </div>

        <Button
          type="button"
          onClick={() =>
            append({
              school: "",
              degree: "",
              field: "",
              startYear: "",
              endYear: "",
              cgpa: "",
            })
          }
        >
          Add Education
        </Button>
      </div>

      {fields.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 bg-slate-50 py-10 text-center">
          <GraduationCap size={40} className="mb-3 text-slate-300" />

          <h3 className="text-sm font-medium text-slate-700">
            No education added yet
          </h3>

          <p className="mt-1 text-sm text-slate-400">
            Click "Add Education" to get started.
          </p>
        </div>
      )}

      <div className="space-y-5">
        {fields.map((field, index) => (
          <div key={field.id} className="rounded-xl border border-gray-200 p-5">
            <div className="mb-4 flex justify-between">
              <h3 className="text-black/80 font-semibold">
                Education {index + 1}
              </h3>

              <button
                type="button"
                onClick={() => remove(index)}
                className="text-sm border px-3 py-2 rounded-lg border-red-600 cursor-pointer text-red-600 font-semibold"
              >
                Remove
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <InputField
                label="School / University"
                placeholder="University of California"
                name={`education.${index}.school`}
                register={register}
                errors={errors}
              />

              <InputField
                label="Degree"
                placeholder="Bachelor of Science"
                name={`education.${index}.degree`}
                register={register}
                errors={errors}
              />

              <InputField
                label="Field of Study"
                placeholder="Computer Science"
                name={`education.${index}.field`}
                register={register}
                errors={errors}
              />

              <InputField
                label="Start Year"
                type="number"
                placeholder="2020"
                name={`education.${index}.startYear`}
                register={register}
                errors={errors}
              />

              <InputField
                label="End Year"
                type="number"
                placeholder="2024"
                name={`education.${index}.endYear`}
                register={register}
                errors={errors}
              />

              <InputField
                label="CGPA / Percentage"
                type="number"
                placeholder="80.01"
                name={`education.${index}.cgpa`}
                register={register}
                errors={errors}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationSection;
