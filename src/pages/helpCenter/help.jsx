import { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import List from '../../components/list/list'
import '../home/home.css'
import './help.css'

const topics = [
	{ icon: '+', title: 'Getting started', text: 'Set up your workspace and invite your team.', articles: '8 articles', color: 'lime' },
	{ icon: '~', title: 'Analytics & reports', text: 'Understand your metrics and performance trends.', articles: '12 articles', color: 'blue' },
	{ icon: '#', title: 'Orders & payments', text: 'Manage orders, refunds, and payment status.', articles: '9 articles', color: 'orange' },
	{ icon: 'o', title: 'Customers', text: 'Organize customer data and build better relationships.', articles: '7 articles', color: 'purple' },
]

const articles = [
	['How do I invite a teammate?', 'Team management', '4 min read'],
	['Understanding your revenue overview', 'Analytics', '6 min read'],
	['Managing refunds and canceled orders', 'Orders', '5 min read'],
	['How is my conversion rate calculated?', 'Analytics', '3 min read'],
]

function Help() {
	const [query, setQuery] = useState('')
	const visibleArticles = articles.filter(([title, category]) => `${title} ${category}`.toLowerCase().includes(query.toLowerCase()))

	return (
		<div className="dashboard-shell help-shell">
			<aside className="sidebar">
				<div className="brand"><span className="brand-mark">P</span><span>pulse</span></div>
				<div className="workspace-switcher"><span className="workspace-dot" /> Acme Inc. <span className="chevron">v</span></div>
				<List />
				<div className="sidebar-bottom"><div className="upgrade-card"><span className="spark">*</span><strong>Grow your business</strong><p>Unlock deeper insights with Pro.</p></div><div className="user-row"><div className="avatar avatar-user">AK</div><div><strong>Alex Kim</strong><small>Admin</small></div><span className="more">...</span></div></div>
			</aside>
			<main className="main-content">
				<Navbar />
				<div className="content-wrap help-content">
					<section className="help-hero"><div><p className="eyebrow">Pulse support</p><h1>How can we <span>help?</span></h1><p className="subheading">Find answers, learn the essentials, and get more from your workspace.</p></div><div className="help-search"><span>?</span><input type="search" placeholder="Search help articles" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search help articles" /><kbd>Ctrl K</kbd></div></section>
					<section className="topic-grid" aria-label="Help topics">{topics.map((topic) => <article className="topic-card" key={topic.title}><div className={`topic-icon ${topic.color}`}>{topic.icon}</div><h2>{topic.title}</h2><p>{topic.text}</p><span>{topic.articles} <b>-&gt;</b></span></article>)}</section>
					<section className="help-lower"><article className="panel articles-panel"><div className="panel-heading"><div><h2>Popular articles</h2><p>Quick answers to common questions</p></div><span className="article-count">{visibleArticles.length} results</span></div><div className="article-list">{visibleArticles.map(([title, category, time]) => <div className="article-row" key={title}><div className="article-icon">/</div><div><strong>{title}</strong><p>{category} <span>·</span> {time}</p></div><b>-&gt;</b></div>)}{visibleArticles.length === 0 && <div className="help-empty">No articles match your search.</div>}</div></article><article className="support-card"><div className="support-mark">?</div><h2>Still need a hand?</h2><p>Our support team is here to help you get unstuck.</p><button>Contact support <span>-&gt;</span></button><small>Average response time: under 2 hours</small></article></section>
				</div>
			</main>
		</div>
	)
}

export default Help
