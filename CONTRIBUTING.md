# Contributing to the InCountry Documentation

**Please read the [General information](#general-information) section!**

If you're not comfortable working with Git, or just want to make a quick change to a single page, you can do it [straight from GitHub](#working-on-github).

**If you're writing code or docs, be sure to read [how to work locally](#working-locally).**

## What's in this document

* [General information](#general-information)
    * [Content format and linting](#content-format-and-linting)
* [Working locally](#working-locally)
    * [Working on a local branch](#working-on-a-local-branch)
    * [Adding a new page](#local-adding-a-new-page)
* [Markdown build warnings](#markdown-build-warnings)
* [Working on GitHub](#working-on-github)
    * [Editing an existing page](#github-editing-an-existing-page)
    * [Adding a new page](#github-adding-a-new-page)

## General information

**If you want to add a comment somewhere, add it in this format:**

```markdown
> **TODO** note text here...
```

All contributions — edits _and_ new content — should be in the form of pull requests. This keeps everyone from stepping on each others' toes, and allows us all to discuss the change and make suggestions for improvement.

When you create your PR, please tag Sami Ahmed Siddiqui as a reviewer.

> **NOTE**: The pull-request process makes things efficient, and allows the whole team to participate. If a pull request doesn’t work for you, just email Sami Ahmed Siddiqui and he'll create one for you.

### Content format and linting

**Format.** All content files are [GitHub-flavored Markdown](https://guides.github.com/features/mastering-markdown/), with some "front matter" at the top. For more details, have a look at the Docusaurus [Markdown Features](https://docusaurus.io/docs/en/doc-markdown) page.

**Linting.** Markdown linting rules for the project are defined in [`.markdownlint.json`](.markdownlint.json). Refer to [Markdown build warnings](#markdown-build-warnings) below for details.

#### File structure

The basic structure of the content files is this:

```markdown
---
id: unique-page-id
title: Becomes the top heading on the page
sidebar_label: Shows up on the left
---

Your content goes here
...

## Headings start at level 2
```

------

## Working locally

(Skip to [working on GitHub](#working-on-github) instead?)

If you're comfortable with Git, and especially if you're planning on making larger changes, you're probably going to want to work on a local branch of the repository.

> **Note:** If your GitHub account has 2-factor authentication enabled, [create a token](https://github.com/settings/tokens) (with "Repo" permissions only) to use in place of your password when you run the HTTPS `git clone` command below.

**Start by getting a few things set up**:

1. Clone the repository and install `markdownlint-cli`.

    ```bash
    # install markdownlint-cli (-g is optional)
    $ npm install -g markdownlint-cli

    # Option 1: clone by SSH
        $ git clone --recursive git@github.com:incountry/documentation.git

    # Option 2: clone by HTTPS
        $ git clone --recursive https://github.com/incountry/documentation.git
    ```

1. **If you are NOT using `nvm`**: add `./node_modules/.bin` to your PATH, if it's not already present.

    Test first, by running `echo $PATH` and looking for `./node_modules/.bin` in the output.

    If it's not in the path, add it now. For bash, add the following statement to the end of your `.bashrc` or `.bash_profile` file:

    ```bash
    export PATH=$PATH:./node_modules/.bin
    ```

    Then, start a new shell session to pick up the changes.

1. At the root of the repo, run `npm install`.

### Working on a local branch

> **Note**: The main branch is protected. You'll need to work on a local branch, and create a pull request from it.

Here's a sample workflow:

```bash
# make sure your local repo is current
$ git checkout main
$ git pull

# make a new branch and create an upstream version
$ git checkout -b my-branch
$ git push --set-upstream origin my-branch

# Edit file(s) as necessary...
$ emacs docs/border-documentation.md

# Lint everything
# (Markdownlint's config file is at the repo root: run from there!)
$ markdownlint docs

# Next, stage all your changes
$ git add -A

# Commit and push upstream
$ git commit -m "Add extra info"
$ git push
```

After you've pushed your changes up to GitHub, make a pull request:

1. Open [the project](https://github.com/incountry/documentation) on GitHub.

    You should see a yellow banner asking you to create a pull request.

1. Click **Compare & pull request** to get started.

    Your commit message is the default title for the PR. Change it if you like, and add a longer description in the comment box.

1. Click **Reviewers** and select Sami Ahmed Siddiqui. (And of course, if you know anyone else needs to review the change, add them as well.)

1. Click **Create pull request**.

That's it! You're done! Creating the PR will kick off a build to verify that nothing is broken, but you can safely close your browser tab as soon as you've hit that big green **Create pull request** button.

> **NOTE** If you do watch the build, and you see errors or warnings, check to see if they are [markdown errors](#markdown-build-warnings) that you can fix.

### Local: adding a new page

To add a new page, do the following:

1. Create a new Markdown file in [`docs/`](docs/) (or one of its subfolders).

    Structure your file (see also [Content format and linting](#content-format-and-linting)) in the same way as an existing file, or just copy another file outright, but make sure your new file's `id:` attribute at the top of the file is unique within the folder it lives in. (The scope of uniqueness is _only_ the folder that contains the file, not any subdirectories.)

1. Add your file's `id` to the appropriate spot in [`sidebars.js`](sidebars.js).

    If your file is in a subfolder, add the folder and ID together, as in the "Portal" section in this sample:

    ```js
    const sidebars = {
      docsSidebar: [
        'index',
        {
          type: 'category',
          label: 'Portal',
          items: [
            'portal/getting-started-portal',
            {
              type: 'category',
              label: 'Documentation',
              items: [
                'portal/dashboard',
                'portal/managing-environments',
              ],
            }
          ],
        }
      ],
    };

    module.exports = sidebars;
    ```

1. Follow the steps in [Working on a local branch](#working-on-a-local-branch) to commit and push your changes, and to create your pull request.

------

## Markdown build warnings

We are using a _linter_ (a syntax checker) called [**markdownlint**](https://github.com/DavidAnson/markdownlint/) to help ensure some consistency in our documentation source files. If you see warnings of the form `MD0xx` in the build output, those are from the linter.

**The build will break** if your Markdown has problems. If you get an error when you run `markdownlint docs`, look up the rule number in the [Rules List](https://github.com/DavidAnson/markdownlint/blob/master/doc/Rules.md) and try to fix it. If you can't, please note this in your pull request and ask for help.

------

## Working on GitHub

(Skip to [how to work locally](#working-locally) instead?)

If you're not comfortable working with Git, or just want to change a single page, do it straight from GitHub.

### GitHub: Editing an existing page

1. On GitHub, Edit docs by navigating to `docs/` and editing the corresponding document.

    ```markdown
    ---
    id: page-needs-edit
    title: This Doc Needs To Be Edited
    sidebar_title: edit me
    ---

    Edit me...
    ```

1. In the editor, edit your file's content.

1. When you're done editing the file, scroll down to the **Commit changes** section.

1. Add a short title for your change, such as "Fix typos in border-documentation.md", and a short description.

1. Select **Create a new branch for this commit...** and give your branch a descriptive name, such as `johnsmith-border-documentation-edits`.

1. Click **Propose file change** to create your branch and start creating your pull request.

1. Click **Reviewers** and select Sami Ahmed Siddiqui. (And of course, if you know anyone else needs to review the change, add them as well.)

1. Click **Create pull request**.

That's it! You're done! Creating the PR will kick off a build to verify that nothing is broken, but you can safely close your browser tab as soon as you've hit that big green **Create pull request** button.

> **NOTE** If you do watch the build, and you see errors or warnings, check to see if they are [markdown errors](#markdown-build-warnings) that you can fix.

### Github: Adding a new page

To add a new file, do the following:

1. On GitHub, navigate to `docs/` (or one of its subfolders) and click **Create new file** or **Upload files**.

    > **Note** These instructions assume you're creating a new file. Things work substantially the same way for uploads.

1. In the editor, add your file's content.

    Structure your file in the same way as an existing file, or copy the content outright, but make sure your new file's `id:` attribute at the top of the file is unique within the folder it lives in, as this is how files get hyperlinked. (The scope of uniqueness is _only_ the folder that contains the file, not any subdirectories.)

    The basic structure is this:

    ```markdown
    ---
    id: my-new-page
    title: Top heading on the page
    sidebar_label: Shows up on the left
    ---

    Content goes here
    ...

    ## headings start at level 2
    ```

1. When you're done, and scroll down to the **Commit new file** section.

1. Add a short title for your change, such as "Adding new file for foo", and a short description.

1. Select **Create a new branch for this commit...** and give your branch a descriptive name, such as `johnsmith-adding-foo`.

1. Click **Propose new file** to create your branch and start creating your pull request.

1. Click **Reviewers** and select Sami Ahmed Siddiqui. (And of course, if you know anyone else needs to review the change, add them as well.)

1. Click **Create pull request**.

That's it! You're done! Creating the PR will kick off a build to verify that nothing is broken, but you can safely close your browser tab as soon as you've hit that big green **Create pull request** button.

> **NOTE** If you do watch the build, and you see errors or warnings, check to see if they are [markdown errors](#markdown-build-warnings) that you can fix.
