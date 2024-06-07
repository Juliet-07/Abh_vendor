import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon, XIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

const Profile = () => {
  const [showPreview, setPreview] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {showPreview && (
        <div
          // onClick={()=> setPreview(false)}
          className="w-full h-[100vh] overflow-y-scroll bg-[#000000a8] fixed z-[60000] top-0 left-0 flex flex-col items-center "
        >
          <div className="w-[90%] max-w-[679px] relative  bg-white rounded-[10px] p-[20px] md:p-[40px] my-[5vh]">
            <b className="text-[16px] w-full text-center flex justify-center">
              Edit Business Info
            </b>
            <XIcon
              width={20}
              height={20}
              className="absolute right-[20px] top-[20px] cursor-pointer active:opacity-5"
              color="red"
              onClick={() => setPreview(false)}
            />
            <div className="w-full flex flex-row flex-wrap mt-[20px] min-h-1 gap-2"></div>
            {/* <br /> */}
            <br />
            <p className="text-[16px] w-full">Shop Residing Country</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="text"
                name=""
                id=""
                style={{ outline: "none" }}
                className="flex w-full h-[35px] border-none"
              />
            </div>
            <br />
            <p className="text-[16px] w-full">Shop Address</p>
            <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="text"
                name=""
                id=""
                style={{ outline: "none" }}
                className="flex w-full h-[35px] border-none"
              />
            </div>
            <br />
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">City</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
              <br />
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">State</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Business Phone Number</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
              <br />
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Alternate Phone Number</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Business Phone Number</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
              <br />
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Business mail</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Business Type</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
              <br />
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">
                  National Identification Number
                </p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
            </div>

            <br />

            <div className="flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Tax Identification Number</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
              <br />
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">CAC Registration Number</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>
            </div>

            <br />

            <div className="min-w-[235px] ">
              <p>Documents</p>
              <div className="w-[50%] h-[1px] bg-gray-600 my-[10px]" />
              <p>Upload CAC Certificate (optional) </p>
            </div>
            <br />
            <button className="bg-[#96989966] border-[#96989966] border-[1px] w-[125px] h-[40px]">
              No file
            </button>
            {/* </div> */}
            <br />
            <br />

            {/* <div className="flex flex-row  w-full items-center justify-between"> */}
            <div className="flex flex-row gap-[10px]  w-full justify-center">
              <div>
                <button
                  onClick={() => {
                    // window.open("#edit", "_parent")
                    setPreview(false);
                    pushEdit("id");
                  }}
                  className="md:w-[186px] w-[99px]  h-[46px] bg-[#4CBD6B] text-white rounded-[6px]"
                >
                  Edit
                </button>
              </div>

              <button
                onClick={() => {
                  setDelete(false);
                  setPreview(false);
                }}
                className="md:w-[186px] w-[99px]  h-[46px] bg-white text-[grey] border-[1px] rounded-[6px]"
              >
                Cancel
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      )}

      <header className="w-full h-[70px] flex  bg-white  flex-row items-center justify-between p-[20px]">
        <div className="flex flex-row gap-[10px] items-center ">
          <ArrowNarrowLeftIcon
            width={20}
            height={20}
            onClick={() => navigate("/dashboard/home")}
          />
          <p className="text-[16px]">Profile</p>
        </div>
      </header>

      <div className="w-full flex flex-col overflow-y-scroll my-10">
        <div className="w-full  flex justify-center  bg-none flex-col flex-wrap md:flex-nowrap gap-[20px] ">
          <div className="w-full min-h-[120px] rounded-[20px] relative bg-[#8BCB901F] p-[10px] flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[20px]">
              <div className="bg-[#CFCBCB] rounded-[100px] h-[100px] w-[100px] flex items-center justify-center">
                <UserIcon width={60} height={60} />
              </div>

              <div className="flex flex-col items-start  justify-evenly">
                <b className="text-[16px]">Kayla Samson</b>
                <p className="text-[16px]">kaylan@gmail.com</p>
                <p className="text-[16px]">08123122311</p>
              </div>
            </div>

            <b
              className="absolute right-[20px] top-[20px] cursor-pointer active:opacity-5 "
              onClick={() => setPreview(true)}
            >
              Edit
            </b>
          </div>
          <div className="w-full min-h-[120px] px-[30px] rounded-[20px] relative bg-[#8BCB901F] p-[10px] py-[30px] flex flex-row flex-wrap items-start justify-evenly">
            {/* <div className="flex flex-row flex-wr/ap w-full items-center md:justify-around"> */}
            <div className="min-w-[235px] ">
              <p>Shop name</p>
              <div className="w-full h-[1px] bg-gray-600 mt-[10px]" />
              <div className="flex flex-row items-center mt-[10px] gap-[10px]">
                <div className="bg-[#E38E0F] w-[30px] h-[30px] rounded-full text-white flex items-center justify-center">
                  <b>K</b>
                </div>{" "}
                <p>Kayla Ventures</p>
              </div>
            </div>
            {/* </div> */}

            <div className="w-full max-w-[669px] min-h-[50vh] md:px-[20px] border-l-[1px] md:border-[grey]">
              <br />
              <p className="text-[16px] w-full">Shop Residing Country</p>
              <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                <input
                  type="text"
                  name=""
                  id=""
                  style={{ outline: "none" }}
                  className="flex w-full h-[35px] border-none"
                />
              </div>
              <br />
              <p className="text-[16px] w-full">Shop Address</p>
              <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                <input
                  type="text"
                  name=""
                  id=""
                  style={{ outline: "none" }}
                  className="flex w-full h-[35px] border-none"
                />
              </div>
              <br />
              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">City</p>
                  <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                    <input
                      type="text"
                      name=""
                      id=""
                      style={{ outline: "none" }}
                      className="flex w-full h-[35px] border-none"
                    />
                  </div>
                </div>
                <br />
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">State</p>
                  <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                    <input
                      type="text"
                      name=""
                      id=""
                      style={{ outline: "none" }}
                      className="flex w-full h-[35px] border-none"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">Date of Birth</p>
                  <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                    <input
                      type="text"
                      name=""
                      id=""
                      style={{ outline: "none" }}
                      className="flex w-full h-[35px] border-none"
                    />
                  </div>
                </div>
                <br />
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">Business Type</p>
                  <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                    <input
                      type="text"
                      name=""
                      id=""
                      style={{ outline: "none" }}
                      className="flex w-full h-[35px] border-none"
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">
                    National Identification Number
                  </p>
                  <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                    <input
                      type="text"
                      name=""
                      id=""
                      style={{ outline: "none" }}
                      className="flex w-full h-[35px] border-none"
                    />
                  </div>
                </div>
                <br />
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">
                    Tax Identification Number
                  </p>
                  <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                    <input
                      type="text"
                      name=""
                      id=""
                      style={{ outline: "none" }}
                      className="flex w-full h-[35px] border-none"
                    />
                  </div>
                </div>
              </div>

              <br />

              <div className="flex flex-col w-[50%]">
                <p className="text-[16px] w-full">Tax Identification Number</p>
                <div className="w-full h-[40px] border-[1px] mt-[10px] bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full h-[35px] border-none"
                  />
                </div>
              </div>

              <br />

              <div className="min-w-[235px] ">
                <p>Documents</p>
                <div className="w-[50%] h-[1px] bg-gray-600 my-[10px]" />
                <p>CAC Certificate </p>
              </div>
              <br />
              <button className="bg-[#96989966] border-[#96989966] border-[1px] w-[125px] h-[40px]">
                No file
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
