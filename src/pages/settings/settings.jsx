import { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import List from '../../components/list/list'
import { Link } from 'react-router-dom'
import '../home/home.css'
import './settings.css'

const settingSections = ['Notifications', 'Billing']

function Settings() {
	const [section, setSection] = useState('Notifications')
	const [saved, setSaved] = useState(false)
	const [notifications, setNotifications] = useState({ weekly: true, orders: true, product: false })

	const toggleNotification = (key) => {
		setNotifications((current) => ({ ...current, [key]: !current[key] }))
		setSaved(false)
	}

	return (
		<div className="dashboard-shell settings-shell">
			<aside className="sidebar">
				<div className="brand"><span className="brand-mark">P</span><span>pulse</span></div>
				<div className="workspace-switcher"><span className="workspace-dot" /> Acme Inc. <span className="chevron">v</span></div>
				<List />
				<div className="sidebar-bottom">
					<div className="upgrade-card"><span className="spark">*</span><strong>Grow your business</strong><p>Unlock deeper insights with Pro.</p><button>Explore Pro <span>-&gt;</span></button></div>
					<Link className="nav-link" to="/help-center"><span className="nav-icon">?</span> Help center</Link>
					<div className="user-row"><div className="avatar avatar-user">AK</div><div><strong>Alex Kim</strong><small>Admin</small></div><span className="more">...</span></div>
				</div>
			</aside>

			<main className="main-content">
				<Navbar />
				<div className="content-wrap settings-content">
					<section className="settings-heading"><div><p className="eyebrow">Workspace / Settings</p><h1>Make it <span>yours.</span></h1><p className="subheading">Manage your workspace preferences, account details, and notifications.</p></div><span className="settings-status">All changes are private</span></section>
					<div className="settings-layout">
						<aside className="settings-nav"><p className="settings-nav-label">Settings</p>{settingSections.map((item) => <button className={section === item ? 'active' : ''} key={item} onClick={() => setSection(item)}><span>{item === 'General' ? '+' : item === 'Notifications' ? '!' : item === 'Security' ? '*' : '$'}</span>{item}<b>-&gt;</b></button>)}</aside>
						<section className="settings-main">
							{section === 'General' && <><div className="settings-section-title"><div><h2>General settings</h2><p>Update your account and workspace information.</p></div><button className={`save-button ${saved ? 'saved' : ''}`} onClick={() => setSaved(true)}>{saved ? 'Saved' : 'Save changes'}</button></div><div className="settings-card profile-card"><div className="settings-card-heading"><div><h3>Profile details</h3><p>This information appears across your workspace.</p></div><div className="avatar avatar-user settings-avatar">AK</div></div><div className="field-grid"><label>First name<input defaultValue="Alex" /></label><label>Last name<input defaultValue="Kim" /></label><label className="field-wide">Email address<input defaultValue="alex.kim@acmeinc.com" type="email" /></label></div></div><div className="settings-card"><div className="settings-card-heading"><div><h3>Workspace details</h3><p>Customize how your team sees Acme Inc.</p></div><span className="workspace-badge">A</span></div><div className="field-grid"><label>Workspace name<input defaultValue="Acme Inc." /></label><label>Industry<select defaultValue="Retail"><option>Retail</option><option>Technology</option><option>Services</option></select></label></div></div></>}
							{section === 'Notifications' && <div className="settings-card notification-card"><div className="settings-section-title"><div><h2>Notifications</h2><p>Choose which updates you want to receive.</p></div></div>{[['weekly', 'Weekly performance digest', 'A summary of your most important business metrics.'], ['orders', 'Order updates', 'Get notified when an order is placed, paid, or refunded.'], ['product', 'Product announcements', 'Hear about new Pulse features and improvements.']].map(([key, title, description]) => <div className="toggle-row" key={key}><div><strong>{title}</strong><p>{description}</p></div><button className={`toggle ${notifications[key] ? 'on' : ''}`} onClick={() => toggleNotification(key)} aria-pressed={notifications[key]}><span /></button></div>)}<button className={`save-button notification-save ${saved ? 'saved' : ''}`} onClick={() => setSaved(true)}>{saved ? 'Preferences saved' : 'Save preferences'}</button></div>}
							{section === 'Billing' && <div className="settings-card billing-card"><div className="settings-section-title"><div><h2>Billing & plan</h2><p>Review your current Pulse subscription.</p></div></div><div className="plan-banner"><div><span className="plan-label">Current plan</span><strong>Growth</strong><p>For teams ready to understand what is working.</p></div><b>$49<span>/month</span></b></div><div className="billing-row"><span>Next billing date</span><strong>September 01, 2026</strong></div><div className="billing-row"><span>Payment method</span><strong>Visa ending in 4242</strong></div></div>}
						</section>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Settings
