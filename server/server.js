import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import App from '&/app/App'
import template from './template'

export default function render(url) {

    // Object holds render result
    const reactRouterContext = {};

    // Make HTML string from content
    let content = renderToString(
        <StaticRouter location={url} context={reactRouterContext}>
            <App/>
        </StaticRouter>
    );

    // Get <HEAD> from HTML string
    const helmet = Helmet.renderStatic();

    // Render final page with all data
    return template(helmet, content)
}
