import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/outline";
import Dropdown from "../components/Dropdown";
import {
  TotalOrdersChart,
  RevenueChart,
  OrderStatusChart,
} from "../components/Charts";
import { FiSearch } from "react-icons/fi";
import OutOfStock from "../assets/out_of_stock.svg";
import OrdersIcon from "../assets/orders_icon.svg";
import SalesIcon from "../assets/sales_icon.svg";
import UpArrow from "../assets/uparrow.svg";

const Dashboard = ({ title, data, onChange }) => {
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
    console.log(FilteredProducts);
    console.log(filterKeyword);
  };
  return (
    <>
      <div className="w-full font-primaryRegular bg-red-00 overflow-y-scroll">
        <p className="w-full my-4 font-primaryBold md:hidden">Dashboard</p>
        {/* Summary Cards */}
        <div className="w-full bg-white rounded-xl flex flex-col md:flex-row items-center md:justify-around p-4 gap-10">
          {/* 1 */}
          <div className="w-full md:w-[245px] h-[115px] border-l-2 border-l-[#E3140F] border-[0.22px] bg-white flex flex-col gap-4 rounded-lg p-3">
            <div className="flex flex-row items-center gap-[10px]">
              <div className="w-10 h-10 rounded-full bg-[#E3140F1F] flex items-center justify-center">
                <img src={OutOfStock} width={18} height={18} />
              </div>
              <p className="text-[16px]">Out of stock</p>
            </div>
            <div className=" w-full flex flex-row items-center justify-between">
              <div className="flex flex-row  gap-[10px]">
                <b className="text-[18px]">4</b>
                <p className="text-[16px]">Product</p>
              </div>

              <button className="w-[73px] h-[31px] bg-[#F0F0F0] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                <p className="text-xs">See all</p>{" "}
                <ChevronRightIcon width={15} height={15} />
              </button>
            </div>
          </div>
          {/* 2 */}
          <div className="w-full md:w-[245px] h-[115px] border-l-2 border-l-[#359E52] border-[0.22px] bg-white flex flex-col gap-4 rounded-lg p-3">
            <div className="flex flex-row items-center gap-[10px]">
              <div className="w-[40px] h-[40px] rounded-[100px] bg-[#8BCB9033] flex items-center justify-center">
                <img src={OrdersIcon} width={18} height={18} />
              </div>{" "}
              <p className="text-[16px]">Orders</p>
            </div>
            <div className=" w-full flex flex-row items-center justify-between">
              <div className="flex flex-row  gap-[10px]">
                <b className="text-[18px]">12</b>
                <p className="text-[16px]">Pending</p>
              </div>

              <button className="w-[73px] h-[31px] bg-[#F0F0F0] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                <p className="text-xs">See all</p>{" "}
                <ChevronRightIcon width={15} height={15} />
              </button>
            </div>
          </div>
          {/* 3 */}
          <div className="w-full md:w-[245px] h-[115px] border-l-2 border-l-[#F58634] border-[0.22px] bg-white flex flex-col gap-4 rounded-lg p-3">
            <div className="flex flex-row items-center gap-[10px]">
              <div className="w-[40px] h-[40px] rounded-[100px] bg-[#E3140F1F] flex items-center justify-center">
                <img src={SalesIcon} width={20} height={20} />
              </div>{" "}
              <p className="text-[16px]">Total Sales</p>
            </div>
            <div className=" w-full flex flex-row items-center justify-between">
              <div className="flex flex-row  gap-[10px]">
                <b className="text-[18px]">$23100</b>
              </div>

              <button className="w-[73px] h-[31px] bg-[#F0F0F0] text-[#0F9E36] border-none outline-none flex flex-row items-center justify-center gap-[9px] rounded-[8px] p-[0px]">
                <p className="text-xs">+10%</p> <img src={UpArrow} width={10} />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col md:flex-row flex-wrap justify-between mt-10 gap-10">
          <div className="w-full md:w-[50%] h-[411px] flex flex-col bg-white rounded-xl p-4">
            <Dropdown
              title={"TOTAL ORDERS"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />
            <br />
            <TotalOrdersChart />
          </div>

          <div className="w-full md:w-[42.5%] h-[411px] bg-white rounded-xl p-4">
            <Dropdown
              title={"REVENUE"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />
            <br />
            <RevenueChart />
          </div>
        </div>

        <div className="w-full flex flex-row flex-wrap justify-between mt-10">
          <div className="md:w-[50%] w-full h-[411px] flex flex-col bg-white rounded-xl p-4">
            <Dropdown
              title={"ORDER STATUS"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />
            <OrderStatusChart />
          </div>

          <div className="md:w-[42.5%] w-full  h-[411px] overflow-y-scroll bg-white rounded-xl p-4 mt-10 gap-10 md:mt-0">
            <Dropdown
              title={"TOP PRODUCTS SOLD"}
              data={["january", "feb", "march"]}
              onChange={(wp) => console.log(wp)}
            />

            {[
              { img: "", product: "Apples", type: "Grocery", price: "" },
              { img: "", product: "Apples", type: "Grocery", price: "" },
              { img: "", product: "Apples", type: "Grocery", price: "" },
              { img: "", product: "Apples", type: "Grocery", price: "" },
              { img: "", product: "Apples", type: "Grocery", price: "" },
            ].map((data, index) => {
              return (
                <div className="w-full h-[68px] mt-[10px] flex flex-row items-center justify-between border-b-[1px] border-[#CFCBCB]">
                  <div className="w-[60px] h-[60px] border-[1px] border-[#CFCBCB]"></div>

                  <div className="w-[70%] flex flex-col justify-start gap-0 px-4">
                    <p className="text-[16px] text-black  ">{data.product}</p>
                    <p className="text-sm text-[#373435] ">{data.type}</p>
                  </div>
                  <p>$250</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Table */}
        <div className="w-full  min-h-[500px] bg-white rounded-md p-4 mt-10">
          <div className="w-full h-[56px] p-3 flex flex-row items-center justify-between border-[#C1C6C5] border-[0.66px]">
            <div className="w-[300px] flex flex-row justify-between items-center">
              <p className="text-[16px] font-[600]">RECENT ORDERS</p>

              <button
                // onClick={seeOrders}
                className="w-[73px] h-[31px] bg-[#F0F0F0] border-none outline-none flex flex-row items-center justify-center gap-2 rounded-md p-0"
              >
                <p className="text-xs">See all</p>{" "}
                <ChevronRightIcon width={15} height={15} />
              </button>
            </div>

            <div className="w-[80%] max-w-[500px] h-[40px] bg-white p-[10px] hidden md:flex items-center rounded-[6px] border-[#CFCBCB] border-[0.66px] ">
              <input
                type="text"
                className="w-full  bg-none border-none h-[35px] outline-none  placeholder:text-xs placeholder:text-[#37343566]"
                placeholder="Search for products"
                onInput={(e) => {
                  setfilterKeyword(e.target.value);
                  searchForProducts(e.target.value);
                }}
              />
              <FiSearch width={16} height={16} color="#37343566" />
            </div>
          </div>
          <div className="w-full h-[40px] mt-[10px] md:hidden bg-white p-[10px] flex items-center rounded-[6px] border-[#CFCBCB] border-[0.66px] ">
            <input
              type="text"
              className="w-full  bg-none border-none h-[35px] outline-none  placeholder:text-xs placeholder:text-[#37343566]"
              placeholder="Search for products"
            />
            <FiSearch width={16} height={16} color="#37343566" />
          </div>

          <div className="w-[350px] md:w-full min-h-[300px] overflow-x-scroll">
            <div className="flex flex-row items-center gap-4">
              <div className=" h-[56px] mt-[10px] p-[10px] flex flex-1 flex-row items-center md:justify-between bg-[#F1F4F2] border-[#C1C6C5]">
                <b className="text-sm text-black  min-w-[164px] text-center">
                  Order ID
                </b>
                <b className="text-sm text-black  min-w-[164px] text-center">
                  Date
                </b>
                <b className="text-sm text-black  min-w-[164px] text-center">
                  Customer name
                </b>
                <b className="text-sm text-black  min-w-[164px] text-center">
                  Address
                </b>
                <b className="text-sm text-black  min-w-[164px] text-center">
                  Order status
                </b>
                <b className="text-sm text-black  min-w-[164px] text-center">
                  Items
                </b>
              </div>
            </div>
            {[filterKeyword ? FilteredProducts : productsData][0].map(
              (data, index) => {
                return (
                  <div className="flex flex-row items-center gap-4">
                    <div className="h-[56px] px-[10px] flex flex-1 flex-row items-center justify-between border-[#C1C6C5] border-[0.66px] mt-[10px]">
                      <p className="text-sm text-black min-w-[164px] text-center">
                        120381
                      </p>
                      <p className="text-xs text-black min-w-[164px] text-center">
                        {data.date}
                      </p>
                      <p className="text-xs text-black min-w-[164px] text-center">
                        {data.name}
                      </p>
                      <p className="text-xs text-black min-w-[164px] text-center">
                        {data.address}
                      </p>
                      <div className="text-sm text-black min-w-[164px] flex flex-row justify-center items-center gap-[10px]">
                        <div className="w-[8px] h-[8px] bg-[#08932E] rounded-[100px]" />
                        <p className="text-xs">{data.order_status}</p>
                      </div>
                      <p className="text-xs text-black min-w-[164px] text-center">
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
  );
};

export default Dashboard;
