module.exports = {
	name: "bug_loose_gradient",
	description: "looseheadz bug",
	category: "Rugby",
	icon: "stopwatch",
	hasEntries: false,
	default: {
		style: {
			//horizontal_position: "left",
			//vertical_position: "top",
			//width: "50"
			
		},

	},
	props: [
		{
			name: "image",
			description: "Show the selected image",
			type: "ImageFile"
		},
		{
			name: "teamAnameBug",
			description: "Team A name",
			type: "String"
		},
		{
			name: "teamBnameBug",
			description: "Team B name",
			type: "String"
		},

		{
			name: "scoreABug",
			description: "Team A score",
			type: "Number"
		},
		{
			name: "scoreBBug",
			description: "Team B score",
			type: "Number"
		},

		{
			name: "color1",  //COLOUR INPUT A
			description: "Team 1 Colour",
			type: "ColorPicker"
		},
		{
			name: "color2",  //COLOUR INPUT B
			description: "Team 2 Colour",
			type: "ColorPicker"
		},

		{
			name: "loosehtft",
			description: "HT or FT",
			type: "string"
		},


		{
			color: "rgba(255,255,255,1)"
		},

	],
	// methods: {
	// 	pauseresume () {
	// 		this.props.running = !this.props.running
	// 		this.save()
	// 		return true
	// 	}
	// },
	// actions: [
	// 	{
	// 		name: "pauseresume",
	// 		title: "Pause / resume",
	// 		description: "Pause / resume the countdown clock (will not adjust target)",
	// 		type: "Button",
	// 		style: { type: "warning" },
	// 		method: "pauseresume"
	// 	}
	// ],
	vue_template: getFile("template.html").toString(),
	vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}