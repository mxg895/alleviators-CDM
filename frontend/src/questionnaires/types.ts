export interface AnswerOption {
    label: string;
    value: any;
}

export interface Question {
    description: string;
    type: string;
    options: Array<AnswerOption>;
}

type Questionnaire = Array<Question>;

/**
 * !Any change to the allowed typs of Aspect, Goal, or SubCategory must
 * be reflected in the backend model for Resource.
 */

export type Aspect = "PHYSICAL" | "SOCIAL" | "EMOTIONAL";
export type Goal = "PEER_SUPPORT" | "MANAGE_PAIN" | "PAIN_EDUCATION";
export type SubCategory =
    |"VIDEO" | "PROGRAM" | "WEBSITE"     | "APP" | "PODCAST" | "READING"
    |"TOOL"  | "DEVICE"  | "SUPPORT_LINE"| "COMMUNITY_PROGRAM" | "PEER_SUPPORT";

export default Questionnaire;
