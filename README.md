# JavaScript-Training

# Twelve-Factor App
This is a set of 12 peinciple or best practices for building web application which is commonly known as Software as a Service(SAAS) application. 
These principle help us to create the application that use declarative programming for automation of setup which reduce the development time and reduce the cost of the project. 
It is a methodoloy to develop scalable, maintainable and portable web application.

## CodeBase 
Single codebase per application tracked in version control with many deploys.
Each application must have only a single codebase.
Each such codebase must be managed in a version control system like git.
It is single code we use for app

## Dependencies
Explicitly declare and isolate dependencies.
Declare all the libraries  and packages in a manifest file.
e.g. package.json for Node.js.

## Config
Store config in the  environment.
Configuration like APi keys, database URLs, credentials must be stored in environment variable 

## Backing Services
Treat backing services as attached resources.
Any service that application consume over internet known as Backing Srvice.
Services like database, caches queue should be connected via a URL or config and treat as replacable resouces.

## Build , Release and run
Strictly seperate build and run stages.
Build Complete code, bundle assest.
Release combine build with config.
Run Execute the app in a environment.

## Process
Execute the application as one or more stateless processes.
Don't store anything on local server.
save on cloud.

## Port Binding
Export services via port binding.
Any application that follow this rule should be self contained and standalone. It exports HTTP as a Service and does not require any server like tomcat to listen to request.

## Concurrency
Scale out via the process model.
An application must be divided into smaller different processes instead of a single large application. Each such process must be able to start, terminate and replicate itself independently and any time.

## Disposability
Maximize robustness with fast start and graceful shustdown. 
The app should start fast and shut down cleanly.
make it easy to restartor move it anytime.

## Development/ Production Parity
Keep development, staging and production as simple as possible.
It simply means that the development and production environment must be as similar as possible. The processes being used, technologies and the infrastructure must be the same. This will help you in a way that whatever error that can happen over time will happen at the development stage itself instead of surprisingly occurring in the production. 

## Logs
Treat log as event streams.
Logs are every essentials to understand the internal working of the application.
The app should write logs as simple text.

## Admin Processes
Run admin/management tasks as one-off processes.
Most of the application require a few one -off tasks to be executed before the actual flow of the application starts. These tasks are not required very often and hence, we generally create a script for it which we run from some other environment.


 # Atomic Design
Atomic Design is a method for web and app development to create consistent and reusable design components called atoms. 
These atoms then combine to create pages, template and moleclues, organisms.
It is a web design methodology that helps streamline the workflow and improve the consistency of the design.
Atoms - Smallest building block of a design, can not be divided further. Ex- buttons, icons.
Moleclues - combination of atoms that form more complex components. Ex- Search bar, navigation bar. 
Organisms - group of moleclues that create more complete section of a website or application. Ex- headers, photo gallery.
Templates - They offer a struture of a website.
Pages - The final products of the design process.

## Benefits of Atomic Design
* Consistency
* Efficiency
* Scalability
* Reusability


# Git vs Github
## Git 
IT is a software. It is a command-line tool. It is locally installed on the system. It is focused on version control and code sharing. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files.

## GitHub
GitHub is a web-based Git repository hosting service, which offers all of the distributed revision control and source code management (SCM) functionality of Git as well as adding its own features. 

## Gitignore
This is useful for keeping log files, temporary files, build artifacts, or personal files out of your repository. Such as log files, temporary files, hidden files, personal files, OS/editor files, etc.

## Git Config
It is the command used to set configuration values in Git, like your name, email, editor etc. These values tell git how to behave.