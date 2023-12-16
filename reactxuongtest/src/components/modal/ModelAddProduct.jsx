import React, {useEffect, useState} from "react";
import {Button, Input, Modal, Select} from "antd";
import {Option} from "antd/es/mentions";
import {addProduct} from "../../service/ProductService";
import {fetchAllBrandName} from "../../service/BrandService";

const ModalAddProduct = ({handleCancel, handleVisible}) => {
    const [productName, setProductName] = useState("");
    const [color, setColor] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [sellPrice, setSellPrice] = useState(0);
    const [originPrice, setOriginPrice] = useState(0);
    const [brandName, setBrandName] = useState([]);
    const [subCategoryName, setSubCategoryName] = useState("");

    useEffect(() => {
        fetchAllBrandName()
            .then(responseDataBrandName => {
                setBrandName(responseDataBrandName)
            })
            .catch(error => {
                console.error("Có lỗi xảy ra khi fetch dữ liệu:", error);
            });
    }, []);

    const handleOk = async () => {
        const newDataProduct = {
            productName: productName,
            color: color,
            quantity: quantity,
            sellPrice: sellPrice,
            originPrice: originPrice,
            brandName: 1,
            subCategoryName: 1,
            statusName: "",
        };
        console.log(newDataProduct)
        try {
            if (newDataProduct) {
                const response = await addProduct(newDataProduct);
                console.log(response.data);
            } else {
                console.error("newDataProduct không có giá trị");
            }
        } catch (error) {
            console.error(error);
        }
    }


    const styleNameForm = {
        fontSize: "14px",
        fontWeight: "bold",
        marginTop: "5px",
        marginBottom: "5px",
    };

    const inputStyle = {
        width: "100%",
    }

    return (<>

        <Modal title="Add product" visible={handleVisible} onOk={handleOk} onCancel={handleCancel}>
            <form>
                <div className="form-group">
                    <label style={styleNameForm} className="form-label">Product name</label>
                    <Input onChange={(e) => setProductName(e.target.value)} style={inputStyle} type="text"
                           placeholder="Product name"/>
                    <span className="error erroProductName"></span>
                </div>
                <div className="form-group">
                    <label style={styleNameForm} className="form-label">Color</label>
                    <Input onChange={(e) => setColor(e.target.value)} style={inputStyle} type="text"
                           placeholder="Color"/>
                    <span className="error errorProductName"></span>
                </div>
                <div className="form-group">
                    <label style={styleNameForm} className="form-label">Quantity</label>
                    <Input onChange={(e) => setQuantity(e.target.value)} style={inputStyle} type="text"
                           placeholder="Quantity"/>
                    <span className="error errorQuantity"></span>
                </div>
                <div className="form-group">
                    <label style={styleNameForm} className="form-label">Sell price</label>
                    <Input onChange={(e) => setSellPrice(e.target.value)} style={inputStyle} type="text"
                           placeholder="Sell price"/>
                    <span className="error errorSellPrice"></span>
                </div>
                <div className="form-group">
                    <label style={styleNameForm} className="form-label">Origin price</label>
                    <Input onChange={(e) => setOriginPrice(e.target.value)} style={inputStyle} type="text"
                           placeholder="Origin price"/>
                    <span className="error errorOriginPrice"></span>
                </div>

                <div className="form-group">
                    <div style={styleNameForm} className="form-label">Brand name</div>
                    <Select style={inputStyle}>
                        {Array.isArray(brandName) &&
                            brandName.map((brand, index) => (
                                <Option key={index} value={brand}>
                                    {brand}
                                </Option>
                            ))}
                    </Select>
                </div>

                <div className="form-group">
                    <div style={styleNameForm} className="form-label">Subcategory</div>
                    <Select style={inputStyle}>
                        <Option>1</Option>
                    </Select>
                </div>
            </form>
        </Modal>

    </>);

}
export default ModalAddProduct;