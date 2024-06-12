import * as Yup from 'yup';

export const profileSchema = Yup.object().shape({
    fullName: Yup.string().min(3,"Name should be 3 characters at least").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().matches(/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
        , "Invalid phone number"),
})
