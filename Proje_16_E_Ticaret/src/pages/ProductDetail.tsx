import { Button, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setLoading } from "../redux/appSlice";
import { toast } from "react-toastify";
import productService from "../services/ProductService";
import { ProductType } from "../types/Types";
import { addProductToBasket } from "../redux/basketSlice";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductType | null>();
  const [count, setCount] = useState(1);

  const getProductById = async (productId: number) => {
    try {
      dispatch(setLoading(true));
      const product: ProductType = await productService.getProductById(
        productId
      );
      setProduct(product);
    } catch (error) {
      toast.error("Ürün yüklenirken hata oluştu : " + error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  const addBasket = () => {
    if (product) {
      const payload: ProductType = {
        ...product,
        count: count,
      };
      dispatch(addProductToBasket(payload));
      toast.success("Ürün sepete eklendi  ");
    }
  };
  useEffect(() => {
    getProductById(Number(productId));
  }, []);
  return (
    <Container maxWidth="lg">
      {product && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: "60px",
            }}
          >
            <div>
              <img src={product?.image} width={250} height={400} alt="" />
            </div>
            <div style={{ marginLeft: "60px", marginTop: "20px" }}>
              <h1>{product?.title}</h1>
              <div style={{ height: "100px", fontSize: "20px" }}>
                {product?.description}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: "20px",
                }}
              >
                <h2>{count * product.price} TL</h2>
                <div>
                  <span
                    onClick={() => setCount(count - 1)}
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      cursor: "pointer",
                      marginRight: "40px",
                    }}
                  >
                    -
                  </span>
                  <span
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      marginRight: "40px",
                    }}
                  >
                    {count}
                  </span>
                  <span
                    onClick={() => setCount(count + 1)}
                    style={{
                      fontSize: "35px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    +
                  </span>
                </div>
              </div>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button onClick={addBasket} color="warning" variant="contained">
                  Sepete Ekle
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
}

export default ProductDetail;
