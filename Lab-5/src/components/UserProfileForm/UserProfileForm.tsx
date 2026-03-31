import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./UserProfileForm.module.css";
import type { FC } from "react";
import { Button } from "../Button";
import { profileSchema, type ProfileFormData } from "./profileSchema";

export const UserProfileForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ProfileFormData) => {
    console.log(data);
    alert("Profile saved successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard} noValidate>
      <h2 className={styles.title}>My Profile</h2>

      {/* NICKNAME */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="nickname">
          Nickname
        </label>
        <input
          id="nickname"
          {...register("nickname")}
          aria-invalid={errors.nickname ? "true" : "false"}
          aria-describedby={errors.nickname ? "nickname-error" : undefined}
          className={`${styles.input} ${errors.nickname ? styles.inputError : ""}`}
        />
        {errors.nickname && (
          <span id="nickname-error" role="alert" className={styles.errorMessage}>
            {errors.nickname.message}
          </span>
        )}
      </div>

      {/* BIO */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="bio">
          Bio (max 100 words)
        </label>
        <textarea
          id="bio"
          {...register("bio")}
          aria-invalid={errors.bio ? "true" : "false"}
          aria-describedby={errors.bio ? "bio-error" : undefined}
          className={`${styles.textarea} ${errors.bio ? styles.inputError : ""}`}
        />
        {errors.bio && (
          <span id="bio-error" role="alert" className={styles.errorMessage}>
            {errors.bio.message}
          </span>
        )}
      </div>

      {/* WEBSITE */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="website">
          Website
        </label>
        <input
          id="website"
          type="url"
          {...register("website")}
          aria-invalid={errors.website ? "true" : "false"}
          aria-describedby={errors.website ? "website-error" : undefined}
          className={`${styles.input} ${errors.website ? styles.inputError : ""}`}
        />
        {errors.website && (
          <span id="website-error" role="alert" className={styles.errorMessage}>
            {errors.website.message}
          </span>
        )}
      </div>

      <Button type="submit" disabled={!isValid || isSubmitting} className={styles.submitButton}>
        {isSubmitting ? "Saving..." : "Submit Changes"}
      </Button>
    </form>
  );
};
