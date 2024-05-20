import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { addUser, userSelector } from "../../store/usersData/userDataSlice";
import Surveycopy from "../survey/Surveycopy";
import { surveyData } from "../../utility/surveyData";

const Home = () => {
  const data1: any = surveyData;
  const dispatch = useAppDispatch();
  useEffect(() => {
    handleAddUser();
  }, []);
  function handleAddUser() {
    dispatch(addUser(data1));
  }
  return (
    <div>
      <Surveycopy
        data={data1?.data?.data?.categories?.Introduction?.questionFlow}
      />
    </div>
  );
};

export default Home;
