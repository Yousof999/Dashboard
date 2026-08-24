import { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import List from '../../components/list/list'
import { Link } from 'react-router-dom'
import '../home/home.css'
import './performance.css'

const stats = [
	{ label: 'Total sessions', value: '45,280', change: '+14.8%', detail: 'vs. previous period', tone: 'lime' },
	{ label: 'Avg. session duration', value: '3m 42s', change: '+8.2%', detail: 'vs. previous period', tone: 'blue' },
	{ label: 'Bounce rate', value: '32.6%', change: '-4.1%', detail: 'healthy decrease', tone: 'orange' },
]

const trafficSources = [
	{ name: 'Organic search', value: '18,420', percent: '41%', width: '88%', color: 'green' },
	{ name: 'Direct traffic', value: '12,860', percent: '28%', width: '67%', color: 'blue' },
	{ name: 'Social media', value: '8,490', percent: '19%', width: '46%', color: 'orange' },
	{ name: 'Email campaign', value: '5,510', percent: '12%', width: '31%', color: 'purple' },
]

function Performance() {
	const [period, setPeriod] = useState('30 days')

	return (
		<div className="dashboard-shell performance-shell">
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
				<div className="content-wrap performance-content">
					<section className="performance-heading"><div><p className="eyebrow">Workspace / Performance</p><h1>Know what is <span>working.</span></h1><p className="subheading">Track the signals behind your growth and find your next opportunity.</p></div><div className="performance-controls"><div className="period-tabs">{['7 days', '30 days', '90 days'].map((item) => <button className={period === item ? 'selected' : ''} key={item} onClick={() => setPeriod(item)}>{item}</button>)}</div></div></section>
					<section className="metric-grid performance-metrics" aria-label="Performance metrics">{stats.map((stat) => <article className={`metric-card ${stat.tone}`} key={stat.label}><div className="metric-top"><span>{stat.label}</span><span className="metric-menu">...</span></div><strong>{stat.value}</strong><div className="metric-change"><span>{stat.change}</span> <small>{stat.detail}</small></div></article>)}</section>
					<section className="performance-grid"><article className="panel sessions-panel"><div className="panel-heading"><div><h2>Sessions & engagement</h2><p>Daily traffic performance</p></div><span className="report-legend"><i /> Sessions</span></div><div className="performance-total"><strong>45,280</strong><span className="positive">+14.8%</span><small>total sessions</small></div><div className="line-chart performance-chart"><div className="line-y-axis"><span>5k</span><span>4k</span><span>3k</span><span>2k</span><span>0</span></div><div className="line-area"><div className="grid-lines" /><svg viewBox="0 0 600 180" preserveAspectRatio="none" role="img" aria-label="Sessions trend"><path className="chart-fill performance-fill" d="M0,148 L50,132 L100,139 L150,102 L200,116 L250,77 L300,91 L350,58 L400,69 L450,38 L500,53 L550,24 L600,35 L600,180 L0,180 Z" /><path className="chart-line performance-line" d="M0,148 L50,132 L100,139 L150,102 L200,116 L250,77 L300,91 L350,58 L400,69 L450,38 L500,53 L550,24 L600,35" /></svg><div className="line-labels"><span>Aug 01</span><span>Aug 08</span><span>Aug 15</span><span>Aug 22</span></div></div></div></article>
					<article className="panel traffic-panel"><div className="panel-heading"><div><h2>Traffic sources</h2><p>Where visitors come from</p></div><button className="text-button">Details <span>-&gt;</span></button></div><div className="traffic-list">{trafficSources.map((source) => <div className="traffic-row" key={source.name}><div className="traffic-title"><span className={`channel-dot ${source.color}`} /><strong>{source.name}</strong><span>{source.percent}</span><b>{source.value}</b></div><div className="channel-track"><span style={{ width: source.width }} /></div></div>)}</div></article></section>
					<section className="lower-grid"><article className="panel funnel-panel"><div className="panel-heading"><div><h2>Conversion funnel</h2><p>From visit to purchase</p></div><button className="text-button">See journey <span>-&gt;</span></button></div><div className="funnel"><div className="funnel-step"><span>Visitors</span><strong>45,280</strong><i style={{ width: '100%' }} /></div><div className="funnel-step"><span>Product views</span><strong>18,940</strong><i style={{ width: '72%' }} /></div><div className="funnel-step"><span>Added to cart</span><strong>7,210</strong><i style={{ width: '48%' }} /></div><div className="funnel-step"><span>Completed purchase</span><strong>1,284</strong><i style={{ width: '27%' }} /></div></div></article><article className="panel goal-panel"><div className="panel-heading"><div><h2>Monthly goal</h2><p>Revenue target progress</p></div><span className="goal-badge">On track</span></div><div className="goal-number"><strong>$128,430</strong><small>of $150,000</small></div><div className="goal-track"><span /></div><div className="goal-footer"><span>85.6% complete</span><b>21 days left</b></div></article></section>
				</div>
			</main>
		</div>
	)
}

export default Performance
