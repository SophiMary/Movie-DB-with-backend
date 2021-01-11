# Movie DB Web app
  Clone of TMDB with authentication. 

### Get Started:

- After cloning the repository,
- Navigate to `movie-db` folder and run: 
    1. `npm i` // This will install all the required packages for the frontend.
    2. `npm run build` // This will create a build folder.
- Copy the `build` folder into the `backend` folder.
- And inside the `backend` folder, create and activate the virtual environment.
- Then run: 
  `pip install -r requirements.txt` // This will install all the required packages for the backend

- Create a database and connect to it.
- Navigate to `backend/auth_system/settings.py` file and do the following:
  1. Under `DATABASES` set the following values
    - set the `NAME` filed to your database name
    - set the `USER` filed to the owner of your database
    - set the `PASSWORD` field to your database password.
  2. Under `EMAIL_HOST_USER`, set the email ID that you want to use.
  3. Under `EMAIL_HOST_PASSWORD`, set the app password that you have setup for your email.


- Open your browser, goto `http://localhost:8000/`
- Make sure to create an alphanumeric password with upper and lower case characters, while you Sign-up/Reset your password.
