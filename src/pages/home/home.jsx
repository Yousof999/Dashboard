import { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import List from '../../components/list/list'
import './home.css'
import { Link } from 'react-router-dom'

const metrics = [
	{ label: 'Total revenue', value: '$48,290', change: '+12.8%', tone: 'lime', detail: 'vs. $42,812 last month' },
	{ label: 'Active customers', value: '2,481', change: '+8.4%', tone: 'blue', detail: '184 new this month' },
	{ label: 'Conversion rate', value: '6.84%', change: '+1.2%', tone: 'orange', detail: 'Across 12,490 sessions' },
]

const orders = [
	{ customer: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '$1,240.00', status: 'Paid', initials: 'OM', color: 'coral' },
	{ customer: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '$890.00', status: 'Paid', initials: 'JL', color: 'sky' },
	{ customer: 'Isabella Nguyen', email: 'isabella.n@email.com', amount: '$540.00', status: 'Pending', initials: 'IN', color: 'gold' },
	{ customer: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '$320.00', status: 'Paid', initials: 'SD', color: 'mint' },
]

const chartData = {
	'30 days': [38, 52, 46, 68, 58, 76, 63, 82, 74, 91, 78, 88],
	'90 days': [32, 44, 38, 51, 47, 59, 54, 68, 62, 76, 72, 86],
	'12 months': [28, 36, 42, 39, 48, 55, 50, 62, 68, 64, 78, 91],
}

function Home() {
	const [period, setPeriod] = useState('30 days')

	return (
		<div className="dashboard-shell">
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

			<main className="main-content" id="overview">
				<Navbar />
				<div className="content-wrap">
					<section className="page-heading"><div><p className="eyebrow">Monday, August 24, 2026</p><h1>Good morning, Alex<span>.</span></h1><p className="subheading">Here is what is happening with your business today.</p></div></section>

					<section className="metric-grid" aria-label="Key metrics">
						{metrics.map((metric) => <article className={`metric-card ${metric.tone}`} key={metric.label}><div className="metric-top"><span>{metric.label}</span><span className="metric-menu">...</span></div><strong>{metric.value}</strong><div className="metric-change"><span>{metric.change}</span> <small>{metric.detail}</small></div></article>)}
					</section>

					<section className="dashboard-grid">
						<article className="panel revenue-panel" id="analytics"><div className="panel-heading"><div><h2>Revenue overview</h2><p>Monthly performance</p></div><div className="period-tabs">{Object.keys(chartData).map((item) => <button className={period === item ? 'selected' : ''} key={item} onClick={() => setPeriod(item)}>{item}</button>)}</div></div><div className="chart-summary"><strong>$48,290</strong><span className="positive">+12.8%</span><small>compared to previous period</small></div><div className="chart"><div className="y-axis"><span>$10k</span><span>$7.5k</span><span>$5k</span><span>$2.5k</span><span>$0</span></div><div className="bars">{chartData[period].map((height, index) => <div className="bar-column" key={`${period}-${index}`}><div className="bar" style={{ height: `${height}%` }} /><span>{['01', '03', '05', '07', '09', '11', '13', '15', '17', '19', '21', '23'][index]}</span></div>)}</div></div></article>
						<article className="panel activity-panel"><div className="panel-heading"><div><h2>Recent activity</h2><p>Latest updates from your team</p></div><button className="text-button">View all <span>-&gt;</span></button></div><div className="activity-list"><div className="activity-item"><div className="activity-icon green">+</div><div><strong>New payment received</strong><p>Order #1048 from Olivia Martin</p><small>12 minutes ago</small></div></div><div className="activity-item"><div className="activity-icon blue">o</div><div><strong>New customer joined</strong><p>Jackson Lee created an account</p><small>48 minutes ago</small></div></div><div className="activity-item"><div className="activity-icon orange">!</div><div><strong>Inventory is running low</strong><p>Canvas backpack is below 10 units</p><small>2 hours ago</small></div></div></div></article>
					</section>

					<section className="panel orders-panel" id="orders"><div className="panel-heading"><div><h2>Recent orders</h2><p>Keep track of your latest transactions</p></div><button className="text-button">View all <span>-&gt;</span></button></div><div className="orders-table"><div className="table-row table-head"><span>Customer</span><span>Status</span><span>Amount</span><span>Date</span></div>{orders.map((order, index) => <div className="table-row" key={order.email}><div className="customer-cell"><div className={`avatar avatar-${order.color}`}>{order.initials}</div><div><strong>{order.customer}</strong><small>{order.email}</small></div></div><span className={`status ${order.status.toLowerCase()}`}><i />{order.status}</span><strong>{order.amount}</strong><span className="order-date">Aug {24 - index}, 2026</span></div>)}</div></section>
				</div>
			</main>
		</div>
	)
}

export default Home
