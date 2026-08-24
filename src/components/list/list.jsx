import { NavLink } from 'react-router-dom'
import './list.css'

export default function List() {
    return (
        <nav className="side-nav" aria-label="Main navigation">
            <p className="nav-label">Workspace</p>
            <NavLink className="nav-link" to="/"><span className="nav-icon">+</span> Overview</NavLink>
            <NavLink className="nav-link" to="/performance"><span className="nav-icon">~</span> Performance</NavLink>
            <NavLink className="nav-link" to="/customers"><span className="nav-icon">o</span> Customers <span className="nav-count">2.4k</span></NavLink>
            <NavLink className="nav-link" to="/orders"><span className="nav-icon">#</span> Orders</NavLink>
            <p className="nav-label nav-label-spaced">Manage</p>
            <NavLink className="nav-link" to="/report"><span className="nav-icon">/</span> Reports</NavLink>
            <NavLink className="nav-link" to="/settings"><span className="nav-icon">*</span> Settings</NavLink>
        </nav>
    )
}