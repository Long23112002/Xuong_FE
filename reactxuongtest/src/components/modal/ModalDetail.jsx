import React from "react";
import {Button, Modal, Select} from "antd";
import {Option} from "antd/es/mentions";

const ModalDetail = ({visible, onCancelModal, dataDetail}) => {


    if (dataDetail !== null) {
        console.log(dataDetail);
    }

    const customFooter = (
        <Button key="cancel" onClick={onCancelModal}>
            Cancel
        </Button>
    );

    const labelStyle = {
        fontSize: "14px",
        fontWeight: "bold",
        marginTop: "5px",
        marginBottom: "5px",
    };

    const inputStyle = {
        width: "100%",
    };

    return (
        <>
            <Modal
                title="Detail Product"
                footer={customFooter}
                visible={visible}
                onCancel={onCancelModal}
            >
                <form>
                    <div className="form-group">
                        <label style={labelStyle} className="form-label">
                            Product name
                        </label>
                        <input
                            value={dataDetail.productDetailResponse.productName}
                            type="text"
                            className="form-control"
                            placeholder="Product name"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label style={labelStyle} className="form-label">
                            Color
                        </label>
                        <input
                            value={dataDetail.color}
                            type="text"
                            className="form-control"
                            placeholder="Color"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label style={labelStyle} className="form-label">
                            Quantity
                        </label>
                        <input
                            value={dataDetail.quantity}
                            type="text"
                            className="form-control"
                            placeholder="Quantity"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label style={labelStyle} className="form-label">
                            Sell Price
                        </label>
                        <input
                            value={dataDetail.sellPrice}
                            type="text"
                            className="form-control"
                            placeholder="Sell price"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label style={labelStyle} className="form-label">
                            Origin price
                        </label>
                        <input
                            value={dataDetail.originPrice}
                            type="text"
                            className="form-control"
                            placeholder="Origin price"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <div style={labelStyle} className="form-label">
                            Brand name
                        </div>
                        <Select placeholder="Select Status" style={inputStyle} defaultValue={dataDetail.brandName}>
                            <Option value={dataDetail.brandName}></Option>
                            <Option value="option2">Option 2</Option>
                        </Select>
                    </div>

                    <div className="form-group">
                        <div style={labelStyle} className="form-label">
                            SubCategory
                        </div>
                        <Select placeholder="Select Status" style={inputStyle}
                                defaultValue={dataDetail.subCategoryName}>
                            <Option value={dataDetail.subCategoryName}></Option>
                            <Option value="option2">Option 2</Option>
                        </Select>
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ModalDetail;
