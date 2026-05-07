import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            check: false,
        },
        validate: (values) => {
            const errors = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 6) {
                errors.password = 'Password must be at least 6 characters';
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log('Login successful:', values);
            history.push('/');
        },
    });


    return (
        <Form onSubmit={formik.handleSubmit} className="p-4 border rounded shadow-sm bg-light">
            <h2 className="mb-4 text-center">Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    isInvalid={formik.touched.email && formik.errors.email}
                />
                <Form.Control.Feedback type="invalid">
                    {formik.errors.email}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <InputGroup hasValidation>
                    <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        isInvalid={formik.touched.password && formik.errors.password}
                    />
                    <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                        id="password-toggle"
                    >
                        {showPassword ? 'Hide' : 'Show'}
                    </Button>
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.password}
                    </Form.Control.Feedback>
                </InputGroup>
            </Form.Group>



            <Button variant="primary" type="submit" className="w-100"
                disabled={formik.errors.email || formik.errors.password}
            >
                Login
            </Button>
        </Form>
    );
}

export default Login;

