import React from "react";

const SingleMessage = ({data}) => {
  return (
    <div className={`py-1 flex ${data.username === 'you' ? 'justify-end' : 'justify-start'}`}>
      <div className={`inline-block max-w-[70%] px-3 py-1 ${data.username === 'you' ? 'bg-blue-300 rounded-l-xl' : 'bg-green-300 rounded-r-xl'}`}>
        <span className="text-[12px] break-words">{data.username}</span>
        <p className="-mt-1 break-words">{data.message}</p>
      </div>
    </div>
  );
};

export default SingleMessage;
