import React from "react";
import { StaticQuery, graphql } from "gatsby";

export type HomeLayoutProps = {
  children: any;
};

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={() => children}
    />
  );
}
