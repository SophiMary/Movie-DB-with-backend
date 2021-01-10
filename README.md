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

And in `backend/auth_system/settings.py` file, do the following:
  1. Under `DATABASES`, set the `PASSWORD` field to your database password.
  2. Under `EMAIL_HOST_USER`, set the email ID that you want to use.
  3. Under `EMAIL_HOST_PASSWORD`, set the app password that you have setup for your email.


Open your browser, goto `http://localhost:8000/`
