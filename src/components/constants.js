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
	"Amaan Sayyad":{
		name : "Amaan Sayyad",
		email: "amaaniqb@ualberta.ca",
		speech: "Hello everyone, My name is Amaan Sayyad, and I'm an honors student in Computer Science at the University of Alberta. Today, I'm here to share with you why I believe I would be a great addition to the Ada's team. Firstly, my academic journey in computer science has been marked by a relentless pursuit of excellence and a deep passion for technology. As an honors student, I've not only excelled in my coursework but have also sought out challenging projects that have pushed the boundaries of my understanding and skills in computer science. My academic achievements are a testament to my dedication and commitment to my field of study. But what really sets me apart is my unwavering enthusiasm for applying theoretical knowledge to real-world problems. In my time at UAlberta, I've been involved in various extracurricular activities and projects that have allowed me to explore the practical applications of computer science. From developing software solutions for local businesses to participating in hackathons, I've consistently demonstrated my ability to innovate and collaborate effectively. Moreover, I deeply value the importance of community and teamwork in the field of computer science. I believe that the most groundbreaking advancements are achieved not by individuals working in isolation but by diverse teams working together towards a common goal. My experiences have taught me how to be an effective team player, and I've developed strong communication and leadership skills that I'm eager to bring to the Ada's team. I am particularly excited about the opportunity to contribute to the Ada's team because of its commitment to supporting Computing Science students through mentorship, workshops, and networking opportunities. I am passionate about giving back to the community and sharing my knowledge and experiences with others. I am confident that my technical skills, combined with my enthusiasm for mentorship and community engagement, will make me a valuable asset to the team. Thank you for considering my application. I am excited about the possibility of joining the Ada's team and contributing to its success.",
		photoSrc: "/candidatePhotos/Amaan Sayyad.jpeg" 
	},
	"Angela Solanki":{
		name: "Angela Solanki",
		email: "aasolank@ualberta.ca",
		speech: "Hi everyone, my name is Angela and I am a second-year computing science student. I’d like to thank you for giving me your time today, as I talk about why I would like to become part of Ada’s Team. I found Ada’s club at the fall clubs fair in my first year, and was intrigued by the club’s emphasis on diversity and inclusion within computing science and technology. I had the pleasure of attending CAN-CWIC 2022 with them, and it completely changed my decision, as I ended up switching into computer science later that year. It was amazing to see so many people that looked like me at this conference, and it helped regain my confidence as a woman of color and a visible minority. It's easy to get caught up in things we see on the internet and stereotypes about computer science, and while that brought me down for a while, this team and the conference was a pivotal moment for me, and I was able to get over any obstacles I had unintentionally put up for myself. I’d like to talk a bit more about myself, I like to watch marvel movies and crochet in my free time, as well as build legos (I’m working on a huge spiderman daily bugle right now)! In terms of experience, I have been a workshop TA for the computer science workshop from TeamUp Science. I have applied for the following positions: VP of Digital Media, Conference Relations, and Campus Outreach, and I’d like to include that if I were to be elected, my main focus would be to emphasize seeing more diversity in this field, as well as helping it be more accessible to students who may not know of Ada’s Team. Thank you again for your time and consideration.",
		photoSrc: "/candidatePhotos/Angela Solanki.png"
	},
	"Anhad Singh Sarna":{
		name: "Anhad Singh Sarna",
		email: "assarna@ualberta.ca",
		speech: "Good evening everyone, Today, I stand before you with a vision—a vision to revolutionize our conferences and digital interactions by blending meticulous planning with innovative communication. As candidates for VP Conference - Operations and VP Digital Media, I am committed to elevating every aspect of our community's experience. Imagine conferences where every logistical detail is so seamlessly managed that your only focus is the wealth of knowledge and connections at your fingertips. As your VP Conference - Operations, I promise to deliver just that. But why stop at the event's physical boundaries? In our digital era, our community's pulse beats online. As your VP Digital Media, I pledge to transform our digital platforms into vibrant hubs of engagement and inspiration, working hand-in-hand with the VP Communications to ensure our voice not only reaches but resonates with every member.This role is not just about overseeing operations and media; it's about forging a connection between them, creating an ecosystem where information flows freely and our community thrives, both online and off. I am here not just to ask for your vote but to invite you to be part of this transformative journey. Together, we can craft unforgettable experiences and a digital presence that truly represents us all. Let's make this vision a reality. Thank you.",
		photoSrc: "/candidatePhotos/Anhad Singh Sarna.jpeg"
	},
	"Diya Khajuria":{
		name: "Diya Khajuria",
		email: "dkhajuri@ualberta.ca",
		speech: "Hi everybody, My name is Diya. I am in my second year of computer science (yeah 201 couldn't back me out). When I first started university, coming from high school I imagined it to be pretty much the same. A professor, some assignments, LOTS of labs, but over time I realized it didn't end there. I had a voice and a place to find myself. I got a chance to meet so many people, so many different majors, that made me realize the importance of diversity. We are all unique, and complement each other in our growth. This place is more than just a university, It's a community. Now I am done just being at the receiving end of this community and want to give back. Coming together with the executives, I want to help members and other students realize the growth and reach of computer science, and how the challenge is always rewarding. Especially in a degree where networking and collaboration is key but often overlooked, I as an executive would love to take the opportunity to help us flourish together and discover how high-yielding it can be.",
		photoSrc: "/candidatePhotos/Diya Khajuria.jpg"
	},
	"Gurmanpreet Singh Tiwana":{
		name: "Gurmanpreet Singh Tiwana",
		email: "gtiwana@ualberta.ca",
		speech: "Hello! I am Gurmanpreet Tiwana, a first-year Computer Science undergraduate student. I am running for the post of VP Industry Outreach and VP Academic of Ada's Team. As we navigate the dynamic landscape of technology, industry collaboration becomes increasingly crucial. In the role of Vice President of Industry Outreach, I am committed to strengthening the bonds between Ada's Team and the tech industry. By organizing workshops, networking events, and industry talks, I aim to provide our members with valuable insights, mentorship, and opportunities to bridge the gap between academia and the professional world. Equally important is the academic aspect of our journey within Ada's Team. As your potential Vice President of Academic Affairs, I pledge to enhance our educational experience. However, I want to highlight the distinct spirit of Ada's Team above and beyond my plans. If elected, I will ensure that every opinion is heard, every idea is valued, and every member feels a sense of belonging within Ada's Team. In closing, I ask for your support to turn these visions into reality. Let's build bridges, break barriers, and make Ada's Team an even stronger force of innovation, collaboration, and academic excellence.",
		photoSrc: "/candidatePhotos/Gurmanpreet Singh Tiwana.jpeg"
	},
	"Jashanveer Singh Arora":{
		name: "Jashanveer Singh Arora",
		email: "jashanv3@ualberta.ca",
		speech: "Greetings everyone My name is Jashanveer Singh Arora, and I am standing for the position of the VP Conference Relations at the esteemed Ada’s Team. Today, I stand before you to share my journey, the convergence of my past experiences, and the skills that I bring to the table, all of which I am eager to contribute to the incredible legacy of Ada's team. My initial introduction to Ada's team came through enlightening conversations with my seniors. Intrigued by the mentions of its impactful initiatives, I delved into further research online. What I discovered was nothing short of inspiring. Reflecting on my past experiences, I've been fortunate to immerse myself in the realms of technology and leadership from a young age. In high school, I spearheaded the organization of numerous tech events. This role required me to reach out to other schools, coordinate online meetings, and secure sponsorships from local businesses—a testament to my ability to connect, persuade, and mobilize resources for a common goal. These experiences honed my skills in communication, leadership, and project management, preparing me for the challenges and responsibilities of my current role. At the University of Alberta, I continued to expand my horizons by taking on an executive position in the Bhangra Club. Though primarily involved as a choreographer, I frequently stepped up and helped in administrative roles, supporting the team in various capacities. This versatility reflects my belief in the power of adaptability and teamwork, principles I know are echoed within Ada's team. On the technical front, my journey began with the foundational languages of C and C++, gradually transitioning to Python in my current pursuit of a Bachelor's in Computer Science. This progression has not only equipped me with a diverse set of programming skills but also a problem-solving mindset—attributes I am eager to leverage in contributing to the innovative projects and initiatives of Ada's team. In closing, my journey to this point has been shaped by a blend of leadership, community engagement, and technical prowess. I am profoundly inspired by the impact of Ada's team and am enthusiastic about the possibility of contributing to its mission and objectives. With a shared commitment to excellence and innovation, I am confident that together, we can continue to make significant strides in the world of technology. Thank you for the opportunity to speak today, and I look forward to the prospect of collaborating with Ada's team to create a brighter, more inclusive future in tech.",
		photoSrc: "/candidatePhotos/Jashanveer Singh Arora.jpeg"
	},
	"Krupal Shah":{
		name: "Krupal Shah",
		email: "krupalhi@ualberta.ca",
		speech: "Hi everyone, My name is Krupal Shah, and I am a sophomore over here. I am majoring in Computer Science Honors and hope to become the VP ADMIN of Ada’s Team. I have been an active member of Ada’s Team since January of this year but have indirectly been part of it by attending different events throughout the academic year. I have very strong skills that I feel will help me to perform well in the position that I am running for. ADMIN’s job is just like that of a secretary or that of a Vice president and one needs to have sharp interpersonal skills, time management abilities, and high skill in organization. Different competitions and hackathons, extra-curricular activities like being part of various clubs such as Ada’s team, UASTARR, Google Developer Software Club, and Cybersecurity Club and balancing these with academics have enabled me to learn how to manage time effectively and become very skilled in organization. Also, I am currently the deputy team lead of the software team at UASTARR. This experience has allowed me to organize and plan meetings, record and summarize the meetings and maintain internal communications with the other teams and team members within the club. This experience would make me the perfect candidate for this role. If chosen for the job of VP ADMIN, I have multiple ideas like organizing projects with proper Agile methodology and software practices that will help students in the real world, YouTube videos that will help new students easily get on track with the university like that on GitHub or using VSCode, different kinds of competitions on larger scales not just simple hackathons but more specific like creative gaming hackathons or UI/UX design etc. and so many more ideas that I think will make the organization even more successful than ever before. I hope to work with the other exec board members and the rest of the Ada’s Team as well, to encourage more students to attend meetings, as well as the events that are sponsored by the club. Thank you for your time and I hope you will choose the right candidate for this position.",
		photoSrc: "/candidatePhotos/Krupal Shah.jpeg"
	},
	"MacKenzie Luong":{
		name: "MacKenzie Luong",
		email: "mackenz3@ualberta.ca",
		speech: "Hi everyone! I'm MacKenzie and I am currently your VP Communications of Ada's Team! I am a second year in Computing Science and I've been in Ada's Team for almost 2 years and I would love to make that three! I am extremely grateful for all the experiences I've had with the team and the amazing experiences we created for other computing science enthusiasts to enjoy. Ada's Team has supported my journey as a woman of colour ever since I started my undergraduate degree here at the U of A and I would love to give back to the community. I would love to continue creating a safe space and promoting amazing opportunities for all students. Over the past years with Ada's Team I've contacted and collaborated with many other student organizations, such as UACS, Turing Society, and the Computing Science EDI Department. I've helped with events such as the Annual Halloween Event Collaboration with UACS and CompE and coffee socials for undergrads and grad students with Turing Society. Internally, I've aided communication supports for our conference attendees and am the main contact for many campus and industry initiatives. In addition, I handle the newsletter and discord announcements to inform everyone about cool opportunities. I hope I can aid the outreach and promotion for Ada's Team for the next year to come! :)) Thank you!",
		photoSrc: "/candidatePhotos/MacKenzie Luong.jpeg"
	},
	"Mark Maligalig":{
		name: "Mark Maligalig",
		email: "aasolank@ualberta.ca",
		speech: "Hi everyone! I'm Mark (he/they) and I'm running to be your next president! I'm deeply grateful for the opportunity to have served as your president this year, to work with such a dedicated team, and to gain your trust in us. Together, we've hit new milestones and accomplishments, including funding a record-breaking 40 people to attend conferences geared towards empowering women and other gender minorities in tech. But our journey does not end here. With the knowledge and experience I've gained, I'm committed to continue to lead us forward towards diversity, empowerment, and inclusivity. Let's work together to continue our journey, let's keep making impact in the community, and let's stay united for a better future! 💙 Thank you.",
		photoSrc: "/candidatePhotos/Mark Maligalig.png"
	},
	"Ranbir singh":{
		name: "Ranbir singh",
		email: "ranbirsi@ualberta.ca",
		speech: "I am Ranbir Singh, and I am honored to stand before you as a candidate for the positions of VP Communications, VP Conference Finance, and VP Campus Outreach within Ada's Team. As we embark on this journey to promote diversity in computing science, games, technology, engineering, and mathematics, I am reminded of the importance of fostering an inclusive culture where everyone feels valued and respected. At Ada's Team, our mission is clear: to embrace and celebrate diversity in all its forms. We recognize that true innovation stems from a rich tapestry of backgrounds, perspectives, and experiences. Whether it be gender, race, ethnicity, religion, ability, sexuality, or social class, every individual brings something unique to the table. It is our duty to ensure that each voice is heard and each contribution is valued. As VP Communications, I will work tirelessly to amplify the voices of our diverse community, ensuring that our message reaches far and wide. I will strive to create engaging and inclusive content that reflects the vibrant tapestry of our organization. In my role as VP Conference Finance, I will ensure that our events are accessible to all, regardless of financial background. I will work closely with sponsors and partners to secure funding and resources, allowing us to host conferences that are truly representative of our diverse community. Lastly, as VP Campus Outreach, I will focus on expanding our reach and impact within educational institutions. I will collaborate with faculty, students, and administrators to promote diversity and inclusion initiatives, fostering a welcoming environment where everyone has the opportunity to excel. Together, we can build a future where diversity is not only celebrated but embraced as a cornerstone of innovation and progress. I humbly ask for your support in this endeavor, as we work towards a more inclusive tomorrow. Thank you.",
		photoSrc: "/candidatePhotos/Ranbir singh.jpeg"
	},
	"Ridham Singh":{
		name: "Ridham Singh",
		email: "ridhamsi@ualberta.ca",
		speech: "I'm Ridham Singh, a first-year undergraduate majoring in Computer Science and Statistics, and I'm eager to pursue the VP Finance position at Ada's team. I first learned about Ada's team through conversations with fellow students and attending some of the events. Witnessing the impact of Ada's team initiatives firsthand ignited my desire to contribute to their mission.My academic background provides me with a solid foundation in both technical and analytical skills, making me well-equipped to handle the financial responsibilities of this role. With a keen interest in numbers and budgeting, I bring a proactive approach to financial management. My studies in Statistics have honed my ability to analyze data trends, assess risks, and make informed decisions—a crucial skill set for effective budgeting and resource allocation. Moreover, my Computer Science major has instilled in me a logical and systematic mindset, which complements my statistical knowledge in creating robust financial strategies.I believe that sound financial management is essential for the sustainability and growth of any organization. If elected as VP Finance, I am committed to ensuring that Ada's team's financial resources are managed efficiently and transparently. Together, let's strive for financial stability and strategic investment to support our initiatives and empower the CS community. Thank you",
		photoSrc: "/candidatePhotos/Ridham Singh.jpeg"
	},
	"Sargundeep Singh":{
		name: "Sargundeep Singh",
		email: "sargunde@ualberta.ca",
		speech: "Hi, I'm Sargundeep Singh, a first year CS student. I'm applying for the positions of the President/ VP Admin. These words resonate deeply with me as I stand before you today, not just as a first-year student, but as someone driven by the power of unity, passion, and unwavering determination. With fire in my heart and a clear vision in mind, I seek your support in electing me for the role of President/Vice President of Administration. I understand the doubts that may arise due to my status as a first-year student. However, I urge you to look beyond mere years spent on campus and instead focus on the depth of my commitment and the intensity of my passion for our cause. I am not here merely to fill a position; I am here to spark a movement! A movement rooted in inclusivity, curiosity, and relentless drive. Having experienced the challenges of being a newcomer myself, I draw strength from vulnerability and channel it into unwavering determination. If entrusted with the responsibility, I pledge to lead, abiding by the principles of the team. I will work to ensure that every member of our team feels seen, heard, and valued. Being a freshman, I can ensure you that I won't just watch, I'll let my curiosity involve myself into each and every gear of the club, being supportive while learning all the new stuff. But I cannot achieve this alone. I need each of you to stand beside me, lending your strength, ideas, and passion. Together, we can create something truly memorable—a legacy that will endure through the annals of our university's history. I urge you not to vote for me as an individual or someone who's just started, but for twhat this team stands for. Together, let us bring change, start a new, glorious chapter for the club. Thank you for your trust, your faith, and thanks for giving me a chance to stand up for something that I believe in. Let's embark on this journey together and make our aspirations a reality.",
		photoSrc: "/candidatePhotos/Sargundeep Singh.jpeg"
	},
	"Mira Patel":{
		name: "Mira Patel",
		email: "mpatel2@ualberta.ca",
		speech: "Hi everyone, My name is Mira and I am thrilled to be running for President for Ada’s team this year. To share a little bit about myself: I am heading into the final year of my Computing Science Specialization in Software Practice degree. Over this past year, along with being VP Finance for Ada’s team, I have had the pleasure of being elected as the first female President of the Undergraduate Artificial Intelligence Society at our university. Additionally, my commitment to serving the community through initiatives similar to the Ada’s team has been recognized by several notable institutions. Some of these include YMM Parent Magazine's Top 20 Under 20 Award, The Queen's Jubilee Citizenship Award, awarded by our Governor General from the Government of Alberta, and a Leadership in Computing Science award from the University of Alberta for the last 2 years. As a candidate for this position, I promise to bring my strengths and an ambitious spirit. I hope that with my passion towards expanding diversity in STEM, that we can explore a variety of initiatives together this year! For me, running for President for Ada’s team means the opportunity to give back to a cause that I hold so dearly to my heart, and give full credit for bringing me to where I am today. When I was in grade 6, I was inspired by numerous women in STEM by program lead by the non-profit organization. Some of you may be familiar with Girls Inc. and their numerous programs that work to inspire and encourage young girls to enter the world of STEM. Similarly, I see Ada’s team as a platform where all of us can step up to be these role models for our peers and build an empowered community around our cause! We can provide support through initiatives like Mentorship/Tutoring for undergraduates who may need a little extra confidence boost in their capabilities to pursue a STEM career! For those that may be nearing the end of their degrees, we can fuel the future of our workforce to embrace our mission for diversity in STEM and to connect them to industry opportunities! You can count on me to be a friendly, approachable and reliable leader. I promise to be a cheerleader for everyone’s hard work, dedication, curiosity and creativity as we work together throughout the year! As an asset, I bring prior experience in the responsibilities pertaining to various roles within our team. Using that to my advantage, I am committed to provide dedicated support to all areas of work on the team. Additionally, I am confident that my prior experience in leading the UAIS student group, will aid my ambition to take on the role for Ada’s team this year. In my experience as a leader, I have learned the importance of an environment that facilitates collaboration and communication. By fostering a culture that encourages new thoughts and ideas, we can work together to achieve our goals and make a positive impact. With your support, I am confident that we can achieve great things together. Thank you for taking the time to consider my candidacy, and I hope you will consider voting for me as your next President.",
		photoSrc: "/candidatePhotos/Mira Patel.png"
	},
	"Clare Chen":{
		name: "Clare Chen",
		email: "Clare2@ualberta.ca",
		speech: "Hello! My name is Clare and I will be running for the positions of VP Industry Outreach, Campus Outreach, and Communications. The common theme between all these 3 positions is that I would love to be able to facilitate communication between ADA’s team and clearly transfer information. I have been in the Computing science discipline for years, and ADA’s team has been an incredible help to both me and other female or diverse students studying computing science. I would love to be able to give back, and thus my running for today. I thinking I would be an incredible VP Industry Outreach, since I have a lot of experience communicating with industry organizations. I am currently working an Industry position in computing science, where my job requires I speak to many different types of industry professionals. As well, I have previous exec experience as VP finance for another club, which really helps facilitate how to properly communicate with other internal processes within the university. It would be a great honor to be apart of the ADA’s exec team, especially since I have had nothing but wondering experiences with the club. Thank you!",
		photoSrc: "/candidatePhotos/Clare Chen.jpeg"
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
