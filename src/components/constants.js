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
	"Amendment to Constitution - Apr 2, 2025":{
	name: "Amendment to Constitution - Change of Membership Criteria + Election Rule Clarifications",
	email: "adasteam@ualberta.ca",
	speech: "Since the founding of Ada's Team, membership criteria should evolve to include a wider range of students that are involved with the group. As of now, the member criteria is (i) being a UAlberta student; (ii) having been on the mailing list for >= 2 weeks; and (iii) attended an event within the current school year. This amendment will redefine membership and expand to other categories of participation, without requiring a newsletter subscription (as our events are marketed on multiple channels). This amendment also includes clarifications to elections rules. Full amendement details: https://docs.google.com/document/d/1iHfO9ubGDuLAbdDWE096XJvUI_v_AnSl0KtTSj9K3lA/edit?usp=sharing",
	photoSrc: "AdaBotSleep.png" ,
	preferences: ["Amendment to Constitution - Change of Membership Criteria + Election Rule Clarifications"]
	},

	"Sargundeep Singh":{
	name: "Sargundeep Singh",
	email: "sargunde@ualberta.ca",
	speech: "Hi, I'm Sargundeep Singh, a 2nd yr Computer Science Undergrad with a Minor in Business, and I stand before you today as a candidate for the positions of President/Vice President of Administration. This time, I speak not just as a second-year student, but as someone who has served and grown in the role of Vice President of Administration over the past year-learning, leading, and thriving alongside all of you. Reflecting on this past year, I can proudly say that I immersed myself fully in the role. From officiating meetings to spearheading initiatives, I have worked tirelessly to uphold and embody the values of this team. Yes, I made mistakes, but I also learned from them a lot; Those lessons have strengthened me, and made me a better person and leader. My journey this past year has only deepened my commitment to fostering inclusivity, collaboration, and curiosity within our team. I have experienced firsthand the incredible potential we unlock when we come together-each of us contributing our unique strengths, ideas, and passions to create something truly extraordinary. If elected once again, I pledge to build on the foundations we've laid together. I will continue to advocate for each and every one of you, ensuring that your voices are not just heard but valued. I will strive to lead with empathy, determination, and the same relentless drive that has brought me to this point. But leadership is never a solo endeavor. I need your support, your ideas, and your energy to push the boundaries of what we can achieve together. This campaign is not about me as an individual- it’s about the values we share and the legacy we aim to create as a team. So, I urge you to stand with me once more, not just for who I am but for what this team represents. Let’s continue this journey together and write the next chapter of this lovely group. Thank you for your trust, your encouragement, and the opportunity to stand before you once again.",
	photoSrc: "/candidatePhotos/Sargundeep Singh.jpg" ,
	preferences: ["President", "VP Admin"]
	},

	"Jashanveer Singh Arora":{
	name: "Jashanveer Singh Arora",
	email: "jashanv3@ualberta.ca",
	speech: "Greetings everyone, My name is Jashanveer Singh Arora, and I’m excited to run for the position of VP Digital Media / VP Communications / VP Industry Outreach at Ada’s Team. I first learned about Ada’s Team through conversations with seniors, and after exploring its initiatives, I was truly inspired by its commitment to fostering inclusivity and innovation in tech. With my background in leadership, digital media, and outreach, I believe I can contribute meaningfully to this role. At the University of Alberta, I serve as the President of the Bhangra Club, where I oversee event organization, social media management, and community engagement. Balancing administrative duties with creative responsibilities has strengthened my ability to plan, promote, and execute events effectively—skills that directly align with this role. From coordinating performances to managing outreach and promotions, I have gained hands-on experience in building strong connections and increasing visibility, which I hope to bring to Ada’s Team. Beyond leadership, my technical skills in website management, social media, and digital outreach, along with my experience in Python, C, and web technologies, equip me for this position. As VP Digital Media, I will ensure our website, blog, and social platforms are engaging and up to date. As VP Communications, I will maintain clear communication with members through emails and event promotions. As VP Industry Outreach, I will actively connect with companies and professionals to bring valuable opportunities to our community. Ada’s Team has built an incredible platform, and I am eager to contribute to its growth. Thank you for this opportunity, and I look forward to working together to make a lasting impact!",
	photoSrc: "/candidatePhotos/Jashanveer Singh Arora.JPG" ,
	preferences: ["VP Communications","VP Industry Outreach"]		
			},

	"Mark Maligalig":{
	name: "Mark Maligalig",
	email: "aasolank@ualberta.ca",
	speech: "Hi everyone, For those of you who don’t know me, my name is Mark Maligalig, and I go by he/they pronouns. I’m a queer, non-binary Filipino. I’m in 5th year computer science and working in a co-op. I am running to be your next VP Admin and VP Finance. It was a pleasure serving as your President for a second term. This position continues to be the most rewarding and challenging part of my student life. Seeing the impact of our conferences, events, programs, and network makes me proud to be part of this diverse and wonderful community! Hearing feedback and reading your testimonials from our conferences and events makes this effort so worth it, the countless hours spent dedicated to ensuring everything runs smoothly. That being said, as next year marks my final year of studies, I want to pass the presidency torch on to someone else. I believe that remaining a part of Ada’s Team as a VP Admin or VP Finance will allow me to more effectively pass on knowledge to the next president and future teams. As someone who has organized and assisted every single team initiative from my first day as President, I have the skills to help the next team move more efficiently, producing better outcomes for our community. This is not limited to numbers on a page; this would translate to more events, more industry connections, larger budgets, and funding more people sent to amazing conferences. I believe we also need to acknowledge the current attacks brought on initiatives focused on Equity, Diversity, and Inclusion (EDI). In these difficult times, I want to assure you that I have been and will remain committed to the fight for our rights. As someone who has been in the CS Department EDI Committee since 2022, I want to use my position to speak out for underrepresented groups, including women, queer and trans people, and BIPOC folks. Let's work together to continue our journey, let's keep making an impact in the community, and let's stay united for a better future! Please vote for me as your next VP Admin and Finance.",
	photoSrc: "/candidatePhotos/Mark Maligalig.jpg" ,
	preferences: ["VP Admin", "VP Finance"]
			},

	"Selena Chainani":{
	name: "Selena Chainani",
	email: "chainani@ualberta.ca",
	speech: "Hello everyone! My name is Selena Chainani, and I’m running for VP Academics, VP Communications, and VP Digital Media. Ada’s Team’s mission is about making computer science more inclusive—ensuring that opportunities exist for everyone, no matter their background. As a non-binary person, I know firsthand how important it is to have a space that supports and uplifts all voices, and I want to help contribute to this group – one that definitely seeks to do so. Computer science and STEM, by extension, is so insanely divisive on the basis of gender and background, even to this day. Ada’s Base has been such a lovely place to be in, with such lovely people, and engaging with others from such diverse backgrounds has been truly joyous. I want to help share that joy that I’ve felt over the past few months with others who may also feel alienated and alone in their endeavors. I want to help with setting up events and opportunities that can help others discover their potentials and advance their education and careers. There are so many cool things this club already does that I really want to be a part of and help with! I am the most interested in being VP Academic, primarily because I want to ensure that every student can access tutoring and guidance. I’m currently a student tutor, and I want to help improve the current tutoring and mentorship program, since I think it’s a necessary, wonderful resource for students that can be made to be so much more than it is. I’m passionate about advocating for students, and I definitely want to make sure their struggles are heard at the department level so we can push for changes that can improve every student’s experience, and help them do their best. University is already hard enough to deal with without the added stress of the system being against you. For VP Communications and Digital Media, I’d love to help Ada’s Team grow by keeping our members engaged and informed. Whether it’s through maintaining the website, making posters, running social media, helping make cute merch, or crafting emails, I’ll attempt to make sure our message reaches the right people. I’ll also work to create clear, accessible advertising for our events so that more students can find and join our community. I really enjoy writing and making art, I've done so for years, and I definitely want to do this for a good cause! Ada’s Team’s core values are ones that are close to my heart. And I am so incredibly passionate about wanting to help Ada’s Team continue to be a welcoming, inclusive, and impactful space for all. Even if I don’t end up getting a position, I do hope I can help out around the club and work with you all! Thank you so much for listening to me ramble.",
	photoSrc: "/candidatePhotos/Selena Chainani.jpeg" ,
	preferences: ["VP Academic", "VP Communications", "VP Digital Media"]
			},

	"Ravinder Kaur":{
	name: "Ravinder Kaur",
	email: "rk6@ualberta.ca",
	speech: "My name is Ravinder Kaur, and I’m excited to be running for VP Conference – Operations and Relations! I love organizing and planning things, whether it's events, work, or even my own vacations. I always plan my trips from start to finish—booking flights, accommodations, and making a full itinerary. It’s something I truly enjoy, and I believe this skill will help me handle the logistics for our conferences smoothly. In my past role as a Summer Camp Instructor at Green Scholars Alberta, I managed groups of students, coordinated activities, and worked closely with other staff members to ensure everything ran smoothly. This experience taught me how to handle logistics, adapt to last-minute changes, and keep everything well-organized—skills that are essential for the Operations role. For the Relations side, I have experience working with faculty and organizing events. As the Internal Coordinator for WiCyS UAlberta, I strengthen communication within the team, manage social media engagement, and create promotional content. I also worked as an Assistant Director with TeamUP Science, where I organized a Computer Science workshop, developed the curriculum, and coordinated with guest speakers. These experiences have given me the ability to connect with different people, build relationships, and ensure everything runs smoothly. At the end of the day, I care about making these conferences successful and enjoyable for everyone. I want to help Ada’s Team by making sure the logistics are seamless and that we maintain a strong connection with the faculty.",
	photoSrc: "/candidatePhotos/Ravinder Kaur.jpg" ,
	preferences: ["VP Conference - Operations", "VP Conference - Campus Relations"]
			},

	"Anhad Singh Sarna":{
	name: "Anhad Singh Sarna",
	email: "assarna@ualberta.ca",
	speech: "My name is Anhad, and I’m running to be your VP Conference Representative for Ada’s team. Now, I know a lot of us are balancing school, work, projects, and trying to figure out what’s next. That’s why I want to make sure that our voices are heard, valued, and represented properly. I’m someone who believes in clear communication, taking initiative, and making sure no one gets left behind. Whether it’s organizing meetings, collecting feedback, or making sure our concerns are brought forward I’ll be the person who shows up—prepared, respectful, and ready to advocate for us. If you vote for me, you’re choosing someone who’s approachable, responsible, and genuinely wants the best for our team. Thanks for your time, and I hope I can earn your support.",
	photoSrc: "/candidatePhotos/Anhad Singh.jpeg" ,
	preferences: ["VP Conference - Finance", "VP Conference - Operations", "VP Conference - Campus Relations"]
			},

	"Aara Likun Vanatia":{
	name: "Aara Likun Vanatia",
	email: "vanatia@ualberta.ca",
	speech: "Hi everyone, I’m Aara, and I’m excited to be running for VP Industry Outreach, VP Academic, and VP Campus Outreach with Ada’s Team. Ada’s Team is built on the idea of creating a strong, inclusive, and supportive community for women and gender-diverse individuals in tech. The group has already given so many of us mentorship, guidance, and a sense of belonging. I want to build on that by creating more opportunities for us to grow, connect, and succeed in the tech industry and beyond. Of the three roles, I’m especially passionate about VP Industry Outreach. As a second-year student now heading into my third year, I’ve realized how important it is to connect with professionals who can offer advice, inspiration, and real-world insights. If elected, one of my main goals would be to introduce Industry Mixers, informal events where we can meet professionals in a relaxed setting, ask questions, and learn from their experiences. Another initiative I’d love to launch is Campus Treks. This would involve organizing visits to companies, where Ada’s Team members can tour their offices, meet with employees, and get a firsthand look at what it’s like to work in the industry. These experiences will allow us to build meaningful networks and gain a deeper understanding of what life after university really looks like, making us feel more confident and ready for our next steps. Along with VP Industry Outreach, I’m also running for VP Academic because I strongly believe it’s important that we provide solid academic support for all members. Ensuring that everyone has access to the resources, mentorship, and guidance they need to succeed will be a top priority for me. As for VP Campus Outreach, my goal is to increase Ada’s Team’s visibility on campus and engage more students in our community. There are so many people out there who could benefit from what we offer, and I’m excited to bring them into the fold. I’m really excited about the opportunity to contribute to Ada’s Team in all these areas, and no matter which role I take on, my goal is to support and uplift this community. I would be honored to serve as your VP, and I hope to earn your vote.Thank you!",
	photoSrc: "/candidatePhotos/Aara Likun Vanatia.jpg" ,
	preferences: ["VP Industry Outreach",  "VP Campus Outreach", "VP Academic"]
			},

	"Angela Solanki":{
	name: "Angela Solanki",
	email: "aasolank@ualberta.ca",
	speech: "Hi everyone, my name is Angela and i'll be running for VP Industry Outreach and VP Communications.",
	photoSrc: "/candidatePhotos/Angela Solanki.jpg" ,
	preferences: ["VP Industry Outreach", "VP Communications"]
			},


	"MacKenzie Luong":{
	name: "MacKenzie Luong",
	email: "mackenz3@ualberta.ca",
	speech: "Hi everyone! I’m MacKenzie and I’m currently your VP Communications in Ada’s Team! To give some background, I’m going into my Fourth Year in CS. That being said, I’m looking to be elected as your next VP Campus Outreach! Over my two years at Ada’s Team, I’ve seen how the community has been fostering since the pandemic cut club activities short and I’ve been at the forefront of revitalizing fun and intriguing events that are given in a safe and welcoming community! As a queer woman of colour, I’ve really felt safe in Ada’s Team through their events, opportunities, and open co-working space where you may have seen me chill and work in! This past year we’ve had some notable events, such as the Kick-Off, Halloween Event, and the Cookie Decorating event! I’m also the main organizer for the Goodbye CSC event that’s happening next week and you all should come! As your VP Campus Outreach I aim to continue these social events and continue to collaborate with undergraduate student groups, such as UACS and CompE, graduate student groups, such as the Turing Society, and University Programs such as WiSEST! By doing so, I hope this gives opportunities for the undergraduate and graduate students to bond and develop mentorship like support. I’m also looking to host some events next year, such as collaborating with photographers to help students get professional headshots taken and other holiday events! If any of these events seem interesting, please elect me for VP Campus Outreach!",
	photoSrc: "/candidatePhotos/MacKenzie Luong.jpg" ,
	preferences: ["VP Campus Outreach"]
			},

	
	"Kashish Gupta":{
	name: "Kashish Gupta",
	email: "kgupta5@ualberta.ca",
	speech: "My name is Kashish Gupta, and I’m excited to be running for Vice President of Finance, Vice President of Academic, and Vice President of Admin for Ada’s Team. When I first got involved with Ada’s Team, I was drawn to the sense of community and support that it provides for underrepresented voices in tech. Over the past year, I’ve attended CAN-CWiC 2024, coffee socials, and other events, where I’ve seen firsthand how Ada’s Team creates a space where students can grow, connect, and feel like they belong. That’s something I deeply value—and something I want to help strengthen. Beyond Ada’s Team, I’ve been involved in hackathons, research, mentorship, and leadership roles in clubs like NeurAlbertaTech and Science Mentorship. These experiences have taught me how to manage resources, organize events, and support students in meaningful ways. I believe these skills align well with the roles I’m running for: As VP Finance, I want to make sure we have the funding to bring in more hands-on workshops, speaker sessions, and networking events that directly benefit our members. As VP Academic, I want to expand mentorship and academic support, creating more structured opportunities for students to learn and collaborate. As VP Admin, I want to help improve how we plan and communicate, ensuring that everyone feels involved and heard. At the end of the day, I’m running because I truly care about this community. I want to help build on what’s already great and make Ada’s Team even more accessible, impactful, and supportive for all of us. I’d love the opportunity to contribute, and I hope to earn your support.Thank you!",
	photoSrc: "/candidatePhotos/Kashish Gupta.jpg" ,
	preferences: ["VP Academic", "VP Finance", "VP Admin"]
			},

	"Caly Zheng":{
	name: "Caly Zheng",
	email: "cjzheng@ualberta.ca",
	speech: "Hi Everyone! I’m Caly, I’m a 3rd year in CS, and I’m excited to be running to be your President and seeking re-election as VP Academic. This past year, I accomplished many things as an Exec with Ada’s Team. I started a mentorship program, where we had 25 mentees and 21 mentors in our inaugural semester. I used my personal network to connect with 7 mentors who were industry professionals as well as uAlberta Alumni. Through this program, we helped students build connections and grow their careers through a semester-long mentorship. This past semester, I have also been particularly committed to fostering an inclusive and welcoming community. Ada’s base has been open this winter semester for an average of 5 hours a day, supervised by me, other execs, or room sitters. It has become a safe space for students to connect, study, or just chill and have fun, and I hope to continue building up this community next year. At a time where diversity, equity and inclusion is being threatened in the world, I think it's more important than ever to have representatives that genuinely understand the struggles faced by women, lgbtqia+, people with disabilities, and other underrepresented minorities in the field of tech. As your President, I will continue being a vocal advocate for these marginalized communities within the Department, the Faculty, and the CS student body. I will keep utilizing my connections to help build opportunities for students through the mentorship program, Coffee and Codes, and conferences. And most importantly, I remain dedicated to fighting for the future of our place in tech! I hope that you will join me in the fight as well.",
	photoSrc: "/candidatePhotos/Caly Zheng.jpg" ,
	preferences: ["President", "VP Academic"]
			},
	"Melrita Cyriac":{
	name: "Melrita Cyriac",
	email: "melritac@ualberta.ca",
	speech: "Hey everyone! My name is Melrita, and I’m a third-year Computing Science major. I’m super excited to be running for VP Communications and VP Admin this election cycle! Ada’s Team has been such a great space for gender-diverse folks in STEM, and I love how it brings people together, providing opportunities, mentorship, and a sense of community. As someone who’s really passionate about empowering underrepresented groups in tech, I’ve spent a lot of time volunteering and working to create spaces where more people, especially those from gender-diverse backgrounds, feel like they belong in CS. I want to take that passion further by making sure Ada’s Team continues to grow and that our initiatives are accessible to everyone, regardless of their major or background. I consider myself both organized and creative, which I think makes me a great fit for either role. As VP Communications, I would focus on making sure our members always know what’s happening, whether that’s through engaging emails, event promotions, or clear updates about opportunities. I also want to make it easier for new members to get involved and feel like they’re truly part of the community. As VP Admin, I would help keep things running smoothly behind the scenes, planning meetings, keeping track of important discussions, and making sure our exec team stays connected. I would also love to help organize things in a way that makes our initiatives more approachable and open to a wider audience. At the end of the day, I want to help Ada’s Team be as welcoming, organized, and impactful as possible. Whether it’s through communication or internal structure, I would love the chance to contribute to this amazing community. I would be honored to serve as VP Communications, VP Admin and I hope to have your support! Thanks so much!",
	photoSrc: "/candidatePhotos/Melrita Cyriac.jpeg" ,
	preferences: ["VP Communications", "VP Admin"]
			},

	"Samia Rahman":{
	name: "Samia Rahman",
	email: "samia5@ualberta.ca",
	speech: "Hello, my name is Samia! I'm an incoming 4th year student at the UofA. I'm excited to run as an exec for Ada's team because I bring in a strong foundation in leadership, technical expertise, collaboration and management.",
	photoSrc: "/candidatePhotos/Samia Rahman.JPG" ,
	preferences: ["VP Conference - Finance", "VP Conference - Campus Relations","VP Conference - Operations"]
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
