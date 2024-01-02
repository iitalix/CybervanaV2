# Cybervana

Cybervana is a Carvana-inspired website themed off one of my favorite video games: "Cyberpunk 2077." Visitors may browse vehicles, read user reviews, and create their own vehicle posts and reviews. More
features to come!

Try it [here:](https://cybervana.onrender.com/)

 Click on the Menu icon in the upper-right and select `Login`
 - To start quickly from scratch (no user data), click the `Sign in with Google` button.
 - For access to a pre-configured account with personalized data, click `Demo User`. Your vehicle posts
   and review posts are provided, giving you the ability to manage your posts without having to create them.

### Technology Used
* Python
* Flask
* React.js
* Redux
* Docker
* Amazon Web Services (AWS)
* Google OAuth 2.0
* Google Fonts
* Render

## Screenshots
### Landing Page
<img width="1061" alt="LandingPage" src="https://github.com/iitalix/Cybervana/assets/115580381/98c734f7-0e07-4738-895b-9502633a5f21">

### Browse Vehicles
<img width="1052" alt="AllVehiclesPage" src="https://github.com/iitalix/Cybervana/assets/115580381/1df4bb85-a103-423b-8ce8-69fbe435bdc9">

### Vehicle Details and User Reviews
![Edit Review](https://github.com/iitalix/Cybervana/assets/115580381/6642cb7f-ed08-43d8-863e-00d404442f07)

## Technical Details

Cybervana allows users to create vehicle posts, leave reviews/comments on vehicle posts, manage their vehicle and review posts, and complete a purchase transaction.

Each user is connected to their vehicle and review posts through the `my_vehicle_id` and `my_review_id` keys on the User model, which establish database relationships to those corresponding tables.
<img width="822" alt="userclass" src="https://github.com/iitalix/Cybervana/assets/115580381/d1182c44-890b-4c98-b525-a9bc09b4d62c">

Posts are filtered on the `Python` backend using `SQLAlchemy` ... 

![image](https://github.com/iitalix/Cybervana/assets/115580381/6e544360-e68e-4738-b0ca-a8eba3f56880)


...and sent to the `Redux Reducer` where the database query results are flattened, making the access of vehicles and reviews an O(1) time operation.

 <img width="456" alt="owner_reducer" src="https://github.com/iitalix/Cybervana/assets/115580381/0e643d7a-14a2-4bf2-9fd5-f59133231264">

With `React State` and `JSX`, the `Update`, `Delete`, and `Add To Cart` buttons on each card are conditionally rendered depending on whether or not the vehicle belongs to the signed-in user.
<img width="510" alt="cardbutton_cond" src="https://github.com/iitalix/Cybervana/assets/115580381/ba2fe1b0-fc30-41f0-89b3-bc18ee393b4f">
![condexample](https://github.com/iitalix/Cybervana/assets/115580381/21cb1c10-8a3c-4b16-a7a5-4d8dd48b12e3)

Additionally, I leveraged my background in design by incorporating Orbitron and Roboto Slab from Google Fonts as well as a custom logo I created from Canva. The typography brings the site together and highlights the theme.

### Features
* Create / read / update / delete Vehicle Posts
* Create / read / update / delete User Reviews
* Google OAuth 2.0
* AWS File uploads
* Search Bar

### Future Features
* Dynamic Search using Fuse.js
* Shopping Cart
* Improvements to Create Post form

### Components
* BrandCards
* Footer
* LandingPage
* LoginFormModal
* Navigation
  * NavigationPage
  * ProfileButton
* OpenModalButton
* Reviews
  * DeleteReviewModal
  * ReviewFormModal
  * ReviewsComponent
  * UpdateReviewModal
  * UserStarDisplay
* Search
* ShoppingCart
* SignupFormModal
* StarInputRatings
* Vehicles
  * AllVehicles
  * CreateVehicleModal
  * DeleteVehicleModal
  * ShopBrandPage
  * UpdateVehicleModal
  * VehicleCard
  * VehicleDetailsPage
  * YourVehiclesPage

### Installation
1. Download the [repo](https://github.com/iitalix/Cybervana)
2. Install the dependencies
```
pipenv install -r requirements.txt
```
3. Create a .env with proper settings for your development environment. Make sure to include settings for your AWS Bucket, Key, and Secret Key!
4. Open a terminal, migrate/seed your database, and run your Flask app
```
pipenv shell
flask db upgrade
flask seed all
flask run
```
5. See the README file in the `react-app` directory to run the React App in development

# API Endpoints
## HTML API

### Root
 * `GET /`

### Session
 * `POST /login`
 * `POST /signup`

### Vehicle Posts
 * `GET /vehicles/current`
 * `GET /vehicles/:id`
 * `GET /vehicles/all`
 * `GET /vehicles/brand/:id`

## Flask Blueprint

### Users
 * `GET /api/users/`
 * `GET /api/users/<int:id>`

### Vehicle Posts
 * `GET /api/vehicles/all`
 * `GET /api/vehicles/current`
 * `GET /api/vehicles/new`
 * `POST /api/vehicles/new`
 * `GET /api/vehicles/<int:id>`
 * `PUT /api/vehicles/update/<int:id>`
 * `DELETE /api/vehicles/delete/<int:id>`
 * `POST /api/vehicles/<int:id>/reviews`
 * `PUT /api/vehicles/<int:id>/reviews`

### Reviews
 * `GET /api/reviews/all`
 * `GET /api/reviews`
 * `POST /api/reviews/new/vehicles/<int:id>`
 * `PUT /api/reviews/<int:id>/update/vehicles`
 * `DELETE /api/reviews/<int:id>`

# Redux Stores

### Session
 * Actions:
   * `SET_USER`
   * `REMOVE_USER`
  
 ### Posts
  * Actions:
    * `GET_ALL_VEHICLES`
    * `GET_VEHICLE_DETAILS`
    * `GET_OWNER_VEHICLES`
    * `DELETE_VEHICLE`

  ### Reviews
   * Actions:
     * `READ_REVIEWS`
     * `ADD_REVIEW`
     * `DELETE_REVIEW`
