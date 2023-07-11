import React, { useEffect } from "react";
import { getData } from "../components/Redux/slice";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Typography from "@mui/material/Typography";
import Loader from "./Loader";

import 'react-toastify/dist/ReactToastify.css';
const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "Body",
    selector: (row) => row.body,
  },
  {
    name: "userId",
    selector: (row) => row.userId,
  },
];
const customStyles = {
  cells: {
    style: {
      width: "70px",
    },
  },
};

const Tables = () => {
  const dispatch = useDispatch();
  const {loading, data, alerts } = useSelector((state) => state.TableData);
  // console.log(loading,"loadingloadingloadingloading")

 useEffect(() => {
    dispatch(getData())
  },[]);

  useEffect(()=>{
    if(data){
        toast.success(alerts.message);
    }else{
      toast.error(alerts.message)
    }
  },[alerts])

  return (
    <div>
      <Typography
        variant="h5"
        sx={{ display: "flex", justifyContent: "center" }}
        gutterBottom
      >
        Data Table
      </Typography>     
      <DataTable
        data={data}
        columns={columns}
        progressPending={loading}
        progressComponent={<Loader />}
        customStyles={customStyles}
      />
       <ToastContainer/>
    </div>
  );
};

export default Tables;
