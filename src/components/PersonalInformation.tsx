import { useFormContext, useFormState } from "react-hook-form";
import InputField from "./InputField";
import type { ResumeType } from "../types/resume.types";
import { ChevronUp } from "lucide-react";
import { useState } from "react";

function PersonalInformation() {
  const { register, control } = useFormContext<ResumeType>();
  const [hide, setHide] = useState(true);

  const { errors } = useFormState({
    control,
  });

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold">Personal Information</h2>
          <p className="text-sm text-slate-500">Your contact details.</p>
        </div>

        <ChevronUp
          onClick={() => setHide((prev) => !prev)}
          size={30}
          className={`${hide ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300`}
        />
      </div>

      <div
        className={`${hide ? "h-fit mt-5" : "h-0"} overflow-hidden grid gap-4 md:grid-cols-2 transition-all duration-300`}
      >
        <InputField
          label="Full Name"
          name="fullName"
          placeholder="John Doe"
          register={register}
          errors={errors}
        />

        <InputField
          label="Job Title"
          name="jobTitle"
          placeholder="Senior Software Engineer"
          register={register}
          errors={errors}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          placeholder="john.doe@example.com"
          register={register}
          errors={errors}
        />

        <InputField
          label="Phone"
          name="phone"
          placeholder="9237777776"
          register={register}
          errors={errors}
        />

        <InputField
          label="Location"
          name="location"
          placeholder="New York, NY"
          register={register}
          errors={errors}
        />

        <InputField
          label="LinkedIn"
          name="linkedin"
          type="url"
          placeholder="https://linkedin.com/in/johndoe"
          register={register}
          errors={errors}
        />

        <InputField
          label="Website"
          name="website"
          type="url"
          placeholder="https://johndoe.dev"
          register={register}
          errors={errors}
        />

        <div className="md:col-span-2">
          <label className="mb-2 block text-sm font-medium">
            Professional Summary
          </label>

          <textarea
            {...register("summary")}
            rows={4}
            placeholder="Experienced software engineer with 5+ years of experience building scalable web applications using React, Node.js, and cloud technologies."
            className="w-full resize-none rounded-lg border border-gray-200 p-3 outline-indigo-400"
          />

          <p className="mt-1 text-sm text-red-500">{errors.summary?.message}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
