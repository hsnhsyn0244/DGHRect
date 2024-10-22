import React from "react";
import "../css/RegisterPage.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { registerPageSchema } from "../schemas/RegisterPageSchme";
import registerPageService from "../services/RegisterPageService";
import { UserType } from "../types/Types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const registereGit = () => {
    navigate("/login");
  };

  const submit = async (values: any, actions: any) => {
    try {
      const payload: UserType = {
        id: String(Math.floor(Math.random() * 999999999)),
        username: values.username,
        password: values.password,
        balance: 1000,
      };
      const response = await registerPageService.register(payload);
      if (response) {
        clear();
        toast.success("Kulanıcı kaydedildi ");
        navigate("/login");
      }
    } catch (error) {
      toast.error("Kullanıcı kaydedilemedi");
    }
  };
  const clear = () => {
    resetForm();
  };
  const { values, handleSubmit, handleChange, errors, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: submit,
    validationSchema: registerPageSchema,

    // entegre komutu
  });

  return (
    <div className="register">
      <div className="left"></div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <p style={{ fontSize: "40px", color: "white", fontWeight: "bold" }}>
              KAYDOL
            </p>

            <TextField
              className="textfield"
              id="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Kullanıcı Adı"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaRegUser className="icons" />
                    </InputAdornment>
                  ),
                },
              }}
              variant="filled"
              helperText={
                errors.username && (
                  <span style={{ color: "red", fontSize: "22px" }}>
                    {errors.username}
                  </span>
                )
              }
            />
            <TextField
              className="textfield"
              type="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Şifre"
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <FaLock className="icons" />
                    </InputAdornment>
                  ),
                },
              }}
              variant="filled"
              helperText={
                errors.password && (
                  <span style={{ color: "red", fontSize: "22px" }}>
                    {errors.password}
                  </span>
                )
              }
            />
            <div className="div-button">
              <Button
                onClick={registereGit}
                type="submit"
                style={{ marginRight: "6px" }}
                className="button"
              >
                Hesabınız Zaten var mı
              </Button>
              <Button
                type="submit"
                style={{ marginRight: "10px" }}
                className="button"
              >
                Kaydol
              </Button>
              <Button onClick={clear} className="button">
                Temizle
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
