import { type FC, useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import cls from "./ContactsPage.module.css";

interface IContacts {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
}

export const ContactsPage: FC = () => {
  const [contacts, setContacts] = useState<IContacts | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:8801/contacts");
        if (!res.ok) throw new Error("Failed to load contacts");
        const data = await res.json();
        setContacts(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContacts();
  }, []);

  if (isLoading) return <div className={cls.center}>Loading...</div>;
  if (error) return <div className={cls.center}>{error}</div>;
  if (!contacts) return null;

  // Ті ж самі дані, просто в масиві для ітерації та анімації
  const items = [
    { id: 1, icon: <FaPhoneAlt />, label: "Phone", val: contacts.phone, href: `tel:${contacts.phone}` },
    { id: 2, icon: <FaEnvelope />, label: "Email", val: contacts.email, href: `mailto:${contacts.email}` },
    { id: 3, icon: <FaGithub />, label: "GitHub", val: "AlexandraKurylo", href: contacts.github },
    { id: 4, icon: <FaLinkedin />, label: "LinkedIn", val: "Oleksandra Kurylo", href: contacts.linkedin },
  ];

  return (
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
  );
};
