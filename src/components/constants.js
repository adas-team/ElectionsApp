const adasTeamEventOptions = [
  {
    key: "Crash Course/Workshop",
    text: "Crash Course/Workshop",
    value: "Crash Course/Workshop"
  },
  {
    key: "Ada's Base (Discord)",
    text: "Ada's Base (Discord)",
    value: "Ada's Base (Discord)"
  },
  {
    key: "Ada’s Network (Slack)",
    text: "Ada’s Network (Slack)",
    value: "Ada’s Network (Slack)"
  },
  {
    key: "Ada’s Developers",
    text: "Ada’s Developers",
    value: "Ada’s Developers"
  },
  {
    key: "Tutoring/Office Hours",
    text: "Tutoring/Office Hours",
    value: "Tutoring/Office Hours"
  },
  {
    key: "Coffee && Code",
    text: "Coffee && Code",
    value: "Coffee && Code"
  },
  {
    key: "Conference",
    text: "Conference (such as GHC or CAN-CWiC)",
    value: "Conference"
  },
  {
    key: "Ada’s Mentors",
    text: "Ada’s Mentors",
    value: "Ada’s Mentors"
  },
  {
    key: "Ada’s Students",
    text: "Ada’s Students",
    value: "Ada’s Students"
  },
  {
    key: "Ada’s Tutors",
    text: "Ada’s Tutors",
    value: "Ada’s Tutors"
  },
  {
    key: "High School Outreach",
    text: "High School Outreach",
    value: "High School Outreach"
  },
  {
    key: "None, but I look forward to!",
    text: "None, but I look forward to!",
    value: "None, but I look forward to!"
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

const candidates = {
  "Alishbah Farooq": {
    email: "alishbah@ualberta.ca",
    name: "Alishbah Farooq",
    speech: `Hello! My name is Alishbah Farooq and I'm running for the VP Finance and VP Admin position in Ada's Team. I am a third year student Specializing in Math and am also the current VP Finance for Ada's Team! Some fun facts, I like to read fantasy books and stare at the sun because all this daylight seems foreign to me. 

    As VP Finance, I manage all the reimbursements throughout the year, create and present our budget and apply for grants so we can continue putting on great events for you guys. Albeit, it's been a couple years, I was on the executive team of my high school student council where I planned many large-scale events and also took meeting minutes and managed meetings as Director of Internal Communications. I would love to be VP Finance again next year so I can continue to improve my work in the role and continue to get involved in the wonderful initiatives Ada's Team has (hopefully in person).`,
    photoSrc: "/candidatePhotos/alishbah.jpg",
    preferences: [
      "VP Finance",
      "VP Administration"
    ]
  },
  "Ethan Lim": {
    email: "edlim@ualberta.ca",
    name: "Ethan Lim",
    speech: `WHO AM I?
    Ethan, CS Student
    
    EXPERIENCE
    Current: VP Internal UACS, VP External UAIS, Tutor @ Ada’s Team, Mock Interview Host
    Incoming: RBC Intern, UACS President
    WHY I RUN? I like building relationships with others and believe I currently have a unique network. RBC colleagues, AMII speakers from UACS, and potentially many more if we put in the work to reach out!`,
    photoSrc: "/candidatePhotos/edlim.png",
    preferences: [
      "VP Industry Outreach"
    ]
  },
  "Hannah Tellambura": {
    email: "@ualberta.ca",
    name: "Hannah Tellambura",
    speech: `Hi, I’m Hannah Tellambura and I’m in my 3rd year of Computer engineering co-op at UAlberta. I’ve been involved with and a huge fan of Ada’s team since I joined as a general member in my second year. I’m so utterly grateful for the experiences and mentorship I’ve gotten from Ada’s team and its initiatives, especially in getting to where I’m at now. Currently, I’m in Toronto working for Uber as a Software Engineer Intern and will be going to San Francisco next summer to intern for Slack. Previously, I worked at Intuit and this could not have happened had it not been for Ada’s team and its initiatives helping me out so much. That being said, I’ve been blessed with opportunities to network and make connections at these internships - ones that I’d like to leverage if elected for VP Industry Outreach. I’ve always loved events like Coffee && Code and hope to continue those events by reaching out to existing and potential partner organizations to host. I know that University of Alberta students are interested and excited when it comes to industry partners, and I’m ready to show these partners exactly that since our students have a lot to offer as well. I’m excited to bring more professional development opportunities to such an enthusiastic group. So, the plan is to show partners this enthusiasm and to start conversations between UAlberta students.`,
    photoSrc: "/candidatePhotos/hannahwa.jpg",
    preferences: [
      "VP Industry Outreach",
      "VP Communications"
    ]
  },
  "Helen Aquino": {
    email: "haquino@ualberta.ca",
    name: "Helen Aquino",
    speech: `Hello, my name is Helen Aquino! I have served as Ada's Team's VP Digital Media this past year, and it would be an honour to serve you all again as your VP Digital Media for the upcoming 2022-23 year!

    Some highlights of my work as VP Digital Media this year include creating fun merch for our initiatives (namely, Ada's Conferences @ GHC), as well as building up our Ada's Team Discord server as a club staple and homebase for our community throughout the university's shifts from in-person to online (and vice versa). I also had the immense honour of co-leading ProtoJam, Ada's Team's (and Alberta's first) UX/UI Designathon. Not only I developed and upkept a whole new brand identity from the ground up, but I also gained outreach and event planning skills that I could use to support my fellow executives beyond my role' responsibilities. 
    
    I want to continue strengthening Ada's Team's visual presence and branding, both online and in-person, to both our current community members and future members. I believe that a combination of my accomplishments as VP Digital Media and my design experience would make me a good fit to further carry on the role to do so.
    
    Thank you so much for your time, and I hope you consider me again for Ada's Team's next VP Digital Media!`,
    photoSrc: "/candidatePhotos/haquino.jpg",
    preferences: [
      "VP Digital Media"
    ]
  },
  "Justine Ventura": {
    email: "linnrose@ualberta.ca",
    name: "Justine Ventura",
    speech: `Hello everyone, I’m Justine Ventura and I am running for the roles of VP Campus Outreach, VP Industry Outreach, and VP Conference Operations. This past year I served as VP Campus Outreach where I liaised with other campus organizations and gave many presentations to WISEST, HIP, TeamUp Science among others. I was also responsible for promoting the group to the student body through events like Clubs Fair wherein I promoted the club to 100+ new students who joined our newsletter. I also assisted with other Ada’s Team events such as getting speakers for our ProtoJam Designathon and setting up some of our coffee and code sessions by working alongside our VP Industry Outreach. I would love another opportunity to contribute to Ada’s Team and I think I can use what I have learned this year to make the 2022-23 year even better! I plan to increase engagement with our members through incentives. For example, attending 3 c&c or other Ada’s team events in a semester will give you a chance to win prizes. I also want to conduct a survey at the start of the year to see what events people are most likely to attend and would be interested in. Finally, I want to expand our campus outreach and make our presence more known through social events like game nights and mixers. I think community building is a key aspect of Ada’s Team and it would be great to create that tight-knit community feel. I think that I am a responsible and dedicated leader and I hope you vote for me! Thank you.`,
    photoSrc: "/candidatePhotos/linnrose.jpg",
    preferences: [
      "VP Campus Outreach",
      "VP Industry Outreach",
      "VP Conference - Operations"
    ]
  },
  "Katie Lin": {
    email: "chiachen@ualberta.ca",
    name: "Katie Lin",
    speech: `Hello everyone, my name is Katie, I’m the current VP Industry Outreach at Ada’s Team, and I’m running for VP Conference Finance and VP Conference Campus Relations. Over the past two semesters, I got the chance to work with a team of great execs. Together, we were able to bring 8 Industry workshops (AKA Coffee && Code sessions) from some pretty big companies, like Intuit, Google Deepmind, & Microsoft, for our club members. I really enjoyed hosting these workshops and serving our community, and I want to continue my service for the upcoming year as well. 

    Going from Industry outreach to Conference related positions may seem like a stretch at first glance, but both roles share common core elements of event hosting, organization, and outreach. As a VP for the Grace Hopper Conference, I will be the liaison between our sponsors, the faculty, and GHC attendees. I know that GHC provides invaluable industry resources, company connections, and networking opportunities, as a 2 time attendee myself. So it is my goal to secure funding to send as many applicants to GHC as possible. I will also heavily promote GHC to Ada’s team members and other interested students. Carrying over some industry connections from this year, I can help host technical workshops for outgoing attendees, as well. Lastly, I will coordinate the distribution of awesome GHC swag. I want every attendee to feel prepared for the conference, so that they can thrive and be at their best when networking & career opportunities arise. 
    
    Having learned the do’s and don’t’s of being an Ada’s Team exec, I believe my current experience will help me succeed in the roles I’m running for. Please vote for me as VP Conference Finance OR Conference Campus Relations, and I will do my best to deliver a smooth, pleasant conference experience to you! 
    
    Thank you : )`,
    photoSrc: "/candidatePhotos/chiachen.jpg",
    preferences: [
      "VP Conference - Finance",
      "VP Conference - Campus Relations", 
      "VP Conference - Operations"
    ]
  },
  "Khushi Shah": {
    email: "khushi3@ualberta.ca",
    name: "Khushi Shah",
    speech: `Hello! My name is Khushi and I am running for VP communications and VP academics. I am in my second year majoring in Computing Science and pursuing a minor in Psychology. I am really passionate when it comes to problem solving, especially applying it to the real world. Last year, when I had just started my university journey, with all the Covid-19 spreading and everything being remote. Ada's team student slack was the very first server I joined. I was able to get in touch with a very nice tutor and was able to communicate with so many other students. That's when I first decided I wanted to join this team and help make a difference to this wonderful CS community! I believe I would be a great fit for either role. I want to put forward all of my skills and knowledge that I have learned, to help make a difference. Thank you!`,
    photoSrc: "/candidatePhotos/khushi3.jpg",
    preferences: [
      "VP Communications",
      "VP Academics"
    ]
  },
  "Mariam Ayinde": {
    email: "ayinde@ualberta.ca",
    name: "Mariam Ayinde",
    speech: `Hi, my name is Mariam Ayinde and I'm a 4th year computing science student. I am interested in the role VP conference operations/ Vp campus outreach. I have variety of experience in many different roles ranging from project manager, club executive (Augustana campus), to being a school representative at Augustana campus. All these roles developed my organization, communication and leadership skills. After taking a look at the job description, I am confident that I have the ability to positively impact ADA's Team.`,
    photoSrc: "/candidatePhotos/ayinde.jpg",
    preferences: [
      "VP Conference - Operations",
      "VP Campus Outreach"
    ]
  },
  "Nadeen Mohamed": {
    email: "nadeen@ualberta.ca",
    name: "Nadeen Mohamed",
    speech: `Hi all, my name is Nadeen – I am your president this year and am hoping to be your president again next year! It was an unprecedented pleasure serving you this past year and I really hope to continue some of the work that we started. My main focus this year was maintaining and improving some of the already amazing initiatives that we led. We also had our share of new things, namely the ProtoJam designathon, which was so fun to organize. I am so proud of the team and all that we accomplished, and I hope we can continue to accomplish these amazing feats!

    Unfortunately, and I am sure most of you are aware, but there has been a consistent pattern of misogyny in our very own department, and that has become more clear to me during my presidency. I am so glad that a lot of you are comfortable in the safe spaces that we provide, and while it is a pleasure serving you, it is always so heartbreaking to hear what many of you have to go through as students. This is why Ada's Team is so important to me – without this group, I genuinely believe that I would have left my program.
    
    So, what am I planning to do about it? Well, I'm glad you asked, because I will need everyone's help to make our learning environment inclusive to all. First, I would like to make Ada's Team known to more people, that way our great community can be a safe space to even more people. Second, I would like to work with our department to figure out what we can do together to tackle this issue. Third, and this one will be exciting to the job-seeking folks here, I would like to partner with more organizations that share our vision to make sure that our members have access to nurturing work environments as well as learning environments. And lastly, but certainly not least, I want to hear more of your thoughts and experiences – I would like to start a conversation that accounts for as many diverse perspectives as possible. I'd like to create an anonymous form on the Ada's Team website where you can come with all of your wonderful ideas and infuriating frustrations, and I would like to address them.
    
    Thank you all for your time, and I hope I convinced you to give me your vote!`,
    photoSrc: "/candidatePhotos/nadeen.png",
    preferences: [
      "President",
      "VP Academics", 
      "VP Administration"
    ]
  },
  "Saba Gul": {
    email: "gul@ualberta.ca",
    name: "Saba Gul",
    speech: `Hi! My name is Saba and I had my first year with Ada's as their public relations manager which has been an amazing experience. through which I have had the privilege of being involved in GHC, and I've also witnessed the great work everyone does on the team. I am running for VP Admin and VP Communications because I feel these are areas that I would be able to greatly contribute to. Working in admin or communications share similarities with my current role but would also enhance my experience and enable me to grow and learn. I am also looking forward to creatively collaborating with fellow team members on projects and aiding with administrative tasks. Thank you for nominating me and I appreciate your consideration.`,
    photoSrc: "/candidatePhotos/gul.jpg",
    preferences: [
      "VP Administration",
      "VP Communications"
    ]
  },
  Abstain: {
    name: "Abstain",
    photoSrc: "/AdaBotSleep.png"
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
  reelectedPositions
};
