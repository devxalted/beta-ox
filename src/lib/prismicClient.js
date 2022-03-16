import * as prismic from '@prismicio/client'

const repoName = `betaox` // Fill in your repository name
const accessToken = 'MC5ZakZoUGhBQUFDSUFoMTQw.Te-_ve-_ve-_ve-_vRPvv70Z77-9PBvvv73vv71qI--_ve-_vUbvv73vv70G77-9Qe-_ve-_ve-_ve-_vWPvv73vv70Few' // If your repo is private, add an access token
const endpoint = prismic.getEndpoint(repoName)

// This defines how you will structure URL paths in your project.
// Update the types to match the Custom Types in your project, and edit
// the paths to match the folder-based routing in your project.
const routes = [
    {
        type: 'home_page',
        path: '/',
    },
]

const createClient = (fetch) => {
    const clientOptions = {
        fetch,
        accessToken,
        routes,
    }
    const client = prismic.createClient(endpoint, clientOptions)
    return client
}

export default createClient
