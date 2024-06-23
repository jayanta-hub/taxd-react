export interface SurveyProps {
  renderData: any;
  index: number;
  onBackClick: () => void;
  targetRef: any;
  renderDataLength: number;
  onNextClick: () => void;
}
export interface questionProps {
  question_key: string;
  type: string;
  sub_questions: any;
  required: boolean;
  errorMessage?: string;
  questionObjects: object[];
}
export interface queObjProps {
  question: questionProps;
}
