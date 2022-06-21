import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../commons/colors/colors";

export default function AccountSettingPage() {
  const [changePassword, setChangePassword] = useState(false);
  const [image, setImage] = useState(
    "https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png"
  );
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
  };

  return (
    <>
      <div class="container mx-auto ml-20">
        <div class="mt-10 mb-20 text-4xl font-bold">
          <p>ACCOUNT SETTING</p>
        </div>

        <div class="grid grid-cols-4 m-auto">
          <div class="col-span-1">
            <p class="text-xl text-right">Profile Picture</p>
          </div>
          <div class="col-span-1 ml-10">
            <img
              class="rounded-lg"
              src={imageUrl ? imageUrl : image}
              style={{ height: "200px" }}
            />
          </div>
          <div class="col-span-1">
            <input
              id="change-profile-picture"
              class="hidden"
              type="file"
              onChange={handleImageChange}
            ></input>
            <button
              style={styles}
              class="text-xl ml-10 bg-transparent text-white h-[60px] w-[230px] border hover:border-transparent rounded-md"
            >
              <label for="change-profile-picture" class="w-full h-full block mt-4 cursor-pointer">
                Change Profile Picture
              </label>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-4 mt-10 text-xl">
          <div class="col-span-1">
            <p className="text-right">First Name</p>
          </div>

          <div class="col-span-2">
            <input
              class="w-96 border ml-10 rounded py-2 px-4 "
              placeholder=" boonlin"
            />
          </div>
        </div>
        <div class="grid grid-cols-4 mt-10 text-xl">
          <div class="col-span-1">
            <p className="text-right">Last Name</p>
          </div>

          <div class="col-span-2">
            <input
              class="w-96 border ml-10  rounded py-2 px-4"
              placeholder=" em"
            />
          </div>
        </div>

        <div class="grid grid-cols-4 mt-10 text-xl">
          <div class="col-span-1">
            <p className="text-right">Email</p>
          </div>
          <div class="col-span-2">
            <input
              class=" w-96 border ml-10  rounded  py-2 px-4"
              placeholder="emboonlin999@gmail.com"
            />
          </div>
        </div>

        <div class="grid grid-cols-4 mt-10 text-xl">
          <div class="col-span-1">
            <p className="text-right">Password</p>
          </div>
          <div class="col-span-2">
            <button
              id="menu-btn"
              // style={styles}
              class="ml-10 bg-transparent text-gray-500 py-4 px-2 border rounded-md"
              onClick={() => setChangePassword(!changePassword)}
            >
              Change Password
            </button>
          </div>
        </div>

        <div
          id="changePassword"
          className={!changePassword ? "hidden" : "block"}
        >
          <div class="grid grid-cols-4 mt-10 text-xl">
            <div class="col-span-1">
              <p className="text-xl text-right"> Current Password</p>
            </div>
            <div class="col-span-2">
              <input
                class=" w-96 border ml-10  rounded  py-2 px-4"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>

          <div class="grid grid-cols-4 mt-10 text-xl">
            <div class="col-span-1">
              <p className="text-xl text-right"> New Password</p>
            </div>
            <div class="col-span-2">
              <input
                class=" w-96 border ml-10  rounded  py-2 px-4"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>

          <div class="grid grid-cols-4 mt-10 text-xl">
            <div class="col-span-1">
              <p className="text-xl text-right"> Confirm New Password</p>
            </div>
            <div class="col-span-2">
              <input
                class=" w-96 border ml-10  rounded  py-2 px-4"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div></div>
        </div>

        <div class="flex flex-row">
          <div class="m-auto">
            <button
              class="bg-transparent text-lg text-white px-10 py-2 border hover:border-transparent rounded-md"
              style={styles}
            >
              Save
            </button>

            <button class="bg-transparent text-lg text-blue-600 px-10 py-2 ml-10 mt-10 border hover:border-transparent rounded-md">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  backgroundColor: colors.content,
  // logoSize: myStyles.logoSize
};
