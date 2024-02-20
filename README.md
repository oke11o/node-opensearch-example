# Node App

## OpenSearch

### Docker compose

We use default docker-compose.yaml from https://opensearch.org/docs/latest/install-and-configure/install-opensearch/docker/

Dashboard works fine. admin:admin - log/pass

And I can sent requests to API. https://localhost:9200
But for clients I have configure certs. I don't know how.
Let's skip it for localhost dev machine.


#### extra

Add environment `plugins.security.disabled=true` to OpenSearch nodes for disable ssl cert auth

Add environment `DISABLE_SECURITY_DASHBOARDS_PLUGIN: true` for Dashboard for skip auth page.




## Articles

### How to set up TypeScript with Node.js and Express (2023)

https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf

### The Complete TypeScript Setup - From Zero to Hero

https://dev.to/codewithahsan/the-complete-typescript-setup-from-zero-to-hero-398h
