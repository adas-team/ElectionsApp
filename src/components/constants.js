const year = new Date().getFullYear();
const yearRange = `${year} - ${year + 1}`;

const adasTeamEventOptions = [
	{
		key: "Crash Course/Workshop",
		text: "Crash Course/Workshop",
		value: "Crash Course/Workshop",
	},
	{
		key: "Ada's Base (Discord)",
		text: "Ada's Base (Discord)",
		value: "Ada's Base (Discord)",
	},
	{
		key: "Ada's Network (Slack)",
		text: "Ada's Network (Slack)",
		value: "Ada's Network (Slack)",
	},
	{
		key: "Ada's Developers",
		text: "Ada's Developers",
		value: "Ada's Developers",
	},
	{
		key: "Tutoring/Office Hours",
		text: "Tutoring/Office Hours",
		value: "Tutoring/Office Hours",
	},
	{
		key: "Coffee && Code",
		text: "Coffee && Code",
		value: "Coffee && Code",
	},
	{
		key: "Conference",
		text: "Conference (such as GHC or CAN-CWiC)",
		value: "Conference",
	},
	{
		key: "Ada's Mentors",
		text: "Ada's Mentors",
		value: "Ada's Mentors",
	},
	{
		key: "Ada's Students",
		text: "Ada's Students",
		value: "Ada's Students",
	},
	{
		key: "Ada's Tutors",
		text: "Ada's Tutors",
		value: "Ada's Tutors",
	},
	{
		key: "High School Outreach",
		text: "High School Outreach",
		value: "High School Outreach",
	},
	{
		key: "None, but I look forward to!",
		text: "None, but I look forward to!",
		value: "None, but I look forward to!",
	},
];

const positionDesc = [
	{
		President:
			"Responsibilities include: Act as Chair of the Executive Committee, set a strategic direction for the Group, possess signing authority on the group bank account, act as part of the Election Committee, be responsible for arranging meeting agendas, ensure executives are not falling behind in their duties and help out when necessary, take mandatory annual President's training through Student Group Services (SGS),  re-register the Group through Student Group Services (SGS), and complete Risk Management through Student Group Services (SGS). Nominee must have held an Executive Position in the previous Academic Year (2019-20) OR be approved by the Executive Committee.",
		Administration:
			"They would be responsible for organizing and planning meetings, recording meeting minutes, maintaining internal communications within the Executive Committee, hosting executive meetings in the absence of the President, and acting as part of the Election Committee.",
		Academic:
			"They would be responsible for scheduling Ada's Base office hours and tutoring services, collecting information regarding student struggles and concerns, and advocating for changes on behalf of students to the department to help improve students' academic experiences. ",
		Finance:
			"They would be responsible for writing cheques to reimburse members for authorized purchases, setting a budget that is approved by members of the Executive Committee, tracking all incoming and outgoing cash flow for an annual budget report and audit purposes, presenting retrospective budget for the previous fiscal year at the Annual General Meeting, and finding and applying for grants used by the student group for operations. Must take Mandatory Annual Treasurer's training through Student Group Services (SGS). ",
		"Digital-Media":
			"They would be responsible for maintaining the website, blog, social media, and Ada's Base whiteboard/bulletin board. They would also collaborate with VP Communications in making posters and advertising for events. ",
		Communications:
			"They would be responsible for tracking membership (i.e. tracking active members that are on the mailing list and have attended an event in the current Academic Year), sending out and crafting weekly/monthly emails about opportunities to members, collaborating with VP Digital Media in making posters and advertising for events, and reading and replying to emails. ",
		"Campus-Outreach":
			"They would be responsible for acting as a liaison between Ada's Team and other student groups on campus with similar goals or missions, leading contact for Student Group Services (SGS) and BearsDen, being the main point of contact for internal university events such as Science Orientation, Clubs Fair, and WISEST CHOICES conferences, and working with VP Industry Outreach to organize and plan events with the rest of the Outreach Team. ",
		"Industry-Outreach":
			"They would be responsible for liaising with companies and industry partners to organize events at the University of Alberta, helping with organizing events on campus to enrich members' university experiences and to foster a strong sense of belonging within the community, and working with VP Campus Outreach to plan events with the rest of the Outreach Team.",
		"Conference-Operations":
			"They would be responsible for booking accommodations and planning transportation at conferences in foreign cities, coordinating flights to and from the event, and handling other logistics in the conference city. Must be available from May to August.",
		"Conference-Relations":
			"They would be responsible for determining what the Department would like to see from Ada's Team, collaborating with the Chair of the Department and any Faculty Advisors regarding the best way to put forth efforts, bringing any promotional materials from the University of Alberta to the conference to put in swag bags (e.g. postcards, pens, etc.), hosting University of Alberta events at the conference (e.g. panels, tech talks, research posters, etc.), and being the first point of contact for Faculty who want to send student representatives to the conference. Must be available from May to August.",
		"Conference-Finance":
			"They would be responsible for applying for grants, talking to professors regarding fundraising for conferences, and handling reimbursements for students attending conferences. Must be available from May to August.",
	},
];

const candidates = {
	"Kunaal Gupta": {
		email: "kunaal@ualberta.ca",
		name: "Kunaal Gupta",
		speech: `Hello everyone! I am Kunaal Gupta pursuing BSc Computing Science with a minor in business & I am running for VP Communication. As a full-stack software engineer I always aspires to collaborate with people from multidisciplinary background to develop & deliver sustainable technologies in an Agile environment while ensuring optimal functionality, quality, and reliability. I had also contested for VP communication in ISA last-year where I got about 100 votes out 400. Looking forward to connect with people in Ada's team. Vote me!!`,
		photoSrc: "/candidatePhotos/kunaal.png",
		preferences: ["VP Communications"],
	},
	Abstain: {
		name: "Abstain",
		photoSrc: "/AdaBotSleep.png",
	},
};

const REELECT = false;

const reelectedPositions = [];

const reelectedCandidates = {};

export {
	adasTeamEventOptions,
	positionDesc,
	candidates,
	REELECT,
	reelectedCandidates,
	reelectedPositions,
	year,
	yearRange,
};
