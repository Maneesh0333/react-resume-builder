import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Header from "./components/Header";
import Footer from "./components/Footer";
import PersonalInformation from "./components/PersonalInformation";
import EducationSection from "./components/EducationSection";
import ResumePreview from "./components/ResumePreview";
import { resumeSchema } from "./validation/validationSchema";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";

function App() {
  const methods = useForm({
    resolver: yupResolver(resumeSchema),

    defaultValues: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
      summary: "",
      education: [],
      experience: [],
      skills: [],
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  return (
    <FormProvider {...methods}>
      <Header reactToPrintFn={reactToPrintFn} />

      <main className="flex gap-5 p-5 max-md:flex-col">
        <div className="flex flex-1 flex-col gap-5">
          <PersonalInformation />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
        </div>

        <ResumePreview contentRef={contentRef} />
      </main>

      <Footer />
    </FormProvider>
  );
}

export default App;
