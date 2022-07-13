import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Tables, {  ActionPsill, StatusPill } from '../SearchBar'  
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchGetAllUserProfle } from '../../redux/actions/GetAllUserProfileAction';
 

function AdminManageStudentComponent() {
  const dispatch = useDispatch();
  const location = useLocation()
  const data = useSelector((state) => state?.getalluserProfile?.items);
  const [localData , setLocalData] = useState([data])



  const columns = React.useMemo(() => localData? [
    {
      Header: "UserName",
      accessor: 'username',
    },
    {
      Header: "Email",
      accessor: 'email',
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: StatusPill
      
    },
    {
      Header: "CV",
      accessor: 'cv',
    },
    {
      Header: "Action",
      accessor: 'action',
      Cell: ActionPsill,
    },
  ]:[], [])


  useEffect(()=>{
    const obj = localStorage.getItem('userInfo')
    const object = obj && JSON.parse(obj)
    let dumData = object && object.map(x => {
      return {
        username: x.username,
        email: x.email,
        status: x.status? 'Enabled':"Disabled",
        cv: x.cv,
        action: x.id
      }
    })
    setLocalData(object?dumData : [])
  },[data, location])
  return (
    <>
    <div className=" text-gray-900">
      <main className="w-full container mx-auto  ">
        <div className="">
        </div>
        <div className="mt-6 ">
        {localData && <Tables columns={columns} data={localData} />}
        </div>
      </main>
    </div>
    </>
  );
}

export default AdminManageStudentComponent;
