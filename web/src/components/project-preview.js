import { Link } from "gatsby";
import React from "react";
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";

import styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

class ProjectPreview extends React.Component {
  constructor() {
    super();

    this.vote = this.vote.bind(this);
  }
  vote() {
    fetch("/.netlify/functions/vote", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ id: this.props._id })
    }).then(res => res.json());
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
