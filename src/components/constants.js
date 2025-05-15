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
	"Aara Likun Vanatia": {
		name: "Aara Likun Vanatia",
		email: "vanatia@ualberta.ca",
		speech: "Hi everyone, my name is Aara Vanatia, and I’m running for VP Finance. I want to start by expressing my deep gratitude for the amazing experiences I’ve had with the Ada's Team, particularly during CAN-CWIC 2024. I’ve learned so much from the incredible people I’ve met, and I’m committed to giving back to a community that works tirelessly to create opportunities for women and gender-diverse individuals. As a woman of color, I know how incredibly difficult it is to feel like you belong, and I am genuinely inspired by the mission of the group and the incredible executives who carry forward its legacy. Their dedication fuels my passion to contribute to this mission in any way that I can. As VP Finance, I would take on the responsibility of managing reimbursements for authorized purchases and tracking all cash flow—both incoming and outgoing—ensuring everything is in line with our annual budget. I would work with the Executive Committee to set and approve a clear budget that aligns with our group's objectives. I’d also present a retrospective budget at the Annual General Meeting (AGM) to keep everyone informed about our financial progress. Moreover, I would actively seek and apply for grants to support our operations and ensure our finances are sustainable. I would love to give back to the community that continues to help me grow and be part of its mission. I would be truly honored if you could vote for me. Thank you!",
		photoSrc: "/candidatePhotos/Aara Likun Vanatia.jpg",
		preferences: ["VP Finance"]
	},

	"Aayushi Shah": {
		name: "Aayushi Shah",
		email: "asshah1@ualberta.ca",
		speech: "Ada’s Team has always been one of those groups I’ve admired from day one—genuine, welcoming, and super active in building community in computing science. Over the past year, I’ve attended events like Coffee && Code and Campus Kickoff, and every time I walked away feeling more connected and excited to be part of this field. It honestly made such a difference, and now I’m ready to be on the other side—to help create those moments for others. I want to give back to the community that’s helped shape my journey and do my part to bring students together. As a woman and a minority in computing science, I know how powerful it is to see someone who shares your experience—and I want to be that person for others. I want to show students that they belong here, that they can do this, and that there’s space for everyone in tech. I also bring a mix of experiences and skills that I think would be really valuable to the team. I’m in my final year, so I’ve seen a lot and I’d love to be a resource for anyone—whether they’re just starting out or trying to figure out internships, classes, or anything in between. I have solid industry experience, a strong academic record, and I’ve always been the go-to person among my friends when it comes to advice, mentorship, or even just hyping them up before a big exam. I’ve got a background in finance too, with strong math skills and an eye for detail, which means I’m great with numbers, planning, and budgeting. I’m also super comfortable with public speaking and love bringing energy into everything I do—whether that’s hosting events, supporting behind the scenes, or just making people feel welcome. At the end of the day, I want to be someone who helps build that sense of community, helps others grow, and makes their journey through CS just a little bit easier, more fun, and more connected.",
		photoSrc: "/candidatePhotos/Aayushi Shah.jpg",
		preferences: ["VP Finance"]
	},

	"Damon Grant": {
		name: "Damon Grant",
		email: "dcgrant@ualberta.ca",
		speech: "Hi everyone! I’m Damon and I am a 4th year CS major. You may have seen me hanging out or napping in Ada’s room at some point, I am there a lot of the time. I have been actively involved in Ada’s Team as a member for nearly 2 years now and I am looking to be elected as your next VP finance. To put it simply, Ada’s team has done a lot for me and has been one of the main contributors to making my university experience as enjoyable as it has been. I am very grateful to all of those who I have met through the club and I am thrilled to finally have this opportunity to join the executives and devote my attention to the financial responsibilities of the club. I really enjoy the environment that Ada’s Team promotes and I would like to contribute to fostering this safe and inclusive space for all. As someone who just started working in the CS industry, it is very jarring to me how little women, and diversity there is in the office and I understand how important conveying the goal of Ada’s is, that being that the field of STEM is, and should be for all groups. I would love to be able to assist Ada’s and if you think that I am the right person for this position of VP finance then please elect me! Thank you!", 
		photoSrc: "/candidatePhotos/Damon Grant.jpg",
		preferences: ["VP Finance"]
	},

	"Jonathan Yong Ming Pu": {
		name: "Jonathan Yong Ming Pu",
		email: "yongmin1@ualberta.ca",
		speech: "Hi Everyone! My name is Jonathan. Now I know I might feel like I kind of came out of nowhere to run for VP Finance, and you're probably wondering who the heck is this guy, so I'll give a brief introduction of myself. I'm a second year CS student in the Software Practice Option. Fun fact about me, I like fried chicken, specifically, Jollibee. I know this has nothing to do with CS or finance, but hey, at least now you know something about me now. I got to admit, I'm not really good at speeches like this, cause, obviously, I'm a CS student, but let me tell you what I'm good at. I have experience in various leadership positions, especially in student club settings. My most recent leadership experience was being a part of the student body of my previous university, where I was in charge of human resource and logistics. I was responsible for administering information management and all student-organized events that took place under the student body. I helped streamline communication, played a key role in organizing logistics, and assisted in budget management for multiple events. I know 'finance' can sound dry to some people, therefore, I plan to make finance simple, clear, and efficient for everyone. Whether it's helping someone get reimbursed or explaining where the team's funds are going, I want to be the person that brings transparency, accountability and a bit of calm to the team. As a strong believer for diversity in STEM, I think it's important that leadership reflects a range of backgrounds, voices, and ideas. Being part of Ada's Team would not only mean bringing financial structure, but also contributing to a space where everyone feels represented and supported. I am eager to bring my skills of collaboration, teamwork, and enthusiasm to advance that mission further. Hence, I see myself as a great addition to Ada's Team. So, if you're looking for someone who's reliable, and maybe gets a little too excited about spreadsheets, I would really appreciate your support. Thank you.",
		photoSrc: "/candidatePhotos/Jonathan Yong Ming Pu.jpg",
		preferences: ["VP Finance"]
	},

	"Pari Jain": {
		name: "Pari Jain",
		email: "pari1@ualberta.ca",
		speech: "Hi everyone, I hope all of you are doing well, and if not I hope this speech makes it a tiny bit better. My name is Pari, and I’m running for VP Finance because I genuinely care about Ada’s Team and believe I can contribute meaningfully through both experience and passion. I currently serve as the Director of Finance for Women Empowering Women, where I’ve had hands-on experience managing budgets, reimbursements, and financial planning — all of which directly align with the responsibilities of VP Finance at Ada's Team. I’ve worked closely with teams to set budgets, track expenses, and ensure financial transparency. In addition, I was the Minister of Technology at the Alberta Youth Parliament Student Group, where I managed our social platforms, but also jumped in to support the finance team whenever needed — helping out with grant applications, fundraisers, and budgeting decisions. I’ve also volunteered at the Campus Food Bank, where I helped manage donations, purchase food items responsibly, and make sure we were using funds efficiently. These experiences taught me how important it is to be detail-oriented, accountable, and proactive when handling money — especially when it's supporting a student-run initiative. If elected, I’ll bring that same level of responsibility and energy to Ada’s Team. I’m excited about the opportunity to support the exec team, help apply for grants, keep finances organized and transparent, and make sure we’re set up for a successful year. Thank you for lending me your ears everyone, I hope you all have a great day ahead!",
		photoSrc: "/candidatePhotos/Pari Jain.jpeg",
		preferences: ["VP Finance"]
	},

	"Percy Nguyen": {
		name: "Percy Nguyen",
		email: "ngoccha1@ualberta.ca",
		speech: "Hi everyone! I’m Percy, and I’m running to be your next VP Finance! Now, I know the JD says “write cheques, track cash flow, do the budget report”... but to me, it’s more than that. It’s about being accountable, and making sure every amazing idea this team dreams up has the fund to back it. I’ve been through the budgeting trenches before - as VP in other organizations, I handled funding, comms, HR, curriculum… everything short of doing magic tricks at meetings. That’s where I really sharpened my accounting skills and learned how to communicate with clarity - especially when it comes to money Before that, I led a 30-people curriculum team to build education programs for children with no access to school. There were no seniors, barely any handover - but we kept going, kept learning, and maybe bugged everyone a little too much for feedback. I also pitched in with logistics and comms because we were shorthanded… and honestly, I couldn’t stand to see the project flop. Also, as Head of my high school’s Student Council’s Environment Committee, I learned how to navigate red tape, get approvals, and write solid grant applications, which I know will be super useful here. More about me - my friends call me a broken teapot because they spill tea to me, and I’ll without fail, forget it the next day - so if you need someone discreet with receipts? That’s me 😌 If elected, I’ll make finance transparent, organized, and maybe even a little fun for us. Thanks for listening - and I’d love your support!",
		photoSrc: "/candidatePhotos/Percy Nguyen.jpg",
		preferences: ["VP Finance"]
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
