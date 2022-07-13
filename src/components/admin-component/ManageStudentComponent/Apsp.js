import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchGetAllUserProfle } from '../../../redux/actions/GetAllUserProfileAction';
import Tables, { AvatarCell, ActionPsill, StatusPill } from '../AdminTables'  // new
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Tabless from '../AdminTables';
 

function Apsp() {
  const dispatch = useDispatch();
  const location = useLocation()
  const data = useSelector((state) => state?.getalluserProfile?.items);
  const [localData , setLocalData] = useState([])

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
  },[localStorage, data, location])

  console.log(data);


  const columns = React.useMemo(() => [
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
  ], [])


  return (
    <div className=" text-gray-900">
      <main className="max-w-5xl mx-auto px-4 tablet:px-6 laptop:px-8 pt-4">
        <div className="">
        </div>
        <div className="mt-6 ">
          <Tables columns={columns} data={data?data: localData} />
        </div>
      </main>
    </div>
  );
}

export default Apsp;
