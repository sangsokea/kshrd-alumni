import React, { useState, useEffect } from "react";
import Highlighter from "react-highlight-words";
import Modal from "./Modal";

export default function TableComponent({
  data = [],
  baseData = [],
  wordEntered = "",
  onClick,
}) {
  const [isYes, setIsYes] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const onChangeStatus = (isYes, item) => {
    isYes && onClick(item.isEnable, item.id);
  };

  const onClicked = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    console.log(selectedItem);
    isYes && onClick(selectedItem.isEnable, selectedItem.id);
  }, [selectedItem]);

  return (
    <>
      <table class=" w-full overflow-scroll text-sm text-left text-gray-500 dark:text-gray-400 table-fixed mt-24">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-bold">
          <tr></tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            <>
              {data?.slice(0, 10).map((value, key) => (
                <tr
                  key={key}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="px-6 py-3">
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.first_name}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.last_name}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.gender}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.email.toString()}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.generation.toString()}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.skill}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {value?.isEnable ? (
                      <Modal
                        item={value}
                        onClick={onChangeStatus}
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        buttonName="Enabled"
                        title="Alert!"
                        description="Are you sure want to Disable this account!"
                      />
                    ) : (
                      <Modal
                        item={value}
                        onClick={onChangeStatus}
                        buttonName="Disabled"
                        title="Alert!"
                        description="Are you sure want to Enable this account!"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {baseData?.slice(0, 10).map((value, key) => (
                <tr
                  key={key}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="px-6 py-3">
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.first_name}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.last_name}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.gender}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.email.toString()}
                    />
                  </td>
                  <td class="px-6 py-3 ">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.generation.toString()}
                    />
                  </td>
                  <td class="px-6 py-3">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.skill}
                      
                    />
                  </td>
                  <td class="px-6 py-3">
                    {value?.isEnable ? (
                      <Modal
                        item={value}
                        onClick={onChangeStatus}
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        buttonName="Enabled"
                        title="Alert!"
                        description="Are you sure want to Disable this account!"
                      />
                    ) : (
                      <Modal
                        item={value}
                        onClick={onChangeStatus}
                        buttonName="Disabled"
                        title="Alert!"
                        description="Are you sure want to Enable this account!"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </>
  );
}
