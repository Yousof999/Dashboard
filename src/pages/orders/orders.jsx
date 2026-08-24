import { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import List from '../../components/list/list'
import { Link } from 'react-router-dom'
import '../home/home.css'
import './orders.css'

const orders = [
	{ id: '#1048', customer: 'Olivia Martin', email: 'olivia.martin@email.com', items: 'Canvas backpack, 2 items', amount: '$1,240.00', date: 'Aug 24, 2026', status: 'Paid', initials: 'OM', color: 'coral' },
	{ id: '#1047', customer: 'Jackson Lee', email: 'jackson.lee@email.com', items: 'Everyday sneakers, 1 item', amount: '$890.00', date: 'Aug 23, 2026', status: 'Paid', initials: 'JL', color: 'sky' },
	{ id: '#1046', customer: 'Isabella Nguyen', email: 'isabella.n@email.com', items: 'Travel jacket, 1 item', amount: '$540.00', date: 'Aug 21, 2026', status: 'Pending', initials: 'IN', color: 'gold' },
	{ id: '#1045', customer: 'Sofia Davis', email: 'sofia.davis@email.com', items: 'Studio collection, 4 items', amount: '$320.00', date: 'Aug 20, 2026', status: 'Paid', initials: 'SD', color: 'mint' },
	{ id: '#1044', customer: 'Ethan Wilson', email: 'ethan.wilson@email.com', items: 'Leather wallet, 1 item', amount: '$180.00', date: 'Aug 18, 2026', status: 'Refunded', initials: 'EW', color: 'lavender' },
	{ id: '#1043', customer: 'Mia Thompson', email: 'mia.thompson@email.com', items: 'Linen shirt, 2 items', amount: '$265.00', date: 'Aug 17, 2026', status: 'Paid', initials: 'MT', color: 'rose' },
]

function Orders() {
	const [query, setQuery] = useState('')
	const [status, setStatus] = useState('All orders')
	const filteredOrders = orders.filter((order) => {
		const matchesQuery = `${order.id} ${order.customer} ${order.email} ${order.items}`.toLowerCase().includes(query.toLowerCase())
		return matchesQuery && (status === 'All orders' || order.status === status)
	})

	return (
		<div className="dashboard-shell orders-shell">
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
				<div className="content-wrap orders-content">
					<section className="orders-heading"><div><p className="eyebrow">Workspace / Orders</p><h1>Order <span>center.</span></h1><p className="subheading">Keep every transaction moving from checkout to completion.</p></div><div className="orders-count"><strong>1,284</strong><small>orders this month</small></div></section>
					<section className="order-summary"><div><span className="summary-icon lime">+</span><div><small>Total sales</small><strong>$48,290</strong></div></div><div><span className="summary-icon blue">#</span><div><small>Average order</small><strong>$86.40</strong></div></div><div><span className="summary-icon orange">~</span><div><small>Pending orders</small><strong>24</strong></div></div><div className="summary-note"><span>+</span> 8.4% more orders this month</div></section>
					<section className="panel orders-directory"><div className="panel-heading"><div><h2>All orders</h2><p>Review and manage recent transactions</p></div><span className="orders-updated">Updated 12 min ago</span></div><div className="orders-toolbar"><label className="order-search"><span>?</span><input type="search" placeholder="Search order or customer" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search orders" /></label><div className="order-tabs">{['All orders', 'Paid', 'Pending', 'Refunded'].map((item) => <button className={status === item ? 'selected' : ''} key={item} onClick={() => setStatus(item)}>{item}</button>)}</div><button className="filter-button">Filter <span>v</span></button></div><div className="orders-table-full"><div className="order-table-row order-table-head"><span>Order</span><span>Customer</span><span>Items</span><span>Amount</span><span>Status</span><span>Date</span></div>{filteredOrders.map((order) => <div className="order-table-row" key={order.id}><div className="order-id"><strong>{order.id}</strong><small>Online store</small></div><div className="customer-cell"><div className={`avatar avatar-${order.color}`}>{order.initials}</div><div><strong>{order.customer}</strong><small>{order.email}</small></div></div><span className="order-items">{order.items}</span><strong className="order-amount">{order.amount}</strong><span className={`customer-status ${order.status.toLowerCase()}`}><i />{order.status}</span><span className="joined-date">{order.date}</span></div>)}{filteredOrders.length === 0 && <div className="empty-customers">No orders match your search.</div>}</div><div className="table-footer"><span>Showing {filteredOrders.length} of {orders.length} orders</span><button className="text-button">Manage orders <span>-&gt;</span></button></div></section>
				</div>
			</main>
		</div>
	)
}

export default Orders
