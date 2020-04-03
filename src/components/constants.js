const adasTeamEventOptions = [
  {
    key: "Autumn Feast",
    text: "Autumn Feast",
    value: "Autumn Feast"
  },
  {
    key: "Intuit Office Tour",
    text: "Intuit Office Tour",
    value: "Intuit Office Tour"
  },
  {
    key: "Halloween Trivia",
    text: "Halloween Trivia (with UACS)",
    value: "Halloween Trivia"
  },
  {
    key: "Scotiabank Sponsor Announcement",
    text: "Scotiabank Sponsor Announcement",
    value: "Scotiabank Sponsor Announcement"
  },
  {
    key: "Tutoring/Office Hours",
    text: "Tutoring/Office Hours",
    value: "Tutoring/Office Hours"
  },
  {
    key: "Coffee && Code",
    text: "Coffee && Code (with Computronix and other companies)",
    value: "Coffee && Code"
  },
  {
    key: "Conference",
    text: "Conference (such as GHC or CAN-CWiC)",
    value: "Conference"
  },
  {
    key: "Thank You Panels",
    text: "Thank You Panels",
    value: "Thank You Panels"
  },
  {
    key: "Networking Workshop",
    text: "Networking Workshop",
    value: "Networking Workshop"
  },
  {
    key: "Git Workshop",
    text: "Git Workshop",
    value: "Git Workshop"
  },
  {
    key: "Python Workshop",
    text: "Python Workshop",
    value: "Python Workshop"
  },
  {
    key: "Virtual: Accessibility Workshop",
    text: "Virtual: Accessibility Workshop",
    value: "Virtual: Accessibility Workshop"
  },
  {
    key: "HackED: Cybersecurity Workshop",
    text: "HackED: Cybersecurity Workshop",
    value: "HackED: Cybersecurity Workshop"
  },
  {
    key: "Science FUNDay",
    text: "Science FUNDay",
    value: "Science FUNDay"
  },
  {
    key: "WISEST Conference",
    text: "WISEST Conference (such as CHOICES or SET)",
    value: "WISEST Conference"
  },
  {
    key: "Millenium Conference",
    text: "Millenium Conference",
    value: "Millenium Conference"
  },
  {
    key: "YEGTech Open House",
    text: "YEGTech Open House",
    value: "YEGTech Open House"
  },
  {
    key: "Ada's Team Taking Over Startup Edmonton",
    text: "Ada's Team Taking Over Startup Edmonton",
    value: "Ada's Team Taking Over Startup Edmonton"
  },
  {
    key: "None, but I look forward to!",
    text: "None, but I look forward to!",
    value: "None, but I look forward to!"
  }
];

const resultCards = [
  {
    avatar: "/images/avatar/large/helen.jpg",
    date: "Joined in 2013",
    header: "Helen",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/matthew.png",
    date: "Joined in 2013",
    header: "Matthew",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/molly.png",
    date: "Joined in 2013",
    header: "Molly",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/helen.jpg",
    date: "Joined in 2013",
    header: "Helen",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/matthew.png",
    date: "Joined in 2013",
    header: "Matthew",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/molly.png",
    date: "Joined in 2013",
    header: "Molly",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/molly.png",
    date: "Joined in 2013",
    header: "Molly",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/helen.jpg",
    date: "Joined in 2013",
    header: "Helen",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/matthew.png",
    date: "Joined in 2013",
    header: "Matthew",
    description: "Primary Contact"
  },
  {
    avatar: "/images/avatar/large/molly.png",
    date: "Joined in 2013",
    header: "Molly",
    description: "Primary Contact"
  }
];

const positionDesc = [
  {
    President:
      "Responsibilities include: Act as Chair of the Executive Committee, set a strategic direction for the Group, possess signing authority on the group bank account, act as part of the Election Committee, be responsible for arranging meeting agendas, ensure executives are not falling behind in their duties and help out when necessary, take mandatory annual President’s training through Student Group Services (SGS),  re-register the Group through Student Group Services (SGS), and complete Risk Management through Student Group Services (SGS). Nominee must have held an Executive Position in the previous Academic Year (2019-20) OR be approved by the Executive Committee.",
    Administration:
      "They would be responsible for organizing and planning meetings, recording meeting minutes, maintaining internal communications within the Executive Committee, hosting executive meetings in the absence of the President, and acting as part of the Election Committee.",
    Academic:
      "They would be responsible for scheduling Ada’s Base office hours and tutoring services, collecting information regarding student struggles and concerns, and advocating for changes on behalf of students to the department to help improve students’ academic experiences. ",
    Finance:
      "They would be responsible for writing cheques to reimburse members for authorized purchases, setting a budget that is approved by members of the Executive Committee, tracking all incoming and outgoing cash flow for an annual budget report and audit purposes, presenting retrospective budget for the previous fiscal year at the Annual General Meeting, and finding and applying for grants used by the student group for operations. Must take Mandatory Annual Treasurer’s training through Student Group Services (SGS). ",
    "Digital-Media":
      "They would be responsible for maintaining the website, blog, social media, and Ada’s Base whiteboard/bulletin board. They would also collaborate with VP Communications in making posters and advertising for events. ",
    Communications:
      "They would be responsible for tracking membership (i.e. tracking active members that are on the mailing list and have attended an event in the current Academic Year), sending out and crafting weekly/monthly emails about opportunities to members, collaborating with VP Digital Media in making posters and advertising for events, and reading and replying to emails. ",
    "Campus-Outreach":
      "They would be responsible for acting as a liaison between Ada's Team and other student groups on campus with similar goals or missions, leading contact for Student Group Services (SGS) and BearsDen, being the main point of contact for internal university events such as Science Orientation, Clubs Fair, and WISEST CHOICES conferences, and working with VP Industry Outreach to organize and plan events with the rest of the Outreach Team. ",
    "Industry-Outreach":
      "They would be responsible for liaising with companies and industry partners to organize events at the University of Alberta, helping with organizing events on campus to enrich members’ university experiences and to foster a strong sense of belonging within the community, and working with VP Campus Outreach to plan events with the rest of the Outreach Team.",
    "Conference-Operations":
      "They would be responsible for booking accommodations and planning transportation at conferences in foreign cities, coordinating flights to and from the event, and handling other logistics in the conference city. Must be available from May to August.",
    "Conference-Relations":
      "They would be responsible for determining what the Department would like to see from Ada's Team, collaborating with the Chair of the Department and any Faculty Advisors regarding the best way to put forth efforts, bringing any promotional materials from the University of Alberta to the conference to put in swag bags (e.g. postcards, pens, etc.), hosting University of Alberta events at the conference (e.g. panels, tech talks, research posters, etc.), and being the first point of contact for Faculty who want to send student representatives to the conference. Must be available from May to August.",
    "Conference-Finance":
      "They would be responsible for applying for grants, talking to professors regarding fundraising for conferences, and handling reimbursements for students attending conferences. Must be available from May to August."
  }
];

const candidates = [
  {
    email: "patenio@ualberta.ca",
    name: "Katherine Patenio",
    speech:
      "Hi everyone! My name is Katherine Patenio, and I am currently VP Conference Internal at Ada’s Team. I am running for VP Admin and VP Conference Relations (new name for my current role).\n\nFor those who don’t know me, I am an undergrad CS student minoring in French, and I’ve been an exec since November 2018. Ever since I’ve joined Ada’s Team, I made new friends, learned new skills, and finally found a sense of belonging in CS; in fact, I consider Ada’s Team to be my second family. My main reason for being an exec is to give back to the community that has helped me become who I am today.\n\nI’ve worked with the Conference Team to interview and fund more than 20 students to attend the CAN-CWiC and GHC conferences. Aside from my Conference duties, I represented Ada’s Team in various events and even organized a couple myself, including a successful Intuit office visit a few months ago.\n\nAs VP Admin, I want to try out a new role with new responsibilities. I want our future execs' voices to be heard. I’m also a firm believer in giving people a chance; by being involved in the Election Committee, I can do what needs to be done in order to give others the opportunity to develop themselves and be better leaders.\n\nAs for VP Conference Relations, a lot of my experience transfers over to this role. I’ve already gone through the process of conference planning. I’ve seen what works and what doesn’t; I hope I can also use this knowledge to advise new Conference execs.\n\nOverall, I hope to continue my role as an exec (either as VP Admin or VP Conference Relations); it would mean a lot to me if I could still give back to the community that I call family. Thank you for your time, and I hope you consider me for either position!",
    photoSrc: "/candidatePhotos/KatherineMaePatenio.jpg",
    photoSize: "large"
  },
  {
    email: "bui1@ualberta.ca",
    name: "Monica Bui",
    speech:
      "Hey! I’m Monica a 3rd year CS student running for Conference Relations, VP Communications, and Admin respectively. Just a disclaimer before I start is that you should NOT vote for me if you know me as a person, you should be voting for the best people who could do the job well for Ada’s Team and its mission. I’m so excited to see so many old and new faces running for roles and everyone speaking today is fully capable of doing the job so please take a chance to vote for them!\n\nAnyways back to my actual speech. My journey in Ada’s Team has definitely been a wild ride. I first started hosting office hours way back in late 2017 when the office space was just starting to open their doors up more throughout the day, then it turned into going to GHC, and now fast forward today I got to meet so many new and amazing people from all different backgrounds, it's definitely been an exhilarating experience. I think many execs are surprised that I’m running and to be frank I’ve always been adamant on helping Ada’s Team from the OUTSIDE IN, through office hours and volunteering. But now after going through research, internships, many outside projects, and various industry events and especially going into my last year in uni, I really want to share this wealth of knowledge to the rest of the student body and it’d be totally selfish of me to keep that all to myself. I think my main goal is to help jumpstart the community through sharing my experiences to help better enable students to chase after these amazing tech opportunities. I see that the best way to do that is through helping Ada’s team from the INSIDE OUT instead.\n\nThanks for listening in on my speech and I hope you take the chance to vote for the best person for the position. Best of luck to everyone :)",
    photoSrc: "candidatePhotos/MonicaBui.jpg"
  },
  {
    email: "ataupill@ualberta.ca",
    name: "Lidia Ataupillco ",
    speech:
      "Hello everybody,\nMy name is Lidia Ataupillco. I am in my 3rd year of computing Science. This year I was VP Admin at Ada’s Team where I was responsible for tutoring and room sitting hours.\n\nMy journey with Ada’s Team has been amazing. We have collaborated together in the success of events and our main goal to support diversity in computing, games, and technology at UofA. This club provides us with so many resources from being able to attend Conferences to tutoring. For me, Ada’s Team is like a family in which we all of us support each other and strive for the best, and that’s why I want to continue being part of it.\n\nThe positions I am running for are VP Industry Outreach and VP Admin. I believe I am a good candidate for Industry Outreach because I’m good at networking and connecting with companies. I also enjoy organizing events. In fact, I coordinated the Github Workshop along with another exec. That shows that I’m able to collaborate in groups which we’ll be an important skill when working with the VP Campus Outreach. In addition, this past year I’ve developed the necessary skills that would help me succeed and improve in my role as VP Admin for another year.\n\nThank you so much for your attention and support!!! Have an excellent day!\nLidia Ataupillco",
    photoSrc: "candidatePhotos/LidiaAtaupillcoRamos.jpg"
  },
  {
    email: "riona@ualberta.ca",
    name: "Riona Wiberg",
    speech:
      "My name is Riona Wiberg and I’m really excited to be running for an executive position for Ada’s Team. I am just finishing up my 3rd year here at the U of A and have been watching Ada’s Team from the sidelines ever since I transferred into computer science.\n\nI found myself drawn to this club because being a woman in computer science can feel very isolating but I love that Ada’s Team is making an active effort to make computer science students from all walks of life feel welcome here at the university. All of this influenced my choice to run for an executive position because I am passionate about inclusivity in computer science and would love to work towards making the U of A’s computer science program more accessible and less intimidating for all people.\n\nI can make an excellent addition to your executive team because I have really strong leadership and communication skills. I also have 2 years of experience organizing and hosting outreach events with TeamUP Science, a club on campus that encourages underprivileged youth to consider a future in STEM . This prior experience in event planning will lead me to success in an executive position in Ada’s Team.\n\nLast but not least, I can and will bribe the voters by exchanging photos of my cats for votes (DM me for details).",
    photoSrc: "/candidatePhotos/RionaWiberg.jpg"
  },
  {
    email: "amanda6@ualberta.ca",
    name: "Amanda Nguyen",
    speech:
      "Hi everyone! I’m Amanda and an upcoming fourth year com sci student and I’m running for VP Finance, Administration and Academics. I’ve been with Ada’s team since the Fall semester and have met and tutored so many people from the club. I have nothing but great experiences with Ada’s Team and I volunteered for various events such as AutumnFest and the GitHub workshop. This club has been one that I’ve been looking for throughout my university degree and is one that I would love to put my efforts into. I have experience working with teams and the most important thing I value is communication between all team members. I always make sure that the people I’m working with feel like their voice is valued. On my own, I bring the best quality of work and have it done a few days earlier than usual. I am a very technical person that keeps track of all the little details.\nThis translates to my academic life such as keeping my assignments and code clean with lots of comments for my team members and my personal life such as having my own Excel sheet to keep track of my own finances and an additional app which is why VP Finance is my first choice. I would love to be able to bring the skills I know surrounding tracking and money for Ada’s Team but also learn additional skills on what it would be like to work for a bigger club. I always tell people that Ada’s Team has changed my life. I want to be able to give back to this club that has done so much for me and the best way I know how is to be a part of team that is just as passionate as I am.",
    photoSrc: "/candidatePhotos/AmandaNguyen.jpg"
  },
  {
    email: "chelsea4@ualberta.ca",
    name: "Chelsea Hong",
    speech:
      "The empathy to understand others, integrity to be myself when faced with difficult challenges, and ability to make quick but thoughtful decisions are the three things that make me a great leader for Ada's Team.\nHey my name is Chelsea Hong and I'm running for President, VP Conference - Relations and VP Conference - Operations.\n\nOver the last year as President I've guided Ada's Team through many challenges, and even more happier moments. Although we have accomplished many great things this year such as receiving a grant for $50,000, successfully voiced concerns regarding course structures to the department and much more, my proudest actions as President stems from my dedication to my team. An underlining purpose of a student group should be to help students grow as leaders and as people. Because of this I consciously made efforts to provide feedback to my executive team in the form of a one on one meeting where they were encouraged to reflect on their performance and Ada's Team as a whole. Furthermore, due to my own reflections I know there is so much more for me to do as an executive of Ada's Team. If successfully elected I promise to continue to make impactful and wise decisions that will help Ada's Team flourish.\nMy order of preference is 1. VP Conference - Relations 2. President 3. VP Conference - Operations\nP.S. I wanted the photo to really capture who I am. \"Excited about ice cream\"",
    photoSrc: "candidatePhotos/ChelseaHong.jpg"
  },
  {
    email: "eisha@ualberta.ca",
    name: "Eisha Ahmed",
    speech:
      "Dear Ada's Team members,\n\nAda's Team to me is like a home away from home. I joined in my second year as a tutor and this past year I served as VP Outreach External, now renamed VP Industry Outreach. I organized March Coffee && Code, helped organize the Git workshop, and am currently spearheading the Mentorship Program. During my time on the executive committee, I learned so much about how the team operates, and I made many friendships. It took time, but I eventually learned more and more about my role and how to better serve the team. When I felt bored from school or wanted to procrastinate, I would drop by the Ada's Base and hang around in the wonderful community. I grew to care about Ada's Team such that the team's concerns were my concerns, and the team's success was my success.\n\nMy wish is to serve you again from what I have learned as an executive member, and learn more to excel at my position. Ada's Team is an important part of my identity, and I am proud to be part of such an amazing group.\n\nThank you for being a member!",
    photoSrc: "candidatePhotos/EishaAhmed.jpg"
  },
  {
    email: "yangyi1@ualberta.ca",
    name: "Amy Xiang",
    speech:
      "Hello, I'm Amy! I'm a 4th year computing science student running for the positions of VP-Conference Finance, VP-Conference Operations, and VP-Finance. My preferred position is VP-Conference Finance because I've filled this role since 2018, and with my 2 years of previous experience, I've seen a lot of changes within the process that I would like to fix and streamline in this coming year. As for how I got involved with Ada's Team, and why I would be a good fit for the executive board this year; I first got involved when I was sent to the 2017 CAN-CWiC conference funded by Ada's Team and got to see women within this field succeed in avenues that I didn't think was possible. Since then it's been my mission to send those that are the most vulnerable and those that are hesitant to think that this field is for them, to these conferences so that they can find role models for themselves and realize that success is possible for those coming from their background. This dedication to empowering  those that are diverse in a growing field that often times employers are still prejudiced against, is my passion and why I think I would be a good fit as an executive member for Ada's Team. Please vote for me for VP-Conference Finance, I bring new ideas that will streamline and refresh the system, all while making it easier for my successors to not make the same mistakes that I did. Thank you.",
    photoSrc: "candidatePhotos/AmyXiang.jpeg"
  },
  {
    email: "jusong@ualberta.ca",
    name: "JuSong Baek",
    speech:
      "Hi everyone! My name Is JuSong Baek and I’m a fourth-year computing science student, and I am delighted to say that I am running for VP Digital Media and VP Communications! For those who don’t know, I had the privilege of being an executive as VP Promotions in 2019-2020. Throughout the fall and winter semester, I continued to learn and grow so much in Ada’s Team. I was astounded by the number of things we all achieved, from providing countless tutoring sessions and workshops, to sending countless students internationally to Grace Hopper Celebration and CAN-CWIC, among many other incredible achievements.\n\nTherefore, as VP Digital Media, I am willing to continue designing intricate posters and cards, as well as maintaining all social media accounts to reach out to even more students. As someone who is passionate designing and creating media, I want to facilitate student’s reach to staff and industry members through aesthetically pleasing and effective designs. I am cognizant that social media continues to be an everlasting tool to network and connect with others. As such, with my keen photography and video editing skills, I am determined to attract more students, staff, and industry members in our space.\n\nI will never forget everyone in Ada’s Team who took their time to help others. Now, I am pleased to have been part of this as an executive team and use my skills to help students the same way I was helped as an Ada’s Team participant. As someone who highly values diversity and inclusivity, I really felt that I was part of something big, and intimate at the same time. Ada’s Team continues to grow and become even more diverse than ever before - I do not see it stopping anytime soon. I hope to continue providing help for all students, and closely following Ada’s Team’s spirit.",
    photoSrc: "candidatePhotos/JuSongBaek.jpg"
  },
  {
    email: "almonte@ualberta.ca",
    name: "Amrees Almonte (Am)",
    speech:
      "Hi my name is Amrees or everyone just knows me by Am and I’m a computing science student at the University of Alberta. I joined Ada’s Team September of last year and I can honestly say it has made my life better. Before I joined Ada’s Team my regular school days consisted of going to class and going home. In Ada’s Team I was able to find people who I can call my friends and a safe space where I can be myself. Now my regular school days consist of going to class, tutoring for Ada’s Team, and hanging out at Ada’s Base with my new friends.\n\nMy favorite part about Ada’s Team aside from the people is being a volunteer tutor. I was able to meet so many people and help them through tutoring, now I want to do more by being your VP academics and advocate for students’ academic experience. Ada’s Team has been one of the biggest positive changes in my life and I hope I can do the same for others.",
    photoSrc: "candidatePhotos/AmreesAlmonte.jpg"
  },
  {
    email: "dorsa@ualberta.ca",
    name: "Dorsa Nahid",
    speech: `Hello! My name is Dorsa Nahid and I am ecstatic to bring students new internships and opportunities as your future Vice President of  Industry Outreach or Campus Outreach. I am currently in my fifth year of Computer Engineering and over the past couple of years, I have been involved and on the executive team for many different clubs on campus including the General Faculty Council, a VP for the Iranian Students’ Association, and a VP Engineering Students’ Society. I live for problem-solving, bringing people together and helping others become more successful.  I am here to bring value to Ada’s team with my preference of positions being Industry Outreach first, then Campus Outreach. 
      I have been involved with Ada’s Team for a while. For instance, this past January I presented a workshop on Exploiting Top Web Vulnerabilities on behalf of Ada’s Team at HackED. This was one step I made in my goal in spreading Ada Team’s mission. This workshop was co-presented by a Cyber Security Analyst from Deloitte, and this is just one instance of how I reached out to a big company, brought them to campus, and added them to Ada Team’s network. 
      Through my experience of job hunting and networking at conferences such as Grace Hopper, I know that expanding networks can only be accomplished through fearlessness in contacting as many companies as possible and being unafraid of hearing ‘no’. By taking advantage of my computer engineering network, Ada’s current network of industries, and reaching out to other industries on LinkedIn. I know we can multiply the presence of big tech companies and internships offered to our members, and I am passionate and excited to help other students obtain these opportunities.
      As your future VP Industry Outreach, my focus is to create opportunities and give you access to tech companies you wouldn’t have had outside of Ada’s Team. I will facilitate your networking with different companies, employers, HR, and mentors. I will fearlessly reach out to companies so you can elevate. This club is here for you, so let us provide you with the best opportunities! 
      `,
    photoSrc: "candidatePhotos/DorsaNahid.jpg"
  },
  {
    email: "payas@ualberta.ca",
    name: "Payas Singh",
    speech:
      "Hello everyone!\n\nMy name is Payas, I’m a 3rd year computing science undergraduate and I’m running fro VP Campus Outreach and VP Communications.\n\nTo tell you a little bit about myself, I am currently working as a Resident Assistant in UoA residence services and as a part of my job I am required to be constantly updated with the services and clubs available on campus so that I can provide information and support to my residents. Moreover, as an RA I have learned tp effectively communicate with people of various backgrounds and also collaborate with different organizations to plan monthly events. I feel that these skills would come in handy as VP Campus Outreach. A big part of my job also involves regularly planning and promoting events using social media and posters as well as maintaining constant contact with my residents which would be a big part of being VP Communications.\n\nHowever, the most important thing I’ve learned as an RA, is to understand the needs of a resident and be able to provide support to them. These are the skills that I am the most excited about to bring to Ada’s. I was first introduced to Ada’s team in my second year when I attended one of the monthly meets for helping students out and I was pleasantly surprised by the positive and warm atmosphere. That motivated me to come back as a tutor the next year which made me meet more members of the team. Not long ago I met a few of you at the Hackathon and enjoyed my time a lot. What I love about Ada’s team is that I feel so comfortable with everyone unlike our classes where everything feels competitive. I would love to be a part of such a highly motivated and warm team so that I can help others have a positive experience with Ada’s as well. Thank you !!",
    photoSrc: "candidatePhotos/PayasSingh.jpg"
  },
  {
    email: "csheng2@ualberta.ca",
    name: "Celina Sheng",
    speech:
      "Hi, my name is Celina and I will be going into my third year in the fall. I am running for VP communications. I really enjoy being part of the CS community because there are a lot of clubs and groups to take part in, such as UACS, the programming club, and Ada's team.\n\nI think Ada's team is great for sending out CS related events. I've seen various emails about scholarships, start-up workshops, information sessions with companies like Intuit, activities from other CS related clubs, and more. I want to help out Ada's team to make sure we can keep on showing students their opportunities so that they can get experiences outside of their academics.\n\nThe reason why I think I'm fit for VP communications is because I like sending out emails and organizing them. If I get this position, I will have a new way to chill out from studying.",
    photoSrc: "candidatePhotos/CelinaSheng.jpg"
  },
  {
    email: "boytang@ualberta.ca",
    name: "Diane Boytang",
    speech:
      "Hi, I'm Diane and I'm going into my last year of CS at the U of A. I'm running for the positions of Conference External, Communications, and Digital Media but the main position I am interested in is Digital Media. I used to be an Ada's Team exec, in the 2018/2019 academic year, but I did not run for exec in 2019/2020 due to other responsibilities I had which were taking up most of my time. However, I now have plenty of time to dedicate to Ada's Team so I have decided to run again this year. \n\nThere are many reasons why Ada's Team is important to me. First, I have met many of my friends at university through Ada's Team. Ada's Team has given me the opportunity to travel to so many different places and attend conferences which have made me feel empowered as a woman in computing science and I want to help others feel the same way. Finally, people from Ada's Team have always been there for me. Recently I went through a very difficult time in my life and I tried to cope with this by shutting myself off from my friends, but everyone in Ada's Team was still there to support me. Ada's Team really means the world to me which is why I am so passionate about being an exec and giving back by volunteering my time. \n\nI am primarily running for VP Digital Media because it is most similar to my previous exec position which was VP Promotions and I have all the necessary skills to do well in this position. During my past time as VP Promotions the Ada's Team Instagram account doubled in followers. The main reason why I am passionate about this role is because I understand the potential social media has to make a positive impact on people's lives, and in the past my favourite thing about being an exec was that I was able to spread Ada's Team's values of inclusitivity and diversity through social media. Furthermore, I have lots of experience doing visual design, including being hired as an independent contractor to do UI design for a project for the National Research Council of Canada. This translates into strong skills when it comes to designing advertising for Ada's Team events, such as posters. \n\nThank you all for your time and I hope you will consider voting for me for an executive position.",
    photoSrc: "candidatePhotos/DianeBoytang.jpg"
  },
  {
    email: "hagi@ualberta.ca",
    name: "Zubier Hagi",
    speech:
      "For those who are not familiar with me, my name is Zubier Hagi and I plan on running for VP Conference Relations, VP Conference Operations, and VP Industry Outreach in the 2020-2021 school year.\n\nLooking back, when I took my very first computing science course, I noticed it was a lot to take in as a student. From the unrealistic expectations and demands to the relentless number of hours spent studying in solitude by cramming concepts for a midterm or final. When you think about it though, it was quite worth it as it opened up different opportunities and perspectives that I may have never experienced if I hadn’t chosen this school.\n\nDuring these last few years, I’ve been wanting to give back by being supportive and friendly to my fellow students. Yes, I may be a bit of an introvert or not well-known, however I promise to promote diversity in computing, games and technology along by providing assistance to everyone as much as a I can. By being a representative of Ada’s Team, I will try my best to shed my knowledge and experience for other as we all adapt to challenge ourselves to be better every day.",
    photoSrc: "candidatePhotos/ZubierHagi.jpg"
  },
  {
    email: "xxiang2@ualberta.ca",
    name: "Xinyue Xiang",
    speech:
      "Hello! Everyone! I am Rex Xiang, a third year Computer Science student. I worked for Ada’s Team since February 2018 and my past position is VP Events and Outreach Internal. This year I am going to run for VP Academic and Campus Outreach. The main reasons for voting me are: first, I am the scholar of Peter laughed leadership college, I have good skills in leadership and collaboration. Also, I was involved with my college’s mentorship program, so I know how to help our Ada’s Team mentorship program next year. If necessary, I will ask my college for collaboration and support us! Second, I am good in academic, we are using the elections app today, I am the second contributor of this app. I will be the ideal candidate of managing the tutor program and also since lots of my Chinese are good in Programming, as the commit, I will ask them to get more involved with Ada’s. Third, I am good  in campus outreach, I have good connection with WISEST program leader, I just connected with one founder of them and she is my mentor of the leadership college. Also, I am one of the three beginning members of iGeek, I have good connection with the current president, we can have collaboration in the future. Please vote me! Vote Rex! Thank you!",
    photoSrc: "candidatePhotos/XinyueXiang.jpg"
  },
  {
    email: "wok@ualberta.ca",
    name: "Ian Seng Wok",
    speech:
      "Good afternoon everyone, I am Ian and I would like to have your support to be elected as Vice President of Finance at Ada’s Team. I am a four-year computer science major student and I am currently working as a student coop developer at RBC headquarter. I believe that the VP Finance position requires a person who is well equipped with strong organizational, communication and leadership skills. I have always desired to be in an environment that allows me to utilize and sharpen my skills attained and acquired previously as a student leader at the University of Alberta and volunteer positions. During the last year fall semester, I have worked as a program coordinator at the residence. As I got to work closely with everyone on the team, I have observed and learned some knowledge in budget planning and financial documentation, which I think will be helpful for me to prepare myself for this position. If I am elected, I’d also like to explore more sponsorship as well as collaborations with the external community such as RBC bank as I have learned that RBC Early talent acquisition team has been constantly looking to collaborate with different universities. Finally, I would love to be part of Ada’s team in my last year of university in order to give back to the community and be your VP Finance. Thank you so much for your support.",
    photoSrc: "candidatePhotos/IanSengWok.jpg"
  }
];

export { adasTeamEventOptions, resultCards, positionDesc, candidates };
