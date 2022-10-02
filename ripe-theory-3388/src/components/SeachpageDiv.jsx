import { useNavigate } from "react-router-dom";

export default function AirbnbCard(props) {
    const navigate=useNavigate();
    const {eld}=props;

    return (
      <div onClick={()=>{navigate(`/searchresults/${eld.slug}`)}}
        style={{
          paddingTop: "20px",
          paddingBottom: "20px",
          border: "1px solid #ebf0f6",
          width: "600px",
          height: "auto",
          margin:"auto",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        }}
      >
        <div
          style={{
            width: "500px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#091e42!important"
            }}
          >
            {eld.title}
          </p>
        </div>
  
        <div
          style={{
            color: "#091e42!important",
            display: "flex",
            height: "40px",
            alignItems: "center",
            justifyContent: "left",
            width: "500px",
            margin: "auto",
            fontSize: "14px"
          }}
        >
          <p>{eld.company_name}</p>
          <div
            style={{
              width: "100px",
              height: "15px",
              display:"flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="gold"
              width="15"
              height="15"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="gold"
              width="15"
              height="15"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="gold"
              width="15"
              height="15"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="gold"
              width="15"
              height="15"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="gold"
              width="15"
              height="15"
            >
              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
            </svg>
          </div>
        </div>
  
        <div
          style={{
            display: "flex",
            width: "500px",
            height: "30px",
            margin: "auto"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 512 512"
              width="15"
              height="15"
            >
              <path d="M232 120C232 106.7 242.7 96 256 96C269.3 96 280 106.7 280 120V243.2L365.3 300C376.3 307.4 379.3 322.3 371.1 333.3C364.6 344.3 349.7 347.3 338.7 339.1L242.7 275.1C236 271.5 232 264 232 255.1L232 120zM256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0zM48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48C141.1 48 48 141.1 48 256z" />
            </svg>
            <p style={{ fontSize: "12px", fontWeight: "normal", color: "gray" }}>
              {eld.created_at}
            </p>
          </div>
  
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginRight: "10px",
              marginLeft: "10px"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 320 512"
              width="15"
              height="15"
            >
              <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
            </svg>
            <p style={{ fontSize: "12px", fontWeight: "normal", color: "gray" }}>
              Not Disclosed
            </p>
          </div>
  
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              fill="gray"
              height="15"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
            </svg>
            <p style={{ fontSize: "12px", fontWeight: "normal", color: "gray" }}>
              {eld.location}
            </p>
          </div>
        </div>
  
        <div
          style={{
            display: "flex",
            width: "500px",
            height: "30px",
            alignItems: "center",
            margin: "auto"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            fill="gray"
            width="15"
            height="15"
          >
            <path d="M365.3 93.38l-74.63-74.64C278.6 6.742 262.3 0 245.4 0L64-.0001c-35.35 0-64 28.65-64 64l.0065 384c0 35.34 28.65 64 64 64H320c35.2 0 64-28.8 64-64V138.6C384 121.7 377.3 105.4 365.3 93.38zM336 448c0 8.836-7.164 16-16 16H64.02c-8.838 0-16-7.164-16-16L48 64.13c0-8.836 7.164-16 16-16h160L224 128c0 17.67 14.33 32 32 32h79.1V448zM96 280C96 293.3 106.8 304 120 304h144C277.3 304 288 293.3 288 280S277.3 256 264 256h-144C106.8 256 96 266.8 96 280zM264 352h-144C106.8 352 96 362.8 96 376s10.75 24 24 24h144c13.25 0 24-10.75 24-24S277.3 352 264 352z" />
          </svg>
          <p style={{ fontSize: "12px", fontWeight: "normal", color: "gray" }}>
            {eld.slug}
          </p>
        </div>
  
        <div
          style={{
            display: "flex",
            width: "100px",
            borderRdius: "10px",
            marginTop: "15px",
            backgroundColor: "#d7f2e3",
            height: "20px",
            alignItems: "center",
            marginLeft: "50px",
            paddingLeft: "10px"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width="10"
            fill="gray"  background= "#d7f2e3"
            height="10" 
          >
            <path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z" />
          </svg>
          <p style={{ fontSize: "12px", fontWeight: "normal", color: "gray", backgroundColor: "#d7f2e3" }}>
            {eld.created_at}
          </p>
        </div>
      </div>
    );
  }