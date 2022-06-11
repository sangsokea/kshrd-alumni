import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../commons/colors";

function CvTemplate() {
    const navigate = useNavigate();
    return (
        <div className="h-screen">
	    <div class="md:py-12 py-4">
            <center>
                <div className='w-full md:w-222 p-4'>
                    <div class="grid grid-cols-3">
                            <div className="md:min-h-1/22 h-96 w-full md:w-128 bg-regal-gg ">
                                {/*Start CV Profile */}
                                <div class="absolute ">
                                    <svg width="126" height="124" className="w-14 h-14  md:w-126 md:h-124" viewBox="0 0 126 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="51" cy="49" r="75" fill="#8CC0DE"/>
                                    </svg>
                                    <div className='rounded-full md:h-32 md:w-32 h-12 w-12 md:left-10 left-6 top-4 bg-white absolute'>
                                        <div>
                                            <img 
                                                className='rounded-full md:h-28 md:w-28 h-10 w-10 left-1 top-1 md:top-2 md:left-2  bg-gray-500 absolute' 
                                                src="https://wallpaperaccess.com/full/6235574.jpg" 
                                                alt="" 
                                            />
                                            <div className='bg-regal-rgb md:h-14 md:w-14 md:left-24 absolute rounded-full'>
                                                </div>
                                        </div>
                                    </div>
                                </div> 
                                {/* End CV Profile */}

                                {/* start Details */}
                                <div className='mb-4'>
                                    <div>
                                        <h2 class='font-maven text-left ml-5 md:mt-48 mt-24 font-bold text-tiny md:text-xl'>Details</h2>
                                    </div> 
                                    <div className='text-tiny md:text-xs text-left ml-5 font-maven mt-2'>
                                        <p>
                                            <span>SS Sterrt City, </span> 
                                            <span>phnom penh, </span> <br />
                                            <span>Cambodia</span>
                                        </p> 
                                        <p>086236671</p> 
                                        <p className='text-regal-blue mb-2 break-words'>kongsachakyarith@gmail.com</p>
                                        <p className='font-bold'>Nationality</p>
                                        <p>khmer</p> 
                                    </div>
                                    {/*  Start Education */}
                                    <div className='mt-3'>
                                        <h2 class='font-maven text-left ml-5 font-bold text-tiny md:text-xl'>Education</h2>
                                    </div>
                                    <div className='md:text-xs text-left ml-5  text-tiny font-maven md:mt-2 '>
                                        <div>
                                            <div className='md:bg-regal-bg  text-left w-5 h-1 md:w-20 md:h-4 rounded'>
                                                <center>
                                                 <span className='font-bold  text-tinys bg-regal-bg md:text-xs'>2019-2020</span>
                                                </center>  
                                            </div>
                                            <p className='mt-1'>
                                                <span>Master, </span> 
                                                <span>Rupp, </span>
                                                <span>phnom penh</span>
                                            </p>
                                        </div>
                                        <div className='md:mt-5 mt-1'>
                                            <div className='md:bg-regal-bg  text-left w-5 h-1 md:w-20 md:h-4 rounded'>
                                                <center>
                                                 <span className='font-bold text-tinys bg-regal-bg md:text-xs'>2019-2020</span>
                                                </center>  
                                            </div>
                                            <p className='mt-1'>
                                                <span>Master, </span> 
                                                <span>Rupp, </span>
                                                <span>phnom penh</span>
                                            </p>
                                        </div>
                                        <div className='md:mt-5 mt-1'>
                                            <div className='md:bg-regal-bg  text-left w-5 h-1 md:w-20 md:h-4 rounded'>
                                                <center>
                                                 <span className='font-bold text-tinys bg-regal-bg md:text-xs'>2019-2020</span>
                                                </center>  
                                            </div>
                                            <p className='mt-1'>
                                                <span>Master, </span> 
                                                <span>Rupp, </span>
                                                <span>phnom penh</span>
                                            </p>
                                        </div>
                                    </div>
                                    {/* End  Education */}

                                    {/* start Links */}
                                    <div className='md:mt-3 mt-1'>
                                        <h2 class='font-maven text-left ml-5 font-bold md:text-xl text-tiny'>Links</h2>
                                    </div>
                                    <div className='md:ml-3 text-left md:mt-1 mt-0 ml-5'>
                                        <div>
                                            <img 
                                                className='md:w-20 w-5'
                                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" 
                                                alt="" 
                                            />
                                        </div>
                                    </div>
                                    {/* End Links */}

                                    {/* Start Skills */}
                                    <div className='md:mb-3  first-letter:' >
                                        <h2 class='font-maven text-left ml-5 font-bold md:text-xl text-tiny'>Skills</h2>
                                    </div>
                                    <div className='text-xs text-left ml-5 font-maven mt-2'>
                                        <div className="grid grid-cols-3 gap-4">
                                            <div class="">
                                                <p>jQuery</p>
                                            </div>
                                            <div class="col-span-2">
                                                <div className='md:grid md:grid-cols-6  gap-2 mt-1 flex justify-start'>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="grid grid-cols-3 gap-4 mt-3">
                                            <div class="...">
                                                <p>Docker</p>
                                            </div>
                                            <div class="col-span-2">
                                                <div className='md:grid md:grid-cols-6 mt-1 gap-2 flex justify-start'>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-greey h-3 w-3 rounded-full'>
                                                </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="grid grid-cols-3 gap-4 mt-3">
                                            <div class="...">
                                                <p>Node js</p>
                                            </div>
                                            <div class="col-span-2">
                                                <div className='md:grid md:grid-cols-6 mt-1 gap-2 flex justify-start'>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="grid grid-cols-3 gap-4 mt-3">
                                            <div class="...">
                                                <p>Python</p>
                                            </div>
                                            <div class="col-span-2">
                                                <div className='md:grid md:grid-cols-6 mt-1 gap-2 flex justify-start'>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-greey h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-greey h-3 w-3 rounded-full'>
                                                </div>
                                                </div>
                                            </div>
                                        </div> 
                                        <div class="grid grid-cols-3 gap-4 mt-3">
                                            <div class="...">
                                                <p>HTML5</p>
                                            </div>
                                            <div class="col-span-2 justify-items-end">
                                                <div className='md:grid md:grid-cols-6 mt-1 gap-2 flex justify-start'>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-bg h-3 w-3 rounded-full'>
                                                </div>
                                                <div className='bg-regal-greey h-3 w-3 rounded-full'>
                                                </div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                </div>
                               
                                {/* End Skills  */}
                            </div>
                        <div className='col-span-2 md:ml-8 h-96 md:min-h-1/22 md:w-555 bg-slate-50'>
                            <div className='mt-14 text-left ml-5'>
                                <span className='font-maven text-4xl font-bold'>Kong </span>
                                <span className='font-maven text-3xl text-regal-bg font-bold'>Sachakyarith</span>
                            </div>
                            <div>
                                <h2 className='font-maven text-left ml-5 text-xl'>UI Designer</h2>
                            </div>
                            <div className='mt-16'>
                                <h2 class='font-maven text-left ml-5 font-bold text-xl'>Profile</h2>
                            </div>
                            <div>
                                <p className='text-xs text-left ml-5 font-maven mt-2'>Our free cover letter examples + expert guides are packed with useful tips and the best practices for getting hired in dozens of industries. Combine these samples with our templates and cover letter builder tool to finish your application in minutes.</p>
                            </div>

                            <div className='mt-7'>
                                <h2 class='font-maven text-left ml-5 font-bold text-xl'>Employment History</h2>
                            </div>
                            <div className='ml-5 font-maven mt-4'>
                                    <div className='mb-1 text-left'>
                                        <span>Web devloper, </span> &nbsp;&nbsp;
                                        <span>employer,  </span> &nbsp;&nbsp;
                                        <span>phnom penh</span>
                                    </div>
                                <div className='text-left'>  
                                    <div className='bg-regal-bg  text-xs rounded  w-48 h-4'>
                                        <center>
                                        <span className='font-bold'>JANUARY 2019 - MARCH 2020</span>
                                        </center>  
                                    </div>    
                                    <p className='mt-3 text-xs'>Combine these samples with our templates and coverccc letter builder tool to finish your application in minutes.</p>
                                </div>     
                            </div>
                            <div className='ml-5 font-maven mt-4'>
                                    <div className='mb-1 text-left'>
                                        <span>Web devloper, </span> &nbsp;&nbsp;
                                        <span>employer,  </span> &nbsp;&nbsp;
                                        <span>phnom penh</span>
                                    </div>
                                <div className='text-left'>  
                                    <div className='bg-regal-bg  text-xs rounded  w-48 h-4'>
                                        <center>
                                        <span className='font-bold'>JANUARY 2019 - MARCH 2020</span>
                                        </center>  
                                    </div>    
                                    <p className='mt-3 text-xs'>Combine these samples with our templates and coverccc letter builder tool to finish your application in minutes.</p>
                                </div>     
                            </div>
                            <div className='ml-5 font-maven mt-4'>
                                    <div className='mb-1 text-left'>
                                        <span>Web devloper, </span> &nbsp;&nbsp;
                                        <span>employer,  </span> &nbsp;&nbsp;
                                        <span>phnom penh</span>
                                    </div>
                                <div className='text-left'>  
                                    <div className='bg-regal-bg  text-xs rounded  w-48 h-4'>
                                        <center>
                                        <span className='font-bold'>JANUARY 2019 - MARCH 2020</span>
                                        </center>  
                                    </div>    
                                    <p className='mt-3 text-xs'>Combine these samples with our templates and coverccc letter builder tool to finish your application in minutes.</p>
                                </div>     
                            </div>
                            <div className='mt-7'>
                                <h2 class='font-maven text-left ml-5 font-bold text-xl'>Hobbies</h2>
                            </div>
                            <div className='text-left ml-9 mt-4'>
                                <div className='gap-2 flex text-sm  justify-start'>
                                    <ui>
                                        <li class="fff">investing</li>
                                        <li class="fff">Gaming</li> 
                                    </ui>
                                    <ui className="ml-20">
                                        <li class="fff">Mountain biking</li>
                                        <li class="fff">Writting</li>
                                    </ui>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </center>
        </div>
</div>     
    )   
}
const styles = {
    backgroundColor: colors.content,
  };

export default CvTemplate