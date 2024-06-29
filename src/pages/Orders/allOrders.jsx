import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllOrders = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  const [activeTab, setActiveTab] = useState("All");
  // const [orders, setOrders] = useState([]);

  const orders = [
    {
      id: "1565132",
      name: "Michael Farasin",
      date: "Jan 2, 2024",
      address: "7, Kingsway, Otawa, NY",
      // order_status: "N/A",
      payment_status: "Paid",
      price: "$230",
      order_status: "Pending",
    },
    {
      id: "1565132",
      name: "Prince Farasin",
      date: "Feb 3, 2024",
      address: "7, Kingsway, Otawa, NY",
      // order_status: "N/A",
      payment_status: "Paid",
      price: "$230",
      order_status: "Processing",
    },
    {
      id: "1565132",
      name: "Tom Cat",
      date: "Mar 2, 2024",
      address: "7, Kingsway, Otawa, NY",
      // order_status: "N/A",
      payment_status: "Pending",
      price: "$230",
      order_status: "Pending",
    },
    {
      id: "1565132",
      name: "Victor bryte",
      date: "Aug 2, 2024",
      address: "37, ktu, Otawa, NY",
      // order_status: "N/A",
      payment_status: "Paid",
      price: "$230",
      order_status: "Processing",
    },
    {
      id: "1565132",
      name: "Anony Mous",
      date: "MAy 4, 2024",
      address: "84, subway, Otawa, NY",
      // order_status: "N/A",
      payment_status: "Paid",
      price: "$230",
      order_status: "Shipped",
    },
    {
      id: "1565132",
      name: "John Smith",
      date: "Aug 2, 2024",
      address: "7, subway, Otawa, NY",
      // order_status: "N/A",
      payment_status: "Pending",
      price: "$230",
      order_status: "Processing",
    },
    {
      id: "1565132",
      name: "Moses Micheal",
      date: "Aug 2, 2024",
      address: "7, yaba, Otawa, NY",
      // order_status: "N/A",
      payment_status: "Paid",
      price: "$230",
      order_status: "Ready To Ship",
    },
    {
      id: "1565132",
      name: "David King",
      date: "Aug 2, 2024",
      address: "22, Banksway, Otawa, NY",
      // order_status: "N/A",
      payment_status: "Paid",
      price: "$230",
      order_status: "Shipped",
    },
    {
      id: "1565132",
      name: "Tim Codes",
      date: "Aug 2, 2024",
      address: "27, Timsway, Ontario, CA",
      // order_status: "N/A",
      payment_status: "Paid",
      price: "$230",
      order_status: "Processing",
    },
  ];

  // useEffect(() => {
  //   const getOrders = () => {
  //     axios
  //       .get(`${apiURL}/vendors`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //       })
  //       .then((response) => {
  //         console.log(response.data.data.data);
  //         setVendors(response.data.data.data);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching vendors:", error);
  //       });
  //   };

  //   getOrders();
  // }, []);

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "All") return true;
    return order.order_status === activeTab;
  });

  // const searchForProducts = (keyword) => {
  //   setFilteredProducts(
  //     productsData.filter((product, index) => {
  //       return (
  //         product.name.toLowerCase().includes(keyword.toLowerCase()) ||
  //         product.address.toLowerCase().includes(keyword.toLowerCase()) ||
  //         product.date.toLowerCase().includes(keyword.toLowerCase()) ||
  //         product.order_status.toLowerCase().includes(keyword.toLowerCase())
  //       );
  //     })
  //   );

  //   console.log(keyword);
  // };

  // const tabbedFilter = (keyword) => {
  //   setfilterKeyword(keyword);
  //   setFilteredProducts(
  //     productsData.filter((product, index) => {
  //       return product.order_status
  //         .toLowerCase()
  //         .includes(keyword.toLowerCase());
  //     })
  //   );

  //   console.log(keyword);
  //   console.log(FilteredProducts);
  // };

  const handleOrderDetails = (data) => {
    // Navigate to the new page and pass the data through state
    console.log("handleViewDetails called with:", data);
    navigate("/dashboard/orderDetails", { state: { data } });
  };

  const getOrderStatusStyles = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return {
          dotsColor: "bg-[#E3140F]",
        };
      case "shipped":
        return {
          dotsColor: "bg-[#08932E]",
        };
      case "ready to ship":
        return {
          dotsColor: "bg-[#FFA500]",
        };
      case "processing":
        return {
          dotsColor: "bg-[#081E93]",
        };
      default:
        return {
          dotsColor: "bg-gray-200",
        };
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
        };
    }
  };

  const tabs = [
    "All",
    "Pending",
    "Processing",
    "Ready To Ship",
    "Shipped",
    "Delivered",
    "Returned",
  ];

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
        <div className="w-full flex flex-col">
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
          <div className="my-4 w-full p-3 overflow-x-auto font-primaryRegular">
            <div className="flex gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 rounded ${
                    activeTab === tab
                      ? "bg-[#359E52] text-white"
                      : "bg-gray-200 text-sm"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredOrders.length > 0 ? (
            <div className="w-full bg-white p-3">
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white font-primaryRegular">
                  <thead className="bg-[#F1F4F2] font-primaryBold text-sm">
                    <tr>
                      <th className="text-center p-3">Order ID</th>
                      <th className="text-center p-3">Date</th>
                      <th className="text-center p-3">Customer Name</th>
                      <th className="text-center p-3">Address</th>
                      <th className="text-center p-3">Payment Status</th>
                      <th className="text-center p-3">Order Status</th>
                      <th className="text-center p-3">Items</th>
                      <th className="text-center p-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredOrders.map((order, index) => {
                      const { dotsColor } = getOrderStatusStyles(
                        order.order_status
                      );
                      const { bgColor, textColor, dotColor } =
                        getPaymentStatusStyles(order.payment_status);
                      return (
                        <tr
                          key={index}
                          className="border text-xs font-primaryMedium mb-4"
                        >
                          <td className="p-4 text-center">120381</td>
                          <td className="p-4 text-center">Jun 16, 2024</td>
                          <td className="p-4 text-center">{order.name}</td>
                          <td className="p-4 text-center">{order.address}</td>
                          <td className="p-4 text-center">
                            <div
                              className={`w-full h-10 ${bgColor} p-3 flex items-center justify-center gap-[10px]`}
                            >
                              <div
                                className={`w-[8px] h-[8px] ${dotColor} rounded-[100px]`}
                              />
                              <p className={`${textColor} text-xs`}>
                                {order.payment_status}
                              </p>
                            </div>
                          </td>
                          <td className="p-4 text-center">
                            <div
                              className={`w-full h-10 p-3 flex items-center justify-center gap-[10px]`}
                            >
                              <div
                                className={`w-[8px] h-[8px] ${dotsColor} rounded-[100px]`}
                              />
                              <p className="text-xs">{order.order_status}</p>
                            </div>
                          </td>
                          <td className="p-4 text-center">10</td>
                          <td className="p-4 text-center">
                            <button
                              onClick={() => handleOrderDetails(order)}
                              className="text-[#359E52]"
                            >
                              <FaEye size={14} />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6">
              <div className="text-xl font-primaryRegular">
                No Orders To Display Yet
              </div>
              {/* <div className="my-10 md:p-10">
              <img src={Avatar} alt="no-new-vendor" className="w-full h-full" />
            </div> */}
            </div>
          )}
        </div>
      </>
    </>
  );
};

export default AllOrders;
