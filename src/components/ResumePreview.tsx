import { useFormContext, useWatch } from "react-hook-form";
import type { ResumeType } from "../types/resume.types";
import type React from "react";
import { SectionLabel } from "./SectionLabel";
import dayjs from "dayjs";

type Props = {
  contentRef: React.Ref<HTMLDivElement>;
};

function ResumePreview({ contentRef }: Props) {
  const { control } = useFormContext<ResumeType>();
  const data = useWatch({ control });

  return (
    <div className="flex-1 h-fit overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
      <div ref={contentRef}>
        {/* ── Header ── */}
        <div className="grid grid-cols-[1fr_auto] gap-6 px-9 py-8 border-b border-gray-100">
          <div>
            <h1
              className="text-[34px] font-normal leading-tight tracking-tight text-gray-900"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              {data.fullName || "Your Name"}
            </h1>
            <p className="mt-1.5 text-[11px] font-semibold tracking-[0.15em] uppercase text-amber-600">
              {data.jobTitle || "Job Title"}
            </p>
          </div>

          <div className="flex flex-col items-end gap-1.5 mt-1">
            {data.email && (
              <span className="text-[12px] text-gray-500 flex items-center gap-1.5">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-amber-500 shrink-0"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m2 7 10 7 10-7" />
                </svg>
                {data.email}
              </span>
            )}
            {data.phone && (
              <span className="text-[12px] text-gray-500 flex items-center gap-1.5">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-amber-500 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16z" />
                </svg>
                {data.phone}
              </span>
            )}
            {data.location && (
              <span className="text-[12px] text-gray-500 flex items-center gap-1.5">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-amber-500 shrink-0"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {data.location}
              </span>
            )}
            {data.linkedin && (
              <span className="text-[12px] text-gray-500 flex items-center gap-1.5">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-amber-500 shrink-0"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                {data.linkedin}
              </span>
            )}
            {data.website && (
              <span className="text-[12px] text-gray-500 flex items-center gap-1.5">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-amber-500 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                {data.website}
              </span>
            )}
          </div>
        </div>

        {/* ── Body ── */}
        <div className="px-9 py-8 flex flex-col gap-7">
          {/* Summary */}
          <section>
            <SectionLabel>Summary</SectionLabel>
            {data.summary ? (
              <p className="text-[13.5px] text-gray-500 leading-relaxed italic">
                {data.summary}
              </p>
            ) : (
              <p className="text-[13.5px] text-gray-300 italic">
                A short, compelling paragraph about yourself…
              </p>
            )}
          </section>

          {/* Education */}
          <section>
            <SectionLabel>Education</SectionLabel>
            {data.education && data.education.length > 0 ? (
              <div className="flex flex-col divide-y divide-gray-100">
                {data.education.map((edu, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-[1fr_auto] gap-4 py-3 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="text-[13.5px] font-semibold text-gray-900">
                        {edu.degree}
                      </p>
                      <p className="text-[12.5px] text-gray-500 mt-0.5">
                        {edu.school}
                      </p>
                      {edu.cgpa && (
                        <p className="text-[11.5px] text-gray-400 mt-1">
                          GPA / Percentage: {edu.cgpa}
                        </p>
                      )}
                    </div>
                    <div className="text-[11.5px] text-gray-400 text-right mt-0.5 whitespace-nowrap">
                      {edu.startYear} — {edu.endYear}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[13px] text-gray-300 italic">
                Your education details…
              </p>
            )}
          </section>

          {/* Work Experience */}
          <section>
            <SectionLabel>Work Experience</SectionLabel>
            {data.experience && data.experience.length > 0 ? (
              <div className="relative pl-5">
                {/* Vertical gold timeline bar */}
                <div className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-gradient-to-b from-amber-400 to-amber-200" />

                {data.experience.map((exp, index) => (
                  <div key={index} className="relative pl-5 pb-6 last:pb-0">
                    {/* Timeline dot */}
                    <div className="absolute -left-[22px] top-[5px] w-2 h-2 rounded-full bg-amber-500 ring-2 ring-white" />

                    <div className="grid grid-cols-[1fr_auto] gap-4 items-start">
                      <div>
                        <p className="text-[14px] font-semibold text-gray-900">
                          {exp.title}
                        </p>
                        <p className="text-[12.5px] font-medium text-amber-600 mt-0.5">
                          {exp.company}
                        </p>
                        {exp.location && (
                          <p className="text-[11.5px] text-gray-400 mt-0.5">
                            {exp.location}
                          </p>
                        )}
                      </div>
                      <div className="text-[11.5px] text-gray-400 text-right mt-0.5 whitespace-nowrap">
                        {dayjs(exp.startDate).format("MMM YYYY")} —{" "}
                        {exp.current ? "Present" : dayjs(exp.endDate).format("MMM YYYY")}
                      </div>
                    </div>

                    {exp.bullets && exp.bullets.length > 0 && (
                      <ul className="mt-2.5 pl-3.5 flex flex-col gap-1">
                        {exp.bullets.map((bullet, bulletIndex) => (
                          <li
                            key={bulletIndex}
                            className="text-[12.5px] text-gray-500 leading-relaxed list-disc"
                          >
                            {bullet.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-[13px] text-gray-300 italic">
                Your work history…
              </p>
            )}
          </section>

          {/* Skills */}
          <section>
            <SectionLabel>Skills</SectionLabel>
            {data.skills && data.skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <span
                    key={`${skill.name}-${index}`}
                    className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[12px] font-medium text-amber-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-[13px] text-gray-300 italic">Your skills…</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;
