import React from "react";
import "./Card.css";
import { WindowsFilled, AndroidFilled, AppleFilled } from "@ant-design/icons";

const data = [
  {
    title: "Window",
    element: <WindowsFilled className='icon' />,
  },
  {
    title: "Android",
    element: <AndroidFilled className='icon' />,
  },
  {
    title: "Apple",
    element: <AppleFilled className='icon' />,
  },
];
export default function Card() {
  return (
    <div className="container">
      {data.map((el, id) => {
        return (
          <div key={id}>
            <div className='card'>
              {el.element}
              <br />
              <p className='title'>{el.title}</p>
              <br />
              <p className='lorem'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
