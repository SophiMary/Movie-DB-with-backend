# Movie DB App

In order to test out the project, please follow these steps:

- Clone the repository.
- In the 'movie-db' folder [which is the frontend], run: npm install, this will install all the required frontend packages.
- In the 'movie-db' folder, run: npm run build, this will create a build folder.
- Copy the 'build' folder into the 'backend' folder
- In the backend folder, run: create and activate the virtual environment
- In the backend folder, run: pip install -r requirements.txt

Then go to backend/auth_system/settings.py:

- Under DATABASES, set the PASSWORD field to your database password
- Under EMAIL_HOST_USER, set the email ID that you want to use
- Under EMAIL_HOST_PASSWORD, set the app password that you have setup for your email