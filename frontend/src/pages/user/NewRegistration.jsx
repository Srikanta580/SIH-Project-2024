import React from "react";
import StartupRegistrationForm from "../../components/form/StartupRegistrationForm";

const NewRegistration = () => {
  return (
    <div className="w-[90vw] mx-auto h-[100vh] flex justify-evenly items-center gap-x-10">
      <div>
        <h1 className="welcomeText font-extrabold">Register your startup</h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          autem maiores minus tempora! Ipsum quas dolorum mollitia non, tempora
          obcaecati minus ratione. Dicta molestias amet nobis, odio beatae quis
          doloribus.
        </p>
      </div>
      <StartupRegistrationForm />
    </div>
  );
};

export default NewRegistration;
