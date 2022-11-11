import React from "react";
import { Button } from "../components/Button";

const Profile = () => {
  return (
    <div className="flex flex-col">
      <div className="m-auto mt-16 flex flex-col justify-center items-center gap-2">
        <img
          className="w-28 h-28 md:w-36 md:h-36 rounded-full"
          src="https://scontent.feoh8-1.fna.fbcdn.net/v/t31.18172-8/12496322_1034668006592329_5690982609561500752_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeEQzOHO6hJMjmdwJh4ksXWgL92zkxpNpTcv3bOTGk2lN7t71r6G5CvYjTE4UFmGqoHNXkUmtupt71FnOtNqhwva&_nc_ohc=hXkCksrKYxoAX8Wh4O3&_nc_ht=scontent.feoh8-1.fna&oh=00_AfCjuSOgAM-Xms34JnfnIOfBwa3WOhMzLxrBd01sjEcvSA&oe=63928984"
          alt="photo"
        />
        <h1 className="font-bold text-xl md:text-2xl">My Profile</h1>
        <p className="md:text-lg">Update your profile</p>
      </div>
      <form className="flex flex-col items-center mt-10 gap-5 px-10 mx-auto w-2/3 md:w-3/4 lg:w-1/2 lg:gap-6">
        <h1 className="font-bold text-xl md:text-2xl text-center">Basic Information</h1>
        <input
          className="md:text-lg md:h-12 h-10 border-2 pl-5 md:w-96 sm:w-72  "
          placeholder="First Name"
          type="text"
        />
        <input
          className="md:h-12 md:text-lg h-10 border-2 pl-5 md:w-96 sm:w-72 rounded-md "
          placeholder="Last Name"
          type="text"
        />
        <input
          className="md:h-12 md:text-lg h-10 border-2 pl-5 md:w-96 sm:w-72 rounded-md "
          placeholder="Email@email.com"
          type="email"
        />
        <input
          className="md:h-12 md:text-lg h-10 border-2 pl-5 md:w-96 sm:w-72 rounded-md "
          placeholder="Address"
          type="text"
        />
        <div className="w-20 mx-auto md:w-32 mt-4 ">
          <Button text={"Change"} />
        </div>
      </form>
    </div>
  );
};

export default Profile;
