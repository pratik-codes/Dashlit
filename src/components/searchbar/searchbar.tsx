import { Select } from "antd";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../Redux/Store";
import "../../styles/AntdStyles/searchbar.css";
import { getOptionsValue } from "./searchbar.utils";

const SearchBar = ({ setOpenSearchBar }: any) => {
  const inputRef: any = useRef();

  const LinksDataRedux: any = useSelector(
    (state: RootStore) => state.userLinkData
  );

  const linksLocalStorageData: any = localStorage.getItem("links");
  const linksLocalStorage: any = JSON.parse(linksLocalStorageData);

  const LINKS = linksLocalStorage || LinksDataRedux;

  const options = getOptionsValue(LINKS?.data);

  const selectOption = (option: any) => {
    if (inputRef?.current?.blur) inputRef.current.blur();
    const selectedOption: any = options.find(
      (data: any) => data.value === option
    );
    clickHandler(selectedOption.link);
    setOpenSearchBar(false);
  };

  const clickHandler = ({ type, links }: any) => {
    if (type === "link") window.open(`https://${links[0].link}`, "_blank");
    else
      for (let i = 0; i < links.length; i++) {
        window.open(`https://${links[i].link}`, "_blank");
      }
  };

  useEffect(() => {
    setTimeout(() => {
      if (inputRef?.current?.focus) inputRef.current.focus();
    }, 100);
  }, []);

  return (
    <>
      <Select
        showSearch
        style={{
          position: "absolute",
          top: "10%",
          left: "30%",
          width: "40%",
          boxShadow: "0 0 0 1600px rgba(0,0,0,0.65)",
          borderRadius: "5px"
        }}
        defaultOpen={true}
        placeholder="Search link..."
        optionFilterProp="children"
        ref={inputRef}
        filterOption={(input: any, option: any) =>
          (option?.value ?? "").toLowerCase().includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.value ?? "")
            .toLowerCase()
            .localeCompare((optionB?.value ?? "").toLowerCase())
        }
        options={options}
        onSelect={option => selectOption(option)}
      />
    </>
  );
};

export default SearchBar;
