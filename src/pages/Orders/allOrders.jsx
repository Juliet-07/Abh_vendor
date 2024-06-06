import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllOrders = () => {
  const [Filter, setFilter] = useState("All");
  const navigate = useNavigate();

  const productsData = [
    {
      id: "1565132",
      name: "Michael Farasin",
      date: "Jan 2, 2024",
      address: "7, Kingsway, Otawa, NY",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "pending",
    },
    {
      id: "1565132",
      name: "Prince Farasin",
      date: "Feb 3, 2024",
      address: "7, Kingsway, Otawa, NY",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "processing",
    },
    {
      id: "1565132",
      name: "Tom Cat",
      date: "Mar 2, 2024",
      address: "7, Kingsway, Otawa, NY",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "Ready to ship",
    },
    {
      id: "1565132",
      name: "Victor bryte",
      date: "Aug 2, 2024",
      address: "37, ktu, Otawa, NY",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "pending",
    },
    {
      id: "1565132",
      name: "Anony Mous",
      date: "MAy 4, 2024",
      address: "84, subway, Otawa, NY",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "Shipped",
    },
    {
      id: "1565132",
      name: "John Smith",
      date: "Aug 2, 2024",
      address: "7, subway, Otawa, NY",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "processing",
    },
    {
      id: "1565132",
      name: "Moses Micheal",
      date: "Aug 2, 2024",
      address: "7, yaba, Otawa, NY",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "Shipped",
    },
    {
      id: "1565132",
      name: "David King",
      date: "Aug 2, 2024",
      address: "22, Banksway, Otawa, NY",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "Shipped",
    },
    {
      id: "1565132",
      name: "Tim Codes",
      date: "Aug 2, 2024",
      address: "27, Timsway, Ontario, CA",
      // order_status: "N/A",
      payment_status: 34,
      price: "$230",
      order_status: "processing",
    },
  ];

  const [filterKeyword, setfilterKeyword] = useState("");

  const [FilteredProducts, setFilteredProducts] = useState([]);

  const searchForProducts = (keyword) => {
    setFilteredProducts(
      productsData.filter((product, index) => {
        return (
          product.name.toLowerCase().includes(keyword.toLowerCase()) ||
          product.address.toLowerCase().includes(keyword.toLowerCase()) ||
          product.date.toLowerCase().includes(keyword.toLowerCase()) ||
          product.order_status.toLowerCase().includes(keyword.toLowerCase())
        );
      })
    );

    console.log(keyword);
  };

  const tabbedFilter = (keyword) => {
    setfilterKeyword(keyword);
    setFilteredProducts(
      productsData.filter((product, index) => {
        return product.order_status
          .toLowerCase()
          .includes(keyword.toLowerCase());
      })
    );

    console.log(keyword);
    console.log(FilteredProducts);
  };

  const handleOrderDetails = (data) => {
    // Navigate to the new page and pass the data through state
    console.log("handleViewDetails called with:", data);
    navigate("/dashboard/orderDetails", { state: { data } });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // bodyClassName={"bg-[red]"}
        theme="colored"
        transition={Bounce}
      />

      <>
        <div className="w-full flex flex-col overflow-auto">
          <div className="w-full flex flex-col overflow-y-scroll  no-scrollbar">
            <p className="my-4 w-full font-primaryBold md:hidden">All Orders</p>
            <div className="w-full md:max-w-[534px] h-10 bg-white p-3 flex items-center rounded-md">
              <input
                type="text"
                className="w-full placeholder:text-xs placeholder:text-[#37343566] font-primaryRegular"
                placeholder="Search for products"
                onInput={(e) => {
                  setfilterKeyword(e.target.value);
                  searchForProducts(e.target.value);
                }}
              />
              <FiSearch width={16} height={16} color="#37343566" />
            </div>

            {/* Tab Navigation */}
            <div className="w-full">
              <div className="min-w-[200vw] md:min-w-[100%] flex gap-4 mt-4">
                {[
                  "All",
                  "Pending",
                  "Processing",
                  "Ready to ship",
                  "Shipped",
                  "Delivered",
                  "Returned",
                ].map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setFilter(tab);
                      tab !== "All" ? tabbedFilter(tab) : setfilterKeyword("");
                    }}
                    className={`min-w-[70px] h-10 p-3 cursor-pointer flex items-center justify-center rounded-[6px] ${
                      Filter === tab
                        ? "bg-[#359E52] text-white"
                        : "bg-[#C1C6C5]"
                    }`}
                  >
                    <p className="text-sm flex flex-row flex-nowrap font-primaryRegular">
                      {tab}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full min-h-[300px] overflow-x-scroll px-3 mt-4 pb-3 font-primaryRegular">
              <div className="flex flex-row items-center gap-4">
                <div className="h-[56px] mt-3 p-3 flex flex-1 flex-row items-center justify-between bg-[#F1F4F2] border-[#C1C6C5] font-primaryBold">
                  <b className="text-sm text-black min-w-[100px] text-center">
                    Order ID
                  </b>
                  <b className="text-sm text-black min-w-[100px] text-center">
                    Date
                  </b>
                  <b className="text-sm text-black min-w-[100px] text-center">
                    Customer name
                  </b>
                  <b className="text-sm text-black min-w-[100px] text-center">
                    Address
                  </b>
                  <b className="text-sm text-black min-w-[100px] text-center">
                    Payment status
                  </b>
                  <b className="text-sm text-black min-w-[100px] text-center">
                    Orders status
                  </b>
                  <b className="text-sm text-black min-w-[100px] text-center">
                    Items
                  </b>
                </div>
              </div>
              {[filterKeyword ? FilteredProducts : productsData][0].map(
                (data, index) => {
                  return (
                    <div className="flex flex-row items-center gap-4">
                      <div
                        onClick={() => handleOrderDetails(data)}
                        className="cursor-pointer h-[56px] px-[10px] flex flex-1 flex-row items-center justify-between border-[#C1C6C5] border-[0.66px] mt-3"
                      >
                        <p className="text-xs text-black min-w-[100px] text-center">
                          120381
                        </p>
                        <p className="text-xs text-black min-w-[100px] text-center">
                          {data.date}
                        </p>
                        <p className="text-xs text-black min-w-[100px] text-center">
                          {data.name}
                        </p>
                        <p className="text-xs text-black min-w-[100px] text-center">
                          {data.address}
                        </p>
                        <div className="text-xs text-black min-w-[100px]">
                          {index % 2 ? (
                            <div className="w-full h-10 bg-[#E3140F14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                              <div className="w-[8px] h-[8px] bg-[#E3140F] rounded-[100px]" />
                              <p className="text-[#E3140F] text-xs">
                                Payment pending
                              </p>
                            </div>
                          ) : (
                            <div className="min-w-[66px] h-[35px] bg-[#08932E14] p-[10px] flex flex-row items-center justify-center gap-[10px]">
                              <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                              <p className="text-[#08932E] text-xs">Paid</p>
                            </div>
                          )}
                        </div>
                        <div className="text-sm text-black flex flex-row justify-center items-center gap-[10px]">
                          <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                          <p className="text-xs min-w-[100px]">
                            {data.order_status}
                          </p>
                        </div>
                        <p className="text-xs text-black min-w-[100px] text-center">
                          10
                        </p>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AllOrders;
