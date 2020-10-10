# Contribution Guidelines

## Branching System

We have two branches:

1. `master`: for production accessible via [http://profilinator.rishav.dev/](http://profilinator.rishav.dev/)
2. `dev`: for development and testing accessible via [https://dev-profilinator.rishav.dev/](https://dev-profilinator.rishav.dev/)

Pull requests are the best way to propose changes. We actively welcome your pull requests:

1. Create an issue
2. Fork the repo and create your branch from `dev`.
3. Make changes to code or documentation
4. Commit changes
5. Squash commits solving a single issue
6. Rebase from upstream `dev` branch
7. Push commits
8. Create a new PR to `dev` branch
9. Link your PR to the issue

## Adding new readme templates

1. Visit the Profilinator
2. Click the `Start Fresh` button and create your new template from scratch
3. Strictly use data from `template-1.ts` and `template-2.ts` for your new template
4. If you need to add image, add under the `/static` directory
5. Once done, click on the `Generate README.md` button. This will output the template config in the console
6. Copy the config and create a template file under `/src/config/templates` with the name `template-[next-index].ts`
7. Include the new config in `/src/config/templates/index.ts`
8. Add the new config in `/src/components/Section.tsx` in the `templateMenu` function

## Check builds locally before pushing

1. `npm run lint`
2. `npm run build`

## Examples for adding a new field

1. [Added Spotify field](https://github.com/rishavanand/github-profilinator/pull/15)
2. [Added Support me field](https://github.com/rishavanand/github-profilinator/pull/44)

Happy Contributing! :D
