import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AccuntSettingPage() {
  const navigate = useNavigate()
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
    <div>
      <div className="">
        <div className="flex flex-row px-3 mb-3"></div>

        <section class=" p-12 mx-auto  rounded-md shadow-2xl laptop:px-56  dark:bg-gray-800">
          <p className="font-maven text-3xl mb-16 text-[#035397] font-bold">
            Account setting
          </p>
          <div class=" gap-6 mt-4 tablet:grid-cols-3">
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="name"
                class="inline-block w-32    
                              font-bold text-gray-600"
              >
                Profile Picture
              </label>
              <img
                src={imageUrl ? imageUrl : image}
                className={imageUrl ? "shadow-lg h-40" : "h-40 rounded-xl"}
              />

              <div className="upload-btn-wrapper h-[40px] talbet:w-1/4 laptop:w-full w-full laptop:ml-10  rounded-md mt-2 text-blue-800 border border-blue-800">
                <button class=" laptop:ml-14 mt-2 font-maven">
                  Change Profile Picture
                </button>

                <input type="file" name="myfile" onChange={handleChange} />
              </div>
            </div>
            <p
              className="laptop:ml-36
                              font-bold text-[#757D8A]"
            >
              Administrator
            </p>
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="name"
                class="inline-block w-32 mr-6 laptop:text-right 
                              font-bold text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id=""
                name=""
                placeholder=""
                class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block w-32 mr-6 laptop:text-right
                                 font-bold text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id=""
                name=""
                placeholder=""
                class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block w-32 mr-6 laptop:text-right
                                 font-bold text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                id=""
                name=""
                class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="twitter"
                class="inline-block laptop:w-28 tablet:w-[102px]  laptop:mr-4 desktop:mr- laptop:text-right
                                 font-bold text-gray-600"
              >
                Password
              </label>
              <button
                type="button"
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-[#A098AE] whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
                onClick={() => navigate('accuntchange')}
              >
                Change Password
              </button>
            </div>
            <div classname="">
              <div className="flex items-center laptop:justify-start justify-center ml-[135px]">
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
