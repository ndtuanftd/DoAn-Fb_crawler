# **Programming Intergration Project**<br><small>Facebook Crawler</small>


## Objectives
* Develop a website for crawling Facebook user profile from Facebook groups/pages
* Visualize and run analysis on the collectect data 

## Prequisites
To install this prject, you will need to install some tool required to run this project:
* Git
* Node package manager (NPM) or Yarn
* Python and Python Pip
* Python Environment manager ( virtualenv, pipenv, anaconda,etc ) (Optional)

Clone this project into your system by running:
```{bash}
git clone https://github.com/ndtuanftd/DoAn-Fb_crawler.git
```

## How to install and run this project locally

### Frontend
First you need to access the frontend folder:
```{bash}
cd frontend
```
Then run the required packages for the project's frontend:
```
npm install --save
```
To run the frontend, run:
```
npm start
```
After running this command, a browser with access to the frontend webpages should appear. If not, you can manually access by opening the browser and connect to <a href='localhost:3000'><strong>localhost:3000</strong></a>
### Backend
This step is optional, but we strongly recommend that you should have the project's backend installed and run in a virtual environment. This can be done using any Python environment manage out there, in our case, the **virtualenv** would be utilized for creating and managing python environment:
```{bash}
virtualenv <environment-name>
```
Activate the virtual environment:
```
# For Unix based systems:
source <environment-name>/bin/activate

# For Windows systems:
./<environment-name>/Scripts/Activate
```
Install the backend packages:
```
pip install -r requirements.txt
```
To access the backend folder:
```
cd backend
```
On the first time running the system, you first need to migrate the data into the database, run:
```
python manage.py migrate
```
Run the server:
```
Python manage.py runserver
```
Now you can visit the server interface by access <a href='localhost:8000/admin'><strong>localhost:8000/admin</strong></a>
To create an admin account to have access to the server adming privileges, run:
```
python manage.py createsuperuser
```

## How to use this application:
After you have run both the frontend and backend server, you will see a login screen pop up:
![Login Screen](/demo-images/login-sreen.png 'Login Screen')
To create a user account, you can either just navigate to the register page or use the **createsuper** feature of Django as mentioned above.
![Register Screen](/demo-images/register-screen.png)
The website consists of 3 main views:
* **Crawl View**: in this page, you will need to specify the page/groups name for crawling and provide cookie for the tool to perform the crawling process.
    * The group/pages name can be extract from the browser url. For example, the group/page called *Di lam vui thay ba* is accessed through the url <a href='facebook.com/groups/dilamvuithayba'>facebook.com/groups/dilamvuithayba</a>, so the name of that group/page is the section after <a href='facebook.com'>facebook.com</a>, which is ***groups/dilamvuithayba***
    * To perform crawl, the user also need to extract their cookies from their Facebook account. This can be done with some extension from Chrome. In our case, we recommend using **Get cookies.txt** extension for Chrome or any chromium based browsers.<center>![](/demo-images/cookies-token.png)</center>
    * The crawl page also provide you with some option to set for the crawling process. These option may affect the crawling speed.
    * After the crawling process has finished, there will be an option to create and save the crawl result into a process, using this option will run the analysis on the data crawled and will navigate you to the analyzed result screen.

![](/demo-images/crawler%20screen.png)
* **Project Screen**: this page will list all the project you have saved and the basic information of the project such as the groups crawled and the created date.

![](/demo-images/projects-screen.png)
* **Crawl Result Screen (Single project screen)**: this page will display all the user profiles have been crawled previously and the result from the data analysis. In this case, we choose to visualize the location of the users crawled, since this information is most likely to be set public by the users.

![](/demo-images/result-1.png)
![](/demo-images/result-2.png)