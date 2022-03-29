import styled from "@emotion/styled";
import CheveronLeft from "@mui/icons-material/ChevronLeft";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import BASEURL from "../../baseURL";
// import { StyledLogo } from "../resources";
import { selectDetailById, selectSummaryById, updateResourceDetails } from "../resources/resourceSlice";
import TextButton from "../textButton";

const StyledLogo = styled.img`
  min-width: 30vw;
  width: 30vw;
`;

const StyledImg = styled.img`
  max-width: 100%;
`;

const StyledGrid = styled(Grid)`
  &.MuiGrid-root{
    padding-bottom: 20px;
    > * {
      margin-top: 20px;
    }
    >.image-container {
      display: flex;
      max-height: 40vh;
      >img {
        max-width: 100%;
        object-fit: cover;
        object-position: left 60%;
      }
    }
    >p, ol, ul {
      font-family: sans serif;
      margin-bottom: 0;
    }
  }
`;

interface LinkRendererProps{
  href: string;
  children: React.ReactNode;
}

const LinkRenderer = ({href, children}: LinkRendererProps) => {
  return (
    <a href={href} rel="noopener noreferrer" target="_blank">{children}</a>
  );
};

const ResourceDetail = () => {
  const { resourceId = ""}= useParams();
  const resourceDetail = useSelector(selectDetailById(resourceId));
  const resourceSummary = useSelector(selectSummaryById(resourceId));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/resources");
  };

  useEffect(() => {
    if (!resourceDetail) {
      axios.get(`${BASEURL}/resource/${resourceId}`)
        .then((res) => {
          const data = res.data;
          dispatch(updateResourceDetails({id: resourceId, content: data}));
        })
        .catch((err) => {
          console.error("Unexpected error while getting resource detail:");
        });
    }
  }, [dispatch, resourceDetail, resourceId]);
  return (
    !!resourceDetail && !!resourceSummary &&
      <StyledGrid container direction="column" mt={0} >
        <StyledLogo src="/branding/pepita_no_tagline.png" alt="pepita log without tagline"/>
        <TextButton btnText="back to home" btnIcon={<CheveronLeft />} onClick={handleBack}/>
        <div className="image-container" >
          <StyledImg src={`/resource-images/${resourceSummary.imageName}`} alt={`${resourceSummary.imageName}`} />
        </div>
        <ReactMarkdown
          children={resourceDetail.content}
          components={{
            a: (props: any) => <LinkRenderer href={props.href} children={props.children}/>
          }
          }
        />
        {!!resourceDetail.externalLinks &&
          <ReactMarkdown
            children={resourceDetail.externalLinks}
            components={{
              a: (props: any) => <LinkRenderer href={props.href} children={props.children}/>
            }}
          />
        }
      </StyledGrid>
  );
};

export default ResourceDetail;
