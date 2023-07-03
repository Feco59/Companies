import React, { useEffect, useState } from "react";
import APIService from "../../Service/APIService";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import CompanyInfo from "./CompanyInfo";
import { useParams } from "react-router-dom";

const CompanyInfoPage = () => {
  const [CompanyData, setCompanyData] = useState({});
  const [Loading, setLoading] = useState(true);
  const { ID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await APIService.get(`/company/${ID}`);
      setCompanyData(data);
      setLoading(false);
    };
    fetchData();
  }, [ID]);

  return (
    <>{Loading ? <LoadingScreen /> : <CompanyInfo data={CompanyData} />}</>
  );
};

export default CompanyInfoPage;
