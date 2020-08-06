# Quality Process

Simple example of "how to" automate the quality process of a project developed in TypeScript.

## prettier

```shell
npm install --save-dev prettier
```

## eslint

```shell
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

- `eslint-config-prettier`: Turns off all ESLint rules that have the potential to interfere with Prettier rules.
- `eslint-plugin-prettier`: Turns Prettier rules into ESLint rules.


## husky

Husky can prevent bad git commit, git push and more 🐶 woof!

```shell
npm install husky --save-dev
```

If the hooks do not run, remove the hooks from git and reinstall the husky

```shell
rm -rf .git/hooks
```

## striker

Test your tests with mutation testing.

```shell
npm install --save-dev @stryker-mutator/core
```

Run this command the configure stryker.

```shell
stryker init
```

> If you're asked to install stryker, choose Yes. Follow the questionnaire.

After the init is done, inspect the `stryker.conf.js` file.

Run stryker to mutation test your project

```shell
stryker run
```

> Coverage analysis is not supported for Jest yet.

To determine the mutation score, Stryker calculates the following numbers:

```text
# Total detected = # timedOut + # killed
# Total undetected = # survived + # no coverage
# Total mutants = # Total detected + # Total undetected
% Mutation score = # Total detected / # Total mutants * 100
```

What do all these metrics mean?

- `Killed` means that a mutant in the original code caused a test to fail. The mutant is dead!
- `Survived` means that a mutant in the original code did not cause a test to fail.
- `TimedOut` means that, due to a mutant in the original code, the test takes too long to run. This is often an indication that the mutant created an infinite loop. Such cases are killed by Stryker. An example of a TimedOut due to a mutant would be a snippet of code like this:
- `No coverage` means that the original, unmodified code did not have test coverage, As such, every mutant would survive and is as such considered 'survived'.
- An `Error` is used to indicate that an Error was thrown while running a test. This could be due to a mutant, but that is not always the case. Due to that, in this situation, the mutant is not considered being killed.

> see more info [here](https://stryker-mutator.io/faq.html)!