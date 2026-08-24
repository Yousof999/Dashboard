import { useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import List from '../../components/list/list'
import { Link } from 'react-router-dom'
import '../home/home.css'
import './customers.css'

const customers = [
	{ name: 'Olivia Martin', email: 'olivia.martin@email.com', company: 'Northstar Studio', joined: 'Aug 24, 2026', orders: 12, spent: '$4,820', status: 'Active', initials: 'OM', color: 'coral' },
	{ name: 'Jackson Lee', email: 'jackson.lee@email.com', company: 'Lee & Co.', joined: 'Aug 23, 2026', orders: 8, spent: '$3,240', status: 'Active', initials: 'JL', color: 'sky' },
	{ name: 'Isabella Nguyen', email: 'isabella.n@email.com', company: 'Bloom Market', joined: 'Aug 21, 2026', orders: 5, spent: '$1,890', status: 'At risk', initials: 'IN', color: 'gold' },
	{ name: 'Sofia Davis', email: 'sofia.davis@email.com', company: 'Davis Design', joined: 'Aug 18, 2026', orders: 19, spent: '$6,410', status: 'Active', initials: 'SD', color: 'mint' },
	{ name: 'Ethan Wilson', email: 'ethan.wilson@email.com', company: 'Wilson Goods', joined: 'Aug 14, 2026', orders: 2, spent: '$420', status: 'Inactive', initials: 'EW', color: 'lavender' },
]

function Customers() {
	const [query, setQuery] = useState('')
	const [status, setStatus] = useState('All customers')

	const filteredCustomers = customers.filter((customer) => {
		const matchesQuery = `${customer.name} ${customer.email} ${customer.company}`.toLowerCase().includes(query.toLowerCase())
		const matchesStatus = status === 'All customers' || customer.status === status
		return matchesQuery && matchesStatus
	})

	return (
		<div className="dashboard-shell customers-shell">
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
				<div className="content-wrap customers-content">
					<section className="customers-heading"><div><p className="eyebrow">Workspace / Customers</p><h1>Your <span>customers.</span></h1><p className="subheading">Build stronger relationships with the people who keep your business moving.</p></div><div className="customer-count"><strong>2,481</strong><small>total customers</small></div></section>

					<section className="customer-summary"><div><span className="summary-icon lime">+</span><div><small>New this month</small><strong>184</strong></div></div><div><span className="summary-icon blue">~</span><div><small>Avg. order value</small><strong>$86.40</strong></div></div><div><span className="summary-icon orange">o</span><div><small>Returning customers</small><strong>68.2%</strong></div></div><div className="summary-note"><span>+</span> 12.4% growth this month</div></section>

					<section className="panel customers-panel"><div className="panel-heading"><h2>Customer directory</h2><p>Manage and understand your audience</p></div><div className="customer-toolbar"><label className="customer-search"><span>?</span><input type="search" placeholder="Search customers" value={query} onChange={(event) => setQuery(event.target.value)} aria-label="Search customers" /></label><div className="customer-tabs">{['All customers', 'Active', 'At risk', 'Inactive'].map((item) => <button className={status === item ? 'selected' : ''} key={item} onClick={() => setStatus(item)}>{item}</button>)}</div><button className="filter-button">Filter <span>v</span></button></div><div className="customers-table"><div className="customer-table-row customer-table-head"><span>Customer</span><span>Company</span><span>Orders</span><span>Total spent</span><span>Status</span><span>Joined</span></div>{filteredCustomers.map((customer) => <div className="customer-table-row" key={customer.email}><div className="customer-cell"><div className={`avatar avatar-${customer.color}`}>{customer.initials}</div><div><strong>{customer.name}</strong><small>{customer.email}</small></div></div><span className="company-name">{customer.company}</span><span className="customer-orders">{customer.orders}</span><strong>{customer.spent}</strong><span className={`customer-status ${customer.status.toLowerCase().replace(' ', '-')}`}><i />{customer.status}</span><span className="joined-date">{customer.joined}</span></div>)}{filteredCustomers.length === 0 && <div className="empty-customers">No customers match your search.</div>}</div><div className="table-footer"><span>Showing {filteredCustomers.length} of {customers.length} customers</span><button className="text-button">View all customers <span>-&gt;</span></button></div></section>
				</div>
			</main>
		</div>
	)
}

export default Customers
