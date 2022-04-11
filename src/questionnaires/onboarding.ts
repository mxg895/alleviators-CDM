import Questionnaire, { Aspect, Goal, SubCategory } from "./types";

const OnboardingQuestionnaire : Questionnaire = [
  {
    description: "Let’s start off with identifying which form of chronic pain you experience. ",
    type: "checkbox",
    options: [
      {
        label: "Migraines",
        value: undefined
      },
      {
        label: "Lower back pain",
        value: undefined
      },
      {
        label: "Rheumatoid Arthritis",
        value: undefined
      },
      {
        label: "Other",
        value: undefined
      }
    ]
  },
  {
    description: "Do you think you know enough about your chronic pain?",
    type: "checkbox",
    options: [
      {
        label: "I think I know enough.",
        value: undefined
      },
      {
        label: "I'd like to learn more about the physical aspects of my pain.",
        value: {
          aspect: new Set<Aspect>(["PHYSICAL"]),
          goal: new Set<Goal>(["PAIN_EDUCATION"])
        }
      },
      {
        label: "I'd like to learn more about how my condition affects my well-being.",
        value: {
          aspect: new Set<Aspect>(["EMOTIONAL"]),
          goal: new Set<Goal>(["PAIN_EDUCATION"])
        }
      },
      {
        label: "No, I don’t have any information.",
        value: {
          aspect: new Set<Aspect>(["PHYSICAL", "EMOTIONAL"]),
          goal: new Set<Goal>(["PAIN_EDUCATION"])
        }
      }
    ]
  },
  {
    description: "Are you looking for resources that will help you manage the physical pain associated with your condition?",
    type: "radio",
    options: [
      {
        label: "Yes.",
        value: undefined
      },
      {
        label: "No.",
        value: {
          aspect: new Set<Aspect>(["PHYSICAL"]),
          goal: new Set<Goal>(["MANAGE_PAIN"])
        }
      }
    ]
  },
  {
    description: "How are you coping with your condition?",
    type: "radio",
    options: [
      {
        label: "I feel worried, stressed, hopeless, or even desperate.",
        value: {
          aspect: new Set<Aspect>(["EMOTIONAL"]),
          goal: new Set<Goal>(["MANAGE_PAIN"])
        }
      },
      {
        label: "It varies over time.",
        value: {
          aspect: new Set<Aspect>(["EMOTIONAL"]),
          goal: new Set<Goal>(["MANAGE_PAIN"])
        }
      },
      {
        label: "I am managing any stress related to my condition very well.",
        value: undefined
      }
    ]
  },
  {
    description: "Would you be open to external support, either online or in-person, to help you manage your well-being (like peer support groups)?",
    type: "radio",
    options: [
      {
        label: "Yes, I think external support would be beneficial to me.",
        value: {
          aspect: new Set<Aspect>(["SOCIAL"]),
          goal: new Set<Goal>(["PEER_SUPPORT"])
        }
      },
      {
        label: "No, I don’t need those kinds of resources.",
        value: undefined
      }
    ]
  },
  {
    description: "Do you feel like you're receiving enough support from those closest to you in managing your condition?",
    type: "radio",
    options: [
      {
        label: "Yes, I have the support I need.",
        value: undefined
      },
      {
        label: "I have some support, but I’d like more.",
        value: {
          aspect: new Set<Aspect>(["SOCIAL"]),
          goal: new Set<Goal>(["PEER_SUPPORT"])
        }
      },
      {
        label: "I have almost no support from others.",
        value: {
          aspect: new Set<Aspect>(["SOCIAL", "EMOTIONAL"]),
          goal: new Set<Goal>(["PEER_SUPPORT", "MANAGE_PAIN"])
        }
      }
    ]
  },
  {
    description: "When looking for resources on the internet, which kind of content do you find most effective?",
    type: "checkbox",
    options: [
      {
        label: "Videos",
        value: {
          subcategory: new Set<SubCategory>(["VIDEO"])
        }
      },
      {
        label: "Articles",
        value: {
          subcategory: new Set<SubCategory>(["READING"])
        }
      },
      {
        label: "Resources I can print out",
        value: {
          subcategory: new Set<SubCategory>(["READING"])
        }
      },
      {
        label: "Websites and Apps",
        value: {
          subcategory: new Set<SubCategory>(["WEBSITE", "APP"])
        }
      },
      {
        label: "Physical products",
        value: {
          subcategory: new Set<SubCategory>(["DEVICE"])
        }
      },
      {
        label: "Podcasts",
        value: {
          subcategory: new Set<SubCategory>(["PODCAST"])
        }
      }
    ]
  }
];

export default OnboardingQuestionnaire;
