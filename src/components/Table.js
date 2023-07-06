import React, { useEffect } from "react";
import { getData } from "../components/Redux/slice";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
const columns = [
  {
      name: 'Id',
      selector: row => row.id ,
  },
  {
      name: 'Title',
      selector: row => row.title,
  },
  {
      name: 'Body',
      selector: row => row.body,
  },
  {
      name: 'userId',
      selector: row => row.userId,
  },

];

const Tables = () => {
  const dispatch=useDispatch();
  const { loading, data, alertFailure, alertSuccess } = useSelector((state) => state.TableData);
  // console.log(data,'alertFailure');
  useEffect(()=>{
    dispatch(getData())
  },[]
    )
    if(loading){
      return <Loader/>
    }
  return (
    <div>
      <DataTable
        data={data}
        columns={columns}
        defaultPageSize={2}
        pageSizeOptions={[2, 4, 6]}
        />  
    </div>
  );
};

export default Tables;
