import React from 'react';
import Helmet from 'react-helmet'

export default class SEO extends React.Component {
    constructor(props) {
        super(props);

        this.seo = {
            title: props.title || "Home",
            description: props.description || "Description",
            url: props.url || "https://wheretonextdoc.com",
            keywords: props.keywords || "",
            appName: props.appName || "Where to Next, Doc?",
        }
    }

    render() {
        return (
            <Helmet>
                <html lang="en" />
                <title>Where to Next, Doc?</title>
                <meta name="description" content={this.seo.description} />
                <meta name="keywords" content={this.seo.keywords} />
                <meta name="application-name" content={this.seo.appName} />

                <meta property="og:url" content={this.seo.url} />
                <meta property="og:title" content={this.seo.title} />
                <meta property="og:locale" content="en"/>
                <meta property="og:description" content={this.seo.description} />
                <meta property="og:image" content="" />
                <meta property="og:image:url" content=""/>
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Helmet>
        )
    }

}