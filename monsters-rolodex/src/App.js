import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.components.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchMonsters: "",
        };
    }

    componentDidMount() {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => response.json())
            .then((users) => this.setState({ monsters: users }));
    }
    render() {
        const { monsters, searchMonsters } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchMonsters.toLowerCase()),
        );
        return (
            <div className="App">
                <SearchBox
                    placeholder="Search Monsters"
                    handleChange={(e) =>
                        this.setState({ searchMonsters: e.target.value })
                    }
                ></SearchBox>

                <CardList monsters={filteredMonsters}></CardList>
            </div>
        );
    }
}

export default App;
