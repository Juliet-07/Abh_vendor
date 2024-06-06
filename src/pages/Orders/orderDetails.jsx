import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeftIcon, DownloadIcon } from "@heroicons/react/outline";

const OrderDetails = () => {
  const location = useLocation();
  const orderDetails = location.state && location.state.data;
  const navigate = useNavigate();

  //   if (!orderDetails) {
  //     return <div>No details available</div>;
  //   }

  return (
    <>
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
          {/* {acceptOrder && ( */}
          {/* <button className="h-[40px] w-[150px] rounded-[6px] bg-none text-[#373435] border-[1px] border-[#373435] hidden md:block">
            Change status
          </button> */}
          {/* )} */}
          <div className="bg-[#8BCB901F] md:w-[197px] w-[40px] h-[40px] p-[10px] gap-[11px] flex flex-row items-center justify-center rounded-[6px] ">
            <DownloadIcon width={14} height={14} color="#359E52" />
            <p className="text-[16px] text-[#359E52] hidden md:flex">
              Download invoice
            </p>
          </div>
        </div>
      </header>
      <div className="w-full h-[90vh] md:mt-10 flex flex-col overflow-y-scroll ">
        <div className="w-full flex flex-col ">
          <br className="md:hidden flex" />
          <div className="w-full">
            {/* {acceptOrder && ( */}
            <button className="h-[40px] w-[150px] rounded-[6px] bg-none text-[#373435] border-[1px] border-[#373435] md:hidden block">
              Change status
            </button>
            {/* )} */}
          </div>
          <br className="md:hidden flex" />
          <div className="w-full bg-white flex flex-col ">
            <div className="w-full flex flex-row min-h-[100px] border-b-[1px] border-[#CFCBCB]">
              <div className="flex flex-col p-[20px] justify-between items-center">
                <b className="text-xs md:text-[16px] ">Order ID #312311</b>
                <p>Today 10:29 AM</p>
              </div>
              <div className="flex flex-col p-[20px] justify-between items-center">
                <p>Total price</p>
                <b className="text-xs md:text-sm text-center">$250</b>
              </div>
              <div className="flex flex-col p-[20px] justify-between items-center">
                <p>Order status</p>
                <div className="flex flex-row gap-[10px] items-center justify-center">
                  <div className="w-[8px] h-[8px] bg-[#E3140F] rounded-[100px]" />
                  <b className="text-sm md:text-[16px]"> pending</b>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row min-h-[200px] border-b-[1px] border-[#CFCBCB] flex-wrap">
              <div className="flex flex-col p-[20px] items-start">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <div className="w-[40px] h-[40px] bg-[#373435] rounded-[100px]" />{" "}
                  <b>Customers</b>
                </div>

                <br />

                <div className="flex flex-col  items-start w-full">
                  <div className="flex flex-row gap-[10px] w-full">
                    <p className="text-sm font-semibold">Full Name:</p>
                    <p className="text-sm">Matthew jones</p>
                  </div>
                  <div className="flex flex-row gap-[10px] w-full">
                    <p className="text-sm font-semibold">Email:</p>
                    <p className="text-sm">mathewjones@gmail.com</p>
                  </div>
                  <div className="flex flex-row gap-[10px] w-full">
                    <p className="text-sm font-semibold">Phone:</p>
                    <p className="text-sm">234-812-411-777-01</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-[20px]  items-start">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <div className="w-[40px] h-[40px] bg-[#373435] rounded-[100px]" />{" "}
                  <b>Order Details</b>
                </div>
                <br />

                <div className="flex flex-col  items-start w-full">
                  <div className="flex flex-row gap-[10px] w-full items-center">
                    <p className="text-sm font-semibold">Payment:</p>
                    <div className="min-w-[66px] h-[35px] bg-[#08932E14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                      <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                      <p className="text-[#08932E] text-xs">Paid</p>
                    </div>
                  </div>

                  <div className="flex flex-row gap-[10px] w-full">
                    <p className="text-sm font-semibold">Delivery:</p>
                    <p className="text-sm w-[139px]">
                      Deliver before tuesday 05/12/2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-[20px] items-start">
                <div className="flex flex-row items-center justify-center gap-[10px]">
                  <div className="w-[40px] h-[40px] bg-[#373435] rounded-[100px]" />{" "}
                  <b>Customers</b>
                </div>

                <br />

                <div className="flex flex-col  items-start w-full">
                  <div className="flex flex-row gap-[10px] w-full">
                    <p className="text-sm font-semibold">City:</p>
                    <p className="text-sm">Lagos</p>
                  </div>
                  <div className="flex flex-row gap-[10px] w-full">
                    <p className="text-sm font-semibold">State:</p>
                    <p className="text-sm">New york</p>
                  </div>
                  <div className="flex flex-row gap-[10px] w-full">
                    <p className="text-sm font-semibold">Address:</p>
                    <p className="text-sm">7, Kingsway, Otawa, NY</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-row min-h-[200px] p-[20px] items-center flex-wrap gap-[20px]">
              <div className="w-[175px] border-[1px] border-[#CFCBCB] h-[120px] rounded-[8px]"></div>
              <div className="flex flex-row items-center  gap-[20px]">
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
          {/* {!acceptOrder && ( */}
          <div className="w-full flex flex-row items-center justify-end mt-[20px]">
            <div className="w-full md:max-w-[300px] md:gap-[20px] flex flex-row justify-between items-center">
              <button
                //   onClick={() => {
                //     toast("Order Accepted", {
                //       position: "top-center",
                //     });
                //     setacceptOrder(true);
                //   }}
                className="h-[46px] w-[150px] rounded-[6px] bg-[#359E52] text-white"
              >
                Accept Order
              </button>
              <button className="h-[46px] w-[150px] rounded-[6px] bg-none text-[red] border-[1px] border-[red]">
                Cancel order
              </button>
            </div>
          </div>
          {/* )} */}
          <div className="min-h-[100px] w-full"></div>
        </div>
      </div>
    </>
  );
};

export default OrderDetails;
