import axios from "axios";
import React, { useEffect } from "react";
import { JOB_API_ADDRESS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

const useGetAllJobs = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_ADDRESS}/get`, {
          withCredentials: true,
        });
        console.log("RES 15 +++++++++++++ " , res)
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllJobs();
  },[]);
};

export default useGetAllJobs;
