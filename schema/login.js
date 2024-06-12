import * as Yup from 'yup';

export const loginSchema = Yup.object({
    email: Yup.string().required("An E-Mail must be entered.").email("Given E-Mail is not valid."),
    password: Yup.string()
        .required("Password should be given.")
        .min(8, "Pasword should be at least 8 characters.")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Password must contain at least one uppercase, one lowercase, one number and one special character."),
});
