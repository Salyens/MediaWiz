import React, { useState } from "react";
import { Button, Grid } from "@mui/material";
import ApiService from "@/app/services/ApiService";
import DisplayPageData from "../DisplayPageData/DisplayPageData";

const MyPages = () => {
  const [data, setData] = useState({});
  const [endPoint, setEndPoint] = useState("");

  const handleGetData = async (param) => {
    try {
      const response = await ApiService.getPageData(param);
      setData(response);
      setEndPoint(param);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      {Object.keys(data).length ? (
        <DisplayPageData pageData={data} endPoint={endPoint} />
      ) : (
        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => handleGetData("/main-page")}
              style={{ height: "100px" }}
            >
              Главная страница
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              variant="outlined"
              fullWidth
              style={{ height: "100px" }}
              onClick={() => handleGetData("/web-page")}
            >
              Разработка сайта
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" fullWidth style={{ height: "100px" }}>
              Продвижение сайта
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" fullWidth style={{ height: "100px" }}>
              Ведение соц.сетей
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button variant="outlined" fullWidth style={{ height: "100px" }}>
              Продвижение соц.сетей
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default MyPages;
