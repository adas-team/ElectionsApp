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
	"Amendment to Constitution - Apr 1, 2026":{
		name: "Amendment to Constitution - Change of Mission Statement & New VP Publicity Exec Position",
		email: "adasteam@ualberta.ca",
		speech: "Amendments (changes) to the group's constitution have been proposed. Highlights include a change of our mission statement and a new VP Publicity executive role. This will be open to vote in our election. View the full proposal: https://docs.google.com/document/d/13qAM49OC36oHzMVknxDV6KASpn1yhsj-V4a4JN5BCfo/edit?usp=sharing",
		photoSrc: "AdaBotSleep.png" ,
		preferences: ["Amendment to Constitution - Change of Mission Statement & New VP Publicity Exec Position"]
	},

	"Aara Likun Vanatia": {
		name: "Aara Likun Vanatia",
		email: "vanatia@ualberta.ca",
		speech: "Hi everyone, my name is Aara Vanatia, and I’m running for VP Finance, Industry Outreach, and President. I currently serve as VP Finance on Ada’s Team, where I manage budgeting, expense tracking, reimbursements, and grant applications. Through this role, I’ve helped ensure our team has the financial support and structure needed to run events smoothly and create opportunities for our members. But beyond the role itself, what has stood out to me most is the purpose behind everything we do. Ada’s Team’s mission of promoting diversity in STEM—especially in tech—and uplifting gender minorities is something I deeply connect with. Being part of this team, I’ve seen how every decision is intentional. Whether it’s organizing events, securing funding, or building partnerships, we’re always asking: how can we make tech more accessible and inclusive? That’s exactly the kind of impact I want to continue building. If elected, I want to strengthen our funding strategy, expand industry outreach, and create more opportunities for our members to grow, connect, and succeed in tech. I want to build on the strong foundation we already have and push it further. Most importantly, I want to continue working alongside this passionate and driven team to make a meaningful difference. I’d love the opportunity to continue contributing, and I hope to earn your support. Thank you.",
		photoSrc: "/candidatePhotos/Aara Likun Vanatia.jpeg",
		preferences: ["VP Finance", "VP Industry Outreach", "President"]
	},

	"Jasmine Switzer": {
		name: "Jasmine Switzer",
		email: "jaswitze@ualberta.ca",
		speech: "Hi everyone, I’m Jasmine and I’m so excited to be nominated and running in this year’s elections. I started my after degree in computing this year, and I was honestly pretty nervous. Starting over in a new field and not knowing anyone can feel really intimidating. But getting involved with Ada’s Team really changed that for me and almost immediately helped me realize I wasn’t going to be doing this alone. University can feel overwhelming for anyone, and it’s easy to feel like you’re the only one struggling. One of the things I’m most grateful for about this club is how intentional it is about creating spaces where you can meet people, find guidance, ask questions, study together, and just feel supported. It feels like you have someone in your corner and a team that truly wants you to succeed. That sense of community is really why I want to get more involved. I’ve seen the amazing work that is already being done, and I would love to help continue building on it and supporting students however I can. Outside of Ada’s Team, I’m involved as a U of A ambassador and with social media teams. I genuinely enjoy connecting with students and being a friendly face when someone might need one. Many people feel excited but also scared coming into programs like computing, and I love having the chance to talk with them about what university is actually like and help them learn about the clubs, events, and opportunities that exist here to help ease any stress or concern. If I am elected, I want to continue helping more students find this community and make sure they know where to turn when they need help. Sometimes those opportunities exist, but people just don’t know where to find them or haven’t found an event or space that connects with them yet. I want to listen to students’ needs, take their feedback seriously, and use the resources available to help give them the best chance to succeed. Whether that means having a safe space to be, someone to talk to, or support with academics and future careers. Ada’s Team helped me feel like I belonged here, and I would really love the chance to help create that same experience for other students. Thank you.",
		photoSrc: "/candidatePhotos/Jasmine Switzer.jpeg",
		preferences: ["VP Campus Outreach", "VP Academic", "VP Digital Media"]
	},

	"Kashish Gupta": {
		name: "Kashish Gupta",
		email: "kgupta5@ualberta.ca",
		speech: "Hello everyone, My name is Kashish and I am currently in my third year of Computer Science, and I’m running again for VP Academic on the Ada’s team. I served in this role last year, and in that time, I had the incredible opportunity to lead our tutoring program and mentorship initiatives. And I also hosted study halls where tutors and students could come together, drop in, ask questions, de-stress, and connect, especially during those tough pre-midterm or final weeks. I’ve met so many amazing people who wanted to explore and grow more in tech. I first got involved with Ada’s team in my second year, when I attended CAN-CWiC. And last year, I was fortunate enough to go to GHC.It wasn’t just about the tech, I built friendships and met so many people who were there to provide guidance and help me through and it made me discover a whole community. I learned about so many technologies and how to keep upskilling, and that opened up a world of possibilities for me. As an international student, I know how hard it can be to figure out a new education system. That’s why mentorship means so much to me. I was a Faculty of Science mentor in my second year, helping first-years navigate their new journeys, and that’s something I still value deeply. And at Ada’s team I was fortunate enough to lead this initiative and pair people up with some great mentors! Ada’s team has always been about lifting up underrepresented groups in tech, and as a brown woman in this field, I know firsthand the challenges we face. This role, and the work we do, is so close to my heart because I know what it’s like to need a support system. If you elect me, I will continue to foster that sense of belonging, provide guidance through tutoring, and other initiatives we have! I’m also running for VP Admin, so I’ll be managing the logistics and coordination of all our incredible initiatives. With your support, I know I can help this team grow, connect, and make an even bigger impact. Thank you so much, and I would be honored to have your vote.", 
		photoSrc: "/candidatePhotos/Kashish Gupta.jpg",
		preferences: ["VP Academic", "VP Admin", "VP Industry Outreach"]
	},

	"Labeeba Sayed": {
		name: "Labeeba Sayed",
		email: "lsayed@ualberta.ca",
		speech: "Hi! My name is Labeeba and I’m currently in my fourth year at UofA doing Computer Engineering with a specialization in Software! Over the past few years, I’ve been a general member of Ada’s Team, attending events and I am also currently volunteering as a mentor and a member of the Social Media Sub-Committee. Through that, I’ve really seen firsthand the impact this club has in promoting diversity in a field that’s known to lack it and creating a supportive community that empowers underrepresented students. It’s been such a great experience and that’s why I’m so excited to be running for VP Academic, VP Campus Outreach, and VP Industry Outreach. As a fourth year student, I’ve definitely experienced my fair share of academic challenges, especially navigating some of the more demanding and oftentimes confusing computing science courses. Because of that, I understand how critical support systems like tutoring and office hours are. As VP Academic, I would focus on strengthening those resources by making them more accessible, more structured, and truly aligned with what students are actually struggling with. I am also very passionate about actively collecting student feedback and advocating for meaningful improvements within the department. Beyond academics, I also care deeply about building strong connections within and outside the university. As VP Campus Outreach, I would work on strengthening collaborations with other student groups and making sure Ada’s Team has a very strong presence at events like Clubs Fair and orientation, so that way more students can find out about this community early on in their academic journey. And as VP Industry Outreach, I’d focus on creating opportunities for students to connect with industry, whether that’s through networking events, workshops, or collaborations focusing on bridging the gap between school and real-world experience. Ada’s Team played a huge role in helping me find my footing, and I want to give back by helping create that same supportive and empowering experience for others.",
		photoSrc: "/candidatePhotos/Labeeba Sayed.jpg",
		preferences: ["VP Academic", "VP Campus Outreach", "VP Industry Outreach"]
	},

	"Ipsa Manhas": {
		name: "Ipsa Manhas",
		email: "imanhas@ualberta.ca",
		speech: "Hi everyone! My name is Ipsa Manhas and I’m currently a 3rd year Computer Science and Mathematics student at the University of Alberta. Back as a freshman in high-school, I took part in my first-ever robotics competition representing my school, where my team was the first all-girls team to ever take part in such a contest. Although it was a little intimidating initially, especially navigating our way through a platform that is very male-dominant, we were still able to pull through and our team secured the Core-Values award in the regional level. Coming into university, I was a part of the AI4Good Lab’s 2025 cohort which also emphasized on equipping women and gender-diverse individuals with opportunities to grow in artificial intelligence and technology. This academic year, I’ve been serving as the Director of Internal for another student club called Women Empowering Women, where I’ve worked on strengthening internal collaboration and building a supportive community within the club. Last semester, I also had the opportunity to attend CAN-CWiC, a conference that brings together women in computing from across Canada. Being in a space filled with inspiring students, researchers, and industry leaders really reinforced for me how important organizations like Ada’s Team are. So as mentioned, my trajectory has always been alongside inspiring women, and being part of communities that uplift and support one another, and this has always been incredibly meaningful to me. Communities like Ada’s Team have always helped students like myself, feel supported, inspired, and confident in pursuing careers in STEM. I would be truly honored to contribute to that mission and help continue building spaces that uplift and empower women in computing. Thank you for your time!",
		photoSrc: "/candidatePhotos/Ipsa Manhas.jpg",
		preferences: ["VP Communications", "VP Industry Outreach", "VP Conference Operations"]
	},

	"Melrita Cyriac": {
		name: "Melrita Cyriac",
		email: "melritac@ualberta.ca",
		speech: "Hi everyone, My name is Melrita, and I’m currently the VP Communications for Ada’s Team. Over the past year, this role has given me so many opportunities to grow. I’ve really loved being part of communications, whether that was sending out newsletters, supporting outreach efforts, or helping create ways for our community to stay connected and informed. This year especially, I’ve realized how much I enjoy building relationships and connecting people. Through my experience doing outreach for AdaHacks, I had the chance to communicate with sponsors and external partners, and I found that I genuinely loved that kind of work. It pushed me to become more confident, more organized, and more comfortable representing something I care about. I also saw similar growth through my work with NAT, where I’ve had opportunities to speak with stakeholders, navigate different perspectives, and help move ideas forward through collaboration. Those experiences showed me that one of my strengths is being able to connect with people, build partnerships, and create opportunities through those relationships. That’s why I’m interested in the VP Industry Outreach role. I still really value communications, and it’s a role that has meant a lot to me, but based on how much I’ve grown this year and the skills I’ve developed, I feel ready to try something new. I’d love the opportunity to help Ada’s Team build stronger connections with industry partners, organize meaningful events for students, and contribute to creating an even stronger sense of community on campus. Thank you.",
		photoSrc: "/candidatePhotos/Melrita Cyriac.jpg",
		preferences: ["VP Industry Outreach", "VP Communications"]
	},

	"Fatima Khalid": {
		name: "Fatima Khalid",
		email: "fkhalid3@ualberta.ca",
		speech: "Hello! My name is Fatima, and I’m running for Ada’s Team because I care about building a supportive and accessible community in computing. This year, I attended the CAN-CWiC conference with Ada’s Team, where I connected with students and professionals across Canada and gained insight into different pathways in tech. More importantly, Ada’s Team has been a huge part of helping me feel like I belong, especially as a woman in STEM, and that’s something I want to give back and create for others as well. I also recently joined the social media volunteer committee, where I’m beginning to contribute to outreach and event promotion. I’m looking forward to taking on more responsibility and helping more students get involved. Outside of this, I’ve volunteered at a senior home where I help run activities and engage with residents, and I’ve been involved in horse riding, which has taught me discipline and consistency. Along with my experience in tutoring and leadership roles, these experiences have helped me become more patient, adaptable, and community-oriented. If selected, I want to focus on increasing engagement, making events more accessible, and making sure more students feel like they belong in STEM just like Ada’s Team did for me. Thank you!",
		photoSrc: "/candidatePhotos/Fatima Khalid.jpeg",
		preferences: ["VP Industry Outreach", "VP Conference Campus Relations", "VP Academic"]
	},

	"Ria Ahir": {
		name: "Ria Ahir",
		email: "rahir@ualberta.ca",
		speech: "Hi everyone! My name is Ria Ahir, and I’m in my fourth year of Computing Science, specializing in Software Practice. I’m excited to be running for VP Admin, VP Conference Operations, and VP Conference Relations for Ada’s Team. Ada’s Team has had a genuinely positive impact on both my academic and professional journey. Through its conferences, mentorship opportunities, and uplifting community, I’ve found a space that inspires growth and connection. That’s exactly why I want to give back and help strengthen this community for others. I currently serve as Vice President of the Women in Cybersecurity chapter at the university, and I’ve previously held the role of Secretary. These experiences have equipped me with strong organizational, communication, and leadership skills that are directly relevant to these positions. Beyond that, I’ve developed my teamwork and mentorship abilities through the Science Mentorship Program, as well as my work with the Networks Research Group and the VASP Psychology Lab. Across these roles, I’ve learned how to collaborate effectively, stay organized, and support initiatives that create meaningful impact. I’ve also had the privilege of attending two Ada’s Team conferences, where I experienced firsthand the impact of their events and workshops, and I currently serve as a room sitter. If elected, I’m committed to helping Ada’s Team continue to grow as an inclusive, supportive, and empowering space for everyone in the tech community. Thank you, and I would really appreciate your vote, let’s keep building a community where everyone feels they belong and can succeed.",
		photoSrc: "/candidatePhotos/Ria Ahir.jpeg",
		preferences: ["VP Admin", "VP Conference Operations", "VP Conference Campus Relations"]
	},

	"Angela Solanki": {
		name: "Angela Solanki",
		email: "aasolank@ualberta.ca",
		speech: "",
		photoSrc: "/candidatePhotos/Angela Solanki.jpeg",
		preferences: ["VP Conference Campus Relations", "President"]
	},

	"Arien Alabar": {
		name: "Arien Alabar",
		email: "alabar@ualberta.ca",
		speech: "Hey everyone! My name is Arien and I'm running for VP Digital Media for the 2026-2027 year. I've been involved in Ada's Team throughout the year and it has only made me more passionate for promoting diversity in the CS community. I have been wanting to move into a more active role where I'm able to advocate for marginalized groups through design & communication. Where I'm able to spread the message through every reel, poster and update. For me, I've already been doing this. For non-profits promoting mental health and school clubs around the UofA in social media and design. My screen time equates to my top 3 being Canva, Figma and Photoshop. I know what it takes to run an account that people want to engage with from content, different designs and cohesive branding. And I want to bring that to Ada's Team. What I want to bring to the table is greater than just posts and reposts, but more interactive, fun content. Think trending reels, content that gets people engaged and makes Ada's Team feel more alive. Where we're able to show the importance of these communities through creative designs and high end engagement that makes any community a part of Ada's Team. I hope you'll consider voting for me, let's make Ada's Team impossible to scroll past. Thank you!",
		photoSrc: "/candidatePhotos/Arien Alabar.JPG",
		preferences: ["VP Digital Media"]
	},

	"Selena Chainani": {
		name: "Selena Chainani",
		email: "chainani@ualberta.ca",
		speech: "Hello! My name’s Selena, as some of you might already know! I go by they / them pronouns, and am currently VP Digital Media for Ada’s Team for the past year, and been involved with the club before that a bit. I know a lot you keep up with our Instagram and Discord posts, and find out about a lot of our initiatives and opportunities like so! I handle most of that, and I’m glad that it got so many of us together. It’s always been amazing being at the helm of that - effectively, drafting text and creating posts to reach out to students, and build out community. Ada’s has had a wildly successful year this time around, and I recognize so many of the faces in this room as a result. It makes me really happy and accomplished because I know that my work made a difference - that the amount of effort I put into my work is all worth it, when it means that the future generations will continue to be overzealous to take party and do their best. Making opportunities accessible to everyone and anyone alongside being a safe space for students is the reason I keep going. See all of you lighten up Ada’s Base - it’s the best. But yeah, the more I did my work, making these posts and helping run events, the more it made me want to take part in hosting those events, in leading those initiatives. This is why I would like to run for VP Campus Outreach and Academic! Watching Mackenzie and Kashish do their best to get out socials and academic initiatives has been genuinely the coolest thing, because I really want to do it too. I think I can do my best at the frontlines, because building a community and fostering that kind of sense of belonging really means a lot to me. I want to create consistent events and initiatives for those of us that find this space to be home, or keep the current ones going and expand them. I want students to have a better time with their academics, and expand outreach to clubs beyond the usual tech spaces that I would reach out to for advertising our events. As a member of two other clubs beyond this one that have nothing to do with tech but deal with so much of it that I can help them with, I think that bridging that gap will lead to even more exciting opportunities for students. I want our initiatives to be a warm hug for those that need it most. I know that as an international student, I would’ve had so much of a better time had I known about Ada’s Team before, and I want to make sure everyone knows about us and what we have to offer. I want computing science to stop feeling like the only that matters is making it big in big tech, because there’s so much more to it, and even if that is your goal, you deserve to be able to take steps towards it without feeling daunted at the prospect of not being good enough or not having the resources. I want to support as many students as I can. And that’s really all there is to it. Thank you!",
		photoSrc: "/candidatePhotos/Selena Chainani.jpeg",
		preferences: ["VP Campus Outreach", "VP Academic", "VP Digital Media"]
	},

	"Samia Rahman": {
		name: "Samia Rahman",
		email: "samia5@ualberta.ca",
		speech: "Hi everyone, I’m Samia, and I’m really excited to be running for this role. Over the past year, as VP Conference Finance, I played an active role in supporting many of Ada’s Team’s biggest initiatives. I worked on budgeting, resource allocation, and conference planning to make sure our events and opportunities ran smoothly and were financially sustainable. Through working on conferences and other initiatives, I also had the opportunity to create a real difference in people’s lives. Whether it was helping someone attend a conference, gain exposure, or feel more confident stepping into tech spaces, those experiences meant a lot to me. That is something I would continue to prioritize in this role. Through this experience, I’ve developed a strong understanding of how Ada’s Team operates. I’ve seen how different parts of the team come together, what challenges can arise, and what it takes to turn ideas into successful initiatives. That’s why I believe I would be a great fit for this role. I’m not starting from scratch. I already understand the systems we use, the expectations of the team, and how to manage responsibilities effectively. If elected, my goal is not just to continue what we’ve built, but to improve it. I want to make our processes more organized, strengthen communication across teams, and create systems that help everyone do their work more efficiently. Most importantly, I care about the impact we create, and I am committed to continuing to make that impact even stronger. Thank you.",
		photoSrc: "/candidatePhotos/Samia Rahman.jpg",
		preferences: ["VP Conference Finance", "VP Finance", "President"]
	},

	"Mike Jattu": {
		name: "Mike Jattu",
		email: "sjattu@ualberta.ca",
		speech: "Hi everyone, My name is Mike, and I am honored to be nominated for VP Admin, VP Communications, and VP Academic. I believe I am a strong candidate because my experience has helped me build three important qualities: organization, communication, and a commitment to supporting others. I understand that these roles are not just titles—they are about making sure the team runs smoothly, members stay informed, and students feel supported. As VP Admin, I would be organized, dependable, and ready to help with planning, documentation, and keeping things on track. As VP Communications, I would make sure members receive clear, timely, and professional updates. As VP Academic, I would work hard to support students, strengthen academic resources, and help create a welcoming environment where people feel comfortable asking for help. What makes me a good fit is not only my ability to handle responsibility, but also my genuine care for Ada’s Team and its members. I want to contribute in a way that is practical, supportive, and meaningful. Moreover, I have had experience hosting Clubs Fair by UACS as a VP Admin. I would be grateful for your support, and I promise to give my best to whichever role I am trusted with. Thank you.",
		photoSrc: "/candidatePhotos/Mike Jattu.jpg",
		preferences: ["VP Admin", "VP Academic", "VP Communications"]
	},

	"Sai Vashnavi Jattu": {
		name: "Sai Vashnavi Jattu",
		email: "jattu@ualberta.ca",
		speech: "Hi everyone, my name is Sai Vashnavi Jattu, and I’m running for VP Finance. I’m interested in this role because I know how important it is to have someone responsible, organized, and trustworthy handling the finances of our group. VP Finance is not just about numbers. It’s about making sure our members are supported, our events are properly funded, and our money is used in the best possible way. If elected, I’ll make sure reimbursements are handled properly and on time, budgets are realistic and well planned, and all incoming and outgoing funds are tracked carefully for reporting and audit purposes. I also want to actively look for grants and funding opportunities so we can do more as a group without putting extra pressure on our budget. I’m ready to take this role seriously, complete the required training, and make sure our finances stay transparent and well managed. I want members to feel confident that our budget is in good hands. Thank you, and I’d really appreciate your support.",
		photoSrc: "/candidatePhotos/Sai Vashnavi Jattu.jpeg",
		preferences: ["VP Finance", "VP Conference Finance", "VP Communications"]
	},

	"Mackenzie Luong": {
		name: "Mackenzie Luong",
		email: "mackenz3@ualberta.ca",
		speech: "Hi all! I'm Mack and I go by she/her pronouns! I'm unfortunately unable to come to this event due to work but I would love to see the reoccurring and new faces at AGM if I could. I've been with Ada's for the past 3ish years and I'd love to continue this as VP Admin! My main motivation to be VP Admin is that I want to make genuine change in this department. From my many years in student leadership, I have seen courses and initiatives actively make this university better and I want to encourage and push for more. As students, we want change, we want to make an impact, but it's hard to know how to make them. It's one thing to plan, lead, and complete an event for a term in a year. It's another to make long lasting impact and essentially traditions that get passed down through clubs. I've created small yet lasting changes in my TAships and in previous Ada's stuff and I want to do something larger - which is my main goal for my final year with Ada's. I know I won't be here after and I want to make sure this club is in good hands. I'm also hoping to lead and bring back Ada's Developers. There's a gap on hands on work and basic workflow knowledge that students don't get until their first internship, but why wait until then... and also the struggle of even getting your first one! The biggest question I get is ''When should I start?'' and I hope Ada's Developers can be the first step to your much larger future journey. In all, I just want to make a change in a community I care about the most. I wouldn't be spending all my university years at a student group if I didn't care about it. Ada's was what made me feel safe and welcomed and I hope to continue that for many future years. Thank you and stay jolly!!",
		photoSrc: "/candidatePhotos/Mackenzie Luong.jpg",
		preferences: ["VP Admin", "President"]
	},

	"Pragati Puri": {
		name: "Pragati Puri",
		email: "ppuri1@ualberta.ca",
		speech: "Hello. My name is Pragati and I’m really excited to be running with Ada’s team for VP Academic, VP Conference Relations, and VP Campus Outreach. Over the past year, I’ve had the chance to be involved in this club as a volunteer tutor during the Fall 2025 and Winter 2026 semesters. Through tutoring, I’ve been able to interact with many students, understand the challenges we face in our courses, and see firsthand how valuable a supportive community can be. That experience is what inspired me to take a more active role in helping shape what this club can offer to all of us. If elected as VP Academic, I want to strengthen our academic support system by expanding tutoring initiatives, creating more structured study sessions, and ensuring students have the resources they need to succeed. As VP Conference Relations, my goal is to build stronger connections with conferences and organizations so that students have more opportunities to learn, network, and represent our community beyond campus. And as VP Campus Outreach, I want to make sure more students know about the opportunities and support our club provides, while also building collaborations with other student groups on campus. Overall, my goal is simple: to create more opportunities, stronger support systems, and a more connected community for everyone involved. Thank you for your time, and I would really appreciate your support.",
		photoSrc: "/candidatePhotos/Pragati Puri.jpg",
		preferences: ["VP Academic", "VP Conference Campus Relations", "VP Campus Outreach"]
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
