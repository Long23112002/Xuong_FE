import React from "react";
import {Button, Input, Modal, Select} from "antd";
import {Option} from "antd/es/mentions";

const ModalDetail = ({visible, onCancelModal, dataDetail}) => {

    if (!dataDetail || !dataDetail.listBrandName || dataDetail.listBrandName.length === 0) {
        return null;
    }
    if (dataDetail !== null) {
        console.log(dataDetail);
    }

    const customFooter = (
        <Button key="cancel" onClick={onCancelModal}>
            Cancel
        </Button>
    );

    const styleNameForm = {
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
                        <label style={styleNameForm} className="form-label">
                            Product name
                        </label>
                        <input
                            value={dataDetail.productDetailResponse
                                ? dataDetail.productDetailResponse.productName
                                : ""}
                            type="text"
                            className="form-control"
                            placeholder="Product name"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label style={styleNameForm} className="form-label">
                            Color
                        </label>
                        <input
                            value={dataDetail.productDetailResponse
                                ? dataDetail.productDetailResponse.color : ""}
                            type="text"
                            className="form-control"
                            placeholder="Color"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label style={styleNameForm} className="form-label">
                            Quantity
                        </label>
                        <input
                            value={dataDetail.productDetailResponse
                                ? dataDetail.productDetailResponse.quantity : ""}
                            type="text"
                            className="form-control"
                            placeholder="Quantity"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label style={styleNameForm} className="form-label">
                            Sell Price
                        </label>
                        <input
                            value={dataDetail.productDetailResponse
                                ? dataDetail.productDetailResponse.sellPrice : ""}
                            type="text"
                            className="form-control"
                            placeholder="Sell price"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <label style={styleNameForm} className="form-label">
                            Origin price
                        </label>
                        <input
                            value={dataDetail.productDetailResponse
                                ? dataDetail.productDetailResponse.originPrice : ""}
                            type="text"
                            className="form-control"
                            placeholder="Origin price"
                            style={inputStyle}
                        />
                    </div>

                    <div className="form-group">
                        <div style={styleNameForm} className="form-label">
                            Brand name
                        </div>
                        <Select placeholder="Select Status" style={inputStyle}
                                defaultValue={dataDetail.listBrandName[0]}
                        >
                            {dataDetail.listBrandName?.map((brand, index) => (
                                <Option key={index} value={brand}></Option>
                            ))}
                        </Select>
                    </div>

                    <div className="form-group">
                        <div style={styleNameForm} className="form-label">
                            SubCategory
                        </div>
                        <Select placeholder="Select Status" style={inputStyle}
                                defaultValue={dataDetail.productDetailResponse
                                    ? dataDetail.productDetailResponse.subCategoryName : ""}>
                            <Option value={dataDetail.productDetailResponse.subCategoryName}></Option>
                        </Select>
                    </div>
                    <div className="form-group">
                        <label style={styleNameForm}>Status name</label>
                        <input
                            value={dataDetail.productDetailResponse
                                ? dataDetail.productDetailResponse.statusName : ""}
                            type="text"
                            className="form-control"
                            placeholder="Origin price"
                            style={inputStyle}
                        />
                    </div>
                </form>
            </Modal>
        </>
    );
};

export default ModalDetail;
