import React from "react";
import "./App.css";
// import Homepage from "./pages/homepage/homepage.component.jsx";
import { Route } from "react-router-dom";
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
            <h1>HOME PAGE</h1>
        </div>
    );
};

const TopicsList = () => {
    return (
        <div>
            <h1>TOPICS LIST</h1>
        </div>
    );
};

const TopicDetail = () => {
    return (
        <div>
            <h1>TOPIC DETAIL</h1>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Route path="/" component={HomePage}></Route>
            <Route exact path="/topics" component={TopicsList}></Route>
            <Route exact path="/topics/topicId" component={TopicDetail}></Route>
        </div>
    );
};

export default App;
