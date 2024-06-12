import * as Yup from 'yup';

export const footerSchema = Yup.object({
    location:Yup.string().url("Must be a url given."),
    email:Yup.string().email("Invalid url given. Please re-check."),
    phone:Yup.string().matches(/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g
        , "Invalid phone number"),
    description:Yup.string().min(10,"Text should be minimum 10 characters at least."),
    date:Yup.string().min(3,"Must be 3 characters at least."),
    time:Yup.string().min(3,"Must be 3 characters at latest."),
})
