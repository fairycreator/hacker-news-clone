import React from "react";
import PropTypes from "prop-types";
import getSiteHostname from "utils/getSiteHostname";
import getArticleLink from "utils/getArticleLink";

import { Item, Card, Image, Content, Title, Source } from "./styles";

const GridItem = ({ url, title, id, imageUrl }) => {
  const site = getSiteHostname(url) || "news.ycombinator.com";
  const link = getArticleLink({ url, id });
  const imageAltText = `An image representing ${title}`;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={title}>
      <Item>
        <Card>
          <Image src={imageUrl} alt={imageAltText} />
          <Content>
            <Title>{title}</Title>
            <Source>
              <div>{`// ${site}`}</div>
            </Source>
          </Content>
        </Card>
      </Item>
    </a>
  );
};

GridItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
};

GridItem.defaultProps = {
  imageUrl: "https://miro.medium.com/max/1176/1*F9RzuXseG1VrTjFJd403gw.png", // Default image
};

export default GridItem;
