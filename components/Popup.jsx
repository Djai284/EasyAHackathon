import React from "react";
import { Card } from "@material-tailwind/react";

const Popup = (props) => {
  return props.trigger ? (
    <Card className="max-w-2xl mx-auto p-10 bg-gray-100">
      <div>
        <svg
          className = 'h-6 absolute top-0 right-0 m-2'
          onClick={() => {props.setTrigger(false)}}
          data-name="Layer 1"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 1 1 0 0 0 0-2Zm7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0ZM16 3a1 1 0 0 0 0 2 3 3 0 0 1 3 3v8a3 3 0 0 1-3 3 1 1 0 0 0 0 2 5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"
            fill="#b91c1c"
            class="fill-6563ff"
          ></path>
        </svg>

        {props.children}
      </div>
    </Card>
  ) : (
    ""
  );
};

export default Popup;
