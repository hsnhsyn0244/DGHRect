import { ToastContainer } from "react-toastify";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";
import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ProductService from "./services/ProductService";
import { ProductType, UserType } from "./types/Types";
import { setCurrentUser, setProducts } from "./redux/appSlice";
import { useEffect } from "react";
import { setBasket } from "./redux/basketSlice";
import BasketDetails from "./components/BasketDetails";

function App() {
  // kullanıcı girşi yoksa navbar göstermeme metodu aşşağıdaki gibidir.
  const { currentUser } = useSelector((state: RootState) => state.app);

  const dispatch = useDispatch();
  // Sayfa yenilense bile ürünleri elde tutmayı sağladı
  const gettAllProduct = async () => {
    const products: ProductType[] = await ProductService.getAllProducts();
    dispatch(setProducts(products));
  };

  useEffect(() => {
    gettAllProduct();
  }, []);

  // sayfa yenilense bile giriş yapılan kullanıcıyı elde tutmaya yarıyor.

  useEffect(() => {
    const currentUserString: string | null =
      localStorage.getItem("currentUser");
    if (currentUserString) {
      const currentUser: UserType = JSON.parse(currentUserString) as UserType;
      dispatch(setCurrentUser(currentUser));
    }
  }, []);
  // Sepetteki verilerin sayfa yenilendiğinde silinmeemsini sağlar.
  useEffect(() => {
    const basketString = localStorage.getItem("basket");
    if (basketString) {
      const basket: ProductType[] = JSON.parse(basketString) as ProductType[];
      dispatch(setBasket(basket));
    }
  }, []);

  return (
    <div>
      {currentUser && <Navbar />}

      <RouterConfig />
      <ToastContainer autoClose={2000} />
      <Spinner />
      <BasketDetails />
    </div>
  );
}

export default App;
