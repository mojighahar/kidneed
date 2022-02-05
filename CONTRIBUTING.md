# Kidneed Contribution Guide

1. First fork the project
2. clone the project in your local environment
3. apply your changes based on defined tasks for your team
4. create pull request against main branch in main repo

you can use the following video for more information about contributing to open source project:
[How to Fork and Clone a GitHub Repository](https://app.egghead.io/lessons/javascript-how-to-fork-and-clone-a-github-repository?pl=how-to-contribute-to-an-open-source-project-on-github)

for creating pull request watch this:
[How to create a Pull Request on GitHub](https://app.egghead.io/lessons/javascript-how-to-create-a-pull-request-on-github?pl=how-to-contribute-to-an-open-source-project-on-github)

## COMMITS

In order to commit your changes please follow the conventional commits rules if it is possible for you (there is no restriction on it, but we will be happier if you follow the below guide):
[Conventional Commits Guideline](https://www.conventionalcommits.org/en/v1.0.0/)

## Restrictions

the following text will clarify the changes you are allowed in order to contribute to the project based on your defined tasks

- you are not allowed to change any config of the project

  It means you are not allowed to change any file outside of the `src` directory

  but there is an exception in the `plugins.js` file. if you want to develop a plugin. strapi will auto import necessary lines in this file (then it's acceptable for us to accept your pull request). you are allowed to change the imported lines.

- you are not allowed to adding new content-type to the project. if you need more fields to keep something more please consider using `payload` field.

- for adding new functionality to the api just do it in your namespace.

  for example imagine you want to add new route to the `child` api. to do that you need first create your custom controller and route. first create a controller and route with your namespace as the prefix of the file name, then start write your logic inside of them.
  if my team name is `earth` the following controller would be `earth-controller.js` and the route will be `earth-route.js`. for extract your logic in order to make your code reusable you can create associated service like the above rules. in this case `earth-service.js` will be our custom service.

- you are allowed to create new api with the namespace rule. you can use `yarn strapi generate` command to create new api. but consider that you need to prefix your team to the generated api. for example if I want to create an api with `statistics` name. I can create it with this name: `earth-statistics`. there is no need to prefix your namespace in the inner files.

- Please don't change anything about the default behavior of controllers or routes. for example you need to get children of the user. in order to achieve it you want to restrict other users to access others children. the standard way of doing this in strapi is to add a policy to the default route. you need to provide an object config to the default route and change `find` to add your custom policy. but please don't do that. we won't merge any pull request that changes the default behavior of our system. to achieve that you have 2 ways. first you can ignore the security concern and let others to get anyone's children. or you can create custom route and controller for yourself. it depends on you and the time you have to achieve this goal. but changing the default behavior will effect other teams work, and we don't want this happen.
