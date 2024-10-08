export default [
	{
		name: 'Home',
		url: '/',
	},
	{
		name: 'About',
		url: '/about-restore-first-health/',
		children: [
			{
				name: 'Patients & Caregivers',
				url: '/advanced-mobile-wound-care/',
			},
			{
				name: 'For Providers / Community Partners',
				url: '/about-restore-first-health/for-providers-community-partners',
			},
			{
				name: 'Leadership Team',
				url: '/about-restore-first-health#leadership-team',
			},
		],
	},
	{
		name: 'Locations',
		url: '/locations/',
		children: [
			{ name: 'Georgia Team', url: '/locations/georgia-team' },
			{ name: 'New Jersey Team', url: '/locations/new-jersey-team' },
			{ name: 'Pennsylvania Team', url: '/locations/pennsylvania-team' },
			{ name: 'Kansas Team', url: '/locations/kansas-team' },
			{ name: 'Texas Team', url: '/locations/texas-team' },
			{ name: 'Florida Team', url: '/locations/florida-team' },
		],
	},
	{
		name: 'Case Studies',
		url: '/case-studies/',
	},
	{
		name: 'Blog',
		url: '/blog/',
	},
	{
		name: 'FAQ',
		url: '/frequently-asked-questions/',
	},
	{
		name: 'Jobs',
		url: '/jobs/',
	},
	{
		name: 'Contact',
		url: '/contact-us/',
	},
]
