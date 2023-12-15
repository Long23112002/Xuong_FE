import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { fetchProducts } from "../service/ProductService";
import { fetchingProductDetail } from "../service/ProductDetailService";
import CustomActionButtons from "./custom/CustomActionButtons";
import ModalDetail from "./modal/ModalDetail";

const Product = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [dataDetail, setDataDetail] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchProductsDataPage = async () => {
    try {
      const result = await fetchProducts();
      setData(result.content);
      setTotalPages(result.totalPages);
    } catch (error) {
      console.log(error);
      console.error("Lỗi fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProductsDataPage();
  }, []);

  const HandleEyeClick = async (row) => {
    try {
      const result = await fetchingProductDetail(row.idProduct);
      setDataDetail(result);
      setIsModalOpen(true);
      console.log(result);
      console.log(dataDetail.productName);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePencilClick = (row) => {
    console.log(`Editing details for row with ID ${row.idProduct}`);
  };

  const columns = [
    {
      name: "No",
      selector: "idProduct",
      sortable: true,
    },
    {
      name: "Product name",
      selector: "productName",
      sortable: true,
    },
    {
      name: "Brand name",
      selector: "brandName",
      sortable: true,
    },
    {
      name: "Subcategory name",
      selector: "subCategoryName",
      sortable: true,
    },
    {
      name: " Price",
      selector: "price",
      sortable: true,
    },

    {
      name: " Status",
      selector: "statusName",
      sortable: true,
    },

    {
      name: "Actions",
      cell: (row) => (
        <CustomActionButtons
          row={row}
          onEyeClick={HandleEyeClick}
          onPencilClick={handlePencilClick}
        />
      ),
    },
  ];

  return (
    <div className="container" style={{ backgroundColor: "#e7e4e4" }}>
      <div className="btn btn-success" style={{ margin: "20px 0" }}>
        Add product
      </div>

      <ModalDetail
        visible={isModalOpen}
        onCancelModal={() => setIsModalOpen(false)}
        dataDetail={dataDetail}
      />
      <DataTable
        title="Product Details"
        columns={columns}
        data={data}
        pagination
        striped
      />
    </div>
  );
};

export default Product;
