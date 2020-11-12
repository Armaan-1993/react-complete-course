import React from "react";
import "./App.css";
// import Homepage from "./pages/homepage/homepage.component.jsx";
import { Route, Link } from "react-router-dom";
// import Homepage from "./pages/homepage/homepage.component";

// const HatsPage = () => {
//     return (
//         <div>
//             <h1>HATS PAGE</h1>;
//         </div>
//     );
// };

// function App() {
//     return (
//         <div>
//             <Switch>
//                 <Route path="/" component={Homepage}></Route>
//                 <Route path="/hats" component={HatsPage}></Route>
//             </Switch>
//         </div>
//     );
// }

const HomePage = (props) => {
    console.log(props);
    return (
        <div>
            <Link to={`${props.match.url}/13`}>Topics 13</Link>
            <link to={`${props.match.url}/17`}>Topics 17</link>
            <Link to={`${props.match.url}/19`}>Topics 19</Link>
            <h1>HOME PAGE</h1>
        </div>
    );
};

const TopicsList = (props) => {
    console.log(props);
    return (
        <div>
            <h1>TOPICS LIST</h1>
        </div>
    );
};

const TopicDetail = (props) => {
    console.log(props);
    return (
        <div>
            <button onClick={() => props.history.push("topics")}>
                Click me
            </button>
            <h1 id="mine">TOPIC DETAIL = {props.match.params.topicId}</h1>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Route path="/" component={HomePage}></Route>
            <Route exact path="/topics" component={TopicsList}></Route>
            <Route path="/topics/:topicId" component={TopicDetail}></Route>
        </div>
    );
};

export default App;
