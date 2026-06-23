import * as yup from "yup";

export const resumeSchema = yup.object({
  fullName: yup.string().required("First name is required"),
  jobTitle: yup.string().required("Professional title is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: yup
    .string()
    .trim()
    .required("Phone number is required")
    .matches(/^[+]?[\d\s\-()]+$/, "Enter a valid phone number"),
  location: yup.string().required("Location is required"),
  linkedin: yup.string().url("Enter a valid URL").nullable(),
  website: yup.string().url("Enter a valid URL").nullable(),
  summary: yup
    .string()
    .min(50, "Summary should be at least 50 characters")
    .required("Summary is required"),
  education: yup.array().of(
    yup.object({
      school: yup
        .string()
        .min(2, "School name is too short")
        .required("School or university name is required"),

      degree: yup.string().required("Degree is required"),

      field: yup.string().required("Field of study is required"),

      startYear: yup
        .string()
        .matches(/^\d{4}$/, "Enter a valid year")
        .required("Start year is required"),

      endYear: yup
        .string()
        .matches(/^\d{4}$/, "Enter a valid year")
        .required("End year is required"),

      cgpa: yup.string().required("CGPA is required"),
    }),
  ),
  experience: yup.array(
    yup.object({
      company: yup.string().required("Company is required"),
      title: yup.string().required("Job title is required"),
      location: yup.string().required("Location is required"),
      startDate: yup.string().required("Start date is required"),
      endDate: yup.string().nullable(),
      current: yup.boolean().required(),
      bullets: yup.array(
        yup.object({
          text: yup.string().required("Bullet point is required"),
        }),
      ),
    }),
  ),
  skills: yup.array(
    yup.object({
      name: yup.string().required("Skill is required"),
    }),
  ),
});
