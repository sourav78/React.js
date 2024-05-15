// ({heading}:{heading: string}) -> One of the props reciving method in ts

import { Dispatch, SetStateAction } from "react";

type InptVal = string | number

const Box = <T extends InptVal> ({
  lable,
  value,
  onChange,
}: {
  lable: string;
  value: T;
  onChange: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <div className="">
        <form>
            <label >{lable}</label>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value as T)} />
        </form>
    </div>
  )
};

export default Box;
