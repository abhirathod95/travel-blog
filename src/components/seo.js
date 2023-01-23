import React from 'react'
import Helmet from 'react-helmet'
import favicon from '../images/favicon.png'

export default class SEO extends React.Component {
  constructor(props) {
    super(props)

    this.seo = {
      title: props.title || 'Home',
      description: props.description || 'Description',
      url: props.url || 'https://wheretonextdoc.com',
      keywords: props.keywords || [''],
      appName: props.appName || 'Where to Next, Doc?',
      image: props.image || favicon,
      type: props.type || 'website',
      canonUrl: props.canonUrl || null,
    }
  }

  //
  // TODO: Figure out if I need to add anymore tags
  // TODO: Add SEO component and validate on all other pages
  render() {
    let metadata = [
      <html key="1" lang="en" />,
      <title key="2">{this.seo.title + ' | Where to Next, Doc?'} </title>,
      <meta key="3" name="description" content={this.seo.description} />,
      <meta key="4" name="keywords" content={this.seo.keywords} />,
      <meta
        key="6"
        property="og:title"
        content={this.seo.title + ' | Where to Next, Doc?'}
      />,
      <meta key="7" property="og:site_name" content={this.seo.appName} />,
      <meta key="8" property="og:description" content={this.seo.description} />,
      <meta key="9" property="og:url" content={this.seo.url} />,
      <meta key="10" property="og:image" content={this.seo.image} />,
      <meta key="11" property="og:locale" content="en" />,
      <meta key="12" name="twitter:card" content="summary_large_image" />,
      <meta key="13" name="twitter:image:alt" content={this.seo.title} />,
      <meta key="14" property="og:type" content={this.seo.type} />,
    ]

    if (this.seo.type === 'article') {
      metadata.push(
        <meta
          key="15"
          property="article:published_time"
          content={this.props.date}
        />,
        <meta
          key="16"
          property="article:author"
          content="https://wheretonextdoc.com/about_us"
        />,
        <meta
          key="17"
          property="article:section"
          content={this.props.category}
        />,
        <meta key="18" property="article:tag" content={this.seo.keywords} />
      )
    }

    if (this.seo.canonUrl != null) {
      metadata.push(<link key="19" rel="canonical" href={this.seo.canonUrl} />)
    }

    return <Helmet>{metadata}</Helmet>
  }
}
