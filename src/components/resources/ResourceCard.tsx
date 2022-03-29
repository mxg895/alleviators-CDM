import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

interface ResourceProps {
  cardTitle: string
  imageLocation: string
  resourceType: string
  resourceId: string
}

const ResourceCard = ({cardTitle, imageLocation, resourceType, resourceId}: ResourceProps) => {

  const navigate = useNavigate();

  const toDetails = () => {
    navigate(`/resource/${resourceId}`);
  };
  return (
    <Grid item xs={12} sm={12} sx={{maxWidth: {md: "48%"}}}>
      <Card sx={{height: "100%"}}>
        <CardActionArea sx={{height: "100%"}} onClick={toDetails}>
          <Grid height="100%">
            <CardMedia component="img" image={imageLocation} alt="" height={140} sx={{objectPosition: "10% 30%"}}/>
            <CardContent sx={{alignContent: "space-between", backgroundColor: "#1E1E1E", display: "grid", height: "calc(100% - 150px)", padding: "0 10px"}}>
              <Typography color="common.white" variant="subtitle1">{cardTitle}</Typography>
              {
                !!resourceType &&
              <Typography color="common.white" variant="body1" component="div">{resourceType}</Typography>
              }
            </CardContent>
          </Grid>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default ResourceCard;
