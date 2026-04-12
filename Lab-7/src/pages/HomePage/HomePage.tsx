import { type FC } from "react";
import { FaUser, FaLightbulb, FaLanguage, FaHeart } from "react-icons/fa";
import cls from "./HomePage.module.css";
import { useDelayedLoader } from "../../hooks/useDelayedLoader";
import { MainLoader } from "../../components/Loader";

export const HomePage: FC = () => {
  const personalInfo = [
    { label: "Location", val: "Odessa, Ukraine" },
    { label: "Date of Birth", val: "April 20, 2007" },
    { label: "Nationality", val: "Ukrainian" },
  ];

  const softSkills = ["Problem-solving", "Attention to details", "Teamwork", "Effective Communication", "Adaptability"];

  const languages = [
    { name: "English", level: "Intermediate+" },
    { name: "Ukrainian", level: "Fluent" },
    { name: "Russian", level: "Fluent" },
  ];

  const hobbies = ["Gym & Fitness", "Cooking", "Equestrianism"];

  const education = [
    {
      id: 1,
      title: "State University of Intellectual Technologies and Telecommunications",
      desc: "Bachelor's degree, Computer Science (2024-2028)",
    },
    {
      id: 2,
      title: "Educational Platform 'Freelancer Life Style'",
      desc: "Front end/WebUI course & JS+TS course",
    },
    {
      id: 3,
      title: "Udemy Learning Platform",
      desc: "React + Redux, TypeScript for Modern Development",
    },
  ];

  const aboutText = `Highly motivated Computer Science student specializing in Frontend Development. Skilled in building interactive web applications using JavaScript, TypeScript, and React.js. Fast learner with a proactive approach to problem-solving and a deep interest in modern web technologies. Ready to tackle new challenges and contribute to high-quality code as a Junior Developer.`;

  const isLoading = useDelayedLoader(2000);
  if (isLoading) return <MainLoader />;

  return (
    <div className={cls.container}>
      <header className={cls.header}>
        <h1 className={cls.name}>Alexandra Kurylo</h1>
        <h2 className={cls.role}>Frontend Developer / Computer Science Student</h2>
      </header>

      <div className={cls.mainGrid}>
        <aside className={cls.sidebar}>
          <div className={cls.sideBlock}>
            <h3 className={cls.sideTitle}>
              <FaUser /> Personal Info
            </h3>
            <ul className={cls.sideList}>
              {personalInfo.map((info, index) => (
                <li key={index}>
                  <strong>{info.label}:</strong> {info.val}
                </li>
              ))}
            </ul>
          </div>

          <div className={cls.sideBlock}>
            <h3 className={cls.sideTitle}>
              <FaLightbulb /> Soft-Skills
            </h3>
            <ul className={cls.sideList}>
              {softSkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className={cls.sideBlock}>
            <h3 className={cls.sideTitle}>
              <FaLanguage /> Languages
            </h3>
            <ul className={cls.sideList}>
              {languages.map((l, index) => (
                <li key={index}>
                  {l.name} ({l.level})
                </li>
              ))}
            </ul>
          </div>

          <div className={cls.sideBlock}>
            <h3 className={cls.sideTitle}>
              <FaHeart /> Hobbies
            </h3>
            <ul className={cls.sideList}>
              {hobbies.map((h, index) => (
                <li key={index}>{h}</li>
              ))}
            </ul>
          </div>
        </aside>

        <div className={cls.contentArea}>
          <section className={cls.section}>
            <h2 className={cls.sectionTitle}>Summary</h2>
            <p className={cls.aboutContent}>{aboutText}</p>
          </section>

          <section className={cls.section}>
            <h2 className={cls.sectionTitle}>Education</h2>
            <div className={cls.eduList}>
              {education.map((item) => (
                <div key={item.id} className={cls.eduItem}>
                  <h4 className={cls.eduTitle}>{item.title}</h4>
                  <p className={cls.eduDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
