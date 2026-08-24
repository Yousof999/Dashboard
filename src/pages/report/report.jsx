import { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import List from '../../components/list/list'
import { Link } from 'react-router-dom'
import './report.css'

const reportMetrics = [
	{ label: 'Gross revenue', value: '$128,430', change: '+18.2%', tone: 'lime' },
	{ label: 'Net profit', value: '$42,812', change: '+11.6%', tone: 'blue' },
	{ label: 'Orders completed', value: '1,284', change: '+9.4%', tone: 'orange' },
]

const channels = [
	{ name: 'Organic search', sessions: '18,420', revenue: '$42,840', width: '84%', color: 'green' },
	{ name: 'Direct traffic', sessions: '12,860', revenue: '$31,280', width: '65%', color: 'blue' },
	{ name: 'Social media', sessions: '8,490', revenue: '$18,640', width: '48%', color: 'orange' },
	{ name: 'Email campaign', sessions: '5,210', revenue: '$12,430', width: '34%', color: 'purple' },
]

function Report() {
	const [range, setRange] = useState('Last 30 days')

	return (
		<div className="dashboard-shell report-shell">
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

			<main className="main-content" id="report">
				<Navbar />
				<div className="content-wrap report-content">
					<section className="report-heading"><div><p className="eyebrow">Performance report / August 2026</p><h1>Business <span>report.</span></h1><p className="subheading">A clear view of revenue, customers, and growth across every channel.</p></div></section>

					<section className="metric-grid report-metrics" aria-label="Report summary">
						{reportMetrics.map((metric) => <article className={`metric-card ${metric.tone}`} key={metric.label}><div className="metric-top"><span>{metric.label}</span><span className="metric-menu">...</span></div><strong>{metric.value}</strong><div className="metric-change"><span>{metric.change}</span> <small>vs. previous period</small></div></article>)}
					</section>

					<section className="report-grid" id="performance">
						<article className="panel performance-panel"><div className="panel-heading"><div><h2>Revenue performance</h2><p>Gross revenue by week</p></div><span className="report-legend"><i /> Revenue</span></div><div className="report-total"><strong>$128,430</strong><span className="positive">+18.2%</span></div><div className="line-chart"><div className="line-y-axis"><span>$40k</span><span>$30k</span><span>$20k</span><span>$10k</span><span>$0</span></div><div className="line-area"><div className="grid-lines" /><svg viewBox="0 0 600 180" preserveAspectRatio="none" aria-label="Revenue trend chart" role="img"><path className="chart-fill" d="M0,144 L50,122 L100,130 L150,91 L200,106 L250,67 L300,79 L350,44 L400,57 L450,27 L500,42 L550,12 L600,22 L600,180 L0,180 Z" /><path className="chart-line" d="M0,144 L50,122 L100,130 L150,91 L200,106 L250,67 L300,79 L350,44 L400,57 L450,27 L500,42 L550,12 L600,22" /></svg><div className="line-labels"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div></div></div></article>
						<article className="panel channels-panel"><div className="panel-heading"><div><h2>Top channels</h2><p>Revenue attribution</p></div><button className="text-button">Details <span>-&gt;</span></button></div><div className="channel-list">{channels.map((channel) => <div className="channel-row" key={channel.name}><div className="channel-title"><span className={`channel-dot ${channel.color}`} /><strong>{channel.name}</strong><small>{channel.sessions} sessions</small><b>{channel.revenue}</b></div><div className="channel-track"><span style={{ width: channel.width }} /></div></div>)}</div></article>
					</section>

					<section className="report-note"><div className="note-icon">i</div><div><strong>Report generated for Acme Inc.</strong><p>Data is updated through August 24, 2026. Refunds and canceled orders are excluded from net profit.</p></div><button className="text-button">Download data <span>-&gt;</span></button></section>
				</div>
			</main>
		</div>
	)
}

export default Report
