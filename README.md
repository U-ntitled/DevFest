# RAVINALA ASSOCIATION (Application web )

## Descriptions

This project is named *RAVINALA*
This is to resolve the problem given to us during the *DevFest competition* which is "**Numeric face to pollution**" 

This is a web application that:

* Encourage people to preserve the environment and

* Share information about the environnement status and it's evolution

* Organise events to help each other to deal with the pollution 


We've used three technologies to develop this project, they all have their own speciality:

* **ReactJs** for the frontend development(with material-ui for better user interface). It offers a better view and experience for the user... It makes the interface a lot more beautiful and desirable yet easy to use.

* **Symfony6** for the backend development. This PHP framework will guarantee the security of the application... Not only does it provide a lot more useful tools(messaging, authentication, services, translations,...) but it is also easy to use.

* **Figma** for the conception of the graphical interface. With Figma, we've developped a macket for our application before even designing and integrating it... This step is necessary for us to ease and fasten the development of the interface and designing a very ssatisfying interface.

## Setup & Installation

This web application is available on github, inside the repository of our team [https://github.com/U-ntitled/DevFest.git](https://github.com/U-ntitled/DevFest.git). You can clone it by running the command:

```bash

git clone https://github.com/U-ntitled/DevFest.git

```

### Setting up environment

If you haven't either set up your reactJs environment or your Symfony environnement, you can check out the documentation:

* *For ReactJs*: you just need to install node [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

* *For Symfony*: [https://symfony.com/download](https://symfony.com/download) and you also need composer [https://getcomposer.org/download/](https://getcomposer.org/download/)

There are also some important dependencies sush as: [php](https://www.php.net/downloads.php), [mysql](https://www.mysql.com/downloads/)

### Installing modules and composers

After setting up the environment, go to the DevFest directory which you've recently created by cloning our webapp. Then run the following command:

```bash

npm install --force
composer install

```

It will install the node_modules directory and the vendor directory which contain all dependency tools of the web application.

After a successful installation, you can now run the application by running the following command:

```bash

npm run watch && symfony serve -d

```

Then, open your favorite browser and navigate to the [127.0.0.1:8000](127.0.0.1:8000) link!


## Perspectives
 
 * Add a payment system for donation
 * Build a chat app for each organisation


## About us

Our team is called **UNTITLED**, we develop web applications, desktop and mobile applications. We are 5 IT Students:

* RAZAFIMAMY Antonino Iraky Ny Avo
* VONIARIMALALA Fiaro Miangaly
* ANDRIANIAINA Fanomezantsoa Nomena
* NOMENJANAHARY Riry
* RAKOTONDRANAIVO Gilbert Joyaux Wendi Anderson
