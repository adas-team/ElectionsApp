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
	"Shahzaib Ahmed": {
		email: "sahmed1@ualberta.ca",
		name: "Shahzaib Ahmed",
		speech:
			"Hi Folks,\n Hope you're all doing well. I'm Shahzaib Ahmed, a mechanical engineering student and long-time badminton enthusiast. I'm here today to chat about Ada's team and how I recon I can contribute towards the group's various initiatives. As an executive at the University of Alberta Aerial Robotics Group, as well as an experienced volunteer with a number of clubs across campus, I've had the good fortune of serving in a pretty diverse array of roles and responsibilities. From leading technical and operations aspects of projects, to promoting diversity and personal development within teams, to handling the fun parts of outreach work that involve liaising with student groups and industry partners to bring successful community initiatives to life, I've always enjoyed the people-centric nature of student groups. Ada's teams' focus on initiatives that not only promote diversity within the STEM sphere, but also member development on a more individual level is something that I believe I'd be able to enthusiastically contribute towards",
		photoSrc: "/candidatePhotos/shahzaib.jpeg",
		preferences: ["VP Conference - Relations", "VP Campus Outreach", "VP Industry Outreach"],
	},
	"Bhavnoor Kaur": {
		name: "Bhavnoor Kaur",
		email: "bkaur@ualberta.ca",
		speech:
			"Hello everyone,\nMy name is Bhavnoor Kaur and I am going into my fifth year of software engineering degree. I am excited to have the opportunity to speak with you all today. I have always been passionate about technology and the potential it carries. This is why I am pursuing my current degree. Through various leadership roles, I have acquired a diverse set of skills and experiences which combined with my passion for technology and computing would make me a good fit for the position of VP Conferences – Relations. I am confident that I can help promote and support Ada’s Team functionality through my dedication and diverse set of skills.\nI understand the importance of diversity and the impact Ada’s Team is making. I would love to be a part of such an amazing team and be able to support and represent many students in the STEM fields. Conferences, in my opinion have the potential to make a huge impact in student’s life. I have learnt a lot through my experiences with GHC Conference, which I got to attend through Ada’s Team. I strongly believe that through solid representation of University of Alberta students at various conferences, we can provide more and more opportunities for students to get more involved in the industry. This will enable the students to learn and expand their horizons.\nIn this position, I am hoping to build strong connections with the Department and Chair and set forth the best way to put forth efforts that benefit the students at large through conferences and various events like panels, tech talks etc.",
		photoSrc: "/candidatePhotos/bhavnoor.jpg",
		preferences: ["VP Conference - Relations", "VP Campus Outreach", "VP Industry Outreach"],
	},
	"Frances Igwe": {
		name: "Frances Igwe",
		email: "figwe@ualberta.ca",
		speech:
			"Hello everyone, my name is Frances Igwe and I am running for three positions, VP Academics, VP Digital Media, VP conference(operations). As a third-year computer science student, I am passionate about technology, always eager to learn more and share my knowledge with others. if elected for VP Academics, I will bring my love for learning. I will ensure everyone has access to resources that would help them succeed academically. whenever we advocate/protest for change to improve our academic conditions, our voices will definitely be heard. I believe my tech savvy skills and imagination makes me a perfect candidate for VP digital media. Vote for me, and I will take our online presence to the next level. I am talking 100% engagement and membership increase. Finally, vote for me as VP Operations and you won't have to worry about a thing. All logistics and bookings are under control. My experience managing sponsorships for other student organizations means that members get to fly first class and stay in five-star hotels. I am all about diversity and inclusivity. I will be bringing a fresh perspective to Ada's Team. So, don't forget to vote for me! Thank you.",
		photoSrc: "/candidatePhotos/frances.jpg",
		preferences: ["VP Academics", "VP Digital Media", "VP Conference - Operations"],
	},
	"MacKenzie Luong": {
		name: "MacKenzie Luong",
		email: "macken3@ualberta.ca",
		speech:
			"Hi all! I'm MacKenzie and I am currently a first year student specializing in computing science and am currently the VP Industry Outreach for Ada's Team. For the upcoming school year, I will be running for VP Digital Media, VP Communications, and VP Industry outreach!\nDuring my year as VP Industry Outreach, I planned and led the Coffee&&Codes in this Winter Semester, which both were In-person and had many goodies, like the samosas at the Coffee&&Code with Workday! Whilst preparing for these events, I worked with our current VP Digital Media to promote these events! From my experience of preparing, promoting and leading these industry events, I’ve gotten a general sense of what platforms are the most active! Given my previous experience on Ada’s team, I have an understanding of the structure and quality that you all expect from us!\nThere's my experience as VP Industry Outreach on Ada’s Team, so why am I running again? It’s a very basic and cheesy answer: I genuinely enjoy it. Bear with me, because I’m going to talk about my experience in a communications role in high school, but remember that I am a first year and that wasn’t even a year away! Last year I was the Internal Communications Officer for my high school's SU, which is really just a label since all the roles were flexible. During that period I had to juggle taking meeting notes, making and posting social media posts, and even learnt basics in sound tech to mix live audio. So in short, I really like learning and trying new things, led communication within the council and communicated to the student population through creating social media posts, posting them, and was in charge of surveys that allowed students to relay their concerns and wants to the team. But the most important thing: I genuinely enjoyed doing that all and I would love to do that for Ada's Team! I had a great time with Ada’s team this year, and I do hope I can continue it next year in a position like VP Digital Media that would reignite that passion! (shorten and cut out if too long)\nFor what I would like to do as Ada’s Team VP Digital Media, I would definitely continue how our current posts are. Nice and concise with different posts/sizes to fit specific social media. I would also like to test out new promotional media, such as short animations to add some spice to promotions, or even videos summarizing larger events like conferences! I would love to also communicate with the future VP communications to have media sent out that suits your way of getting information!\nIf I am elected VP Communications next year, I’ll aim to continue to promote our events like we did this year through social media and newsletters, or however way that you all receive event information! I would love to not only send information about events and initiatives to you all, but also for you to tell me anything you’d like! Event suggestions, different ways to promote, etc. I’ll be sure to relay your requests to the exec team!\nAnd if I am elected as Ada’s Team VP Industry Outreach, I’ll hope to lead more events that tailor to your wants!",
		photoSrc: "/candidatePhotos/mackenzie.jpg",
		preferences: ["VP Digital Media", "VP Communications", "VP Industry Outreach"],
	},
	"Khushi Mittal": {
		name: "Khushi Mittal",
		email: "kmittal2@ualberta.ca",
		speech:
			"Hi everyone, I am Khushi Mittal, a first-year Computing Science student at the University of Alberta. I am standing as the VP Administration and VP Industry Outreach.I have been involving myself with clubs like Ada's team who go out of their way to provide extracurricular opportunities to students. I’d be lying though if I said that my sole motive behind joining Ada’s team is to help others and change the world. My reason is fairly selfish because I strongly believe in the inability to change the world before changing myself. If you all give me the opportunity, I assure to always give you the best version of myself and constantly focus on growth and improvement. I love meeting new people, going on unnecessarily long walks and simping for cool new technology. Every time I come across someone great, I carry a part of them in me, making myself an amalgamation of all the people I've met in my journey so far. I would like to conclude with a short excerpt from Steve Job's Stanford address that helps me wake up every morning. I hope it helps you during the final season. \"Work will take a huge part of your life. The only way to be fully satisfied is to do what you believe is great work. And the only way to do great work is to do what you love. If you haven't found it yet, keep looking. Do not settle.\"",
		photoSrc: "/candidatePhotos/khushiMittal.jpg",
		preferences: ["VP Administration", "VP Industry Outreach"],
	},
	"Grace Mullane": {
		name: "Grace Mullane",
		email: "mullane@ualberta.ca",
		speech:
			"Hi everyone! Thank you for coming here today to help promote student life and build diversity in steam by engaging with Ada’s Team. A little bit about me and my involvement with Ada’s Team- firstly, this group is a great touch point for students to get help in their classes and that is actually how I got started. Let’s rewind back to 2020- I was a freshman attending a couple sessions for Ada’s Team tutoring in my intro cmput course. I enjoyed that it was by students for students. Then after that, I became the Ada’s Team VP communications for the 2021-2022 year. I created the newsletters by gathering opportunities from other useful resources and from our own contacts and relaying those to our members. Some other things that I loved doing during that time was curating a podcast with an UAlberta and Ada’s Team alumni about her experience as a student to Google, and engaging with potential prospective students at the UofA. I had a wonderful time being apart of Ada’s Team. Now here we are, I am going into my fourth year and (hopefully) final year. I have had internship experience and I have another internship for this summer - so I am familiar the process of interviews, resumes, and do have some advice to share with students who are looking for it. In all, I really want to give back what this club has given me and hopefully set up more opportunities for students because I was in there shoes once. It would be the such a treat if you voted for me for this upcoming year. I am running for VP Digital Media and VP Campus Outreach and would enjoy doing either role",
		photoSrc: "/candidatePhotos/grace.png",
		preferences: ["VP Digital Media", "VP Campus Outreach"],
	},
	"Pratham Arora": {
		name: "Pratham Arora",
		email: "pratham2@ualberta.ca",
		speech:
			"Heyy!! My name is Pratham . I am currently a Ada's base mentor and tutor. I love helping out students with their academics and with any questions they have and that's why I would love to be in this role of the VP academics in Ada's team . I have been part of the Ada's team for over 2 years now and I believe the experience I have gotten from those years is something I would use If I am elected for this position .\nSo please do vote for me and I would bring in more volunteering tutors and more events where we all could learn and grow more .",
		photoSrc: "/candidatePhotos/pratham.jpg",
		preferences: ["VP Academics"],
	},
	"Saba Gul": {
		name: "Saba Gul",
		email: "gul@ualberta.ca",
		speech:
			"Hi everyone! I'm Saba, I'm in my fourth year of CS Spec with a minor in business. I've been apart of Ada's team for the past 2 years, I started out in Conferences and was the VP Admin for this year. \\nWhat I really enjoy about Ada's as a whole is the support and the opportunities it offers members through conferences and industry events. Regarding my specific role as VP Admin, I greatly enjoyed the flexibility the role provides, it allows me to participate in events that interest me and I can wear many hats in this role. For example, this year I got to host a couple of coffee&&code events. As well, I ensure clear communication within the team. I feel I have grown in this role and am a good fit. For these reasons I am running for VP Admin once again and would love to come back next year to fulfill my plans of contributing to ProtoJam and supporting my fellow executive members.",
		photoSrc: "/candidatePhotos/saba.jpg",
		preferences: ["VP Administration"],
	},
	"Khushi Shah": {
		name: "Khushi Shah",
		email: "khushi3@ualberta.ca",
		speech:
			"Hello! My name is Khushi. I am in my third-year of CS. I am currently VP Academics for the current 2022/2023 academic year. This year by far has been great and I enjoyed so much being apart of this warm and welcoming team. I loved being apart of this team where everyone is so passionate about organizing workshops such as, hosting Coffee and Code, and helping expand diversity in the STEAM field. My main role was to help organize the tutoring program we offer here at Ada's team and I couldn't be more happy and willing to do it again for the next upcoming year. I also was able to successfully learn more about how the other roles and help around with whatever I could. Finally, I would like to thank everyone on the team for being so friendly, and I would love to continue with Ada's team initiatives! Thank you.",
		photoSrc: "/candidatePhotos/khushiShah.jpg",
		preferences: ["VP Academics"],
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
