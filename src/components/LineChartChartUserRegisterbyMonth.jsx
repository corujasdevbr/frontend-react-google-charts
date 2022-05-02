import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import ReactLoading from 'react-loading';

const options = {
    chart: {
        title: "Quant Usuários Cadastrados",
        subtitle: "Total de Usuários Cadastrados, Bikers, Empresas por Mês",
    },
};

const LineChartChartUserRegisterbyMonth = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://localhost:7042/api/Charts/GetChartUserRegisterbyMonth')
            .then((result) => {
                return result.json()
            })
            .then((res) => {
                let list = [];
                list.push(["Mês", "Total", "Bikers", "Empresas"]);
                res.map((item) => {
                    list.push([item.mes, item.total, item.biker, item.empresa]);
                });
                setData(list);
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })

    },[])

    return (
        <>
            {
                loading ? 
                    <ReactLoading height={667} width={375} /> :
                    <Chart
                        chartType="Line"
                        width="100%"
                        height="400px"
                        data={data}
                        options={options}
                    />
            }
        </>
    )

}

export default LineChartChartUserRegisterbyMonth;