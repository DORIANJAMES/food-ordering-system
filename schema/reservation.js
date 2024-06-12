import * as Yup from 'yup';

export const reservationSchema = Yup.object({
    fullName: Yup.string().required("Fullname must be entered.").min(3,"Must be 3 characters at least."),
    phone:Yup.string().required("Phone number must be entered").max(20, "Must be 20 characters or less."),
    email:Yup.string().email("Invalid email address. Please check again."),
})
