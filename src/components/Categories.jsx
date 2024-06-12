import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

const Categories = ({onForm}) => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("vendorToken");
  const [inputValue, setValue] = useState("");
  const [selectedValue, setSelectedValue] = useState(null);
  const [Categories, setCategories] = useState([]);

  //   handle input change event
  const handleInputChange = (value) => {
    // onMessage(value);
    setValue(value);
  };

  //   handle selection
  const handleChange = (value) => {
    console.log(value, "values");
    onForm(value);
    setSelectedValue(value);
  };

  useEffect(() => {
    let info;
    let categories;
    const getCategories = () => {
      axios
        .get(`${apiURL}/category`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
          },
        })
        .then((response) => {
          console.log(response.data.data.data, "categories");
          info = response.data.data.data;
          categories = info.map((category) => {
            return { value: category.id, label: category.name };
          });
          setCategories(categories);
        })
        .catch((error) => {
          console.error("Error fetching vendors:", error);
        });
    };

    getCategories();
  }, []);
  return (
    <div className="w-full">
      <Select
        options={Categories}
        defaultValue={selectedValue}
        onChange={handleChange}
        onInputChange={handleInputChange}
        isSearchable
      />
    </div>
  );
};

export default Categories;
