import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Form.css';

const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
        }, 400);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ isSubmitting }) => (
                <Form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <Field type="text" name="name" className="form-control" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="email" name="email" className="form-control" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <Field as="textarea" name="message" className="form-control" />
                        <ErrorMessage name="message" component="div" className="error" />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default ContactForm;
