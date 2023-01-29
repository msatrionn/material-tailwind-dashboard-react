import ToastSuccess from "@/components/Toast/toastSuccess";
import { TrashIcon } from "@heroicons/react/24/solid";
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

const ModalDelete = (props) => {
  const [Age, setAge] = useState("");
  const [size, setSize] = useState(null);
  const [showModals, setShowModals] = useState(false);

  const handleOpen = (value) => setSize(value);

  let navigate = useNavigate();
  const onDeleteProduct = () => {
    ProductService.deleteProduct(props.productId)
      .then(() => {
        setShowModals(true);
        navigate("/dashboard/product");
        handleOpen(null);
        alert("berhasil dihapus");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <div className="ml-1">
          <TrashIcon
            width={20}
            onClick={() => handleOpen("sm")}
            className="cursor-pointer"
          />
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
          <DialogHeader>Hapus Product</DialogHeader>
          <DialogBody>Apakah anda yakin untuk menghapus ?</DialogBody>
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
              onClick={() => onDeleteProduct()}
            >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </>
  );
};

export default ModalDelete;
