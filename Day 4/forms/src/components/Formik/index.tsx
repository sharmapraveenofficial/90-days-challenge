import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikComponent = () => {
    const formik = useFormik<Values>({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required('First Name is required'),
            lastName: Yup.string().required('Last Name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .matches(
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    'Invalid email address'
                )
                .required('Email is required'),
        }),
        onSubmit: (values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 500);
        },
    });

    return (
        <div style={styles.container}>
            <h1>Signup</h1>
            <form onSubmit={formik.handleSubmit} style={styles.form}>
                <div style={styles.fieldContainer}>
                    <label htmlFor="firstName" style={styles.label}>First Name</label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                        style={styles.field}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div style={styles.error}>{formik.errors.firstName}</div>
                    ) : null}
                </div>

                <div style={styles.fieldContainer}>
                    <label htmlFor="lastName" style={styles.label}>Last Name</label>
                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                        style={styles.field}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div style={styles.error}>{formik.errors.lastName}</div>
                    ) : null}
                </div>

                <div style={styles.fieldContainer}>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        style={styles.field}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div style={styles.error}>{formik.errors.email}</div>
                    ) : null}
                </div>

                <button type="submit" style={styles.button} disabled={formik.isSubmitting || !formik.isValid}>
                    Submit
                </button>
            </form>
            <div style={styles.debugContainer}>
                <h3>Current Values:</h3>
                <pre style={styles.debug}>{JSON.stringify(formik.values, null, 2)}</pre>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: 'auto',
    },
    form: {
        width: '100%',
    },
    fieldContainer: {
        marginBottom: '16px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontSize: '14px',
        color: '#333',
    },
    field: {
        width: '100%',
        padding: '8px',
        fontSize: '14px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box' as 'border-box',
    },
    button: {
        width: '100%',
        padding: '10px 0',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '16px',
    },
    error: {
        color: 'red',
        fontSize: '12px',
        marginTop: '4px',
    },
    debugContainer: {
        marginTop: '20px',
        width: '100%',
    },
    debug: {
        backgroundColor: '#eee',
        padding: '10px',
        borderRadius: '4px',
        fontSize: '12px',
        overflow: 'auto' as 'auto',
    },
};

export default FormikComponent;
