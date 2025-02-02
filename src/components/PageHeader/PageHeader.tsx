import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";

import ExtendedPageHeader from "../ExtendedPageHeader";
import Skeleton from "../Skeleton";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  title: {
    flex: 1,
    fontSize: 24,
    paddingBottom: theme.spacing(2)
  }
}));

interface PageHeaderProps {
  children?: React.ReactNode;
  className?: string;
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = props => {
  const { children, className, title } = props;

  const classes = useStyles(props);

  return (
    <ExtendedPageHeader
      className={className}
      title={
        <Typography className={classes.title} variant="h5">
          {title !== undefined ? title : <Skeleton style={{ width: "10em" }} />}
        </Typography>
      }
    >
      <div className={classes.root}>{children}</div>
    </ExtendedPageHeader>
  );
};

PageHeader.displayName = "PageHeader";
export default PageHeader;
