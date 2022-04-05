import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
// import orderedResources from "../temp/defaultOrder";
import ResourceCard from "./ResourceCard";
import { selectOrderedResources } from "./resourceSlice";

export const StyledLogo = styled.img`
  min-width: 30vw;
  width: 30vw;
`;

const WelcomeCard = styled(Card)`
  &.MuiPaper-root {
    width: 100%;
    background-color: #F2F2F3;
  }
`;

const lowerCaseSuffix = (content: string) => {
  if (content === undefined || content === null) {
    return "";
  }
  const transformedStrParts = content.split("_").map((str) => {
    if (str.length > 1) {
      return str.charAt(0).concat(str.substring(1).toLowerCase());
    }
    return str;
  });
  return transformedStrParts.join(" ");
};

const ResourceList = () => {
  const orderedSummaries = useSelector(selectOrderedResources);
  return (
    <Grid container direction="column" alignSelf="start" mt="50px" width="100%" rowSpacing={4} pb={4}>
      <Grid item>
        <StyledLogo src="branding/pepita_no_tagline.png" alt="pepita log without tagline" />
      </Grid>
      <Grid item>
        <WelcomeCard>
          <CardContent>
            <Typography variant="subtitle1" gutterBottom>Welcome!</Typography>
            <Typography variant="body_xlight">
              {"Here are some recommended resources for you based on your responses."}
            </Typography>
          </CardContent>
        </WelcomeCard>
      </Grid>
      <Grid item>
        <Grid container rowSpacing={4} justifyContent="space-between">
          {orderedSummaries.map((r) => {
            return (
              <ResourceCard
                key={r.id}
                cardTitle={r.title}
                imageLocation={`resource-images/${r.imageName}`}
                resourceType={lowerCaseSuffix(r.subcategory?.[0]) || ""}
                resourceId={r.id}
              />
            );
          })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ResourceList;
