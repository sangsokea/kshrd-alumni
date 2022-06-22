import React from 'react'
import { NavLink } from 'react-router-dom'
import aA from '../../../commons/images/partner logo/aluminiAdmin.png'
import AdminFooterComponent from '../../../components/admin-component/AdminFooterComponent'
export default function AdminLogInPage() {
  return (
    <>
      <div className='flex my-48 font-maven items-center'>

        <div className='w-1/2 flex  text-f14 justify-center '>
          <form className=''>
            <p className='text-f34 font-bold text-ccon'>WELCOME BACK</p>
            <p className='text-cth'>Welcome back! Please enter your details.</p>
            <div class="form-control flex flex-col w-full mt-10">
              <label class="label">
                <span class="label-text font-bold">Email</span>
              </label>
              <input type="text" placeholder="Enter email" class="flex-grow input input-bordered w-full py-2 px-2 border rounded-lg " />
              <label class="label">
              </label>
            </div>
            <div class="form-control w-full mt-5">
              <label class="label mb-2 ">
                <span class="label-text font-bold">password</span>
              </label>
              <input type="password" placeholder="Password" class="input input-bordered w-full py-2 px-2 border rounded-lg" />
              <label class="label">
              </label>
            </div>
            <div className='mt-5 flex mb-3 justify-between  '>

              <label class="">
                <input class="mr-2" type="checkbox" />
                <span class=" font-medium">
                  Remember me
                </span>
              </label>
              <NavLink to='' className='font-medium'>Forgot Password</NavLink>
            </div>
            <button className='border rounded-lg py-2 w-full font-bold bg-ccon text-white hover:bg-cfoo' > Sign in </button>
          </form>
        </div>
              
        <div className=' w-1/2 justify-center hidden laptop:block'>        
          <img  className='w-[460px] h-[380px] ' src={aA} alt='alumini'/>
        </div>
      </div>
      <AdminFooterComponent/>
    </>
    
  )

}




