import React from 'react'
import { useFormik } from 'formik';
import { registerFormSchemas } from '../schemas/RegisterFormSxhemas';

function RegisterForm() {
    const submit = (values, action) => {
        // veriyi kaydettikten 2 sanıye sonra silinecegını gosterır milisanıye olarak cakıssır.
        setTimeout(() => {
            action.resetForm()
        }, 2000);
    }
    const { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            coniformPassword: "",
            term: '',
        },
        // Burada formik ve yup u bir birine bağlamış olduk.
        validationSchema: registerFormSchemas,

        onSubmit: submit
    })



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Email </label>
                    <input type="text" id='email' placeholder='Email adresinizi giriniz.'
                        value={values.email} onChange={handleChange} />
                    {/* hata mesajnı aktıf ettıgımız yer */}
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label >Yaş </label>
                    <input type="number" id='age' placeholder='Yaşınız giriniz.'
                        value={values.age} onChange={handleChange} />
                    {errors.age && <p>{errors.age}</p>}
                </div>

                <div>
                    <label >Şifre </label>
                    <input type="password" id='password' placeholder='Şifrenizi giriniz.'
                        value={values.password} onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label >Şifre Onay </label>
                    <input type="password" id='coniformPassword'
                        value={values.coniformPassword} onChange={handleChange} />
                    {errors.coniformPassword && <p>{errors.coniformPassword}</p>}
                </div>

                <div>
                    <div style={{ display: "flex", flexDirection: 'row', alignItems: 'flex-start', justifyContent: "flex-start" }}>
                        <input style={{ width: '20px', height: '12px' }} type="checkbox" id='term'
                            value={values.term} onChange={handleChange} />
                        <label >Kullanıcı sözleşmesini onaylıyorum </label>

                    </div>
                    {errors.term && <p>{errors.term}</p>}
                </div>
                <button type='submit'>Kaydet</button>
            </form>
        </div>
    )
}

export default RegisterForm