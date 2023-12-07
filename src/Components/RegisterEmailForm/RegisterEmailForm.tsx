import React from "react";

function RegisterEmailForm() {
  return (
    <section className="mx-auto xl:max-w-[1200px] min-[992px]:max-w-[992px] md:max-w-[720px] sm:max-w-[540px] w-full">
      <div className="w-full px-4">
        <div className="mb-10">
          <h1 className="mb-4 font-extrabold">
            Never miss an update from Jungle Scout
          </h1>
          <p></p>
        </div>
        <form action="" className="flex justify-center">
          <div className="mb-4">
            <input type="text" name="" id="" className="focus:outline-none" />
          </div>
          <div className="mb-4">
            <p>
              Are you currently selling on Amazon?{" "}
              <span className="text-red-500">*</span>
            </p>
            <div>
              <input type="radio" />
              <input type="radio" />
            </div>
          </div>
          <div>
            <input type="checkbox" />
            <p>
              <span className="text-red-500">*</span>I consent to receiving
              communication from Jungle Scout.
            </p>
          </div>
          <button className="text-white font-extrabold py-4 px-7.5 flex justify-center items-center bg-gradient-to-r from-orange-500 to-orange-300 focus:outline focus:outline-2 outline-orange-400 hover:shadow-[0_0_5px_3px-rgba(0,0,0,0.1)]">
            Join the list
          </button>
        </form>
      </div>
    </section>
  );
}

export default RegisterEmailForm;
