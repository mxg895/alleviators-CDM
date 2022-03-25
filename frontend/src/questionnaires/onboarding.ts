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
    description: "Do you think you know enough about chronic pain?",
    type: "checkbox",
    options: [
      {
        label: "I think I know enough",
        value: undefined
      },
      {
        label: "I'd like to learn more about the physical aspects of my pain",
        value: {
          aspect: new Set<Aspect>(["PHYSICAL"]),
          goal: new Set<Goal>(["PAIN_EDUCATION"])
        }
      },
      {
        label: "I'd like to learn more about how my condition impacts my mental health",
        value: {
          aspect: new Set<Aspect>(["EMOTIONAL"]),
          goal: new Set<Goal>(["PAIN_EDUCATION"])
        }
      },
      {
        label: "No, I don’t have any information",
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
        label: "Yes, I do need help with that",
        value: undefined
      },
      {
        label: "I know some resources, but maybe not enough",
        value: {
          aspect: new Set<Aspect>(["PHYSICAL"]),
          goal: new Set<Goal>(["MANAGE_PAIN"])
        }
      },
      {
        label: "No, I don’t help with that",
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
        label: "I feel worried, stressed, hopeless, or even desperate",
        value: {
          aspect: new Set<Aspect>(["EMOTIONAL"]),
          goal: new Set<Goal>(["MANAGE_PAIN"])
        }
      },
      {
        label: "It varies over time",
        value: {
          aspect: new Set<Aspect>(["EMOTIONAL"]),
          goal: new Set<Goal>(["MANAGE_PAIN"])
        }
      },
      {
        label: "I am managing well any stress related to my condition",
        value: undefined
      }
    ]
  },
  {
    description: "Would you be open to external support, either online or in-person, to help you manage your mental health (like peer-support groups)?",
    type: "radio",
    options: [
      {
        label: "Yes, I think external support to help me would be useful",
        value: {
          aspect: new Set<Aspect>(["SOCIAL"]),
          goal: new Set<Goal>(["PEER_SUPPORT"]) // TODO: check if it's peer_support from goal or subCategory
        }
      },
      {
        label: "No, I don’t need those kinds of resources",
        value: undefined
      }
    ]
  },
  {
    description: "Do you feel you are currently receiving enough support from people closest to you for dealing with your pain condition?",
    type: "radio",
    options: [
      {
        label: "Yes, I have the support I need",
        value: undefined
      },
      {
        label: "I have some support, but I’d like more",
        value: {
          aspect: new Set<Aspect>(["SOCIAL"]),
          goal: new Set<Goal>(["PEER_SUPPORT"]) // TODO: check if it's peer_support from goal or subCategory
        }
      },
      {
        label: "I have almost no support from others",
        value: {
          aspect: new Set<Aspect>(["SOCIAL", "EMOTIONAL"]),
          goal: new Set<Goal>(["PEER_SUPPORT", "MANAGE_PAIN"]) // TODO: check if it's peer_support from goal or subCategory
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
          subcategory: new Set<SubCategory>(["READING"]) // TODO: check if this is indeed changed
        }
      },
      {
        label: "Resources I can print out",
        value: {
          subcategory: new Set<SubCategory>(["READING"]) // TODO: check if this is indeed changed
        }
      },
      {
        label: "Websites and Apps",
        value: {
          subcategory: new Set<SubCategory>(["WEBSITE"])
        }
      },
      {
        label: "Physical products",
        value: {
          subcategory: new Set<SubCategory>(["DEVICE"]) // TODO: check if this is indeed changed
        }
      }
    ]
  }
];

export default OnboardingQuestionnaire;
