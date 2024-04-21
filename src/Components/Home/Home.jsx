import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div>
             <Link to="Flags"><div>Flags</div></Link>
             <Link to="Outlines"><div>Outlines</div></Link>
             <Link to="Borders"><div>Borders</div></Link>
        </div>
    )
}