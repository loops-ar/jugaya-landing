import {
  StyledTutorialLayout,
  StyledTutorialLayoutCardContainer,
  StyledTutorialLayoutContact,
  StyledTutorialLayoutHeader,
  StyledTutorialLayoutTitle,
} from "./TutorialLayout.styles";

interface TutorialLayoutProps {}

const TutorialLayout: React.FC<TutorialLayoutProps> & {
  Title: typeof StyledTutorialLayoutTitle;
  Header: typeof StyledTutorialLayoutHeader;
  CardContainer: typeof StyledTutorialLayoutCardContainer;
  Contact: typeof StyledTutorialLayoutContact;
} = StyledTutorialLayout as any;

TutorialLayout.Title = StyledTutorialLayoutTitle;

TutorialLayout.Header = StyledTutorialLayoutHeader;

TutorialLayout.CardContainer = StyledTutorialLayoutCardContainer;

TutorialLayout.Contact = StyledTutorialLayoutContact;

export default TutorialLayout;
