"use client";

import { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Form = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ingresá tu nombre"),
    email: Yup.string()
      .email("Email inválido")
      .required("Ingresá tu email"),
    message: Yup.string()
      .min(10, "El mensaje es muy corto")
      .required("Ingresá un mensaje"),
  });

  const handleSubmit = async (
    values,
    { resetForm, setSubmitting }
  ) => {
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch(
        "https://formspree.io/f/mbddjgeb",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        resetForm();
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="flex flex-col gap-6">
          
          <div>
            <Field
              name="name"
              placeholder="Nombre"
              className="w-full border border-[#B9471C] rounded-lg px-4 py-3 focus:outline-none"
            />
            <ErrorMessage
              name="name"
              component="p"
              className="text-sm text-red-500 mt-1"
            />
          </div>

          <div>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="w-full border border-[#B9471C] rounded-lg px-4 py-3 focus:outline-none"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-sm text-red-500 mt-1"
            />
          </div>

          <div>
            <Field
              as="textarea"
              name="message"
              rows="4"
              placeholder="Mensaje"
              className="w-full border border-[#B9471C] rounded-lg px-4 py-3 resize-none focus:outline-none"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="text-sm text-red-500 mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="self-start px-8 py-3 border-2 border-[#B9471C] text-[#B9471C] rounded-xl transition hover:bg-[#B9471C] hover:text-white disabled:opacity-50"
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>

          {/* Success message */}
          {success && (
            <p className="text-green-600 mt-2">
              ¡Mensaje enviado correctamente! ✨
            </p>
          )}

          {/* Error message */}
          {error && (
            <p className="text-red-600 mt-2">
              Ocurrió un error al enviar el mensaje. Probá de nuevo más tarde.
            </p>
          )}
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
