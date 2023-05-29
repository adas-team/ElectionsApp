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
	"Mira Patel": {
		email: "mpatel2@ualberta.ca",
		name: "Mira Patel",
		speech:
			"Hi everyone, My name is Mira and I am thrilled to be running for the VP Finance and VP Conference - Finance role for the Ada’s team student group. To share a little bit about myself, I am heading into my 4th year as a Computing Science Specialization student. I am the current President for the Undergraduate Artificial Intelligence Society (UAIS) student group. Additionally, my commitment to serving the community through initiatives similar to Ada’s Team has been recognized by several notable institutions. Some of these include YMM Parent Magazine's Top 20 Under 20 Award, The Queen's Jubilee Citizenship Award from the Government of Alberta, and Leadership in Computing Science from the University of Alberta. As a candidate, I promise to bring my strengths and ambitious spirit. I hope explore a variety of initiatives to meet the needs of our student community. You can count on me to be a friendly, reliable and helpful member. As an asset, I bring prior experience in the responsibilities pertaining to this role by having been the Community Development Associate for a non-profit organization, for which I had lead fundraisers, completed grant applications and financially supported a large-scale community event with a target audience of over 300 attendees. My involvement in the logistics for that event included funding for catering, venues, marketing, and more. Using that to my advantage, I am committed to provide dedicated support to the responsibilities of this role. I hope that by fostering a culture that encourages new thoughts and ideas, we can work together to achieve our goals and make a positive impact. With your support, I am confident that we can achieve great things together. Thank you for taking the time to consider my candidacy, and I hope you will consider voting for me as your next VP Finance and VP Conference - Finance.",
		photoSrc: "/candidatePhotos/MiraPatel.png",
		preferences: ["VP Finance", "VP Conference - Finance"],
	},
	"Mark Maligalig": {
		email: "maligali@ualberta.ca",
		name: "Mark Maligalig",
		speech:
			"Hello! My name is Mark and I’m running to be your president because I want to continue the amazing work Ada’s Team does, especially in helping maintain and build this community. I want to continue our Coffee&&Code seminars, amazing tutoring, but also bring in more casual events related to CS and STEAM.",
		photoSrc: "/candidatePhotos/MarkMaligalig.jpeg",
		preferences: ["President"],
	},
	"Sumaiya Salsabil": {
		email: "salsabil@ualberta.ca",
		name: "Sumaiya Salsabil",
		speech:
			"Hi! My name is Sumaiya and I’m currently going into my fifth year at UofA doing a double major in computer science and psychology! I’m really passionate about what this club stands for - promoting diversity in a field that’s known to lack it and empowering underrepresented students. I’ve been a general member and have been attending Ada’s Team events for the past few years and it’s been such a great experience, I’d love to take my involvement to the next level and contribute as the next VP Conference - Finance. I also have experience as an exec in student groups like Outrun the Stigma, where I was a co-chair and worked closely with the finance team to significantly increase the funds we raised (over 4 times the previous years!), enabling us to make a greater impact. I also had the opportunity to volunteer as the Director of Finance for Women Empowering Women UAlberta. I’d love to get the chance to apply the skills I learned from those roles to a group like Ada’s Team that is essential in creating an inclusive environment where every student can flourish.",
		photoSrc: "/candidatePhotos/SumaiyaSalsabil.jpeg",
		preferences: ["VP Conference - Finance"],
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
