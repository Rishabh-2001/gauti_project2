import Chart from "./Chart";
import Epoch from "./Epoch";
import BarGraph from "./BarGraph";
import BoardRoom from "../BoardRoom";
import InvestDiscord from "./InvestDiscord";

const Home = () => {
    return ( 
        

        <div className="home-container">
             <div className="row-one">
             <h3 className="bomb-heading">Bomb Finance Summary</h3>
             <div className="row-one-inner-box">
                <Chart ></Chart>
                <Epoch ></Epoch>
                <BarGraph ></BarGraph>
             </div>

             </div>

             <div className="row-two">
                <div className="box-left">
                           <InvestDiscord></InvestDiscord>
                           <BoardRoom></BoardRoom>
                </div>
                <div className="box-right">
                    <h3>Latest News</h3>
                </div>
             </div>
 {/*
             <div className="row-three">
                
             </div> */}

             {/* <div className="row-four">
                
             </div> */}
        </div>
     );
}
 
export default Home;