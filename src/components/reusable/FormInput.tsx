import { useState } from "react";

type Props = {
  name: string;
  placeholder: string;
  type?: string;
  label: string;
  register?: any;
  testId?: string;
};

const FormInput = ({
  name,
  placeholder,
  type = "text",
  label,
  register,
  testId,
  ...props
}: Props) => {
  const [activeType, setActiveType] = useState(type);

  return (
    <>
      <div
        className={`${
          type === "password"
            ? "flex justify-between items-center rounded-md border border-solid border-gray-200"
            : ""
        }`}
      >
        <div className="form-floating w-full">
          <input
            type={activeType}
            className={`block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding placeholder:text-gray-200 rounded-md transition ease-in-out m-0 focus:text-black focus:bg-white focus:border-gray-300 focus:outline-none ${
              type !== "password" ? "field" : ""
            }`}
            id={name}
            placeholder={placeholder}
            data-testid={testId}
            {...register(name)}
            {...props}
          />
          <label htmlFor={name}>{label}</label>
        </div>
        {type === "password" && (
          <span
            className="cursor-pointer w-20 text-center inline-block text-gray-800"
            onClick={() =>
              setActiveType(activeType === "text" ? "password" : "text")
            }
          >
            {activeType === "text" ? "Hide" : "Show"}
          </span>
        )}
      </div>
    </>
  );
};

export default FormInput;
