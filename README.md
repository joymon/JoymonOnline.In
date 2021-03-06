# JoymonOnline.In
Source code of my AngularJS based personal site www.joymononline.in.

> Currently replaced by Hugo based site. Soon this will be archived

| Area      |      Badges  |
|:----------|:-------------|
| Build |[![Build status](https://ci.appveyor.com/api/projects/status/5mycvjhhmw36r6pl?svg=true)](https://ci.appveyor.com/project/joymon/demo-aspnetintergationtest) |
| Code | ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/joymon/JoymonOnline.In) ![GitHub repo size](https://img.shields.io/github/repo-size/joymon/JoymonOnline.In) [![](https://tokei.rs/b1/github/joymon/JoymonOnline.In)](https://github.com/joymon/JoymonOnline.In) |
| Code Quality | [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/joymon/JoymonOnline.In.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/joymon/JoymonOnline.In/context:javascript) [![Code Climate](https://codeclimate.com/github/joymon/JoymonOnline.In/badges/gpa.svg)](https://codeclimate.com/github/joymon/JoymonOnline.In) |
| Deps | [![dependencies](https://david-dm.org/joymon/JoymonOnline.In.svg)](https://david-dm.org/joymon/JoymonOnline.In)|
| Security | [![Known Vulnerabilities](https://snyk.io/test/github/joymon/JoymonOnline.In/badge.svg)](https://snyk.io/test/github/joymon/JoymonOnline.In)  [![Total alerts](https://img.shields.io/lgtm/alerts/g/joymon/JoymonOnline.In.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/joymon/JoymonOnline.In/alerts/) |
| Test | [![codecov](https://codecov.io/gh/joymon/JoymonOnline.In/branch/master/graph/badge.svg)](https://codecov.io/gh/joymon/JoymonOnline.In) |
| Issues | [![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/joymon/JoymonOnline.in.svg)](http://isitmaintained.com/project/joymon/joymononline.in "Average time to resolve an issue") [![Percentage of issues still open](http://isitmaintained.com/badge/open/joymon/JoymonOnline.in.svg)](http://isitmaintained.com/project/joymon/joymononline.in "Percentage of issues still open") |
| Deploy |  [![Deploy Status](https://travis-ci.org/joymon/JoymonOnline.In.svg)](https://travis-ci.org/joymon/JoymonOnline.In) |

# Development

## Architecture
- [C4 - Context Diagram](http://www.plantuml.com/plantuml/proxy?fmt=svg&cache=no&src=https://raw.githubusercontent.com/joymon/JoymonOnline.In/master/diagrams/context.puml)
- [C4 - Container Diagram](http://www.plantuml.com/plantuml/proxy?fmt=svg&cache=no&src=https://raw.githubusercontent.com/joymon/JoymonOnline.In/master/diagrams/container.puml)

## How to run locally
- Clone
- `npm install`
- build - `npm run devBuild`
- Serve - `npm run start`

# Running tests

Below command uses Jest to run tests using Puppeteer after starting a web server using Webpack.

- `npm test`

Currently there are only integration tests.

## Test coverage

- `npm test` will generate the coverate report
- `npm run codecov` to upload report to [CodeCov.io](https://codecov.io/gh/joymon/JoymonOnline.In)

# Deployment

## Development
-   Automatically after each build from AppVeyor

## Production
- Create a release.
- Release create a tag. Travis CI will release when there is a tag.

# Hosting
- Development [https://joymon.github.io/JoymonOnline.In/](https://joymon.github.io/JoymonOnline.In/)
- Production [https://joymononline.in/](https://joymononline.in/)

# Built with
- AngularJS - Frontend technology
- TypeScript - Coding AngularJS.
- NodeJS - To assemble project source, compile and run tests
- PowerShell - Automating tasks
- Code climate - Ensuring code quality
- LGTM - Ensuring code quality
- AppVeyor - Continuous integration and delivery to development environment.
- TravisCI - Continuous delivery to production.

# Contributing

- Not sure how much somebody else can contribute to my personal web site, but PRs are welcome.

# Authors
- Joy George Kunjikkuru

# License 

This project is licensed under the GNU GPL3.0 License - see the [LICENSE.md](LICENSE.md) file for details

# Acknowledgements

- All the developers whose technologies are used
- GitHub, AppVeyor, TravisCI for their freemium pricing model.
