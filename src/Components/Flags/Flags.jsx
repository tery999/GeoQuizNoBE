import { Link } from "react-router-dom"

export default function Flags() {
    return (
        <div>
            <Link to="Europe"><div>Europe</div></Link>
            <Link to="Asia"><div>Asia</div></Link>
            <Link to="Americas"><div>Americas</div></Link>
            <Link to="Africa"><div>Africa</div></Link>
        </div>
    )
}