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
      <div className="container mx-auto ml-20">
        <div className="mt-10 mb-20 text-4xl font-bold">
          <p>ACCOUNT SETTING</p>
        </div>

        <div className="grid grid-cols-4 m-auto">
          <div className="col-span-1">
            <p className="text-xl text-right">Profile Picture</p>
          </div>
          <div className="col-span-1 ml-10">
            <img
              className="rounded-lg"
              src={imageUrl ? imageUrl : image}
              style={{ height: "200px" }}
            />
          </div>
          <div className="col-span-1">
            <input
              id="change-profile-picture"
              className="hidden"
              type="file"
              onChange={handleImageChange}
            ></input>
            <button
              style={styles}
              className="text-xl ml-10 bg-transparent text-white h-[60px] w-[230px] border hover:border-transparent rounded-md"
            >
              <label for="change-profile-picture" className="block w-full h-full mt-4 cursor-pointer">
                Change Profile Picture
              </label>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-4 mt-10 text-xl">
          <div className="col-span-1">
            <p className="text-right">First Name</p>
          </div>

          <div className="col-span-2">
            <input
              className="px-4 py-2 ml-10 border rounded w-96 "
              placeholder=" boonlin"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mt-10 text-xl">
          <div className="col-span-1">
            <p className="text-right">Last Name</p>
          </div>

          <div className="col-span-2">
            <input
              className="px-4 py-2 ml-10 border rounded w-96"
              placeholder=" em"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mt-10 text-xl">
          <div className="col-span-1">
            <p className="text-right">Email</p>
          </div>
          <div className="col-span-2">
            <input
              className="px-4 py-2 ml-10 border rounded w-96"
              placeholder="emboonlin999@gmail.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mt-10 text-xl">
          <div className="col-span-1">
            <p classNameName="text-right">Password</p>
          </div>
          <div className="col-span-2">
            <button
              id="menu-btn"
              // style={styles}
              className="px-2 py-4 ml-10 text-gray-500 bg-transparent border rounded-md"
              onClick={() => setChangePassword(!changePassword)}
            >
              Change Password
            </button>
          </div>
        </div>

        <div
          id="changePassword"
          classNameName={!changePassword ? "hidden" : "block"}
        >
          <div className="grid grid-cols-4 mt-10 text-xl">
            <div className="col-span-1">
              <p className="text-xl text-right"> Current Password</p>
            </div>
            <div className="col-span-2">
              <input
                className="px-4 py-2 ml-10 border rounded w-96"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mt-10 text-xl">
            <div className="col-span-1">
              <p className="text-xl text-right"> New Password</p>
            </div>
            <div className="col-span-2">
              <input
                className="px-4 py-2 ml-10 border rounded w-96"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>

          <div className="grid grid-cols-4 mt-10 text-xl">
            <div className="col-span-1">
              <p className="text-xl text-right"> Confirm New Password</p>
            </div>
            <div className="col-span-2">
              <input
                className="px-4 py-2 ml-10 border rounded w-96"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div></div>
        </div>

        <div className="flex flex-row">
          <div className="m-auto">
            <button
              className="px-10 py-2 text-lg text-white bg-transparent border rounded-md hover:border-transparent"
              style={styles}
            >
              Save
            </button>

            <button className="px-10 py-2 mt-10 ml-10 text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent">
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
