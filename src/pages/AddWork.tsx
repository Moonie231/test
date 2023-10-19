import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddWork = () => {
  const navigate = useNavigate();
  const color = ["white", "orange", "blue", "violet", "pink", "green"];
  const [active, setActive] = useState<string>("white");
  const [value, setValue] = useState({
    title: "",
    content: "",
    isPin: false,
    color: "white",
  });

  const updateField = (e: { target: { name: any; value: any } }) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const pin = () => {
    if (value.isPin) {
      setValue({
        ...value,
        isPin: false,
      });
    } else {
      setValue({
        ...value,
        isPin: true,
      });
    }
  };

  const setColor = (color: string) => {
    setActive(color);
    setValue({
      ...value,
      color: color,
    });
  };

  return (
    <AddWorkStyle>
      <div className="header" onClick={() => navigate(-1)}>
        <img src="../../public/back.svg" />
        {value.isPin ? (
          <img src="../../pinned.svg" onClick={pin} />
        ) : (
          <img src="../../pin.svg" onClick={pin} />
        )}
      </div>
      <div>
        <input
          className="title"
          type="text"
          placeholder="Title"
          name="title"
          onChange={updateField}
        />
        <textarea placeholder="Content" name="content" onChange={updateField} />
      </div>

      <div className="footer">
        <button
          onClick={() => {
            localStorage.setItem("work", JSON.stringify(value));
            navigate("/");
          }}
        >
          <img src="../../public/check-line.svg" />
        </button>
        <div className="color">
          {color.map((item) => (
            <div
              style={{ backgroundColor: item }}
              onClick={() => setColor(item)}
            >
              {active === item && (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M10.0007 15.1709L19.1931 5.97852L20.6073 7.39273L10.0007 17.9993L3.63672 11.6354L5.05093 10.2212L10.0007 15.1709Z"
                    fill="rgba(255,255,255,1)"
                  ></path>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </AddWorkStyle>
  );
};

const AddWorkStyle = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    img {
      width: 25px;
      height: 25px;
    }
  }

  input,
  textarea {
    width: 100%;
    border: none;
    background-color: white;
    color: black;
  }
  .title {
    font-size: 24px;
    margin: 10px 0;
  }

  .footer {
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    button {
      background-color: white;
      border-radius: 50%;
      box-shadow: 0px 5px lightgray;
      img {
        width: 40px;
        height: 40px;
      }
    }
    .color {
      display: flex;

      div {
        margin: 10px 5px;
        cursor: pointer;
        width: 50px;
        height: 50px;
        border-radius: 5px;
      }
    }
  }
`;

export default AddWork;
