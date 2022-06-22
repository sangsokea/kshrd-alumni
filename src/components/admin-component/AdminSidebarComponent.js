import React from 'react'
import { NavLink } from 'react-bootstrap'
import lg from '../../commons/images/logo.png'
import pr from '../../commons/images/profile.png'
import AdminFooterComponent from './AdminFooterComponent'
export default function AdminSidebarComponent() {
  return (
    <div className='bg-gradient-to-b from-blue-100'>
      <div className='flex bg-gradient-to-b from-blue-100 container mx-auto'>
        <div className='bg-ccon w-1/5 pt-[50px] font-maven text-white text-xl'>
          <div className='flex justify-center '>
            <img className='w-[156px] h-[94px]' src={lg} alt='aluminiLogo' />

          </div>

          <p className='border border-white w-full  mt-[48px] mb-[52px]'></p>

          <div className='mx-3'>

            <NavLink to='/1'>
              <div className='flex py-2 px-5 mt-8 hover:bg-white hover:text-ccon rounded-lg'> <svg class="h-7 w-7 mr-3" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg>Home</div>
            </NavLink>

            <NavLink to='/2' >
              <div className='flex py-2 px-5 mt-8 hover:bg-white hover:text-ccon rounded-lg' >
                <svg class="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />  <line x1="16" y1="2" x2="16" y2="6" />  <line x1="8" y1="2" x2="8" y2="6" />  <line x1="3" y1="10" x2="21" y2="10" /></svg>
                Filter Alumni
              </div>

            </NavLink>

            <NavLink to='/3'>
              <div className='flex py-2 px-5 mt-8 hover:bg-white hover:text-ccon rounded-lg'>
                <svg class="h-7 w-7 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                Manage Student
              </div>
            </NavLink>
            <NavLink to='/4'>
              <div className='flex py-2 px-5 mt-8 hover:bg-white hover:text-ccon rounded-lg ' >
                <svg class="h-7 w-7 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>  Manage CV
              </div>
            </NavLink>
            <NavLink>
              <div className='flex py-2 px-5  hover:bg-white hover:text-ccon rounded-lg mt-72' >
                <svg class="h-7 w-7 mr-3 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M7 12h14l-3 -3m0 6l3 -3" /></svg> Sign Out
              </div>
            </NavLink>
            <p className=' text-sm mt-2 font-semibold'>KSHRD ALUMNI - School
              Admission Dashboard</p>
            <p className='text-xs pb-10 flex items-center'>Made with <svg class="h-6 w-6 text-red-500 mx-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7" /></svg> by 10th generation</p>
          </div>

        </div>
        <div className='w-4/5 mx-10 mt-32 font-maven'>
          <div className=' flex justify-between'>
            <p className='font-f36 font-bold text-ch text-4xl '>Welcome back, Admin!</p>
            <div className='flex'>
              <svg class="h-7 w-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
              <div className='mx-5'>
                Nabila A.
                <p className=''>Admin</p>
              </div>

              <img className='w-10 h-10' src={pr} alt='profile' />
            </div>
          </div>
          <div className=' flex justify-end my-5'>
            <button class="bg-ccon text-white py-2 px-4 rounded w-42 flex justify-center hover:bg-cfoo">
              New Student<svg class="h-7 w-7 text-white ml-1 " width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="9" cy="7" r="4" />  <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />  <path d="M16 11h6m-3 -3v6" /></svg>
            </button>
          </div>

          <div className='flex'>
            <a href="#" class=" block py-3 pl-4 pr-20 max-w-sm bg-bg1 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p class="font-bold  text-white text-xl">
                560
              </p>
              <p className=' text-white'>Total Alumni</p>
              <p className='flex items-center text-red-700 mt-4'><svg class="h-4 text-red-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
                13.8%
              </p>
            </a>
            <a href="#" class="block py-3 pl-4 pr-20 max-w-sm bg-bg2 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p class="font-bold  text-white text-xl">
                560
              </p>
              <p className=' text-white'>Total Alumni</p>
              <p className='flex items-center text-red-700 mt-4'><svg class="h-4 text-red-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
                13.8%
              </p>
            </a>
            <a href="#" class="block py-3 pl-4 pr-20 max-w-sm bg-bg3 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p class="font-bold  text-white text-xl">
                560
              </p>
              <p className=' text-white'>Total Alumni</p>
              <p className='flex items-center text-red-700 mt-4'><svg class="h-4 text-red-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
                13.8%
              </p>
            </a>
            <a href="#" class="block py-3 pl-4 pr-20 max-w-sm bg-bg4 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p class="font-bold  text-white text-xl">
                560
              </p>
              <p className=' text-white'>Total Alumni</p>
              <p className='flex items-center text-red-700 mt-4'><svg class="h-4 text-red-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
                13.8%
              </p>
            </a>
            <a href="#" class="block py-3 pl-4 pr-20 max-w-sm bg-bg5 rounded-lg border border-gray-200 s hover:bg-ccon dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <p class="font-bold  text-white text-xl">
                560
              </p>
              <p className=' text-white'>Total Alumni</p>
              <p className='flex items-center text-red-700 mt-4'><svg class="h-4 text-red-700 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
                13.8%
              </p>
            </a>
          </div>

          <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
            <div className='text-xl px-6 py-4 text-ccon font-bold border border-md  bg-white '>
              Total Alumni
            </div>
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400  bg-white">
              <thead class="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    First Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Last Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Gender
                  </th>
                  <th scope="col" class="px-6 py-3">
                    CVs
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Portfolio
                  </th>
                  <th scope="col" class="px-6 py-3 text-right">
                    Action
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Yuoyi
                  </th>
                  <td class="px-6 py-4">
                    Vong
                  </td>
                  <td class="px-6 py-4">
                    Female
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    1
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Boonlin
                  </th>
                  <td class="px-6 py-4">
                    Em
                  </td>
                  <td class="px-6 py-4">
                    Male
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Sokea
                  </th>
                  <td class="px-6 py-4">
                    Sang
                  </td>
                  <td class="px-6 py-4">
                    Male
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Yarith
                  </th>
                  <td class="px-6 py-4">
                    Kong
                  </td>
                  <td class="px-6 py-4">
                    Male
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class="px-6 py-4">
                    2
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    Paradis
                  </th>
                  <td class="px-6 py-4">
                    Pol
                  </td>
                  <td class="px-6 py-4">
                    Female
                  </td>
                  <td class="px-6 py-4">
                    3
                  </td>
                  <td class="px-6 py-4">
                    4
                  </td>
                  <td class=" text-right ">
                    <button className='border rounded-lg bg-ccon  py-2 px-5 text-white hover:bg-cfoo'>View</button>
                  </td>
                </tr>
              </tbody>

            </table>
          </div>
          <div className=' w-2/5'>
          <div className=' text-center my-5 '>
            <nav aria-label="Page navigation example">
              <ul class="inline-flex items-center -space-x-px">
                <li>
                  <a href="#" class="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Previous</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  </a>
                </li>
                <li>
                  <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                </li>
                <li>
                  <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                  <a href="#" aria-current="page" class="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                </li>
                <li>
                  <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                  <a href="#" class="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                  <a href="#" class="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span class="sr-only">Next</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          </div>
    
        </div>
      </div>
      <AdminFooterComponent/>

    </div>


  )
}
