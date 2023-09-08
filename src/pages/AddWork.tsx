import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";

const AddWork = () => {
  const navigate = useNavigate();
  const [value, setValues] = useState({
    title: "",
    content: "",
    isPin: false,
  });

  const updateField = (e: { target: { name: any; value: any } }) => {
    setValues({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const pin = () => {
    if (value.isPin) {
      setValues({
        ...value,
        isPin: false,
      });
    } else {
      setValues({
        ...value,
        isPin: true,
      });
    }
  };

  console.log(value);

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
        <button onClick={() => {
           localStorage.setItem("work", JSON.stringify(value))
            navigate("/");
            
        }}>
          <img src="../../public/check-line.svg" />
        </button>
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
  }
`;

export default AddWork;
