import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductService from "../../services/product.service";

const ModalCreate = () => {
  const [ProductName, setProductName] = useState("");
  const [Age, setAge] = useState("dewasa");
  const [SizeProduct, setSizeProduct] = useState("l");
  const [ColorProduct, setColorProduct] = useState("");
  const [PriceProduct, setPriceProduct] = useState("");
  const [TypeProduct, setTypeProduct] = useState("pendek");
  const [validateProductName, setValidateProductName] = useState(true);
  const [validateColorProduct, setValidateColorProduct] = useState(true);
  const [validatePriceProduct, setValidatePriceProduct] = useState(true);
  const [size, setSize] = useState(null);

  const handleOpen = (value) => setSize(value);

  let navigate = useNavigate();
  const onSubmitProduct = () => {
    setValidateProductName(ProductName);
    setValidateColorProduct(ColorProduct);
    setValidatePriceProduct(PriceProduct);
    if (ProductName != "" && ColorProduct != "" && PriceProduct != "") {
      ProductService.createProduct(
        ProductName,
        Age,
        SizeProduct,
        ColorProduct,
        PriceProduct,
        TypeProduct
      )
        .then(() => {
          navigate("/dashboard/product");
          handleOpen(null);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div>
        <div className="ml-4">
          <Button onClick={() => handleOpen("sm")}>Tambah</Button>
        </div>
        <Dialog
          open={
            size === "xs" ||
            size === "sm" ||
            size === "md" ||
            size === "lg" ||
            size === "xl" ||
            size === "xxl"
          }
          size={size || "lg"}
          handler={handleOpen}
        >
          <DialogHeader>Tambah Product</DialogHeader>
          <DialogBody divider className="flex justify-center">
            <div className="block w-96">
              <div className="mt-4">
                <Input
                  label="Nama Product"
                  onChange={(e) => setProductName(e.target.value)}
                />
              </div>
              {validateProductName == "" ? (
                <div className="rounded bg-pink-400 p-2 text-white">
                  Nama produk harus di isi
                </div>
              ) : (
                ""
              )}
              <div className="mt-4">
                <Input
                  label="Warna"
                  onChange={(e) => setColorProduct(e.target.value)}
                />
              </div>
              {validateColorProduct == "" ? (
                <div className="rounded bg-pink-400 p-2 text-white">
                  Warna produk harus di isi
                </div>
              ) : (
                ""
              )}
              <div className="mt-4">
                <Input
                  label="Harga"
                  type={"number"}
                  onChange={(e) => setPriceProduct(e.target.value)}
                />
              </div>
              {validatePriceProduct == "" ? (
                <div className="rounded bg-pink-400 p-2 text-white">
                  Harga produk harus di isi
                </div>
              ) : (
                ""
              )}
              <div className="mt-4">
                <label>Jenis Usia</label>
                <select
                  label="Jenis"
                  onChange={(e) => setAge(e.target.value)}
                  className="border-1 w-full rounded-md border-[#d1d5da]"
                  value={"dewasa"}
                >
                  <option value={"dewasa"}>dewasa</option>
                  <option value={"anak"}>anak</option>
                </select>
              </div>

              <div className="mt-4 ">
                <label>Ukuran</label>
                <select
                  label="Ukuran"
                  onChange={(e) => setSizeProduct(e.target.value)}
                  className="border-1 w-full rounded-md border-[#d1d5da]"
                  value={"l"}
                >
                  <option value={"xs"}>XS</option>
                  <option value={"s"}>S</option>
                  <option value={"m"}>M</option>
                  <option value={"l"}>L</option>
                  <option value={"xl"}>XL</option>
                  <option value={"xxl"}>XXL</option>
                  <option value={"xxxl"}>XXXL</option>
                  <option value={"xxxxl"}>XXXXL</option>
                </select>
              </div>
              <div className="mt-4">
                <label>Jenis</label>
                <select
                  label="Jenis"
                  onChange={(e) => setTypeProduct(e.target.value)}
                  className="border-1 w-full rounded-md border-[#d1d5da]"
                >
                  <option value={"pendek"}>Pendek</option>
                  <option value={"panjang"}>Panjang + RIB</option>
                  <option value={"no_rib"}>Panjang no RIB</option>
                </select>
              </div>
            </div>
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="blue"
              onClick={() => handleOpen(null)}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button
              variant="gradient"
              color="blue"
              onClick={() => onSubmitProduct()}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
};

export default ModalCreate;
