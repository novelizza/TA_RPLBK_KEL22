import React from "react";

import ItemUser from "../organism/item-user.jsx";

import AcfaImage from "../../asset/acfa.jpg";
import AbilImage from "../../asset/abil.jpeg";
import AjraImage from "../../asset/ajra.jpeg";
import DavidImage from "../../asset/david.jpeg";

function AboutApp() {
  const data = [
    {
      firstName: "Nouvel",
      maidenName: "Izza",
      lastName: "Fardana",
      address: {
        address: "Ds. Demaan",
        city: "Kudus",
        state: "Indonesia",
      },
      image: AcfaImage,
    },
    {
      firstName: "Adzra",
      maidenName: "",
      lastName: "Fatikha",
      address: {
        address: "Mulawarman selatan",
        city: "Banyumanik, Semarang",
        state: "Indonesia",
      },
      image: AjraImage,
    },
    {
      firstName: "Paquita",
      maidenName: "Putri",
      lastName: "Ababill",
      address: {
        address: "Jl. Maerasari",
        city: "Tembalang, Semarang",
        state: "Indonesia",
      },
      image: AbilImage,
    },
    {
      firstName: "David",
      maidenName: "Eddy Putra",
      lastName: "Pratama",
      address: {
        address: "Jl. Ngesrep Barat",
        city: "Srondol Kulon, Banyumanik",
        state: "Indonesia",
      },
      image: DavidImage,
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#221",
        flex: 1,
        width: "100%",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>PALUGADA</h1>
      <span style={{ fontSize: 30, textAlign: "center", width: "60%" }}>
        Palugada adalah situs yang dibuat Oleh Nouvel Izza Fardana praktikan
        Kelompok 9 Praktikum RPLBK. Melalui platform ini, Palugada memberikan
        berbagai macam informasi terkait barang yang biasa dijual pada situs
        belanja online.
      </span>
      <br />
      <span style={{ fontSize: 30, textAlign: "center", width: "60%" }}>
        Palugada tidak akan tercipta jika tidak ada bantuan dari teman-teman
        kelompok, berikut merupakan daftar teman-teman yang membantu dalam
        pembuatan Palugada.
      </span>
      <br />
      <div
        style={{
          flex: 1,
          backgroundColor: "#cbd",
          width: "100%",
          display: "flex",
          marginBottom: 7,
        }}
      >
        {data.map((item, index) => {
          return <ItemUser data={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default AboutApp;
