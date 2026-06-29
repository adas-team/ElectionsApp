const year = new Date().getFullYear();
const yearRange = `${year} - ${year + 1}`;

const adasTeamEventOptions = [

	{
		key: "Events (Socials, Coffee && Code)",
		text: "Events (Socials, Coffee && Code)",
		value: "Events (Socials, Coffee && Code)",
	},
	{
		key: "Conference",
		text: "Conference (such as GHC, CAN-CWiC, QT)",
		value: "Conference",
	},
	{
		key: "Ada's Mentors",
		text: "Ada's Mentors",
		value: "Ada's Mentors",
	},
	{
		key: "Ada's Students (Tutors and Roomsitters)",
		text: "Ada's Students (Tutors and Roomsitters)",
		value: "Ada's Students (Tutors and Roomsitters)",
	},
	{
		key: "General Volunteers",
		text: "General Volunteers",
		value: "General Volunteers",
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
		"Publicity":
			"They would be responsible for managing and growing the group's presence on social media platforms, creating engaging content, and promoting events and initiatives. They would work closely with VP Digital Media and VP Communications to ensure cohesive messaging across all platforms.",
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
	"Divine Akata": {
		name: "Divine Akata",
		email: "divinewi@ualberta.ca",
		speech: "Hello everyone! My name is Divine Akata, and I'm a BSc Honours Computing Science student here at the University of Alberta. I'm running for VP Publicity for Ada's Team. I've been part of Ada's Team as a tutor and as a mentee in the mentorship program, and these experiences have really shaped my view on my future as a computing science student here at the U of A. Having that support and guidance made a real difference for me, and it's a big part of why I hope to continue as a tutor and now run for VP Publicity to take things a step further. My goal is to help Ada's Team become more visible, more connected, and more accessible to every student. Because there are students out there who need the benefits and community Ada's Team offers but simply don't know it exists, and that's the gap I want to help close. As VP Publicity, my focus would be on three things: consistency, creativity, and reach. I'd manage and grow our presence on Instagram and LinkedIn, posting content that's engaging and truly reflective of who Ada's Team is. I'd work closely with VP Digital Media and VP Communications to keep our messaging cohesive across every platform. For events, I'd help build promotional strategies that go beyond just posting a flyer, thinking about timing, targeting the right audiences, and generating real excitement. And I'd keep our physical spaces, like the bulletin board, just as sharp as our digital ones, because on-campus visibility matters too. Beyond Ada's Team, as a Resident Assistant on campus I've helped build community through organizing and promoting events, and I'd bring that same hands-on, people-first approach to how Ada's Team shows up publicly. I'm organized, dependable, and deeply motivated, not just by the role, but by what this club means to students who are still finding their footing. Every student who discovers Ada's Team because of a post we made or a poster they spotted on campus, that's the kind of impact I want to help create. Thank you so much for your time. I'd be grateful for your vote and your trust.",
		photoSrc: "/candidatePhotos/Divine Akata.jpg",
		preferences: ["VP Publicity"]
	},

	"Selena Chainani": {
		name: "Selena Chainani",
		email: "chainani@ualberta.ca",
		speech: "So! Hello. So as it turns out, I’m running for President of Ada’s Team. This is because this group has genuinely changed the way I see myself, both in tech and in general, and I have realized there’s no better way to give back. Ada’s Team gave me the courage to stand out more, to take up space, and to pursue things I actually care about, even when they did not feel like the obvious path. And I want more students to get that feeling too. This club is a place that tells people they belong, that their perspective matters, and that technology is better when more kinds of people get to shape it. As President, i want to help us keep building on everything Ada’s Team already does well: mentorship, workshops, conference opportunities, AdaHacks, outreach, and community. But I also want to make participation easier. I wish to spearhead the creation of a general volunteer pool, so students who care about Ada’s Team can help without needing to immediately commit to an executive role. Sometimes people just need a first step. I also want to push for more collaborations with interdisciplinary clubs and teams, as well as industries and opportunities too. Tech does not exist in a vacuum - it connects to games, medicine, biology, design, art, accessibility, social justice, and so many other fields, as we probably all know. I think we lack a space at the university where this is meaningfully explored, and Ada’s Team possesses the bandwidth to make it a powerful initiative. Then, I would like us to continue expanding access to opportunities like QueerTech, and make sure that when we say diversity in STEAM, we mean it fully. Women, queer and trans students, disabled students, racialized students, first-generation students, students who feel behind, students who feel out of place - Ada’s Team should be a place where people feel seen, supported, and encouraged. So, the goal is to foster what makes it meaningful, and then make it easier for more people to find their way into it. Because Ada’s Team helped me find courage, and I want us to keep building a community that does that for others first. Thanks for listening!",
		photoSrc: "/candidatePhotos/Selena Chainani.jpeg",
		preferences: ["President", "VP Publicity"]
	},

	"Sai Vashnavi Jattu": {
		name: "Sai Vashnavi Jattu",
		email: "jattu@ualberta.ca",
		speech: "Hey everyone! My name is Sai Vashnavi, and I'm running for VP Publicity. When I think about this role, I think about one thing: bringing our organization to the spotlight, where we belong. Right now, we're doing incredible work. We have amazing events, passionate members, and a mission that matters. But here's the thing if people don't know about what we're doing, how can we grow? How can we inspire new members to join us? How can we build momentum? That's where publicity comes in. I'm not just here to post on Instagram or throw up posters. I'm here to build a presence that makes people excited about who we are and what we do. Here's my vision: On social media, I'm going to create content that actually engages, not just announcements, but stories. Behind-the-scenes moments. Member spotlights. Posts that make people feel part of something bigger. We'll be consistent, creative, and authentic. For our events, I'll develop promotional strategies that reach beyond our usual crowds. I'll work with VP Digital Media to leverage every platform we have, coordinate volunteers to maximize our outreach, and make sure every event gets the attendance it deserves. For our image, I'll partner with VP Communications to keep our messaging aligned, professional, and true to who we are. Our public image isn't just about looking good it's about reflecting our values and building trust. And I won't forget the details like maintaining Ada's Base's whiteboard so we stay connected, even offline. This role is about visibility, connection, and pride. Pride in what we do. Pride in who we are. If you vote for me, I promise to bring energy, creativity, and dedication to make sure our organization gets the recognition we deserve. Let's make some noise. Let's get Ada noticed. Thank you.",
		photoSrc: "/candidatePhotos/Sai Vashnavi Jattu.jpeg",
		preferences: ["VP Publicity"]
	},

	Abstain: {
		name: "Abstain",
		photoSrc: "AdaBotSleep.png",
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
