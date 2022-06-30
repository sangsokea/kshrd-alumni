import React from "react";

export default function AccountChangePassword() {
  return (
    <div>
      <div className="">
        <div className="flex flex-row px-3 mb-3"></div>

        <section class=" p-12 mx-auto  rounded-md shadow-2xl laptop:px-20  dark:bg-gray-800">
          <p className="font-maven text-3xl text-[#035397] font-bold">
            Account setting
          </p>
          <div class=" gap-6 mt-4 tablet:grid-cols-3">
            <div class="laptop:flex laptop:items-center mb-5">
              <label
                for="name"
                class="inline-block w-[124px] laptop:ml-[70px]    
                              font-bold text-gray-600"
              >
                Profile Picture
              </label>
              <svg
                width="135"
                height="135"
                viewBox="0 0 138 138"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M109.25 11.5V28.75V11.5ZM109.25 46V28.75V46ZM109.25 28.75H126.5H109.25ZM109.25 28.75H92H109.25Z"
                  fill="#858EA4"
                />
                <path
                  d="M109.25 28.75H92M109.25 11.5V28.75V11.5ZM109.25 46V28.75V46ZM109.25 28.75H126.5H109.25Z"
                  stroke="#757D8A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M74.75 11.5H28.75C24.175 11.5 19.7874 13.3174 16.5524 16.5524C13.3174 19.7874 11.5 24.175 11.5 28.75V89.125C11.5 89.6195 11.5633 90.1025 11.684 90.5625C11.5623 91.032 11.5005 91.515 11.5 92V109.25C11.5 113.825 13.3174 118.213 16.5524 121.448C19.7874 124.683 24.175 126.5 28.75 126.5H109.25C113.825 126.5 118.213 124.683 121.448 121.448C124.683 118.213 126.5 113.825 126.5 109.25V69C126.5 68.515 126.438 68.032 126.316 67.5625C126.438 67.093 126.5 66.61 126.5 66.125V63.25H115V63.342C90.2923 64.1413 72.45 70.0925 59.915 78.4242C64.6645 80.109 69.9775 82.5068 75.187 85.6463C83.2313 90.4762 91.4078 97.2613 96.9105 106.249C97.3047 106.893 97.5681 107.608 97.6858 108.354C97.8035 109.1 97.773 109.862 97.5963 110.596C97.4196 111.33 97.1 112.022 96.6557 112.633C96.2115 113.243 95.6514 113.761 95.0073 114.155C94.3632 114.549 93.6477 114.812 92.9018 114.93C92.1559 115.048 91.3941 115.017 90.66 114.841C89.9258 114.664 89.2336 114.344 88.623 113.9C88.0123 113.456 87.4952 112.896 87.101 112.251C82.869 105.334 76.3025 99.728 69.2645 95.5017C62.238 91.2812 55.0907 88.6478 50.1343 87.4977C43.1521 85.9032 36.0029 85.158 28.842 85.2783H28.7155C26.7145 85.307 24.8055 85.3932 23 85.537V28.75C23 27.225 23.6058 25.7625 24.6841 24.6841C25.7625 23.6058 27.225 23 28.75 23H74.75V11.5ZM48.875 34.5C45.7403 34.5234 42.6874 35.5023 40.1235 37.306C36.846 39.6635 34.5 43.5505 34.5 48.875C34.5 54.1995 36.846 58.0807 40.1235 60.4382C42.6857 62.246 45.7394 63.2271 48.875 63.25C51.2325 63.25 54.6423 62.5887 57.6265 60.4382C60.904 58.0807 63.25 54.1995 63.25 48.875C63.25 43.5505 60.904 39.6693 57.6265 37.306C55.0636 35.5003 52.01 34.5212 48.875 34.5Z"
                  fill="#858EA4"
                />
              </svg>
              <button
                type="button"
                className="h-[40px] laptop:w-1/4 w-full laptop:ml-10  rounded-md mt-2 text-blue-800 border border-blue-800"
              >
                <label
                  className="block w-full h-auto cursor-pointer"
                  for="upload-image"
                >
                  Change Profile Picture
                </label>
              </button>
            </div>
            <p
              className="laptop:ml-48 
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
                class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full b px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="block w-full px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                class="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-[#A098AE] whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none"
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
                  class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  class="block w-full  px-4 py-2 mt-2 text-gray-700  border border-[#D9D9D9] rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
