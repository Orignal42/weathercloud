import react from "react";
import "./index.css";
import "./App.css";

function Days (props) {
    const Jour = new Date(props.day * 1000);
    const days = (new Intl.DateTimeFormat('en-US', { weekday: 'long' })).format(Jour);
  

    function handleClick(e) {
        let links = document.querySelectorAll('a');
        links.forEach(element => {
            element.style.fontWeight = 'normal'
        }); 
        e.target.style.fontWeight = "bold"
        e.preventDefault();
    }

    

    return (
        <div class="App">
            <div class="row">
                <div class="col s12 m6 push-m3">
                    <div class="weather card blue-grey darken-1">
                        <div class="card-action">
                            <a onClick={handleClick}  href="#">Thursday <input type='hidden' value='{props.day}'/></a>
                            <a onClick={handleClick} href="#">Friday</a>
                            <a onClick={handleClick} href="#">Saturday</a>
                            <a onClick={handleClick} href="#">Sunday</a>
                            <a onClick={handleClick} href="#">Monday</a>
                            <a>{props.days}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};
    export default Days;
