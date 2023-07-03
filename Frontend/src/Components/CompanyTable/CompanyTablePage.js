import React, {useState, useEffect} from 'react'
import CompanyTable from './CompanyTable';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import APIService from '../../Service/APIService';;

const CompanyTablePage = () => {
    const [CompanyData, setCompanyData] = useState({});
    const [Loading, setLoading] = useState(true);

    useEffect(() =>{
        const fetchData = async _ => {
            setLoading(true);
            const data = await APIService.get('/');
            setCompanyData(data);
            setLoading(false)
        };
        fetchData()
    },[])


  return (
    <>
    {
        Loading ? <LoadingScreen /> : <CompanyTable data={CompanyData} />
    }
    </>
  )
}

export default CompanyTablePage