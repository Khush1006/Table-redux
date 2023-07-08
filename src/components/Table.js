import React, { useEffect } from "react";
import { dismissAlert, getData } from "../components/Redux/slice";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from 'react-redux'
import {toast,ToastContainer} from 'react-toastify'

import Loader from './Loader'
const columns = [
  {
      name: 'Id',
      selector: row => row.id ,
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
const customStyles = {
  cells: {
      style: {
          width: '70px', 
      },}
    }


const Tables = () => {
  const dispatch=useDispatch();
  const { loading, data ,alerts} = useSelector((state) => state.TableData);
  

  // useEffect(()=>{
  //   dispatch(getData())
  //   .then(()=>(toast(alerts.alertSuccess)))
  //   .catch(()=>toast(alerts.alertFailure))
  // },[])
  useEffect(()=>{
    dispatch(getData()).then(setTimeout(()=>(alert(alerts.alertSuccess)),2000))
    .catch(console.log(alerts.alertFailure))
  },[])
  
  
  return (
    <div>
      <DataTable
        data={data}
        columns={columns}
        progressPending={loading}
        progressComponent={<Loader />}
        customStyles={customStyles}
        />  
        {/* <ToastContainer  position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/> */}
    </div>
  );
};

export default Tables;
