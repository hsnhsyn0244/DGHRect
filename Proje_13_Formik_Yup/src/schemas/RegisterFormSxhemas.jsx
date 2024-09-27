import * as yup from "yup";

export const registerFormSchemas = yup.object().shape({
    email: yup.string().email("Geçerli Email adresi giriniz").required("Email adresi zorunludur"),

    age: yup.number().integer("Lütfen yaşınızı tam sayı olarak giriniz").positive("Pozitif bir değer giriniz").required("Bu alanı doldurmak zorunludur."),

    password: yup.string().required("Bu alanı doldurmak zorunludur."),

    coniformPassword: yup.string().required("Bu alanı doldurmak zorunludur").oneOf([yup.ref('password', yup.password)]),
    // oneOf metodu şifre ile şifre doğlumadaki şifreleri karşılastırıyor.

    term: yup.boolean().required("Kutucuğu isaretleyin")

})