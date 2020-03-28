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

export { adasTeamEventOptions, resultCards, positionDesc };
