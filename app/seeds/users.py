from ..models import User, environment, SCHEMA, db
from sqlalchemy.sql import text
from random import randint
from datetime import date
from faker import Faker

fake = Faker()


# Adds a demo user, you can add other users here if you want
def seed_users():
    new_user1 = User(
    first_name = 'Johnny',
    last_name = 'Silverhand',
    age = 89,
    username = 'jsilverhand',
    email = 'DemoUser@gmail.com',
    password = 'password'
    )
    new_user2 = User(
        first_name = 'Regina',
        last_name = 'Jones',
        age = randint(21,50),
        username = 'rjones',
        email = 'DemoUser2@gmail.com',
        password = 'password'
        )
    new_user3 = User(
        first_name = 'Wakako',
        last_name = 'Okada',
        age = randint(21,50),
        username = 'wokada',
        email = 'DemoUser3@gmail.com',
        password = 'password'
        )
    new_user4 = User(
        first_name = 'Dakota',
        last_name = 'Smith',
        age = randint(21,50),
        username = 'dsmith',
        email = 'DemoUser4@gmail.com',
        password = 'password'
        )
    new_user5 = User(
        first_name = 'Dino',
        last_name = 'Dinovic',
        age = randint(21,50),
        username = 'ddinovic',
        email = 'DemoUser5@gmail.com',
        password = 'password'
        )
    new_user6 = User(
        first_name = 'Sebastian',
        last_name = 'Ibarra',
        age = randint(21,50),
        username = 'Padre',
        email = 'DemoUser6@gmail.com',
        password = 'password'
        )

    users_list = [new_user1, new_user2, new_user3, new_user4, new_user5, new_user6]
    [db.session.add(user) for user in users_list]
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
