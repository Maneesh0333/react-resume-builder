import { useState } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import type { ResumeType } from "../types/resume.types";
import Button from "./Button";
import { ChevronUp } from "lucide-react";

export default function SkillsSection() {
  const [skill, setSkill] = useState("");
  const [skillError, setSkillError] = useState("");
  const [hide, setHide] = useState(true);

  const { control } = useFormContext<ResumeType>();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skills",
  });

  const addSkill = (value: string) => {
    const newSkill = value.trim();

    if (!newSkill) return;

    const exists = fields.some(
      (item) => item.name.trim().toLowerCase() === newSkill.toLowerCase(),
    );

    if (exists) {
      setSkillError("Duplicate skills are not allowed");
      return;
    }

    setSkillError("");

    append({
      name: newSkill,
    });

    setSkill("");
  };

  const removeSkill = (index: number) => {
    remove(index);
    setSkillError("");
  };

  const suggestions = [
    "JavaScript",
    "React",
    "Python",
    "Node.js",
    "SQL",
    "TypeScript",
    "AWS",
    "Git",
    "Leadership",
    "Communication",
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="mb-1 text-lg font-bold text-slate-800">Skills</h2>

          <p className="text-sm text-slate-500">
            Add your technical and soft skills
          </p>
        </div>

        <ChevronUp
          onClick={() => setHide((prev) => !prev)}
          size={30}
          className={`${hide ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300`}
        />
      </div>

      <div
        className={`${hide ? "h-fit mt-5" : "h-0"} overflow-hidden transition-all duration-300`}
      >
        {/* Input */}
        <div className="mb-4">
          <div className="flex gap-3 max-sm:flex-col">
            <input
              value={skill}
              onChange={(e) => {
                setSkill(e.target.value);

                if (skillError) {
                  setSkillError("");
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addSkill(skill);
                }
              }}
              placeholder="e.g. React, Python, Project Management"
              className={`flex-1 rounded-lg border p-3 transition outline-indigo-500 ${
                skillError
                  ? "outline-red-500 border-red-500"
                  : "border-gray-200"
              }`}
            />

            <Button
              type="button"
              disabled={!skill.trim()}
              onClick={() => addSkill(skill)}
            >
              Add Skill
            </Button>
          </div>

          {skillError && (
            <p className="mt-2 text-sm text-red-500">{skillError}</p>
          )}
        </div>

        {/* Suggestions */}
        <div className="mb-4">
          <p className="mb-2 text-xs text-slate-400">Quick add suggestions:</p>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => addSkill(item)}
                className="rounded-md border cursor-pointer border-gray-200 px-3 py-1 text-xs transition hover:bg-slate-100"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Skills List */}
        <div className="flex min-h-12 flex-wrap gap-2 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50 p-3">
          {fields.length === 0 ? (
            <span className="self-center text-sm text-slate-400">
              Your skills will appear here...
            </span>
          ) : (
            fields.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-2 rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-700"
              >
                {item.name}

                <button
                  type="button"
                  onClick={() => removeSkill(index)}
                  className="cursor-pointer text-indigo-500 transition hover:text-red-500"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
