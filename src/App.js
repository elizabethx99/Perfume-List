import {useState} from "react";
import {data} from "./data";
import './App.css';

function App (){
    const [perfume, setPerfume] = useState(data);

    const removePerfume = (id) => {
        let newPerfume = perfume.filter(perfume => perfume.id !== id);
        setPerfume(newPerfume);
    }

    return(
        <div>
            <div className="container">
            <h1>List of {perfume.length} perfumes</h1>
            </div>

            {perfume.map((element => {
                const {id, perfume, image} = element;

            

                return(
                    <div key={id}>
                        <div className="container">
                            <h2>{id} - {perfume}</h2>
                        </div>
                        <div className="container">
                            <img src={image} width="300px" alt="perfume"/>
                        </div>
                        <div className="container">
                            <button onClick ={() => removePerfume(id)}>Remove</button>
                        </div>
                    </div>
                )
            }))}
            <div className="container">
                <button onClick ={() => setPerfume([])}>Delete All</button>
            </div>
        </div>
    )
}




export default App;