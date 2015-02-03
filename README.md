# Linguist

> Linguist allows you to talk to people around the world in different languages by translating your messages automatically for you.


## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Team](#team)
1. [Contributing](#contributing)

## Usage

> You can try linguist out here: http://linguist.azurewebsites.net.

From the home page:
1. Select your language from the sidebar
2. Create a username
3. Select the room you want to chat in. If no room is selected, default is lobby
4. Start chatting!

## Requirements

- Node 0.10.x
- MongoDB
- Microsoft Translator

## Development

### Installing Dependencies

1. Run npm and bower install

From within the root directory:

```sh
npm install -g bower
npm install
bower install
```

2. Acquire Microsoft Translator credentials (Client ID and Client secret) through Windows Azure. Guide available [here](http://blogs.msdn.com/b/translation/p/gettingstarted1.aspx).

3. Add the MongoLabs addon to your Azure account by signing up for a free "Sandbox" account [here](http://azure.microsoft.com/en-us/marketplace/partners/mongolab/mongolab/)

4. Once your MongoLabs addon has been created, click 'connection info' from your Azure portal &mdash; copy the MongoLab URI for the 'remoteProdDb' below.

5. Create a config.js file in /server/ with the following contents:

```sh
var config = {};
config.client_id = "FILL_ME_IN";
config.client_secret = "FILL_ME_IN";
config.localDevDb = 'mongodb://localhost:27017/linguist';
config.remoteProdDb = 'FILL_ME_IN';
module.exports = config;
```

### Tasks

gulp - Runs tests, builds public scripts, and serves site on local server port 3000, and watches for changes to files (server and public).

gulp scripts - Builds public scripts for deployment, placing result in /public/dist

gulp test-server - Server Test

gulp test-client - Client Test

## Deployment (credit Marcus Phillips, Hack Reactor)

1. Install Azure-CLI: `npm install -g azure-cli`
1. Connect to your Azure account
    1. Authenticate and download credentials: `azure account download`
    1. Install credentials: `azure account import <FILE_PATH_DOWNLOADED_ABOVE>`
1. Get SHA of BizSpark account: `azure account list`
1. Set Azure-CLI to use BizSpark account: `azure account set <SHA_OF_BIZSPARK_ACCOUNT>`
1. CD to your repo directory: `cd <REPO_PATH>`
1. Create a new website on Azure (within your repo dir): `azure site create <NAME_OF_SITE> --git`
    1. This adds a new remote to your repo named, 'azure'. Confirm this with `git remote -v`
1. View the environmental variables set for your server: `azure site appsetting list <SITE_NAME>`
1. Add NODE_ENV variable: `azure site appsetting add NODE_ENV=production`
1. Scale your site so it can handle the deployment process: `azure site scale mode standard <SITE_NAME>`
1. Deploy your repo to Azure by pushing to the `azure` remote: `git push azure <BRANCH_NAME>:master`
1. Scale your site back down now that deployment is finished: `azure site scale mode free <SITE_NAME>`

### Roadmap

View the project roadmap [here](https://github.com/HumpbackSeahorses/HumpbackSeahorses/issues)

## Team
  - __Product Owners__: Jared Noble, Clark Feusier
  - __Scrum Masters__: Dave Fedele, Eric Kennedy
  - __Development Team Members__: Tyler Davis, Ryan Leung, Omar Alvarez

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
