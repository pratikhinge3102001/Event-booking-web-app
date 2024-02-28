import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Nav from "./Navbar";


export const OrganizerHome = () => {
    const [organiser, setOrganiser] = useState(null);
    useEffect(() => {

        const loginid = JSON.parse(localStorage.getItem("loggedOrganiser")).login_id;
        fetch(`http://localhost:8080/organiser/${loginid}`)
            .then(resp => resp.json())
            .then(data => {
                localStorage.setItem("loggedOrganiser", JSON.stringify(data))
                setOrganiser(data);
            })

    }, [])
    const myState = useSelector(state => state.logged)
    return (


        <div>
            <div>
                <Nav />
            </div>
            <div>
                <h2>Wellcome {organiser && organiser.first_name} {organiser && organiser.last_name}</h2>
            </div>


            


        </div>



    )
}
