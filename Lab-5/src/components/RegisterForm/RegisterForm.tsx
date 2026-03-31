import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./RegisterForm.module.css";
import type { FC } from "react";
import { registerSchema, type RegisterFormData } from "./registerSchema";
import { Button } from "../Button";

export const RegisterForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
  });

  const onSubmit = (_data: RegisterFormData) => {
    alert("Registration successful!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formCard} noValidate>
      <h2 className={styles.title}>Create Account</h2>

      {/* USERNAME */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <input
          id="username"
          {...register("username")}
          aria-invalid={errors.username ? "true" : "false"}
          className={`${styles.input} ${errors.username ? styles.inputError : ""}`}
        />
        {errors.username && (
          <span role="alert" className={styles.errorMessage}>
            {errors.username.message}
          </span>
        )}
      </div>

      {/* EMAIL */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          aria-invalid={errors.email ? "true" : "false"}
          className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
        />
        {errors.email && (
          <span role="alert" className={styles.errorMessage}>
            {errors.email.message}
          </span>
        )}
      </div>

      {/* AGE */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="age">
          Age
        </label>
        <input
          id="age"
          type="number"
          min="1"
          {...register("age", { valueAsNumber: true })}
          aria-invalid={errors.age ? "true" : "false"}
          className={`${styles.input} ${errors.age ? styles.inputError : ""}`}
        />
        {errors.age && (
          <span role="alert" className={styles.errorMessage}>
            {errors.age.message}
          </span>
        )}
      </div>

      {/* PASSWORD */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", { deps: ["confirmPassword"] })}
          aria-invalid={errors.password ? "true" : "false"}
          className={`${styles.input} ${errors.password ? styles.inputError : ""}`}
        />
        {errors.password && (
          <span role="alert" className={styles.errorMessage}>
            {errors.password.message}
          </span>
        )}
      </div>

      {/* CONFIRM PASSWORD */}
      <div className={styles.fieldGroup}>
        <label className={styles.label} htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
          aria-invalid={errors.confirmPassword ? "true" : "false"}
          className={`${styles.input} ${errors.confirmPassword ? styles.inputError : ""}`}
        />
        {errors.confirmPassword && (
          <span role="alert" className={styles.errorMessage}>
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <Button type="submit" disabled={!isValid || isSubmitting} className={styles.submitButton}>
        {isSubmitting ? "Registering..." : "Sign Up"}
      </Button>
    </form>
  );
};
