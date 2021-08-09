import react from "react";
import "./index.css";
import "./App.css";

function Days (props) {
    const Jour = new Date(props.day * 1000);
    const day = (new Intl.DateTimeFormat('en-US', { weekday: 'long' })).format(Jour);

   
    function handleClick(e) {
        e.preventDefault();
        let links = document.querySelectorAll('a');
        links.forEach(element => {
            element.style.fontWeight = 'normal'
        }); 
        e.target.style.fontWeight = "bold"
        props.changeDay(e.target.getAttribute("data-time"))

        
    }

    function displayDays(){
        if(props.nextDays.length>0){
            return props.nextDays.map((element)=>{
                let dayUp=(new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date(element* 1000)));
                return (<a onClick={handleClick} data-time={element}>{dayUp}</a>)
            })
        }
    } 

    return (
        <div className="App">
            <div className="row">
                <div className="col s12 m6 push-m3">
                    <div className="days card blue-grey darken-1 ">
                        <div className="card-action">
                            <a onClick={handleClick} data-time={props.day} href="#">{day}</a>
                            {displayDays()}
                            
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};
    export default Days;
