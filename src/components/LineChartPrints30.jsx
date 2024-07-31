'use client'
import React, { useState, useEffect, Suspense } from 'react';
import CardLineChart from "@/components/CardLineChart";
import SkeletonCard from "./SkeletonCard";
import { getMetricDataSerie30 } from "@/lib/apiService.js"

export default function LineChartPrints30({ idMetricas }) {

  const [metricsData, setMetricsData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataChart, setDataChart] = useState({
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    datasets: [],
  });


  useEffect(() => {
    const fetchAllMetrics = async () => {
      setLoading(true);
      const metricsPromises = idMetricas.map(id => getMetricDataSerie30(id));
      const allMetricsData = await Promise.all(metricsPromises);
      setMetricsData(allMetricsData);
      setLoading(false);
    };

    fetchAllMetrics();
  }, [idMetricas]);


  useEffect(() => {
    if (metricsData.length > 0) {
      const labels = metricsData.filter((item, index) => item.prints[index] !== undefined);
      const colors = [
        '#F47E36',
        '#497B8E',   
        '#EDD789',   
        '#676767',  
       '#D49587']

      const datasets = metricsData.map((metric, index) => {
        const dataMetric = metric.prints;
        const metricName = metric.nombre_metrica;

        return {
          label: metricName,
          data: dataMetric,
          tension: 0.5,
          fill: true,
          borderColor: `${colors[index]}`,
          backgroundColor: `transparent`,
          pointRadius: 3,
          pointBorderColor: `${colors[index]}`,
          pointBackgroundColor: `${colors[index]}`,
        };
      });

      setDataChart({
        labels: labels,
        datasets,
      });
    }
  }, [metricsData]);

  if (loading) {
    return <SkeletonCard/>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="grid  p-1 ">
      <Suspense fallback={<SkeletonCard />}>
        <div className="relative h-full">
          <CardLineChart dataChart={dataChart} />
        </div>
      </Suspense>
    </div>
  );
}
