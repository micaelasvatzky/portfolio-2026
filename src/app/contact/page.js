"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "@/translations";
import { Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const initialValues = { name: "", email: "", message: "" };

  const validationSchema = Yup.object({
    name: Yup.string().required(t.form.validation.nameRequired),
    email: Yup.string().email(t.form.validation.emailInvalid).required(t.form.validation.emailRequired),
    message: Yup.string().min(10, t.form.validation.messageShort).required(t.form.validation.messageRequired),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setSuccess(false);
    setError(false);
    try {
      const response = await fetch("https://formspree.io/f/mbddjgeb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        resetForm();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="relative z-0 pt-24 lg:pt-28 px-6 lg:px-12 pb-36 lg:pb-36 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-4xl lg:max-w-5xl w-full">
        <div className="flex flex-col order-2 lg:order-1">
          <h1 className="text-3xl lg:text-5xl font-black uppercase tracking-tighter mb-6 lg:mb-8 shrink-0">{t.contact.title}</h1>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <FormikForm className="flex flex-col gap-6 lg:gap-8 w-full">
                <div className="relative">
                  <Field name="name" type="text" placeholder={t.form.placeholders.name} className="form-input" />
                  <ErrorMessage name="name" component="p" className="form-error" />
                </div>
                <div className="relative">
                  <Field name="email" type="email" placeholder={t.form.placeholders.email} className="form-input" />
                  <ErrorMessage name="email" component="p" className="form-error" />
                </div>
                <div className="relative">
                  <Field as="textarea" name="message" rows="4" placeholder={t.form.placeholders.message} className="form-input resize-none" />
                  <ErrorMessage name="message" component="p" className="form-error" />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-primary mt-4">
                  <span className="relative z-10">{isSubmitting ? t.form.submit.sending : t.form.submit.send}</span>
                  <Send size={16} className="relative z-10" />
                </button>
                {success && <p className="text-green-500 text-[10px] font-black uppercase tracking-widest text-center mt-4">{t.form.success}</p>}
                {error && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest text-center mt-4">{t.form.error}</p>}
              </FormikForm>
            )}
          </Formik>
        </div>

        <div className="order-1 lg:order-2">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="aspect-[4/5] bg-black/5 dark:bg-white/5 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden border border-black/5 dark:border-white/5 relative group max-w-[260px] lg:max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <Image src="/assets/contactbn.jpeg" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Micaela Contact" fill sizes="(max-width: 768px) 70vw, 50vw" />
          </motion.div>
        </div>
      </div>
    </main>
  );
}