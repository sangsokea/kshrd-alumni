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
    isYes && onClick(item.isEnalbe, item.id);
  };

  const onClicked = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    console.log(selectedItem);
    isYes && onClick(selectedItem.isEnalbe, selectedItem.id);
  }, [selectedItem]);

  console.log(ModelRef.current);
  return (
    <>
      <table class="w-full overflow-scroll text-sm text-left text-gray-500 dark:text-gray-400 table-fixed mt-3">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-bold">
          <tr>
            <th scope="col" class="px-6 py-3">
              First Name
            </th>
            <th scope="col" class="px-6 py-3">
              Last Name
            </th>
            <th scope="col" class="px-5 py-3">
              Gender
            </th>
            <th scope="col" class="px-15 py-3">
              Email
            </th>
            <th scope="col" class="px-5 py-3 text-center">
              Generation
            </th>
            <th scope="col" class="px-6 py-3">
              Skill
            </th>

            <th scope="col" class="px-6 py-3">
              Action
            </th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length !== 0 ? (
            <>
              {data?.slice(0, 15).map((value, key) => (
                <tr
                  key={key}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="px-6 py-4">
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.first_name}
                    />
                  </td>
                  <td class="px-6 py-4">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.last_name}
                    />
                  </td>
                  <td class="px-5 py-4">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.gender}
                    />
                  </td>
                  <td class="px-15 py-4">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.email.toString()}
                    />
                  </td>
                  <td class="px-5 py-4 text-center">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.generation.toString()}
                    />
                  </td>
                  <td class="px-6 py-4">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.skill}
                    />
                  </td>
                  <td class="px-6 py-4">
                    {value?.isEnalbe ? (
                      <Modal
                        item={value}
                        onClick={onChangeStatus}
                        className={
                          "bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        }
                        buttonName="Enabled"
                      />
                    ) : (
                      <Modal
                        item={value}
                        onClick={onChangeStatus}
                        buttonName="Disabled"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {baseData?.slice(0, 15).map((value, key) => (
                <tr
                  key={key}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td class="px-6 py-4">
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.first_name}
                    />
                  </td>
                  <td class="px-6 py-4">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.last_name}
                    />
                  </td>
                  <td class="px-5 py-4">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.gender}
                    />
                  </td>
                  <td class="px-15 py-4">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.email.toString()}
                    />
                  </td>
                  <td class="px-5 py-4 text-center">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.generation.toString()}
                    />
                  </td>
                  <td class="px-6 py-4">
                    {" "}
                    <Highlighter
                      highlightClassName="YourHighlightClass"
                      searchWords={[wordEntered.toString()]}
                      autoEscape={true}
                      textToHighlight={value?.skill}
                    />
                  </td>
                  <td class="px-6 py-4">
                    {value?.isEnalbe ? (
                      <Modal
                        item={value}
                        onClick={onChangeStatus}
                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        buttonName="Enabled"
                      />
                    ) : (
                      <Modal
                        item={value}
                        onClick={onChangeStatus}
                        buttonName="Disabled"
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
