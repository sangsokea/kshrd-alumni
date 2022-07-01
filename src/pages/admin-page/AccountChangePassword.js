import React, { useState } from "react";

export default function AccountChangePassword() {
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(
    "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
  );
  const handleChange = (e) => {
    console.log("e.target.files[0] " + e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <div className="body-font font-maven">
      <div className="">
        <div className="flex flex-row px-3 mb-3"></div>

        <section class="p-12 mx-auto  rounded-md shadow-2xl laptop:px-56">
          <p className="font-maven text-3xl mb-16 text-[#035397] font-bold">
            Account setting
          </p>
          <div class=" gap-6 mt-4 tablet:grid-cols-3">
          <div class="tablet:flex tablet:items-center mb-5 laptop:ml-14">
              <label
                for="name"
                class="inline-block w-32    
                              font-bold text-gray-600 "
              >
                Profile Picture
              </label>
              <div
                className={
                  imageUrl
                    ? "upload-btn-wrapper w-36"
                    : "upload-btn-wrapper  w-36 "
                }
              >
                {imageUrl ? (
                  <button class=""></button>
                ) : (
                  <button class=" font-maven text-sm mt-10 text-[#A098AE]">
                    {" "}
                   
                  </button>
                )}
                <input type="file" name="myfile" onChange={handleChange} />
                <img
                  src={imageUrl ? imageUrl : image}
                  className={imageUrl ? "object-contain -mt-6 w-36 h-36" : ' rounded-lg'}
                />
              </div>
            </div>
            <p
              className="laptop:ml-52 
                              font-bold text-[#757D8A]"
            >
              Administrator
            </p>
            <div class="laptop:flex laptop:items-center  mb-5">
              <label
                for="name"
                class="inline-block w-56 mr-6 laptop:text-right 
                              font-bold text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id=""
                name=""
                placeholder=""
                class="block w-full  px-4 py-2 mt-2 border border-[#D9D9D9] rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block w-56 mr-6 laptop:text-right
                                 font-bold text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id=""
                name=""
                placeholder=""
                class="block w-full b px-4 py-2 mt-2   border border-[#D9D9D9] rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block w-56 mr-6 laptop:text-right
                                 font-bold text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id=""
                name=""
                class="block w-full px-4 py-2 mt-2  border border-[#D9D9D9] rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block laptop:w-[180px] tablet:w-[102px]  mr-6 laptop:text-right
                                 font-bold text-gray-600"
              >
                Password
              </label>
              <button
                type="button"
                class="inline-flex items-center justify-center  px-4 py-2 text-base font-medium leading-6 text-[#A098AE] whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
              >
                Change Password
              </button>
            </div>
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block w-56 mr-6 laptop:text-right
                                 font-bold text-gray-600"
              >
                Current Password
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  id=""
                  name=""
                  class="block w-full  px-4 py-2 mt-2   border border-[#D9D9D9] rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
                <div className="absolute inset-y-0 right-0 pr-3  flex items-center text-sm leading-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9997 19C12.9457 19 13.8097 18.897 14.5977 18.719L12.8407 16.962C12.5677 16.983 12.2907 17 11.9997 17C6.64874 17 4.57573 13.154 4.07373 12C4.45068 11.1588 4.95978 10.3833 5.58173 9.70297L4.18373 8.30497C2.64573 9.97197 2.06273 11.651 2.05173 11.684C1.98276 11.8893 1.98276 12.1116 2.05173 12.317C2.07273 12.383 4.36673 19 11.9997 19ZM11.9997 4.99997C10.1627 4.99997 8.65373 5.39597 7.39573 5.98097L3.70673 2.29297L2.29273 3.70697L20.2927 21.707L21.7067 20.293L18.3877 16.974C21.0017 15.023 21.9347 12.359 21.9487 12.317C22.0177 12.1116 22.0177 11.8893 21.9487 11.684C21.9267 11.617 19.6327 4.99997 11.9997 4.99997ZM16.9717 15.558L14.6917 13.278C14.8817 12.888 14.9997 12.459 14.9997 12C14.9997 10.359 13.6407 8.99997 11.9997 8.99997C11.5407 8.99997 11.1117 9.11797 10.7227 9.30897L8.91473 7.50097C9.90725 7.16038 10.9504 6.99097 11.9997 6.99997C17.3507 6.99997 19.4237 10.846 19.9257 12C19.6237 12.692 18.7597 14.342 16.9717 15.558Z"
                      fill="#699BF7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block w-56 mr-6 laptop:text-right
                                 font-bold text-gray-600"
              >
                New Password
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  id=""
                  name=""
                  class="block w-full  px-4 py-2 mt-2  border border-[#D9D9D9] rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                />
                <div className="absolute inset-y-0 right-0 pr-3  flex items-center text-sm leading-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9997 19C12.9457 19 13.8097 18.897 14.5977 18.719L12.8407 16.962C12.5677 16.983 12.2907 17 11.9997 17C6.64874 17 4.57573 13.154 4.07373 12C4.45068 11.1588 4.95978 10.3833 5.58173 9.70297L4.18373 8.30497C2.64573 9.97197 2.06273 11.651 2.05173 11.684C1.98276 11.8893 1.98276 12.1116 2.05173 12.317C2.07273 12.383 4.36673 19 11.9997 19ZM11.9997 4.99997C10.1627 4.99997 8.65373 5.39597 7.39573 5.98097L3.70673 2.29297L2.29273 3.70697L20.2927 21.707L21.7067 20.293L18.3877 16.974C21.0017 15.023 21.9347 12.359 21.9487 12.317C22.0177 12.1116 22.0177 11.8893 21.9487 11.684C21.9267 11.617 19.6327 4.99997 11.9997 4.99997ZM16.9717 15.558L14.6917 13.278C14.8817 12.888 14.9997 12.459 14.9997 12C14.9997 10.359 13.6407 8.99997 11.9997 8.99997C11.5407 8.99997 11.1117 9.11797 10.7227 9.30897L8.91473 7.50097C9.90725 7.16038 10.9504 6.99097 11.9997 6.99997C17.3507 6.99997 19.4237 10.846 19.9257 12C19.6237 12.692 18.7597 14.342 16.9717 15.558Z"
                      fill="#699BF7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block w-56 mr-6 laptop:text-right
                                 font-bold text-gray-600"
              >
                Comfirm New Password
              </label>
              <div className="relative w-full">
                <input
                  type="password"
                  id=""
                  name=""
                  class="block w-full  px-4 py-2 mt-2  border border-[#D9D9D9] rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
                <div className="absolute inset-y-0 right-0 pr-3  flex items-center text-sm leading-5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9997 19C12.9457 19 13.8097 18.897 14.5977 18.719L12.8407 16.962C12.5677 16.983 12.2907 17 11.9997 17C6.64874 17 4.57573 13.154 4.07373 12C4.45068 11.1588 4.95978 10.3833 5.58173 9.70297L4.18373 8.30497C2.64573 9.97197 2.06273 11.651 2.05173 11.684C1.98276 11.8893 1.98276 12.1116 2.05173 12.317C2.07273 12.383 4.36673 19 11.9997 19ZM11.9997 4.99997C10.1627 4.99997 8.65373 5.39597 7.39573 5.98097L3.70673 2.29297L2.29273 3.70697L20.2927 21.707L21.7067 20.293L18.3877 16.974C21.0017 15.023 21.9347 12.359 21.9487 12.317C22.0177 12.1116 22.0177 11.8893 21.9487 11.684C21.9267 11.617 19.6327 4.99997 11.9997 4.99997ZM16.9717 15.558L14.6917 13.278C14.8817 12.888 14.9997 12.459 14.9997 12C14.9997 10.359 13.6407 8.99997 11.9997 8.99997C11.5407 8.99997 11.1117 9.11797 10.7227 9.30897L8.91473 7.50097C9.90725 7.16038 10.9504 6.99097 11.9997 6.99997C17.3507 6.99997 19.4237 10.846 19.9257 12C19.6237 12.692 18.7597 14.342 16.9717 15.558Z"
                      fill="#699BF7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div classname="">
              <div className="flex items-center laptop:justify-start justify-center laptop:ml-[205px]">
                <button
                  class=" mt-6 hover:bg-blue-500 bg-[#255FAB] text-white mr-3 py-2 px-4 w-36 h-12 rounded mb-6"
                  // onClick={handleSubmit}
                >
                  Save
                </button>
                <button class="bg-transparent  w-36 h-12 hover:bg-slate-400 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-800 hover:border-transparent rounded">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
