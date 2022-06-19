import React, {Fragment} from 'react'
import { useNavigate } from "react-router-dom";
import img3 from '../images/Group.png'
import { ReactComponent as Arrow } from '../commons/icon/ri_arrow-go-back-fill .svg'
import { ReactComponent as Vector }  from '../commons/icon/Vector.svg'
import { ReactComponent as Group } from '../commons/icon/Group.svg'
import ellipes from '../commons/icon/Ellipse.svg'
import { colors } from '../commons/colors'
import { Transition,Popover } from '@headlessui/react'

export default function PorfolioPage() {
    const navigate = useNavigate();
  return (
    <div className="h-screen">
	    <div class="py-12">
        <div className='md:w-1341 md:container md:mx-auto  ml-4 md:grid md:grid-cols-3 grid grid-cols-2'>
            <div className='md:col-span-2'>
                <p  className='text-2xl font-normal'>Portfolio</p>
                <p  className='text-2xl font-bold text-blue-500'>Sang Sokea</p>
            </div>
            <div className='flex flex-row '>
           <p className='md:container md:mx-auto '></p>
           <button
                onClick={() => navigate("/porfolio")}
                >
               <Arrow className='mt-7 mr-3 w-6' />
            </button>


            <div className=''>
            <div className="">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
            >
              <Vector className='mt-7 mr-3 w-5'></Vector> 
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-40  z-10 mt-3 w-423 h-270 max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative  gap-8 bg-white p-7 ">
                    {/* {solutions.map((item) => ( */}
                    <div >
                    <div
                     
                     className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out -mt-4  focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                   >
                     <div className="flex items-center">
                       <p className="text-xl font-maven font-extrabold text-gray-900">
                         Show Profile
                       </p> 
                     </div>
                    
                   </div>
                    </div>
                    <div>
                     
                              <div class="flex items-center mt-3 ml-7">
                              <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="default-radio-1" class="ml-2 text-xl font-bold font-maven text-gray-900">Public</label>
                              </div>
                              <div class="flex items-center mt-3 ml-7">
                              <input id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                              <label for="default-radio-2" class="ml-2 text-xl font-bold font-maven text-gray-900">Private</label>
                              </div>
                            <div className='text-center'>
                            <button 
                                  class=" mt-10 bg-blue-500 hover:bg-blue-700 text-white font-maven mr-3 py-2 px-4 w-36 h-12 rounded mb-6" >
                                    Update</button>
                            <button 
                                  class="bg-transparent  w-36 h-12 hover:bg-blue-500 text-blue-700 font-semibold font-maven hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                  Cancel
                            </button>
                    </div>
                    
                    </div>
                  
                    {/* ))} */}
                  </div>
                  {/* <div className="bg-gray-50 p-4">
                    
                  </div> */}
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
            </div>


            
           <button
                >
                <Group className='mt-7 w-7' onClick={() => navigate("/porfolioedit")}></Group>  
            </button>
        </div>
        </div>
                <br />
            <center>
                <div className='md:w-1341 min-h-1079  rounded shadow-2xl'>   
                    <div className='md:grid md:grid-cols-3  flex flex-wrap-reverse'>
                        <div className=' col-span-2 text-left md:ml-14 ml-2  font-maven md:mr-56'>
                            <p className='md:mt-24 md:text-4xl mt-10 text-1xl font-extrabold '>Full Stack + UI designer from KSHRD .</p>
                            <p className='mt-4 md:text-xl text-sm'>I have a deep interest in Science with the intention to bring the world to a new evolution of technology.</p>

                            <div className='text-left '>  
                                    <div className='bg-black_c mt-2 md:text-xl  text-sm rounded md:w-404 md:h-8 w-56 h-5'>
                                        <div className='md:grid grid-cols-3'>
                                            <div>
                                                <img 
                                                    className='mt-2 ml-3' 
                                                    src={ellipes} 
                                                    alt="" 
                                                />
                                            </div>
                                            <div className='col-span-2 -ml-24'>
                                                <p className='font-bold font-maven text-white'> Looking for a Summer 2022 Internship</p>
                                            </div>
                                        </div>

                                    </div>    
                                    
                                </div> 
                        </div>
                        <div className=''>
                        <img 
                            className='left-2 ml-2  md:mt-20 h-48 md:-ml-56  rounded-tl-tl-lgs   bg-gray-500 ' 
                            src="https://wallpaperaccess.com/full/6235574.jpg" 
                            alt="" 
                             />
                        </div>
                    </div>
                    <div className='md:grid md:grid-cols-8  md:mt-11'>
                        <div className=''>
                            <div className='bg-black_c md:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full '>
                            </div>
                            <div className='md:ml-16 md:min-h-1/24 md:mt-5 -mt-6 '>
                                <p className='md:ml-2 -ml-28 font-maven font-bold  w-24'>2016 - 2020 </p>
                                <p className='font-maven md:text-md text-sm ml-3  text-left font-bold w-56'>Bachelor Degree,Computer Science and Engineering</p>
                                <p className='font-maven md:text-sm text-tinys ml-3 text-left  w-56'>Royal University of Phnom Penh</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='md:ml-16  md:min-h-1/24'>
                                <p className='font-maven  text-sm ml-10 md:ml-3 md:mt-0 mt-20 text-left  w-64'>Paññāsāstra University of Cambodia</p>
                                <p className='font-maven text-md ml-3 text-left font-bold  w-56'>Graduated Diploma in English</p>
                                <p className='font-maven font-bold md:ml-1 -ml-28 '>2017 - 2018</p>
                            </div>
                            <div className='bg-black_c h-6 w-6 md:mt-1 -mt-5 md:ml-0 -ml-80  rounded-full'>
                               
                            </div>
                        </div>
                        <div className=''>
                            <div className='bg-black_c md:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full '>
                            </div>
                            <div className='md:ml-16 md:min-h-1/24 md:mt-5 -mt-6'>
                                <p className='-ml-7 font-maven font-bold w-56'>2018 Oct  - 2019 Jan</p>
                                <p className='font-maven text-md ml-3  font-bold text-left  w-56'>Certificate if Java Course</p>
                                <p className='font-maven text-sm md:ml-3 ml-10 text-left  w-64'>Cambodia-Korea Cooperation Center</p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='md:ml-16 md:min-h-1/24'>
                                <p className='font-maven text-sm ml-3 md:mt-0 mt-20 text-left w-56'>Korea Software HRD Center</p>
                                <p className='font-maven text-md ml-3 text-left font-bold w-56'>Software Expert Training</p>
                                <p className='font-maven font-bold ml-2'>2019 - 2020</p>
                            </div>
                            <div className='bg-black_c h-6 w-6 md:mt-1 -mt-5 md:ml-0 -ml-80  rounded-full'>
                              
                            </div>
                        </div>
                        <div className=''>
                        <div className='bg-black_c md:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full '>
                               
                            </div>
                            <div className='md:ml-16 md:min-h-1/24 md:mt-5 -mt-6'>
                                <p className='-ml-10 font-maven font-bold w-56'>2020 - PRESENT</p>
                                <p className='font-maven text-md md:ml-3 ml-10 font-bold  text-left  md:w-80'>IT Instructor at Korea Software HRD Center</p>
                                <p className='font-maven text-sm md:ml-3 ml-10 text-left  w-64'>Korea Software HRD Center</p>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                              
                            </div>
                            <div className='bg-black_c relative z-50 h-6 w-6 mt-24 rounded-full md:inline-block hidden'>
                            
                            </div>
                        </div>
                        <div className=''>
                            <div>
                               
                            </div>
                            <div className='bg-black_c md:ml-0 -ml-80 h-6 w-6 mt-24 rounded-full '>
                                <div className='bg-regal-bg md:h-1 h-1 w-1112   -ml-195 mt-3 absolute -z-50 md:inline-block '></div>
                            </div>
                        </div>
                        <div className=''>
                            <div>
                                <p className='text-left md:mt-25 mt-2 md:text-2xl text-xl md:-ml-11 ml-2 font-bold font-maven'>TIMELINE</p>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className='md:grid md:grid-cols-3 md:mt-24 mt-10'>
                            <div className='text-left ml-14 mt-4 col-span-2'>
                                <div className='gap-2 flex font-maven'>
                                    <ui>
                                        <li class="fff md:text-xl ">Web Application Development: Spring Framework, NodeJS, ReactJS</li>
                                        <li class="fff md:text-xl mt-2">Web Service (API) Development: Spring Boot, NodeJS, Express</li>
                                        <li class="fff md:text-xl mt-2">iOS Application Development: Swift</li>
                                        <li class="fff md:text-xl mt-2">Hybrid Mobile Application Development: React Native</li>
                                        <li class="fff md:text-xl mt-2">Database Management: PostgreSQL, MongoDB</li>
                                        <li class="fff md:text-xl mt-2">Server and Tool: Docker, Linux, Jenkin</li>
                                        <li class="fff md:text-xl mt-2">Others: Shell, Python</li>
                                    </ui>
                                   
                                </div>
                            </div>
                           <div className=''>
                                <img 
                                 className='md:-ml-56 mt-3 md:mt-0'
                                 src={img3}>
                                </img>
                            </div> 
                    </div>
                </div>
            </center>
           
    </div>
</div>
  )
}
