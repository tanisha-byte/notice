import React, { useState, useContext, useEffect } from "react";
import { Context } from "../context";

export default function teachers() {
  const { dispatch, state } = useContext(Context);
  useEffect(() => {
    return () => {};
  }, [state]);
  const [heading, setHeading] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [toggle, setToggle] = useState(false);
  const noticesDummy = [
    {
      heading: "Holiday Tomorrow",
      description: "Tomorrow will be a holiday, come at your own risk",
      date: new Date(),
      subject: "Chutti tomorrow",
    },
    {
      heading: "Holiday Tomorrow",
      description: "Tomorrow will be a holiday, come at your own risk",
      date: new Date().toString(),
      subject: "Chutti tomorrow",
    },
  ];
  const handleSubmit = () => {
    console.log("heading, subject, description", heading, subject, description);
    const date1 = new Date();
    const date2 = date1.toString();
    const notice = { heading, subject, description, date2 };
    const noticesClone = [...state.notices, notice];

    dispatch({
      type: "ADD_NOTICE",
      payload: noticesClone,
    });

    console.log("STATE: ", state);

    setHeading("");
    setSubject("");
    setDescription("");

    setToggle(false);
  };
  //   const AddNoticeForm = () => {
  //     return (

  //     );
  //   };
  return (
    <div>
      <div className="container mx-auto my-4">
        <h2 className="text-center font-bold text-4xl">Teachers Page</h2>
        <div className="">
          <p className="uppercase font-bold text-2xl my-4 inline-block">
            History
          </p>
          <button
            className="inline-block text-right bg-black text-white p-2 ml-10 rounded-md"
            onClick={() => setToggle(!toggle)}
          >
            Add Notice
          </button>
        </div>
        {toggle && (
          <div className="my-4">
            <label className="text-gray-700">Heading</label>
            <input
              type="text"
              required={true}
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="heading"
              placeholder="Heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />

            <label className="text-gray-700">Subject</label>
            <input
              type="text"
              required={true}
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />

            <label className="text-gray-700">Description</label>
            <input
              type="text"
              required={true}
              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button
              className="inline-block text-right bg-green-500 text-white p-2 my-4 rounded-md"
              onClick={handleSubmit}
            >
              Add Notice
            </button>
          </div>
        )}
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
