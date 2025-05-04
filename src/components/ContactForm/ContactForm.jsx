import { ErrorMessage, Field, Form, Formik } from "formik";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = ({ handleAdd }) => {
  const nameId = useId();
  const numberId = useId();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Fill the field!"),
    number: Yup.string()
      .required("Fill the field!")
      .matches(
        /^\d{3}-\d{2}-\d{2}$/,
        "Phone number must be in the format 123-45-67"
      ),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    handleAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });

    actions.resetForm();
  };

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <div className={s.wrapper}>
            <label className={s.label} htmlFor={nameId}>
              Name:
              <Field
                className={s.input}
                type="text"
                name="name"
                id={nameId}
                placeholder="Alice Smith"
              />
              <ErrorMessage className={s.error} name="name" component="span" />
            </label>

            <label className={s.label} htmlFor={numberId}>
              Number:
              <Field
                className={s.input}
                type="tel"
                name="number"
                id={numberId}
                placeholder="123-45-67"
              />
              <ErrorMessage
                className={s.error}
                name="number"
                component="span"
              />
            </label>
          </div>

          <button className={s.btn} type="submit">
            Add
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
