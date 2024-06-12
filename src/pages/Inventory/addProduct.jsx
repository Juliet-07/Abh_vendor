import React, { useState, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ArrowNarrowLeftIcon, CheckIcon, XIcon } from "@heroicons/react/solid";
import { FiUploadCloud } from "react-icons/fi";
import Categories from "../../components/Categories";

const AddProduct = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("vendorToken");
  const navigate = useNavigate();
  const { handleSubmit } = useForm();
  const [showPreview, setPreview] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [categoryId, setCategoryId] = useState("");

  const initialValue = {
    name: "",
    quantity: "",
    size: "",
    unit: "",
    description: "",
    price: "",
    currency: "",
    manufacturer: "",
    product_images: "",
  };

  const [addProductData, setAddProductData] = useState(initialValue);

  const {
    name,
    quantity,
    size,
    unit,
    description,
    price,
    currency,
    manufacturer,
    product_images,
  } = addProductData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddProductData({ ...addProductData, [name]: value });
  };

  const handleCategoryInfo = useCallback((data) => {
    console.log({ data });
    setCategoryId(data.value);
  }, []);

  const handleImageUpload = (e) => {
    console.log(e.target.files, "image");
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageDataUrl = reader.result;
      setImages((prevImages) => [...prevImages, imageDataUrl]);
    };
    reader.readAsDataURL(file);
    // setFile(image);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((image, index) => index !== indexToRemove)
    );
  };

  const addProduct = () => {
    setLoading(true);
    const url = `${apiURL}/products`;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("quantity", quantity);
    formData.append("size", size);
    formData.append("unit", unit);
    formData.append("categoryId", categoryId);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("currency", "NGN");
    formData.append("manufacturer", manufacturer);
    images.forEach((image) => {
      formData.append("product_images", image);
    });
    setTimeout(() => {
      setLoading(false);
      axios
        .post(url, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log(response, "response from adding products");
          // toast.success(response.data.statusMessage);
          // resetForm();
        });
    }, 2000);
  };

  return (
    <>
      {showPreview && (
        <div
          // onClick={()=> setPreview(false)}
          className="w-full h-[100vh]  bg-[#000000a8] z-[10000] fixed top-0 left-0 flex flex-col items-center  justify-center"
        >
          <div className="w-[90%] max-w-[498px] h-[344px] bg-white p-[40px] rounded-[10px] flex flex-col items-center  justify-center">
            <div className="w-[50px] h-[50px] rounded-[100px] border-[#08932E] border-[1px] flex flex-col items-center  justify-center">
              <CheckIcon width={30} height={30} color="#08932E" />
            </div>
            <br />
            <b>Product received</b>
            <p className="w-full text-center">
              Your product has been received and is We’ll notify you once it’s
              live
            </p>
            <br />
            <button
              onClick={() => setPreview(false)}
              className="w-[186px] h-[46px] rounded-[6px] bg-[#4CBD6B] text-white"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      <header className="w-full h-[70px] flex  bg-white  flex-row items-center justify-between p-4">
        <div className="flex flex-row gap-[10px] items-center ">
          <ArrowNarrowLeftIcon
            width={20}
            height={20}
            onClick={() => navigate("/dashboard/myProducts")}
          />
          <p className="font-primaryRegular">Add Product</p>
        </div>
      </header>

      <form
        onSubmit={handleSubmit(addProduct)}
        className="w-full flex flex-col overflow-y-scroll my-6 md:my-10 font-primaryRegular"
      >
        <div className="w-full flex flex-row justify-evenly  flex-wrap md:flex-nowrap gap-5">
          {/* form one */}
          <div
            className="w-full p-[20px] min-h-[100vh] md:rounded-[10px]
           border-[1px] border-[#CFCBCB] md:max-w-[426px]"
          >
            <b className="text-[16px]">Featured Image</b>
            <p className="text-[16px]">
              Upload your product featured image here. Image size should not be
              more than 2 MB
            </p>
            <br />
            {/* Featured Images */}
            {/* <div className="w-full min-h-[221px] bg-white p-[20px] flex flex-col">
              <div className="w-full h-[94px] border-[2px] border-dashed border-[#CFCBCB] flex flex-col items-center justify-center p-[10px]">
                <FiUploadCloud size={24} />
                <label
                  htmlFor="fileInput"
                  className="text-[#359E52] cursor-pointer active:opacity-5"
                >
                  Upload an Image
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </label>
                <p className="max-w-[217px]">or drag and drop PNG, JPG</p>
              </div>
              <br />
              <div className="w-full flex flex-row flex-wrap gap-5">
                {images.map((imageDataUrl, index) => (
                  <div
                    key={index}
                    className="w-[71px] h-[56px] border-[0.94px] border-[#359E52] relative"
                    style={{
                      backgroundImage: `url(${imageDataUrl})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="w-[20px] h-[20px] bg-[#eaeaea] cursor-pointer active:opacity-5 rounded-[100px] flex items-center justify-center absolute right-[-5px] top-[-5px]">
                      <button onClick={() => handleRemoveImage(index)}>
                        <XIcon width={12} height={12} color="red" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
            <br />
            <b className="text-[16px]">Gallery</b>
            <p className="text-[16px]">
              Upload your product image gallery here. Image size should not be
              more than  2 MB
            </p>
            <br />
            <div className="w-full min-h-[221px] bg-white p-[20px] flex flex-col">
              <div className="w-full h-[94px] border-[2px] border-dashed border-[#CFCBCB] flex flex-col items-center justify-center p-[10px]">
                <FiUploadCloud size={24} />
                <label
                  htmlFor="fileInput"
                  className="text-[#359E52] cursor-pointer active:opacity-5"
                >
                  Upload an Image
                  <input
                    id="fileInput"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </label>
                <p className="max-w-[217px]">or drag and drop PNG, JPG</p>
              </div>
              <br />
              <div className="w-full flex flex-row flex-wrap gap-5">
                {images.map((imageDataUrl, index) => (
                  <div
                    key={index}
                    className="w-[71px] h-[56px] border-[0.94px] border-[#359E52] relative"
                    style={{
                      backgroundImage: `url(${imageDataUrl})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className="w-[20px] h-[20px] bg-[#eaeaea] cursor-pointer active:opacity-5 rounded-[100px] flex items-center justify-center absolute right-[-5px] top-[-5px]">
                      <button onClick={() => handleRemoveImage(index)}>
                        <XIcon width={12} height={12} color="red" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* form two */}
          <div className="w-full p-5 md:max-w-[596px] min-h-[100vh] md:rounded-xl border bg-white grid">
            <div>
              <label className="text-base">Product Name</label>
              <input
                type="text"
                className="w-full border border-[#CFCBCB] p-3 my-2"
                placeholder="Name of item"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-base">Quantity</label>
              <input
                type="number"
                className="w-full border border-[#CFCBCB] p-3 my-2"
                placeholder="Number of item"
                name="quantity"
                value={quantity}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-base">Size</label>
              <input
                type="number"
                className="w-full border border-[#CFCBCB] p-3 my-2"
                placeholder="Size of item"
                name="size"
                value={size}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-base">Unit</label>
              <input
                type="text"
                className="w-full border border-[#CFCBCB] p-3 my-2"
                placeholder="KG"
                name="unit"
                value={unit}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-base">Manufacturer</label>
              <input
                type="text"
                className="w-full border border-[#CFCBCB] p-3 my-2"
                placeholder="Item Manufacturer"
                name="manufacturer"
                value={manufacturer}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-base">Category</label>
              <Categories onForm={handleCategoryInfo} />
            </div>
            <div>
              <label className="text-base">Price</label>
              <input
                type="number"
                className="w-full border border-[#CFCBCB] p-3 my-2"
                placeholder="Price per item"
                name="price"
                value={price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-base">Product Description</label>
              <textarea
                className="w-full border border-[#CFCBCB] p-3 my-2"
                placeholder="Enter product description"
                name="description"
                value={description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-end my-10">
          <button
            type="submit"
            // onClick={() => setPreview(true)}
            className="w-[200px] h-[50px] bg-white rounded-md border border-[#359E52] text-[#359E52] flex items-center justify-center"
            disabled={loading}
          >
            {loading ? (
              <svg
                className="animate-spin h-6 w-6 text-black"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              "Add Product"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
