import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context";

export default function students() {
  const { dispatch, state } = useContext(Context);
  useEffect(() => {
    return () => {};
  }, [state]);

  //   const AddNoticeForm = () => {
  //     return (

  //     );
  //   };
  return (
    <div>
      <div className="container mx-auto my-4">
        <h2 className="text-center font-bold text-4xl">Students Page</h2>
        <div className="">
          <p className="uppercase font-bold text-2xl my-4 inline-block">
            All Notices
          </p>
        </div>

        <div className="notices-container border-2 border-dashed border-gray-500 h-screen">
          {state.notices.map((notice, idx) => (
            <div
              className="single-notice-box m-4 gradient-1 p-4 rounded-lg"
              key={idx}
            >
              <>
                <p className="font-bold">{notice.subject}</p>

                <p className="font-bold">{notice.heading}</p>
                <p className="">{notice.description}</p>
                <p className="">{notice.date2}</p>
              </>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
