import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import aA from "../../../commons/images/partner logo/aluminiAdmin.png";
import AdminFooterComponent from "../../../components/admin-component/AdminFooterComponent";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { makeStyles } from "@material-ui/core";
import { useFormik } from "formik";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
export default function AdminLogInPage() {
  const navigate = useNavigate();
  const data = useSelector((state) => state?.email, shallowEqual);

  const [toggle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const classNamees = useStyles();

  // custom validation
  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Must be 6 characters or more";
    } else if (values.password.length > 20) {
      errors.password = "Must be 20 characters or less";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    validate,
    onSubmit: ({ email, password }) => {
      //   console.log(values);
      console.log(data);
      //   alert(JSON.stringify(values, null, 2));
      // dispatch(fetchLogin(email, password));
      localStorage.setItem("adminAuth", true);
      navigate("/admin/home");
    },
  });

  const onClickEyes = () => {
    setToggle(!toggle);
  };
  return (
    <div className="body-font font-maven bg-gradient-to-t from-blue-100  min-h-screen flex flex-col justify-between">
      <div className="flex py-48 font-maven items-center ">
        <div className="w-1/2 flex  text-f14 justify-center ">
          <form onSubmit={formik.handleSubmit} className="">
            <p className="text-f34 font-bold text-ccon">WELCOME BACK</p>
            <p className="text-cth">Welcome back! Please enter your details.</p>
            <div class="form-control flex flex-col w-full mt-10">
              <label class="label">
                <span class="label-text font-bold">Email</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
                onBlur={formik.handleBlur}
                class="flex-grow input input-bordered w-full py-2 px-2 border rounded-lg "
              />
              <label class="label"></label>
            </div>
            {/* error message */}
            {formik.errors.email ? (
              <div className="text-red-600 text-[11px]">
                {formik.errors.email}
              </div>
            ) : null}
            {/* error message */}

            <div class="form-control w-full mt-5">
              <label class="label mb-2 ">
                <span class="label-text font-bold">password</span>
              </label>
              <input
                id="password"
                type={!toggle ? "password" : "text"}
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                class="input input-bordered w-full py-2 px-2 border rounded-lg"
              />
              <label class="label"></label>
            </div>
            {formik.errors.password ? (
              <div className="text-red-600 text-[11px]">
                {formik.errors.password}
              </div>
            ) : null}
            <div className="mt-5 flex mb-3 justify-between  ">
              <label class="">
                <input class="mr-2" type="checkbox" />
                <span class=" font-medium">Remember me</span>
              </label>
              <a className="font-medium cursor-default">Forgot Password</a>
            </div>

            <button className="border rounded-lg py-2 w-full font-bold bg-ccon text-white hover:bg-cfoo">
              {" "}
              Sign in{" "}
            </button>
          </form>
        </div>

        <div className=" w-1/2 justify-center hidden laptop:block desktop:block">
          <img className="w-[460px] h-[380px] " src={aA} alt="alumini" />
        </div>
      </div>
      <div>
        <AdminFooterComponent />
      </div>
    </div>
  );
}
