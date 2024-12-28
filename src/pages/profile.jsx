import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserIcon, XIcon } from "@heroicons/react/outline";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import { toast, ToastContainer } from "react-toastify";
import { FaPenAlt } from "react-icons/fa";

const Profile = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("vendorToken");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPreview, setPreview] = useState(false);
  const [showAddAccountDetails, setShowAddAccountDetails] = useState(false);
  const [userData, setUserData] = useState({});
  const [initials, setInitials] = useState("");

  const initialAccountDetails = {
    accountName: "",
    accountNumber: "",
    bankName: "",
  };
  const [accountDetails, setAccountDetails] = useState(initialAccountDetails);

  const { accountName, accountNumber, bankName } = useState(accountDetails);

  const handleAccountInfoChange = (e) => {
    const { name, value } = e.target;
    setAccountDetails({ ...accountDetails, [name]: value });
  };

  const addAccountDetails = async () => {
    setLoading(true);
    const url = `${apiURL}/vendors/update-profile`;
    try {
      const response = await axios.patch(
        url,
        { accountDetails },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response, "response");
      if (response.status === 200) {
        toast.success(response.data.data);
        setShowAddAccountDetails(false);
      }
    } catch (error) {
      console.error("Error in API call:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getVendorProfile = () => {
      axios
        .get(`${apiURL}/vendors/profile`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.log(response.data.data);
          setUserData(response.data.data);
          let name = `${userData?.firstName || ""} ${
            userData?.lastName || ""
          }`.trim();
          // console.log(name, "checkng name");
          const _initials = name
            .split(" ")
            .map((word) => word[0]?.toUpperCase() || "")
            .join("");
          setInitials(_initials);
          // console.log(_initials, "checking initials");
        })
        .catch((error) => {
          console.error("Error fetching vendors:", error);
        });
    };

    getVendorProfile();
  }, []);
  return (
    <>
      <ToastContainer />
      {showPreview && (
        <div className="w-full h-[100vh] overflow-y-scroll bg-[#000000a8] fixed z-[100] top-0 left-0 flex flex-col items-center font-primaryRegular">
          <div className="w-[90%] max-w-[679px] relative bg-white rounded-[10px] p-5 my-[5vh]">
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
            <div className="w-full flex flex-row flex-wrap min-h-1 gap-2 mt-4"></div>

            <p className="text-[16px] w-full">Shop Residing Country</p>
            <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="text"
                name=""
                id=""
                style={{ outline: "none" }}
                className="flex w-full border-none"
              />
            </div>
            <br />
            <p className="text-[16px] w-full">Shop Address</p>
            <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="text"
                name=""
                id=""
                style={{ outline: "none" }}
                className="flex w-full border-none"
              />
            </div>
            <br />
            <div className="md:flex md:flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">City</p>
                <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full border-none"
                  />
                </div>
              </div>
              <br />
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">State</p>
                <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full border-none"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="md:flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Business Phone Number</p>
                <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full border-none"
                  />
                </div>
              </div>
              <br />
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Alternate Phone Number</p>
                <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full border-none"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="md:flex flex-row w-full gap-4">
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Business Email</p>
                <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full border-none"
                  />
                </div>
              </div>
              <br />
              <div className="flex flex-col w-full">
                <p className="text-[16px] w-full">Business Type</p>
                <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                  <input
                    type="text"
                    name=""
                    id=""
                    style={{ outline: "none" }}
                    className="flex w-full border-none"
                  />
                </div>
              </div>
            </div>
            <br />

            <div className="w-full flex items-center justify-between my-6">
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
                  setPreview(false);
                }}
                className="md:w-[186px] w-[99px]  h-[46px] bg-white text-[grey] border-[1px] rounded-[6px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {showAddAccountDetails && (
        <div className="w-full h-[100vh] overflow-y-scroll bg-[#000000a8] fixed z-[100] top-0 left-0 flex flex-col items-center font-primaryRegular">
          <div className="w-[90%] max-w-[679px] relative bg-white rounded-[10px] p-5 my-[5vh]">
            <b className="text-[16px] w-full text-center flex justify-center">
              Edit Account Details
            </b>
            <XIcon
              width={20}
              height={20}
              className="absolute right-[20px] top-[20px] cursor-pointer active:opacity-5"
              color="red"
              onClick={() => setShowAddAccountDetails(false)}
            />
            <div className="w-full flex flex-row flex-wrap min-h-1 gap-2 mt-4"></div>

            <p className="text-[16px] w-full">Account Number</p>
            <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="text"
                name="accountNumber"
                value={accountNumber}
                onChange={handleAccountInfoChange}
                style={{ outline: "none" }}
                className="flex w-full border-none"
              />
            </div>
            <br />
            <p className="text-[16px] w-full">Account Name</p>
            <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="text"
                name="accountName"
                value={accountName}
                onChange={handleAccountInfoChange}
                style={{ outline: "none" }}
                className="flex w-full border-none"
              />
            </div>
            <br />
            <p className="text-[16px] w-full">Bank Name</p>
            <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
              <input
                type="text"
                name="bankName"
                value={bankName}
                onChange={handleAccountInfoChange}
                style={{ outline: "none" }}
                className="flex w-full border-none"
              />
            </div>
            <div className="w-full flex items-center justify-between my-6">
              <div>
                <button
                  // onClick={() => {
                  //   // window.open("#edit", "_parent")
                  //   setShowAddAccountDetails(false);
                  //   pushEdit("id");
                  // }}
                  onClick={addAccountDetails}
                  className="md:w-[186px] w-[99px]  h-[46px] bg-[#4CBD6B] text-white rounded-[6px]"
                >
                  Save
                </button>
              </div>

              <button
                onClick={() => {
                  setDelete(false);
                  setShowAddAccountDetails(false);
                }}
                className="md:w-[186px] w-[99px]  h-[46px] bg-white text-[grey] border-[1px] rounded-[6px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <header className="w-full flex items-center justify-between p-3 font-primaryRegular">
        <div className="flex flex-row gap-[10px] items-center ">
          <ArrowNarrowLeftIcon
            width={20}
            height={20}
            onClick={() => navigate("/dashboard/home")}
          />
          <p className="md:hidden">Profile</p>
          <p className="hidden md:block">Back</p>
        </div>
        {/* <div className="w-[146px] h-10 bg-white border border-[#E3140F] text-[#E3140F] rounded-lg flex items-center justify-center">
          Delete account
        </div> */}
      </header>

      <div className="w-full flex flex-col overflow-y-scroll my-4 font-primaryRegular">
        <div className="w-full  flex flex-col gap-4">
          {/* User Bio Data */}
          <div className="w-full bg-[#8BCB901F] flex items-center justify-between rounded-[20px] p-3 md:py-4 md:px-6">
            <div className="flex items-center gap-4 md:gap-10">
              <div className="bg-[#CFCBCB] rounded-full h-20 w-20 flex items-center justify-center font-primaryBold text-2xl">
                {/* <UserIcon width={60} height={60} /> */}
                {initials || "N/A"}
              </div>

              <div className="flex flex-col gap-2">
                <b className="text-sm md:text-base">
                  {userData?.firstName + " " + userData?.lastName}
                </b>
                <p className="text-sm md:text-base">{userData?.email}</p>
                <p className="text-sm md:text-base">{userData?.phoneNumber}</p>
              </div>
            </div>

            <b className=" cursor-pointer " onClick={() => setPreview(true)}>
              Edit
            </b>
          </div>
          {/* User Other Details */}
          <div className="w-full rounded-[20px] bg-[#8BCB901F] p-3 md:p-8 flex flex-col md:flex-row items-start justify-evenly gap-4">
            <div className="w-full md:w-[400px] flex flex-col gap-4 md:gap-10">
              <div className="min-w-[235px] ">
                <p>Shop name</p>
                <div className="w-full h-[1px] bg-gray-600 mt-[10px]" />
                <div className="flex flex-row items-center mt-[10px] gap-[10px]">
                  <div className="bg-[#E38E0F] w-[30px] h-[30px] rounded-full text-white flex items-center justify-center">
                    <b>
                      <p>{userData?.store?.[0]?.toUpperCase() || ""}</p>
                    </b>
                  </div>{" "}
                  <p>{userData?.store}</p>
                </div>
              </div>
              <div className="min-w-[235px] ">
                <div className="w-full flex items-center justify-between">
                  <p>Bank Account Details</p>
                  <b
                    className=" cursor-pointer "
                    onClick={() => setShowAddAccountDetails(true)}
                  >
                    <FaPenAlt />
                  </b>
                </div>
                <div className="w-full h-[1px] bg-gray-600 mt-[10px]" />
                <div className="flex flex-col mt-[10px] gap-[10px]">
                  <p>No payment details</p>
                  <p className="text-red-500 mt-4 text-xs">
                    Add your payment account information
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full max-w-[669px] md:px-[20px] border-l md:border-[grey] md:bg-white/20 py-3">
              <p className="text-[16px] w-full">Shop Address</p>
              <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                {userData?.address}
              </div>
              <br />
              <p className="text-[16px] w-full">Shop Residing Country</p>
              <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex justify-between">
                {userData?.country}
              </div>
              <br />
              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">City</p>
                  <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                    {userData?.city}
                  </div>
                </div>
                <br />
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">State</p>
                  <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                    {userData?.state}
                  </div>
                </div>
              </div>
              <br />
              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">Business Type</p>
                  <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                    {userData?.businessType}
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">CAC Registration Number</p>
                  <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                    {userData?.cacRegistrationNumber}
                  </div>
                </div>
                <br />
              </div>
              <br />
              <div className="flex flex-row w-full gap-4">
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">
                    National Identification Number
                  </p>
                  <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                    {userData?.nationalIdentificationNumber}
                  </div>
                </div>
                <br />
                <div className="flex flex-col w-full">
                  <p className="text-[16px] w-full">
                    Tax Identification Number
                  </p>
                  <div className="w-full h-10 border mt-2 p-2 bg-white border-[#CFCBCB] flex flex-row justify-between">
                    {userData?.taxIdentificationNumber}
                  </div>
                </div>
              </div>

              <br />

              {/* <div className="min-w-[235px] ">
                <p>Documents</p>
                <div className="w-[50%] h-[1px] bg-gray-600 my-[10px]" />
                <p>CAC Certificate </p>
              </div>
              <br />
              <button className="bg-[#96989966] border-[#96989966] border-[1px] w-[125px] h-[40px]">
                No file
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
