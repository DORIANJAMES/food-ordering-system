import * as Yup from 'yup';

export const registerSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required.").min(3, "Must be at least 3 characters"),
    email: Yup.string().required("E-mail is required.").email("Given E-Mail format is not valid."),
    password: Yup.string().required("Password is required.").min(8, "Password should be 8 characters at least.").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase, one lowercase, one number and one special character."),
    confirmPassword: Yup.string().required("Password confirmation is required").oneOf([Yup.ref('password'), null], "Passwords must matched.")
});
