import * as yup from "yup";
import type { resumeSchema } from "../validation/validationSchema";

export type ResumeType = yup.InferType<typeof resumeSchema>;