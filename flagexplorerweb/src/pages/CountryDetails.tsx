import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify"
import axios from "axios";
import AppConsts from "../library/AppConsts";
import CountryDetailsViewModel from "../models/CountryDetailsViewModel";
import OMiXSpinner from "../layout/OMiXSpinner";

const CountryDetails = () => {
    const[isLoading, setIsLoading] = useState<boolean>(false);
    const[countryDetails, setCountryDetails] = useState<CountryDetailsViewModel>();

    const location = useLocation();

    useEffect(() =>{
        getCountryDetails();
    }, [])

    const getCountryDetails = async() => {
        setIsLoading(true);

        let name = location.state.name;
        var url = AppConsts.FlagExplorerAPI + "Countries/" + name;
        await axios.get(url)
            .then(response => {
                setIsLoading(false)
                setCountryDetails(response.data);
            }).catch((ex) => {
                setIsLoading(false);
                toast.error(ex);
            });
    }

    return (
        <div className="container-fluid px-4">
            {
                isLoading ?
                <OMiXSpinner /> :
                <div>
                    <img src={countryDetails?.flag} />
                    <h3>{countryDetails?.name}</h3>
                    <p>Population: <strong>{countryDetails?.population}</strong></p>
                    <p>Capital: <strong>{countryDetails?.capital}</strong></p>
                    <Link to={"/"}>Back to Countries</Link>
                </div>
            }
        </div>
    )
}

export default CountryDetails