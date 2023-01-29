import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../services/product.service";
import ModalCreate from "./modal-create";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import ModalDelete from "./modal-delete";

export function Product() {
  const [showProduct, setShowProduct] = useState([]);
  const [showDelete, setShowDelete] = useState();
  let navigate = useNavigate();

  const validateUser = () => {
    if (localStorage.getItem("user") == null) {
      navigate("/auth/sign-in");
    }
    ProductService.getProductAll()
      .then((result) => {
        setShowProduct(result.data.data);
      })
      .catch((err) => {
        if (err.response.status == 401) {
          navigate("/auth/sign-in");
        }
      });
  };

  const handleProductId = (data) => {
    setShowDelete(data);
  };
  useEffect(() => {
    validateUser();
  }, [validateUser]);
  // console.log(showDelete);

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <ModalCreate />
      <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Tabel Product
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {[
                  "Nama Produk",
                  "Usia",
                  "Ukuran",
                  "Warna",
                  "Harga",
                  "Jenis",
                  "Aksi",
                ].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {showProduct.map(
                (
                  {
                    idProduct,
                    productName,
                    age,
                    sizeProduct,
                    colorProduct,
                    priceProduct,
                    typeProduct,
                  },
                  key
                ) => {
                  const className = `py-3 px-5 ${
                    key === showProduct.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={idProduct}>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {productName ?? ""}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {age ?? ""}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {sizeProduct ?? ""}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {colorProduct ?? ""}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {priceProduct ?? ""}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {typeProduct ?? ""}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="flex">
                          <span>
                            <PencilIcon width={20} className="cursor-pointer" />
                          </span>
                          <span>
                            <ModalDelete
                              callback={handleProductId}
                              productId={idProduct}
                            />
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Product;
