import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Gallery from "../component/Gallery";
import Newsletter from "../component/Newsletter";
import MainData from "../component/MainData";
import SpinnerLoader from "../loader/SpinnerLoader";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(timer);
    }
  }, [data]);

  if (loading) return <SpinnerLoader fullScreen />;

  return (
    <div>
      <Banner />
      <Gallery />
      <MainData data={data} />
      <Newsletter />
    </div>
  );
};

export default Home;
