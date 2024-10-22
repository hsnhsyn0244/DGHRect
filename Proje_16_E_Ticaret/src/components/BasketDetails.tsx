import { Button, Drawer } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setDrawer, updateBalance } from "../redux/appSlice";
import { ProductType, UserType } from "../types/Types";
import {
  calculateBasket,
  removeProductFromBasket,
  setBasket,
} from "../redux/basketSlice";
import { toast } from "react-toastify";

function BasketDetails() {
  const { drawer, currentUser } = useSelector((state: RootState) => state.app);
  const { basket, totalAmount } = useSelector(
    (state: RootState) => state.basket
  );

  const dispatch = useDispatch();
  const closeDrawer = () => {
    dispatch(setDrawer(false));
  };

  const removeProduct = (ProductID: number) => {
    dispatch(removeProductFromBasket(ProductID));
  };
  const buy = () => {
    if (currentUser?.balance && currentUser.balance < totalAmount) {
      toast.warn("bakiyeniz yeterli değildir.");
      return;
    }

    if (currentUser?.balance) {
      const remaningTotal = currentUser.balance - totalAmount;

      const payload: UserType = {
        ...currentUser,
        balance: remaningTotal,
      };
      dispatch(updateBalance(payload));
      dispatch(setBasket([]));
      localStorage.removeItem("basket");
      toast.success("Ürünler başarıyla satın alınmıştır.");
    }
  };

  useEffect(() => {
    dispatch(calculateBasket());
  }, [basket]);

  return (
    <div>
      <Drawer
        open={drawer}
        onClose={closeDrawer}
        anchor="right"
        sx={{ width: "400px" }}
      >
        {basket &&
          basket.map((producut: ProductType) => (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: "20px 20px",
                }}
              >
                <div>
                  <img
                    style={{ marginRight: "20px" }}
                    src={producut.image}
                    width={"60px"}
                    height={"60px"}
                    alt=""
                  />
                </div>
                <div
                  style={{ width: "200px", borderRight: " 1px solid black" }}
                >
                  <div style={{ fontWeight: "bold" }}>
                    {producut.title.substring(0, 15)}
                  </div>
                  <div>{producut.description.substring(0, 30)}</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "0 20px",
                  }}
                >
                  <div>{producut.count}</div>
                  <div style={{ width: "50px" }}>{producut.price}</div>
                </div>
                <div>
                  <Button
                    onClick={() => removeProduct(producut.id)}
                    variant="contained"
                    color="error"
                  >
                    Çıkar
                  </Button>
                </div>
              </div>
            </>
          ))}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2>TOPLAM TUTAR : {String(totalAmount).substring(0, 5)} ₺</h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            marginRight: "5%",
          }}
        >
          <Button
            onClick={buy}
            variant="contained"
            color="success"
            size="large"
          >
            Satın Al
          </Button>
        </div>
      </Drawer>
    </div>
  );
}

export default BasketDetails;
