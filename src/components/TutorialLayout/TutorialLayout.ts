import {
  StyledTutorialLayout,
  StyledTutorialLayoutCardContainer,
  StyledTutorialLayoutHeader,
  StyledTutorialLayoutTitle,
} from "./TutorialLayout.styles";

interface TutorialLayoutProps {}

const TutorialLayout: React.FC<TutorialLayoutProps> & {
  Title: typeof StyledTutorialLayoutTitle;
  Header: typeof StyledTutorialLayoutHeader;
  CardContainer: typeof StyledTutorialLayoutCardContainer;
} = StyledTutorialLayout as any;

TutorialLayout.Title = StyledTutorialLayoutTitle;

TutorialLayout.Header = StyledTutorialLayoutHeader;

TutorialLayout.CardContainer = StyledTutorialLayoutCardContainer;

export default TutorialLayout;
