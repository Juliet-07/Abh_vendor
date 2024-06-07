import React, { useState } from "react";
import { ArrowLeftIcon, PlusIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

const BulkUpload = () => {
  const navigate = useNavigate();

  const [bulkArray, setbulkArray] = useState([
    {
      id: Math.random(new Range(1, 2000)),
      productName: "",
      ProductDescription: "",
      Quantity_in_Units_or_Carton: "",
      Categories: "",
      Size: "",
      Manufacturer: "",
      Price_in_Naira_or_Dollar: "",
    },
  ]);

  const addBulk = () => {
    setbulkArray((prev) => [
      ...prev,
      {
        id: Math.random(new Range(1, 2000)),
        productName: "",
        ProductDescription: "",
        Quantity_in_Units_or_Carton: "",
        Categories: "",
        Size: "",
        Manufacturer: "",
        Price_in_Naira_or_Dollar: "",
      },
    ]);
  };

  const InputBulk = (id, field, input) => {
    // setbulkArray((prev)=> [
    //   ...prev, {id, id, [field]: input,}
    // ]);
    // console.log(bulkArray)
  };

  return (
    <div className="font-primaryRegular bg-[#F1F4F2] min-h-[100vh]">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between px-5">
        <div className="flex items-center">
          <div
            className="flex items-center gap-4 active:opacity-5"
            onClick={() => {
              navigate("/dashboard/myProducts");
            }}
          >
            <ArrowLeftIcon width={20} height={20} /> <p>Bulk Upload</p>
          </div>
        </div>
        <div className="flex items-center gap-4 my-4 md:my-0">
          <button className="w-[122px] md:w-[148px] h-[36px] md:h-[46px] rounded-md border border-[#CFCBCB] text-grey-400">
            Save as draft
          </button>
          <button className="w-[122px] md:w-[148px] h-[36px] md:h-[46px] rounded-md border border-[#359E52] text-[#359E52]">
            Publish
          </button>
        </div>
      </div>

      <div className="bg-white my-10">
        <div className="w-full min-h-[300px] overflow-x-scroll">
          <div className="flex flex-row items-center gap-4">
            <div className=" h-[56px] mt-[10px] p-[10px] flex flex-1 flex-row items-center md:justify-between bg-[#F1F4F2] border-[#C1C6C5]">
              <b className="text-[14px] text-black  min-w-[164px] text-center">
                ID
              </b>
              <b className="text-[14px] text-black  min-w-[164px] text-center">
                Product Name
              </b>
              <b className="text-[14px] text-black  min-w-[164px] text-center">
                Product Description
              </b>
              <b className="text-[14px] text-black  min-w-[164px] text-center">
                Quantity in Units or Carton
              </b>
              <b className="text-[14px] text-black  min-w-[164px] text-center">
                Categories
              </b>
              <b className="text-[14px] text-black  min-w-[164px] text-center">
                Size
              </b>
              <b className="text-[14px] text-black  min-w-[164px] text-center">
                Manufacturer
              </b>
              <b className="text-[14px] text-black  min-w-[164px] text-center">
                Price in Naira or Dollar
              </b>
            </div>
          </div>
          {bulkArray.map((data, index) => {
            return (
              <div className="flex flex-row items-center gap-4 ">
                <div className="h-[70px] px-[10px] flex flex-1 flex-row items-center justify-between border-[#F1F4F2] border-[0.66px] mt-[10px]">
                  <p className="text-[14px] text-black min-w-[164px] text-center">
                    <input
                      type="text"
                      placeholder=" input here"
                      className="border-[1px] border-[#F1F4F2] h-[60px] w-[100px]"
                    />
                  </p>
                  <p className="text-[12px] text-black min-w-[164px] text-center">
                    <input
                      type="text"
                      placeholder=" input here"
                      onInput={(e) =>
                        InputBulk(data.id, "productName", e.target.value)
                      }
                      className="border-[1px] border-[#F1F4F2] h-[60px] w-[100px]"
                    />
                  </p>
                  <p className="text-[12px] text-black min-w-[164px] text-center">
                    <input
                      type="text"
                      placeholder=" input here"
                      onInput={(e) =>
                        InputBulk(data.id, "productName", e.target.value)
                      }
                      className="border-[1px] border-[#F1F4F2] h-[60px] w-[100px]"
                    />
                  </p>
                  <p className="text-[12px] text-black min-w-[164px] text-center">
                    <input
                      type="text"
                      placeholder=" input here"
                      className="border-[1px] border-[#F1F4F2] h-[60px] w-[100px]"
                      onInput={(e) =>
                        InputBulk(data.id, "productName", e.target.value)
                      }
                    />
                  </p>
                  <div className="text-[14px] text-black min-w-[164px] flex flex-row justify-center items-center gap-[10px]">
                    <input
                      type="text"
                      placeholder=" input here"
                      className="border-[1px] border-[#F1F4F2] h-[60px] w-[100px]"
                      onInput={(e) =>
                        InputBulk(data.id, "productName", e.target.value)
                      }
                    />
                  </div>
                  <p className="text-[12px] text-black min-w-[164px] text-center">
                    <input
                      type="text"
                      placeholder=" input here"
                      className="border-[1px] border-[#F1F4F2] h-[60px] w-[100px]"
                      onInput={(e) =>
                        InputBulk(data.id, "productName", e.target.value)
                      }
                    />
                  </p>
                  <p className="text-[12px] text-black min-w-[164px] text-center">
                    <input
                      type="text"
                      placeholder=" input here"
                      className="border-[1px] border-[#F1F4F2] h-[60px] w-[100px]"
                      onInput={(e) =>
                        InputBulk(data.id, "productName", e.target.value)
                      }
                    />
                  </p>
                  <p className="text-[12px] text-black min-w-[164px] text-center">
                    <input
                      type="text"
                      placeholder=" input here"
                      className="border-[1px] border-[#F1F4F2] h-[60px] w-[100px]"
                      onInput={(e) =>
                        InputBulk(data.id, "productName", e.target.value)
                      }
                    />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-[100px] flex items-center flex-row">
          <button
            onClick={() => addBulk()}
            className="w-[103px] h-[46px] p-0 flex items-center justify-center gap-2 text-white bg-[#4CBD6B] rounded-[6px]"
          >
            <PlusIcon width={16} height={16} /> ADD
          </button>
        </div>
      </div>
    </div>
  );
};
export default BulkUpload;
