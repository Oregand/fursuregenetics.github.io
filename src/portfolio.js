/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "FurSure Genetics",
  title: "Hi all, We're FurSure",
  subTitle: emoji(
    "A passionate Canine DNA Testing company 🐾 providing insights into breed identification, health screening, and genetic traits for Irish dogs."
  ),
  resumeLink:
    "https://fursuregenetics.ie/about-us", // Link to about us page
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fursuregenetics",
  linkedin: "https://www.linkedin.com/company/fursuregenetics/",
  gmail: "woof@fursuregenetics.ie",
  facebook: "https://www.facebook.com/fursuregenetics",
  instagram: "https://www.instagram.com/fursuregenetics",
  twitter: "https://twitter.com/fursuregenetics",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const skillsSection = {
  title: "What We Do",
  subTitle: "CUTTING-EDGE CANINE DNA TESTING FOR IRISH DOGS",
  skills: [
    emoji(
      "⚡ Comprehensive breed identification for over 350 dog breeds"
    ),
    emoji("⚡ Genetic health screening for 200+ canine conditions"),
    emoji(
      "⚡ Trait analysis for physical and behavioral characteristics"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "DNA",
      fontAwesomeClassname: "fas fa-dna"
    },
    {
      skillName: "dog",
      fontAwesomeClassname: "fas fa-dog"
    },
    {
      skillName: "microscope",
      fontAwesomeClassname: "fas fa-microscope"
    },
    {
      skillName: "heartbeat",
      fontAwesomeClassname: "fas fa-heartbeat"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "DNA Sequencing", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Genetic Analysis",
      progressPercentage: "90%"
    },
    {
      Stack: "Breed Identification",
      progressPercentage: "98%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Products section

const products = {
  display: true, //Set it to true to show products Section
  experience: [
    {
      role: "Breed + Health Dog DNA Tests",
      company: "Health",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "$159",
      desc: "Breed ID, health and trait insights, and the world’s first canine relative finder — the best dog DNA tests are right here.",
    },
    {
      role: "Breed ID Dog DNA Test",
      company: "Breed",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "$109",
      desc: "Decode your dog’s breed mix with breed breakdown, ancestry, and relative finder."
    },
    {
      role: "Dog Age Test",
      company: "Age",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "$129",
      desc: "It’s time to celebrate your dog’s birthday! The Embark Age Test estimates your dog’s calendar age and birthday by measuring their DNA methylation."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Customer Stories",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Best gift ever!",
      projectDesc: "This year, we decided that in lieu of toys and treats, the best Christmas gift for our dog would be an FurSure Genetics DNA test.",
      footerLink: [
        {
          name: "Shop Breed + Health Test ",
          url: "#"
        }
        //  you can add extra buttons here. 
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Now I know my dog!",
      projectDesc: "I received my DNA test as a birthday gift!",
      footerLink: [
        {
          name: "Shop Bundles",
          url: "#"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Why FurSure Genetics 🏆 "),
  subtitle:
    "We’ll give you more info about your dog than anyone else. FurSure customers get data they need to improve their dogs’ health and wellbeing.",

  achievementsCards: [
    {
      title: "You collect a sample",
      subtitle:
        "Whatever you’re testing for, we’ll give you everything you need to collect a sample with confidence. All FurSure tests include a pre-paid mailer for Irish customers.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "We crunch the data",
      subtitle:
        "Our scientists are the smartest people around. They apply rigorous analysis to each and every sample, so you can be sure you’re getting the most precise results possible.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "Results you can use",
      subtitle: "When you test with Embark, you get more than fun facts. You’ll learn how to improve your dog’s wellbeing starting today, from preventative care to diet and lifestyle changes.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Dogs, We Love to Write and Educate Pet Owners About Canine Genetics.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://fursuregenetics.ie/blog/understanding-irish-dog-breeds",
      title: "Understanding Irish Dog Breeds: A Genetic Perspective",
      description:
        "Explore the genetic makeup of popular Irish dog breeds like the Irish Setter, Kerry Blue Terrier, and Irish Wolfhound."
    },
    {
      url: "https://fursuregenetics.ie/blog/genetic-health-risks-in-irish-dogs",
      title: "Common Genetic Health Risks in Irish Dogs",
      description:
        "Learn about the genetic health conditions that are prevalent in dogs commonly found in Ireland and how DNA testing can help."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "WE LOVE TO SHARE OUR KNOWLEDGE ABOUT CANINE GENETICS"
  ),

  talks: [
    {
      title: "Understanding Your Dog's DNA",
      subtitle: "Webinar for Irish Kennel Club members",
      slides_url: "https://fursuregenetics.ie/webinars/understanding-dog-dna",
      event_url: "https://www.ikc.ie/events/fursure-genetics-webinar"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "DISCUSSING THE LATEST IN CANINE GENETICS AND DNA TESTING",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/fursuregenetics/embed/episodes/The-Importance-of-Genetic-Testing-for-Irish-Dogs-e1mqp3n"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Us ☎️"),
  subtitle:
    "Have questions about our DNA testing services? Our team is here to help!",
  number: "+353 1 234 5678",
  email_address: "woof@fursuregenetics.ie"
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  products,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
