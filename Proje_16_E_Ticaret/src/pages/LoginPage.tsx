import "../css/LoginPage.css";
import "../css/RegisterPage.css";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Button } from "@mui/material";
import { useFormik } from "formik";
import { registerPageSchema } from "../schemas/RegisterPageSchme";
import loginPageService from "../services/LoginPageService";
import { useDispatch } from "react-redux";
import { setCurrentUser, setLoading } from "../redux/appSlice";
import { UserType } from "../types/Types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface CheckUserType {
  result: boolean;
  currentUser: UserType | null;
}

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkUser = (
    userList: UserType[],
    username: string,
    password: string
  ): CheckUserType => {
    const response: CheckUserType = { result: false, currentUser: null };
    userList.forEach((user: UserType) => {
      if (user.username === username && user.password === password) {
        response.result = true;
        response.currentUser = user;
      }
    });

    return response;
  };

  const submit = async (values: any, actions: any) => {
    try {
      dispatch(setLoading(true));
      const response: UserType[] = await loginPageService.login();
      if (response) {
        const checkUserResponse: CheckUserType = checkUser(
          response,
          values.username,
          values.password
        );
        if (checkUserResponse.result && checkUserResponse.currentUser) {
          //Kullanıcı adı şifre doğru
          dispatch(setCurrentUser(checkUserResponse.currentUser));

          // Bu alttaki kod bloğunda kullanıcı oturum actuğında sayfa yenilendiğinde bilgileri tutulsun dıye onu local storage da tutuyoruz.
          localStorage.setItem(
            "currentUser",
            JSON.stringify(checkUserResponse.currentUser)
          );
          navigate("/");
        } else {
          //yanlıs
          toast.error("Kullanıcı adı veya şifre yanlış !!! ");
        }
      }
    } catch (error) {
      toast.error("Giriş yapılırken hata oluştu : " + error);
    } finally {
      dispatch(setLoading(false));
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
    <div className="login">
      <div className="left"></div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="form-div">
            <p style={{ fontSize: "40px", color: "white", fontWeight: "bold" }}>
              GİRİŞ YAP
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
                  style: {
                    backgroundColor: "transparent",
                  },
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
                type="submit"
                style={{ marginRight: "6px" }}
                className="button"
              >
                Giriş Yap
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

export default LoginPage;
