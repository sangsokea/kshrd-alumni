import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../commons/colors/colors";
import sample_image from "../commons/images/sample image.jpg"

export default function AccountSettingPage() {
  const [changePassword, setChangePassword] = useState(false);
  const [image, setImage] = useState(
    sample_image
  );
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]));

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
  };

  return (
    <>
      <div className="container mx-auto laptop:ml-20 ml-5 mt-0">
        <div className="laptop:mt-10 laptop:mb-20 mb-5 text-lg laptop:text-xl desktop:text-4xl font-bold">
          <p className="">ACCOUNT SETTING</p>
        </div>

        <div className="grid laptop:grid-cols-4 m-auto">
          <div className="col-span-1">
            <p className="text-xl text-right hidden laptop:block">Profile Picture</p>
          </div>
          <div className="col-span-1 ml-4 laptop:ml-10">
            <input
              id="change-profile-picture"
              className="hidden"
              type="file"
              onChange={handleImageChange}
            ></input>
            <label for="change-profile-picture">
              <img
                className="rounded-lg cursor-pointer"
                src={imageUrl ? imageUrl : image}
                style={{ height: "200px" , width: "300px"}}
              />
            </label>
          </div>
        </div>

        <div className="flex laptop:grid grid-cols-4 mt-5 text-md laptop:text-lg desktop:text-xl laptop:items-center flex-col">
          <div className="col-span-1">
            <p className="laptop:text-right">First Name</p>
          </div>

          <div className="col-span-2">
            <input
              className="px-4 py-2 laptop:ml-10 border rounded laptop:w-96 w-80"
              placeholder="yuoyi"
            />
          </div>
        </div>
        <div className="flex laptop:grid grid-cols-4 mt-5 text-md laptop:text-lg desktop:text-xl laptop:items-center flex-col">
          <div className="col-span-1">
            <p className="laptop:text-right">Last Name</p>
          </div>

          <div className="col-span-2">
            <input
              className="px-4 py-2 laptop:ml-10 border rounded laptop:w-96 w-80"
              placeholder="vong"
            />
          </div>
        </div>

        <div className="flex laptop:grid grid-cols-4 mt-5 text-md laptop:text-lg desktop:text-xl laptop:items-center flex-col">
          <div className="col-span-1">
            <p className="laptop:text-right">Email</p>
          </div>
          <div className="col-span-2">
            <input
              className="px-4 py-2 laptop:ml-10 border rounded laptop:w-96 w-80"
              placeholder="yoiryivong@gmai.com"
            />
          </div>
        </div>

        <div className="flex laptop:grid grid-cols-4 mt-5 text-md laptop:text-lg desktop:text-xl laptop:items-center flex-col">
          <div className="col-span-1">
            <p className="laptop:text-right">Password</p>
          </div>
          <div className="col-span-2">
            <button
              id="menu-btn"
              // style={styles}
              className="px-4 py-2 laptop:ml-10 text-gray-500 bg-transparent border rounded-md"
              onClick={() => setChangePassword(!changePassword)}
            >
              Change password
            </button>
          </div>
        </div>

        <div
          id="changePassword"
          className={!changePassword ? "hidden" : "block"}
        >
          <div className="flex laptop:grid grid-cols-4 mt-5 text-md laptop:text-lg desktop:text-xl laptop:items-center flex-col">
            <div className="col-span-1">
              <p className="laptop:text-xl laptop:text-right">Current Password</p>
            </div>
            <div className="col-span-2">
              <input
                className="px-4 py-2 laptop:ml-10 border rounded laptop:w-96 w-80"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>

          <div className="flex grid-cols-4 laptop:grid mt-5 text-md laptop:text-lg desktop:text-xl laptop:items-center flex-col">
            <div className="col-span-1">
              <p className="laptop:text-xl laptop:text-right">New Password</p>
            </div>
            <div className="col-span-2">
              <input
                className="px-4 py-2 laptop:ml-10 border rounded laptop:w-96 w-80"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>

          <div className="flex laptop:grid grid-cols-4 mt-5 text-md laptop:text-lg desktop:text-xl laptop:items-center flex-col">
            <div className="col-span-1">
              <p className="laptop:text-xl laptop:text-right">Confirm New Password</p>
            </div>
            <div className="col-span-2">
              <input
                className="px-4 py-2 laptop:ml-10 border rounded laptop:w-96 w-80"
                id="inline-password"
                type="password"
                placeholder="******************"
              />
            </div>
          </div>
          <div></div>
        </div>

        <div className="flex flex-row">
          <div className="laptop:m-auto">
            <button
              className="px-10 py-2 text-sm laptop:text-md desktop:text-lg text-white bg-transparent border rounded-md hover:border-transparent"
              style={styles}
            >
              Save
            </button>

            <button className="px-10 py-2 mt-10 ml-5 laptop:ml-10 text-sm laptop:text-md desktop:text-lg text-blue-600 bg-transparent border rounded-md hover:border-transparent">
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
