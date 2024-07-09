import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon, DownloadIcon } from "@heroicons/react/outline";
import { IoIosPerson } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { XIcon } from "@heroicons/react/solid";

const OrderDetails = () => {
  const location = useLocation();
  const orderDetails = location.state && location.state.data;
  console.log("detailing", orderDetails);
  const navigate = useNavigate();
  const [changeStatusPreview, setChangeStatusPreview] = useState(false);

  if (!orderDetails) {
    return <div>No details available</div>;
  }

  const getOrderStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-[#E3140F]"; // Red
      case "processing":
        return "bg-[#081E93]"; // Blue
      case "ready to ship":
        return "bg-[#FFA500]"; // Orange
      case "shipped":
        return "bg-[#08932E]"; // Green
      case "delivered":
        return "bg-[#0000FF]"; // Blue
      case "returned":
        return "bg-[#FFFF00]"; // Yellow
      default:
        return "bg-[#C1C6C5]"; // Default grey color
    }
  };

  const getPaymentStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "paid":
        return {
          bgColor: "bg-[#08932E]/[12%]",
          textColor: "text-[#08932E]",
          dotColor: "bg-[#08932E]",
        };
      case "pending":
        return {
          bgColor: "bg-[#E3140F]/[12%]",
          textColor: "text-[#E3140F]",
          dotColor: "bg-[#E3140F]",
        };
      default:
        return {
          bgColor: "bg-gray-200",
          textColor: "text-gray-800",
          dotColor: "bg-gray-800",
        };
    }
  };

  const showChangeStatusButton = () => {
    const status = orderDetails.order_status.toLowerCase();
    return status === "processing" || status === "ready to ship";
  };

  const showActionButtons = () => {
    const status = orderDetails.order_status.toLowerCase();
    return status === "pending";
  };

  return (
    <>
      {changeStatusPreview && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 font-primaryRegular">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md ">
            <div className="flex justify-between items-center">
              <div></div>{" "}
              <XIcon
                width={20}
                height={20}
                color="red"
                onClick={() => setChangeStatusPreview(false)}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center font-primarySemibold text-lg">
              Change Status
            </div>
            <div className="grid grid-cols-2 gap-6 my-6">
              <button className="p-2 border rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2" />
                Ready to ship
              </button>
              <button className="p-2 border rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                Shipped
              </button>
              <button className="p-2 border rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                Delivered
              </button>
              <button className="p-2 border rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mr-2" />
                Returned
              </button>
            </div>
            <div className="flex items-center gap-6 font-primarySemibold">
              <button className="h-[46px] w-[186px] rounded-md bg-[#359E52] text-white">
                Update
              </button>
              <button
                onClick={() => setChangeStatusPreview(false)}
                className="h-[46px] w-[186px] rounded-md bg-white text-black border border-[#CFCBCB]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
      <header className="w-full h-[70px] bg-white flex flex-row items-center justify-between p-4 font-primaryRegular">
        <div className="flex flex-row gap-6 cursor-pointer">
          <ArrowLeftIcon
            width={20}
            height={20}
            onClick={() => navigate("/dashboard/allOrders")}
          />
          <p>Order Details</p>
        </div>

        <div className="flex flex-row gap-6">
          {showChangeStatusButton() && (
            <button
              onClick={() => setChangeStatusPreview(true)}
              className="hidden md:block h-[40px] w-[150px] rounded-[6px] bg-none text-[#373435] border-[1px] border-[#373435]"
            >
              Change status
            </button>
          )}
          <div className="bg-[#8BCB901F] md:w-[197px] w-[40px] h-[40px] p-[10px] gap-[11px] flex flex-row items-center justify-center rounded-[6px]">
            <DownloadIcon width={14} height={14} color="#359E52" />
            <p className="text-[16px] text-[#359E52] hidden md:flex">
              Download invoice
            </p>
          </div>
        </div>
      </header>
      <div className="w-full mt-6 md:mt-10 flex flex-col">
        <div className="w-full flex flex-col">
          <div className="w-full mb-4 font-primaryRegular">
            {showChangeStatusButton() && (
              <button
                onClick={() => setChangeStatusPreview(true)}
                className="block md:hidden h-[40px] w-[150px] rounded-[6px] bg-none text-[#373435] border-[1px] border-[#373435]"
              >
                Change status
              </button>
            )}
          </div>
          <div className="w-full bg-white flex flex-col font-primaryRegular">
            <div className="w-full flex gap-10 border-b border-[#CFCBCB] p-4">
              <div className="flex flex-col items-center justify-center text-xs md:text-base">
                <p className="font-primarySemibold">
                  Order ID #{orderDetails.id}
                </p>
                <p>{orderDetails.date}</p>
              </div>
              <div className="flex flex-col items-center justify-center text-xs md:text-base">
                <p>Total price</p>
                <p className="font-primarySemibold">{orderDetails.price}</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-sm md:text-base">Order status</p>
                <div className="flex gap-4 items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-[100px] ${getOrderStatusColor(
                      orderDetails.order_status
                    )}`}
                  />
                  <p className="text-sm md:text-base font-primarySemibold">
                    {orderDetails.order_status}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-10 border-b border-[#CFCBCB] flex-wrap">
              <div className="flex flex-col items-start p-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 bg-[#373435] rounded-[100px] text-white flex items-center justify-center">
                    <IoIosPerson size={20} />
                  </div>
                  <b>Customers</b>
                </div>
                <div className="grid gap-4">
                  <div className="flex gap-3 text-sm">
                    <p className="font-primarySemibold">Full Name:</p>
                    <p>{orderDetails.name}</p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <p className="font-primarySemibold">Email:</p>
                    <p>mathewjones@gmail.com</p>
                  </div>
                  <div className="flex flex-row gap-[10px] w-full">
                    <p className="text-sm font-semibold">Phone:</p>
                    <p className="text-sm">234-812-411-777-01</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#373435] rounded-[100px]" />
                  <b>Order Details</b>
                </div>
                <div className="grid gap-4">
                  <div className="flex gap-3 items-center">
                    <p className="text-sm font-primarySemibold">Payment:</p>
                    {orderDetails.payment_status && (
                      <div
                        className={`min-w-[66px] h-[35px] p-3 flex items-center justify-center gap-3 ${
                          getPaymentStatusStyles(orderDetails.payment_status)
                            .bgColor
                        }`}
                      >
                        <div
                          className={`w-2 h-2 rounded-[100px] ${
                            getPaymentStatusStyles(orderDetails.payment_status)
                              .dotColor
                          }`}
                        />
                        <p
                          className={`${
                            getPaymentStatusStyles(orderDetails.payment_status)
                              .textColor
                          } text-xs`}
                        >
                          {orderDetails.payment_status}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3 text-sm">
                    <p className="font-primarySemibold">Delivery:</p>
                    <p>Deliver before tuesday 05/12/2023</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start p-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#373435] rounded-[100px] text-white flex items-center justify-center">
                    <TbTruckDelivery size={20} />
                  </div>
                  <b>Delivery</b>
                </div>
                <div className="grid gap-4">
                  <div className="flex gap-3 text-sm">
                    <p className="font-primarySemibold">City:</p>
                    <p>Lagos</p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <p className="font-primarySemibold">State:</p>
                    <p>New york</p>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <p className="font-primarySemibold">Address:</p>
                    <p>{orderDetails.address}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex items-center flex-wrap p-4 gap-4">
              <div className="w-[175px] border border-[#CFCBCB] h-[120px] rounded-lg"></div>
              <div className="flex items-center gap-10">
                <div className="flex flex-col items-center">
                  <b className="text-sm">Apples</b>
                  <p className="text-xs">Grocery</p>
                </div>
                <div className="flex flex-col items-center">
                  <b className="text-sm">QTY</b>
                  <p className="text-xs">10</p>
                </div>
                <div className="flex flex-col items-center">
                  <b className="text-sm">Total Price</b>
                  <p className="text-xs">$230</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row items-center justify-end my-4 font-primaryRegular">
            {showActionButtons() && (
              <div className="w-full md:max-w-[300px] md:gap-5 flex flex-row justify-between items-center">
                <button
                  // onClick={() => {
                  //   toast("Order Accepted", {
                  //     position: "top-center",
                  //   });
                  //   setacceptOrder(true);
                  // }}
                  className="h-[46px] w-[150px] rounded-md bg-[#359E52] text-white"
                >
                  Accept Order
                </button>
                <button className="h-[46px] w-[150px] rounded-md bg-none text-red-500 border border-red-500">
                  Cancel order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
