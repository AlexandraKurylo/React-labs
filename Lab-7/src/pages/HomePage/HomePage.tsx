import { type FC, useEffect, useState } from "react";
import cls from "./HomePage.module.css";
import { Loader } from "../../components/Loader";
import { API_URL } from "../../constants/global.constants";
import { useFetch } from "../../hooks/useFetch";

interface IProfile {
  firstName: string;
  lastName: string;
  role: string;
  about: string;
}

interface IEducation {
  id: number;
  text: string;
}

export const HomePage: FC = () => {
  const [profile, setProfile] = useState<IProfile | null>(null);
  const [education, setEducation] = useState<IEducation[]>([]);

  const [fetchProfileData, isLoading, error] = useFetch(async () => {
    const [profileRes, eduRes] = await Promise.all([fetch(`${API_URL}/profile`), fetch(`${API_URL}/education`)]);

    if (!profileRes.ok || !eduRes.ok) {
      throw new Error("Failed to fetch data from server");
    }

    const profileData = await profileRes.json();
    const eduData = await eduRes.json();

    setProfile(profileData);
    setEducation(eduData);
  });

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <div className={cls.error}>{error}</div>;
  if (!profile) return null;

  return (
    <div className={cls.container}>
      <section className={cls.hero}>
        <h1 className={cls.name}>
          {profile.firstName} {profile.lastName}
        </h1>
        <h2 className={cls.role}>{profile.role}</h2>
        <div className={cls.aboutWrapper}>
          <p className={cls.about}>{profile.about}</p>
        </div>
      </section>

      <section className={cls.educationSection}>
        <h2 className={cls.sectionTitle}>Education</h2>
        <ul className={cls.eduList}>
          {education.map((item) => (
            <li key={item.id} className={cls.eduItem}>
              {item.text}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
