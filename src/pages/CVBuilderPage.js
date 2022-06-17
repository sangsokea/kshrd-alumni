import React, { useState } from "react";

export default function CVBuilderPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleChangeFirstName = (e) => {
    console.log(e.target.value);
  };

  return (
    <div class="body-font font-maven p-10 bg-slate-100 rounded-tr-lg rounded-br-lg h-full">
      <div class="flex flex-row ">
        <h1 class="font-bold text-2xl">Create New Curriculum Vitae</h1>
        <span class="w-32 ml-auto mt-0">
          <img src="http://www.onlylondon.properties/application/modules/themes/views/default/assets/images/image-placeholder.png"></img>
          <button class="bg-blue-500 p-1.5 rounded-md mt-2 ml-2 text-white">
            Upload Image
          </button>
        </span>
      </div>

      <h1 class="font-bold text-xl">Personal Information</h1>

      <div>
        <form>
          <div class="grid gap-6 mb-6 lg:grid-cols-2 mt-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-md font-medium dark:text-black"
              >
                First name
              </label>
              <input
              onChange={handleChangeFirstName}
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-md font-medium dark:text-black"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-md font-medium dark:text-black"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-md font-medium dark:text-black"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
          <div class="mb-6">
            <label
              for="large-input"
              class="block mb-2 text-md font-medium dark:text-black"
            >
              Address
            </label>
            <input
              type="text"
              id="large-input"
              class="block p-8 w-full bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
