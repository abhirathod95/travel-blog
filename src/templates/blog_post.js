import React from 'react';
import Helmet from 'react-helmet'

export default function Blog({data}) {
  const post = data.markdownRemark; 
  return (
    <div>
    <Helmet title={post.frontmatter.title} />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h3>{post.frontmatter.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { 
    	path: { 
    		eq: $path 
    	} 
    }) 
    {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;