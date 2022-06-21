import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { colors } from "../commons/colors/colors";

export default function AccountSettingPage() {
  const [changePassword, setChangePassword] = useState(false);

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
          <div class="col-span-2 ml-10">
            <img
              class="w-pp h-pp "
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAJFBMVEXw8PDZ2dnb29vs7Ozu7u7a2trk5OTh4eHn5+ff39/m5ubW1tZgd3wLAAADEUlEQVR4nO2d7XaCMAxAgZaPsvd/38nUUdq0eATElHvPfjhFpHehSYq6qgIAAAAAAAAAAAAAAAAAAAAAAAAAAAD4UszP2ZizFVSmPhsc4AAHOMABDnCAAxzgAAc4wIEqB4f3ygocVPZYKg0OjgYHOJjAAQ4mVDswY+9c3w122ysqdjC49rFF0216RbUOrPNrm3bY8IpaHdgm2GpDKCh1ECnYIkGpAxcpqOu3TwedDgZBQe3W923FDKLTgRQGdT2u7rsTPal0kFhiWA+EVhyfSged7GC1ohxlTyod9AkHawc/nULCzKnSgTwdrGaGv5m0je9X6SAuDl5ycFcX1xEqHaTiIH/wjx23UX5U6SAxH/zk+8fns/rwAZUOxBJJPNXF/YZjVOlA6BbEP/CCOXjC/KjSgXwytNljt+28ZbChTgdWcpBvHP26qlk+pNPBVPGFNPkZcXH6LJOoUgdxudzkj3wpbRkIWh2EU8KKgrCkWLSYah1Ugx/d+ZQQZ9PF/KnXwS2+HwvLTb961FFl6UvT7OCWH8wwDi8csomur/sD1e3gVYR6wiuULuHAtOE+az8/XsKBWFbO+fESDiQFXiBcwUFi+dE9C8sLOEh0mXNxfQEHQm9xOQep1ceCHQxBD51YdCrYwdRFLJuH1AJsqQ7Ge9z7EpJhUKaDuZP0JCTDoEQHxh/tv4TMO8CLc2CDevg5MaYuTRbowEQJ8C7BSt1SmQ6kavhPQiYMCnMgj3RMl8nFOUgOtEu+WaM0Bzad/br0Q0U4sM/3mGXHWbAD0zc33LSenA33gh14l5DfV6DbwYZxl+Ig3QVdxsFunwHV6yBb9lzEwdupsBwHuQbgIg52SgmaHeyVEhQ72PdrAVQ62C8l6HWwrwKVDrrmiZt+3P3GfPPxy+Om87dt5nv/n9Zc6ZrrKjjAwQQOcDCBAxxMKHBgzbFEH4b4QgfN0Shw8HFwgAMc4AAHOMABDnCAAxzg4IsdxJ/H/Czf8L+J2sOb5Tz575L4kISzOVsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJJfX084wDL8aVYAAAAASUVORK5CYII="
            />
          </div>
          <div class="col-span-1">
            <button
              style={styles}
              class="text-xl ml-10 bg-transparent text-white py-4 px-2 border hover:border-transparent rounded-md"
            >
              Change Profile Picture
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
              style={styles}
              class="ml-10 bg-transparent text-white py-4 px-2 border hover:border-transparent rounded-md"
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
