export const research  = [
  {
    id: 1,
    title: 'Population Modeling-2020',
    message:["Analyzed a Length-Structured Density-Dependent Model " +
    "to determine long term behavior of an invasive fish species. " +
    "This work resulted in a paper submitted to the Rose-Hulman Undergraduate Mathematics Journal.",
    "Research mentor: Richard Rebarber, University of Nebraska-Lincoln. "],
    links: [
      {desc: 'Link to Paper', link: 'https://academicdocs.s3.amazonaws.com/FishLengthSimulationPaper+(2).pdf',type:'url'},
      {desc: 'Link to Slides/Poster', link: 'https://academicdocs.s3.amazonaws.com/UCARE.pdf', type:'url'},
    ],
  },
  {
    id: 2,
    title: 'Gerrymandering-2019',
    message:["As part of a capstone course at the University of Nebraska-Lincoln "+
    "I did research on detecting gerrymandering using the "+
    "Markov-Chain-Monte-Carlo method. This work resulted in a paper and a presentation. "+
    "An article in the Lincoln Nebraska newspaper describes the work done in this course.",
    "Research mentor: Richard Rebarber, University "+
    "of Nebraska-Lincoln."],
    links: [
      {desc: 'Link to Nebraska article', link:'https://www.math.unl.edu/mitc-gerrymandering', type:'url'},
      {desc: 'Link to UNL article', link:'https://journalstar.com/news/local/education/following-gerrymandering-court-cases-unl-class-looks-at-the-underlying-math/article_7f1b248b-8fd3-5bb3-83f4-33a171d612ac.html', type:'url'},
      {desc: 'Link to Code', link:'https://github.com/geighz/MATH435', type: 'url'},
    ],
  },
  {
    id: 3,
    title: 'Hat Guessing Game-2020',
    message:["During the Summer of 2020, I participated in a REU done remotely from "+
    "Yale University. The focus was to analyze variations of Hat Guessing Games, "+
    "my variation was to analyze the solution to the one of the common themes posed "+
    "by Butler, Hajiaghayi, Kleinberg, and Leighton.",
    "Research mentor: Patrick Devlin, Yale University"],
    links: [
      {desc: 'Link to paper studied', link:'https://epubs.siam.org/doi/abs/10.1137/060652774?journalCode=sjdmec',type:'url'},
      {desc: 'Link to code used', link:'https://github.com/geighz/Hat-Guessing-Game-PolyMath-Reu-2020',type:'url'},
    ],
  },
]
export const positions = [
  {
    id: 1,
    title: 'NSF Stem Connect Mentor',
    message:[" Worked with UNL/SCC/WNCC colleges in Nebraska, "+
    "mentoring 21 younger students in (or planning to major in) a STEM field"],
    links: [
      {desc: 'Link to Program', link:'https://scimath.unl.edu/stem-connect/',type:'url'},
      {desc: 'Link to Personal Bio', link:'https://www.math.unl.edu/profiles/geigh-zollicoffer',type:'url'},
    ],
  },
  {
    id: 2,
    title: 'C+/C Undergraduate Teaching Assistant',
    message:["Held office hours, graded labs, and assignments relating to C+ programming. " +
    "In charge of helping students finish projects, and lab sessions."],
    links: [
      {desc: 'Link to Program', link:'https://cse.unl.edu/learning-assistant-program',type:'url'},
    ],
  },
  {
    id: 3,
    title: 'Student Money Management Office Assistant',
    message:["Delivered presentations to students and parents about budgeting practices "+
    "and coordinated one on one meetings with students who struggled with financial issues."],
    links: [
      {desc: 'Link to Program', link:'https://www.unl.edu/smmc/student-money-management-center',type:'url'},
    ],
  },

]
export const groups = [
  {
    id: 1,
    title: 'Undergraduate Organizations/Societies/Clubs',
    message: ['\u2015 Broader Communications and Technology Student Group'+
     '\n\u2015 National Society of Black Engineers '+
     '\n\u2015 Society for Advancement of Chicanos and Native Americans in Science  '+
     '\n\u2015 UNL Programming Club '+
     '\n\u2015 IfThen Programming Ethics group '+
     '\n\u2015 Math Alliance '+
     '\n\u2015 Oasis '],
    links: [
      {desc:'', link:'',type:''},
    ],
  },
]
export const conferences = [
  {
    id: 1,
    title: 'Talk given at conference\n\u066D',
    message: [' UNL Undergraduate Research Symposium \n\u066D',
     'SACNAS \n\u066D',
     'Field of Dreams',
     'NCUR 2021 \n\u066D'],
    links: [
      {desc:'', link:'', type:''},
    ],
  },
]
export const skills = [
  {
    id: 1,
    title: 'Upper level courses and Technical Skills',
    message: ['Operating Systems and Kernels in C/C++'+
     '\n\u2022 Data structures and Algorithms 2 '+
     '\n\u2022 Data Mining'+
     '\n\u2022 Unix'+
     '\n\u2022 Elementary Analysis'+
     '\n\u2022 Numerical Analysis'+
     '\n\u2022 Discrete Math'+
     '\n\u2022 Principles of Operations Research'+
     '\n\u2022 Linear Algebra'+
     '\n\u2022 Calculus 1-3'+
     '\n\u2022 Math in the City',
     '\n\u2015 Java'+
     '\n\u2015 C/C++'+
     '\n\u2015 Python'+
     '\n\u2015 SQL'+
     '\n\u2015 JavaScript'+
     '\n\u2015 R'+
     '\n\u2015 ReactJs'+
     '\n\u2015 Matlab'+
     '\n\u2015 Latex'+
     '\n\u2015 Combinatorics'+
     '\n\u2015 Proofs'+
     '\n\u2015 Public Speaking'+
     '\n\u2015 GIT'+
     '\n\u2015 AWS'+
     '\n\u2015 Spring boot'],
    links: [
      {desc:'', link:'', type:''},
    ],
  },
]

export default {
    research, positions, groups, skills
}
