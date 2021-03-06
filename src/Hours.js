import react from "react";
import "./index.css";
import "./App.css";

function Hours (props) {

    console.log(props);
    const h = new Date(props.hour * 1000);
    const hour = (new Intl.DateTimeFormat('fr-FR', { hour:'numeric',minute:'numeric'})).format(h);
    const day = (new Intl.DateTimeFormat('fr-FR', { day: 'numeric'})).format(h);

   
    function handleClick(e) {
        e.preventDefault();
        let links = document.querySelectorAll('a');
        links.forEach(element => {
            element.style.fontWeight = 'normal'
        }); 
        e.target.style.fontWeight = "bold"
        props.changeHour(e.target.getAttribute("data-time"))
        props.changeDay(e.target.getAttribute("data-time"))
    }


    
    function displayHours(){
  
        if(props.nextHours.length>0){
            return props.nextHours.map((element)=>{
                const listHour = new Date (element * 1000);
                const hourchoc = new Intl.DateTimeFormat("fr-FR", { day: "numeric" }).format(
                    listHour
                );
                console.log(hourchoc, day);
                if (hourchoc === day) {
                    
                    let hourUp=(new Intl.DateTimeFormat('fr-FR', { hour: 'numeric',minute:'numeric' }).format(new Date(element* 1000)));
                    return (<a onClick={handleClick} data-time={element}>{hourUp}</a>)
                }
            })
        }
    } 

    return (
    
        <div className="App">
            <div className="row">
                <div className="col s12 m6 push-m3">
                    <div className="hours card blue-grey darken-1 ">
                        <div className="card-action">
                        
                         
                            {displayHours()}
                            
                           

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

};
    export default Hours;
