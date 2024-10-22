import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CelikhanLogo from "../images/FGLogo.jpeg";
import { useNavigate } from "react-router-dom";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  filterProducts,
  setCurrentUser,
  setDrawer,
  setProducts,
} from "../redux/appSlice";
import { toast } from "react-toastify";
import ProductService from "../services/ProductService";
import { ProductType } from "../types/Types";
import { FaBasketShopping } from "react-icons/fa6";
import Badge from "@mui/material/Badge";
import { RootState } from "../redux/store";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { basket } = useSelector((state: RootState) => state.basket);
  const logout = () => {
    localStorage.removeItem("currentUser");
    dispatch(setCurrentUser(null));
    navigate("/login");
    toast.success("Çıkış başarıyla yapıldı..");
  };
  const handleFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    try {
      if (e.target.value) {
        // filtreleme yapmak istiyor
        dispatch(filterProducts(e.target.value));
      } else {
        // Ekranda bütün ürünleri listeleyelim
        const products: ProductType[] = await ProductService.getAllProducts();
        dispatch(setProducts(products));
      }
    } catch (error) {
      toast.error("Filtrelem yapılırken hata oluştu : " + error);
    }
  };

  const openDrawer = () => {
    dispatch(setDrawer(true));
  };

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#0C0A09" }}>
        <Toolbar>
          <IconButton
            onClick={() => navigate("/")}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ cursor: "pointer", mr: 2 }}
          >
            <img
              src={CelikhanLogo}
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
            />
          </IconButton>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            Furkan Giyim
          </Typography>
          <TextField
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleFilter(e)
            }
            sx={{ color: "white", marginRight: "40px" }}
            className="textfield"
            id="searchInput"
            placeholder="Ne aramak istiyorusnuz"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ fontSize: "40px", color: "#E4E4E4" }} />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <div style={{ marginRight: "20px", cursor: "pointer" }}>
            <Badge
              onClick={openDrawer}
              badgeContent={basket.length}
              max={9}
              color="warning"
            >
              <FaBasketShopping style={{ fontSize: "35px", color: "white" }} />
            </Badge>
          </div>

          <Button
            onClick={logout}
            sx={{ textTransform: "none" }}
            color="inherit"
          >
            Çıkış Yap
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
