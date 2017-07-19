# Running the docs build in a Vagrant VM

Instead of configuring Jekyll and all related dependencies on your machine, you can choose to run everything in a Vagrant-governed virtual machine. This seems to be the easiest option for Windows users.

## Prerequisites

* VirtualBox: https://www.virtualbox.org
* Vagrant: https://www.vagrantup.com

> Make sure to call `git submodule update --init --recursive` so that you have all the code populated

## Installing the virtual machine

Open a console box (**Windows users should run a Git bash session!**) and cd to your working dir. Then do a:

```bash
$ vagrant up
```

This should download the correct image, install it, start the VM and run the provisioning script.

## Provisioning

The provisioning script (`provision/install.sh`) installs:

* Base system packages;
* Ruby;
* Node.js;
* nginx.

It also sets up the Jekyll project by installing all gems locally using bundler.

## Building the documentation

Connect to the running VM first:

```bash
$ vagrant ssh
```

Then go to the project dir (mapped to `/vagrant`):

```bash
$ cd /vagrant
```

And run the build script telling it to use the current branch and avoid committing changelogs:

```bash
$ ./build.sh
```

### Adding content

Edit an article and trigger your build by running `build.sh` as described above.

Then open a web browser on your host machine and navigate to http://localhost:8000/start/introduction.html or http://localhost:8000/angular/start/introduction.html.

Alternatively you could run a quick build with just a single configuration: "nativescript" or "angular" that will take about half the time. It could be useful when editing a documentation article and you want quicker feedback:

```bash
$ ./build-jekyll.sh "nativescript"
```

or

```bash
$ ./build-jekyll.sh "angular"
```


## Making changes

* Edit some files.
* Rerun the build command above.
* Refresh your browser.
