import React from "react";

const OfficialInfo = ({ name, title, picture }) => {
  return (
    <div className=" rounded-md cursor-pointer">
      <img
        src={picture ? picture : "./avatar.jpg"}
        className="w-full h-52 "
        style={{ objectFit: "cover" }}
      />
      <div>
        <h4 className="font-bold mt-2 text-md text-brand capitalize">{name}</h4>
        <p className="text-gray-500 text-[12px]">{title}</p>
      </div>
    </div>
  );
};

function Officials() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <h2 className="text-3xl font-bold sm:text-6xl text-teal-900">
        Meet Our Teams
      </h2>
      <div className="grid grid-cols-1 mt-6  md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-12">
        <OfficialInfo
          picture={"./commander.jpg"}
          name={"Dr Aminu Usman Abu-Ammar"}
          title="General Commandant"
        />
        <OfficialInfo
          picture={"./DAS.png"}
          name={"Abdulaziz Abba Umar"}
          title="Director AS"
        />
        <OfficialInfo
          name={"Nafi'u Mu'azu"}
          title={"P.R.O"}
          picture={"./pro.jpg"}
        />
        <OfficialInfo
          picture={"./ibrahim.jpg"}
          name={"D. Ibrahim "}
          title="Officer "
        />

        <OfficialInfo
          picture={"./kabir.jpg"}
          name={"S. Kabir"}
          title="Officer "
        />
        <OfficialInfo
          picture={"./AM GUGA.jpg"}
          name={"A.M GUGA"}
          title="Officer "
        />
        <OfficialInfo
          picture={"./ict.jpg"}
          name={"A. Albani"}
          title="Head ICT "
        />

        <OfficialInfo />
      </div>
    </div>
  );
}

export default Officials;
