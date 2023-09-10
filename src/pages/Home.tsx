import styled from "styled-components";
import Work from "./Work";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
    let work
    const data = localStorage.getItem("work");
    if(data) {
        work = JSON.parse(data);
    }
    console.log(work);
    
    
  return (
    <HomeStyle>
      <div className="avatar">
        <img src="../../public/avatar.webp" />
      </div>
      <div style={{textAlign: "left"}}>
        <h2>Reminders</h2>
      </div>
      <Work work={work}/>
      <div className="footer">
        <button onClick={() => navigate("/add")}>
            <img src="../../public/add-line.svg"/>
        </button>

      </div>
    </HomeStyle>    
  );
};

const HomeStyle = styled.div`
  .avatar {
    text-align: right;

    img {
      width: 50px;
      height: 50px;
    }
  }

  .footer{
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    button{
        background-color: white;
        border-radius: 50%;
        box-shadow: 0px 5px lightgray;
        img{
            width: 40px;
            height: 40px;
        }
    }
  }
`;

export default Home;
