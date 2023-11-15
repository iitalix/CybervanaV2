from random import randint, choice
from datetime import date
from models import Review, User, Vehicle, db, environment, SCHEMA  # Import User and Vehicle models
from sqlalchemy.sql import text

def seed_reviews():
    # User 1 (Johnny)
    user1 = User.query.filter_by(username='jsilverhand').first()
    for vehicle_id in range(6, 11):
        stars = randint(4, 5)  # Mostly positive reviews
        review_text = choice(["Excellent vehicle!", "Top-notch performance!", "I love driving this!", "Highly recommended!"])
        vehicle = Vehicle.query.get(vehicle_id)
        new_review = Review(
            user=user1,
            vehicle=vehicle,
            review=review_text,
            stars=stars,
            created_at=date.today(),
        )
        db.session.add(new_review)

    # User 2 (Regina)
    user2 = User.query.filter_by(username='rjones').first()
    for vehicle_id in range(1, 6):
        stars = randint(1, 2)  # Mostly negative reviews
        review_text = choice(["Not impressed at all.", "Too expensive for what you get.", "Would not recommend."])
        vehicle = Vehicle.query.get(vehicle_id)
        new_review = Review(
            user=user2,
            vehicle=vehicle,
            review=review_text,
            stars=stars,
            created_at=date.today(),
        )
        db.session.add(new_review)

    # User 3 (Wakako)
    user3 = User.query.filter_by(username='wokada').first()
    for vehicle_id in range(16, 21):
        stars = randint(1, 2)  # Mostly negative reviews
        review_text = choice(["Not what I expected.", "Disappointing features.", "Would not buy again."])
        vehicle = Vehicle.query.get(vehicle_id)
        new_review = Review(
            user=user3,
            vehicle=vehicle,
            review=review_text,
            stars=stars,
            created_at=date.today(),
        )
        db.session.add(new_review)

    # User 4 (Dakota)
    user4 = User.query.filter_by(username='dsmith').first()
    for vehicle_id in range(11, 16):
        stars = randint(4, 5)  # Mostly positive reviews
        review_text = choice(["Fantastic performance!", "Reliable and sturdy.", "Highly recommended."])
        vehicle = Vehicle.query.get(vehicle_id)
        new_review = Review(
            user=user4,
            vehicle=vehicle,
            review=review_text,
            stars=stars,
            created_at=date.today(),
        )
        db.session.add(new_review)

    # User 5 (Dino)
    user5 = User.query.filter_by(username='ddinovic').first()
    for vehicle_id in range(21, 26):
        stars = randint(1, 2)  # Mostly negative reviews
        review_text = choice(["Not worth the price.", "Disappointing features.", "Would not buy again."])
        vehicle = Vehicle.query.get(vehicle_id)
        new_review = Review(
            user=user5,
            vehicle=vehicle,
            review=review_text,
            stars=stars,
            created_at=date.today(),
        )
        db.session.add(new_review)

    # User 6 (Sebastian)
    user6 = User.query.filter_by(username='Padre').first()
    for vehicle_id in range(26, 29):
        stars = randint(4, 5)  # Mostly positive reviews
        review_text = choice(["Classy design.", "Smooth handling.", "Luxurious feel."])
        vehicle = Vehicle.query.get(vehicle_id)
        new_review = Review(
            user=user6,
            vehicle=vehicle,
            review=review_text,
            stars=stars,
            created_at=date.today(),
        )
        db.session.add(new_review)

        db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
