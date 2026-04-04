import { type FC, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import cls from "./ContactsPage.module.css";
import { delayFn } from "../../helpers/delayFn";
import { Loader } from "../../components/Loader";
import { useFetch } from "../../hooks/useFetch";
import { API_URL } from "../../constants/global.constants";

interface IContacts {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export const ContactsPage: FC = () => {
  const [contacts, setContacts] = useState<IContacts | null>(null);

  const [getContacts, isLoading, error] = useFetch(async (url: string) => {
    const response = await fetch(`${API_URL}/${url}`);
    const contacts = await response.json();

    setContacts(contacts);
    return contacts;
  });

  useEffect(() => {
    getContacts("contacts");
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <div className={cls.center}>{error}</div>;
  if (!contacts) return null;

  const items = [
    { id: 1, icon: <FaPhoneAlt />, label: "Phone", val: contacts.phone, href: `tel:${contacts.phone}` },
    { id: 2, icon: <FaEnvelope />, label: "Email", val: contacts.email, href: `mailto:${contacts.email}` },
    { id: 3, icon: <FaGithub />, label: "GitHub", val: "AlexandraKurylo", href: contacts.github },
    { id: 4, icon: <FaLinkedin />, label: "LinkedIn", val: "Oleksandra Kurylo", href: contacts.linkedin },
  ];

  return (
    <>
      <div className={cls.container}>
        <h1 className={cls.title}>Contact Me</h1>
        <div className={cls.contactList}>
          {items.map((item, idx) => (
            <div key={item.id} className={cls.contactItem} style={{ "--index": idx } as React.CSSProperties}>
              <div className={cls.iconBox}>{item.icon}</div>
              <div className={cls.info}>
                <span className={cls.label}>{item.label}:</span>
                <a href={item.href} target="_blank" rel="noreferrer" className={cls.link}>
                  {item.val}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
