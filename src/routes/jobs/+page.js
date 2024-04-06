export async function load({ fetch }) {
	const regions = await fetch('https://rfh-api.com/wp-json/wp/v2/regions')
		.then(x => x.json())
		.catch(console.error)

	const jobsByRegions = Promise.all(
		regions.map(({ id }) =>
			fetch(`https://rfh-api.com/wp-json/wp/v2/jobs?_embed&per_page=100&regions=${id}`)
				.then(x => x.json())
				.catch(console.error)
		)
	)

	return {
		regions,
		jobsByRegions,
	}
}

// export async function load({ fetch }) {
// 	const routes =
// 		'https://rfh-api.com/wp-json/wp/v2/jobs?per_page=100&regions=25&_embed'

// 	const res = await fetch(route)
// 	const jobs = await res.json()

// 	// const jobs = {
// 	// 	florida: [
// 	// 		{
// 	// 			position: 'Certified Medical Assistant - Wound Care',
// 	// 			city: 'Jacksonville',
// 	// 			state: 'FL',
// 	// 			salary: '$21.00 - $26.00 per hour',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/pOykmXl01w/Certified-Medical-Assistant-Wound-Care',
// 	// 		},
// 	// 		{
// 	// 			position: 'Nurse Practitioner - Wound Care',
// 	// 			city: 'Jacksonville',
// 	// 			state: 'FL',
// 	// 			salary: '$140k - $150K - Full-time',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/jAp1U9uDsD/Nurse-Practitioner-Wound-Care',
// 	// 		},
// 	// 		{
// 	// 			position: '',
// 	// 			city: '',
// 	// 			state: '',
// 	// 			salary: '',
// 	// 			href: '',
// 	// 		},
// 	// 	],
// 	// 	georgia: [
// 	// 		{
// 	// 			position: 'Certified Medical Assistant - Wound Care',
// 	// 			city: 'Riverdale',
// 	// 			state: 'GA',
// 	// 			salary: '$21.00 - $26.00 per hour',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/4205ylU8xc/Certified-Medical-Assistant-Wound-Care',
// 	// 		},
// 	// 		{
// 	// 			position: 'Certified Medical Assistant - Wound Care',
// 	// 			city: 'Marietta',
// 	// 			state: 'GA',
// 	// 			salary: '$21.00 - $26.00 per hour',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/S2Dr1kxJcG/Certified-Medical-Assistant-Wound-Care',
// 	// 		},
// 	// 		{
// 	// 			position: 'Certified Medical Assistant - Wound Care',
// 	// 			city: 'Decatur',
// 	// 			state: 'GA',
// 	// 			salary: '$21.00 - $26.00 per hour',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/dElLRoQX7f/Certified-Medical-Assistant-Wound-Care',
// 	// 		},
// 	// 		{
// 	// 			position: 'Certified Medical Assistant - Wound Care',
// 	// 			city: 'Savannah',
// 	// 			state: 'GA',
// 	// 			salary: '$21.00 - $26.00 per hour',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/ApVqbt2JsU/Certified-Medical-Assistant-Wound-Care',
// 	// 		},
// 	// 		{
// 	// 			position: 'Nurse Practitioner - Wound Care',
// 	// 			city: 'Johns Creek',
// 	// 			state: 'GA',
// 	// 			salary: '$140k - $150K - Full-time',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/g3QSJmJlDN/Nurse-Practitioner-Wound-Care',
// 	// 		},
// 	// 		{
// 	// 			position: 'Nurse Practitioner - Wound Care',
// 	// 			city: 'Decatur',
// 	// 			state: 'GA',
// 	// 			salary: '$140k - $150K - Full-time',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/TkszGc454a/Nurse-Practitioner-Wound-Care',
// 	// 		},
// 	// 	],
// 	// 	newJersey: [
// 	// 		{
// 	// 			position: 'Certified Medical Assistant - Wound Care - Central NJ',
// 	// 			city: 'East Windsor',
// 	// 			state: 'NJ',
// 	// 			salary: '$21.00 - $26.00 per hour',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/h81lA1RBHc/Certified-Medical-Assistant-Wound-Care-Central-NJ',
// 	// 		},
// 	// 		{
// 	// 			position: 'Certified Medical Assistant - Wound Care - North Jersey',
// 	// 			city: 'Bloomfield/Clifton Region',
// 	// 			state: 'NJ',
// 	// 			salary: '$21.00 - $26.00 per hour',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/bMIRIfxhjd/Certified-Medical-Assistant-Wound-Care-North-Jersey',
// 	// 		},
// 	// 		{
// 	// 			position:
// 	// 				'Medical Practice Liaison/Marketing - Wound Care - South Central New Jersey',
// 	// 			city: 'East Windsor',
// 	// 			state: 'NJ',
// 	// 			salary: '',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/JMcvTmAyty/Medical-Practice-LiaisonMarketing-Wound-Care-South-Central-New-Jersey',
// 	// 		},
// 	// 	],
// 	// 	pennsylvania: [
// 	// 		{
// 	// 			position: 'Certified Medical Assistant- Wound Care',
// 	// 			city: 'Plymouth Meeting',
// 	// 			state: 'PA',
// 	// 			salary: '$21.00 - $26.00 per hour',
// 	// 			href: 'https://restorefirsthealthduluth.applytojob.com/apply/60HZW1BtfS/Certified-Medical-Assistant-Wound-Care',
// 	// 		},
// 	// 		{
// 	// 			position: '',
// 	// 			city: '',
// 	// 			state: '',
// 	// 			salary: '',
// 	// 			href: '',
// 	// 		},
// 	// 		{
// 	// 			position: '',
// 	// 			city: '',
// 	// 			state: '',
// 	// 			salary: '',
// 	// 			href: '',
// 	// 		},
// 	// 	],
// 	// }

// 	return {
// 		jobs,
// 	}
// }
