# Movie DB Web app
  Clone of TMDB with authentication. 

### Get Started:

- Clone the repository.
- Go to the `movie-db` folder [which is the frontend] and run: `npm install`
  - This will install all the required packages for the frontend.
- Go to the `movie-db` folder and run: `npm run build`
  - This will create a build folder.
- Copy the `build` folder into the `backend` folder.
- Go to the `backend` folder, create and activate the virtual environment.
- Go to `backend` folder and run: `pip install -r requirements.txt`
  - This will install all the required packages for the backend

Then go to `backend/auth_system/settings.py`

- Under DATABASES, set the PASSWORD field to your database password.
- Under EMAIL_HOST_USER, set the email ID that you want to use.
- Under EMAIL_HOST_PASSWORD, set the app password that you have setup for your email.
