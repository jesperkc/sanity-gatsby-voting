import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

import styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

class ProjectPreview extends React.Component {
  vote() {
    fetch(
      "https://sanity-gatsby-portfolio-web-s8ps7nxi.netlify.com/.netlify/functions/hello"
    ).then(res => res.json());
  }
  render() {
    const { name, votes } = this.props;
    return (
      <div className={styles.root}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{name}</h3>
        <p>Votes: {votes}</p>
        <button className="btn" onClick={this.vote}>
          Vote
        </button>
      </div>
    );
  }
}

export default ProjectPreview;
