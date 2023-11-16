from datetime import date
from ..models import Review, User, Vehicle, db, environment, SCHEMA  # Import User and Vehicle models
from sqlalchemy.sql import text

def seed_reviews():

    new_review_1 = Review(
        user_id=3,
        vehicle_id=3,
        stars=5,
        review="Arch makes the best bikes, and this one is defintely top-tier.",
        created_at=date.today()
    )
    db.session.add(new_review_1)

    new_review_2 = Review(
        user_id=3,
        vehicle_id=5,
        stars=3,
        review="Used to have one of these. It's a fun ride, but not the most comfortable.",
        created_at=date.today()
    )
    db.session.add(new_review_2)

    new_review_3 = Review(
        user_id=3,
        vehicle_id=9,
        stars=4,
        review="One of the best performance vehicles on the market. Love my M22!",
        created_at=date.today()
    )
    db.session.add(new_review_3)

    new_review_4 = Review(
        user_id=3,
        vehicle_id=10,
        stars=3,
        review="I'd take an Arch over anything Brennan has to offer, but this is a solid bike.",
        created_at=date.today()
    )
    db.session.add(new_review_4)

    new_review_5 = Review(
        user_id=1,
        vehicle_id=6,
        stars=3,
        review="Not the prettiest vehicle, but definitely makes up for it in handling and maneuverability.",
        created_at=date.today()
    )
    db.session.add(new_review_5)

    new_review_6 = Review(
        user_id=1,
        vehicle_id=9,
        stars=5,
        review="Mizutani really outdid themselves with this one. Can't go wrong with the Shion M22.",
        created_at=date.today()
    )
    db.session.add(new_review_6)

    new_review_7 = Review(
        user_id=1,
        vehicle_id=12,
        stars=5,
        review="Puts all other bikes to shame! Can't even hop onto another bike after being on a Kusanagi!",
        created_at=date.today()
    )
    db.session.add(new_review_7)

    new_review_8 = Review(
        user_id=1,
        vehicle_id=24,
        stars=5,
        review="Got this in black and can vouch--nothing beats a Caliburn. @Dino: wanna trade?",
        created_at=date.today()
    )
    db.session.add(new_review_8)

    new_review_9 = Review(
        user_id=1,
        vehicle_id=26,
        stars=4,
        review="Pink isn't quite my color, but I can't deny the appeal.",
        created_at=date.today()
    )
    db.session.add(new_review_9)

    new_review_10 = Review(
        user_id=2,
        vehicle_id=3,
        stars=5,
        review="Arch? More like Art! This bike is a masterpiece.",
        created_at=date.today()
    )
    db.session.add(new_review_10)

    new_review_11 = Review(
        user_id=2,
        vehicle_id=11,
        stars=4,
        review="People hate on the Maimai, but it's actually a fun ride! Love mine!",
        created_at=date.today()
    )
    db.session.add(new_review_11)

    new_review_12 = Review(
        user_id=2,
        vehicle_id=13,
        stars=5,
        review="I love fast cars, and this one is definitely one of the fastest.",
        created_at=date.today()
    )
    db.session.add(new_review_12)

    new_review_13 = Review(
        user_id=2,
        vehicle_id=15,
        stars=3,
        review="Finally go to ride in one of these and I must say--it's quite luxurious.",
        created_at=date.today()
    )
    db.session.add(new_review_13)

    new_review_14 = Review(
        user_id=2,
        vehicle_id=21,
        stars=3,
        review="I wouldn't consider this stylish but Chevillon really nailed their target buyer in terms of providing protection. A bomb probably couldn't take this one out!",
        created_at=date.today()
    )
    db.session.add(new_review_14)

    new_review_15 = Review(
        user_id=2,
        vehicle_id=24,
        stars=4,
        review="Attracts dirt way too easily, but c'mon...it's a Caliburn. I wash mine daily!",
        created_at=date.today()
    )
    db.session.add(new_review_15)

    new_review_16 = Review(
        user_id=2,
        vehicle_id=27,
        stars=3,
        review="For the side-hustle, it gets the job done. Can't complain.",
        created_at=date.today()
    )
    db.session.add(new_review_16)

    new_review_17 = Review(
        user_id=4,
        vehicle_id=2,
        stars=5,
        review="all black all black all black everything! lol gotta love the Caliburn! :)",
        created_at=date.today()
    )
    db.session.add(new_review_17)

    new_review_18 = Review(
        user_id=4,
        vehicle_id=6,
        stars=5,
        review="LOL this was one of my first cars and i loved it! low maintenance and you never had to worry about it getting stolen! hehehe!",
        created_at=date.today()
    )
    db.session.add(new_review_18)

    new_review_19 = Review(
        user_id=4,
        vehicle_id=10,
        stars=2,
        review="ew. this one reminds me of my ex who used to drive one until i made him trade it for an Arch. lol.",
        created_at=date.today()
    )
    db.session.add(new_review_19)

    new_review_19 = Review(
        user_id=4,
        vehicle_id=11,
        stars=4,
        review="this one is super cute! :)",
        created_at=date.today()
    )
    db.session.add(new_review_19)

    new_review_20 = Review(
        user_id=4,
        vehicle_id=20,
        stars=1,
        review="party? i would run away if anyone showed up in this. lol",
        created_at=date.today()
    )
    db.session.add(new_review_20)

    new_review_21 = Review(
        user_id=4,
        vehicle_id=28,
        stars=5,
        review="my dad has one and it's really luxurious!",
        created_at=date.today()
    )
    db.session.add(new_review_21)

    new_review_22 = Review(
        user_id=5,
        vehicle_id=2,
        stars=5,
        review="I have the white one and it is immaculate. Sorry @Johnny! No trades!",
        created_at=date.today()
    )
    db.session.add(new_review_22)

    new_review_23 = Review(
        user_id=5,
        vehicle_id=5,
        stars=3,
        review="Agree with @Wakako about the handling, but is really a BEAST! Would get it at discount.",
        created_at=date.today()
    )
    db.session.add(new_review_23)

    new_review_24 = Review(
        user_id=5,
        vehicle_id=8,
        stars=4,
        review="I love the vintage look and the extended trunk is great for jobs requiring major loot!",
        created_at=date.today()
    )
    db.session.add(new_review_24)

    new_review_25 = Review(
        user_id=5,
        vehicle_id=10,
        stars=3,
        review="Decent bike, but you'd better get a new paint job or risk being tested by The Aldecaldos.",
        created_at=date.today()
    )
    db.session.add(new_review_25)

    new_review_26 = Review(
        user_id=5,
        vehicle_id=12,
        stars=5,
        review="Anime fan here! This bike is a dream come true!",
        created_at=date.today()
    )
    db.session.add(new_review_26)

    new_review_27 = Review(
        user_id=5,
        vehicle_id=19,
        stars=4,
        review="Quadra knows speed, and this one is no exception!",
        created_at=date.today()
    )
    db.session.add(new_review_27)

    new_review_28 = Review(
        user_id=5,
        vehicle_id=13,
        stars=4,
        review="Hands down Quadra's best night-on-town vehicle.",
        created_at=date.today()
    )
    db.session.add(new_review_28)

    new_review_29 = Review(
        user_id=5,
        vehicle_id=16,
        stars=3,
        review="Test drove this awhile back and it's actually not that bad.",
        created_at=date.today()
    )
    db.session.add(new_review_29)

    new_review_30 = Review(
        user_id=5,
        vehicle_id=18,
        stars=4,
        review="Caught a rally race in The Badlands and this one was a crowd favorite!",
        created_at=date.today()
    )
    db.session.add(new_review_30)

    new_review_31 = Review(
        user_id=5,
        vehicle_id=25,
        stars=4,
        review="Used to have a 388. Interior is a bit cramped, but it's a solid ride.",
        created_at=date.today()
    )
    db.session.add(new_review_31)

    new_review_32 = Review(
        user_id=6,
        vehicle_id=1,
        stars=5,
        review="The only Porsche in Night City! Can't believe Johnny would put this on here!",
        created_at=date.today()
    )
    db.session.add(new_review_32)

    new_review_33 = Review(
        user_id=6,
        vehicle_id=3,
        stars=5,
        review="This bike is sweeeeeeeet!",
        created_at=date.today()
    )
    db.session.add(new_review_33)

    new_review_34 = Review(
        user_id=6,
        vehicle_id=7,
        stars=4,
        review="Has the speed, but the lack of a backseat makes this a 2-person job tops. Plan accordingly!",
        created_at=date.today()
    )
    db.session.add(new_review_34)

    new_review_35 = Review(
        user_id=6,
        vehicle_id=9,
        stars=5,
        review="I have the red one and it's a head-turner!",
        created_at=date.today()
    )
    db.session.add(new_review_35)

    new_review_36 = Review(
        user_id=6,
        vehicle_id=23,
        stars=4,
        review="Screams attention, but has the armor to protect everyone in it. Highly recommend for those who like to make a statement!",
        created_at=date.today()
    )
    db.session.add(new_review_36)

    new_review_37 = Review(
        user_id=4,
        vehicle_id=4,
        stars=4,
        review="my bf has this one. the backrest is perfect for a couple's ride! <3",
        created_at=date.today()
    )
    db.session.add(new_review_37)

    new_review_38 = Review(
        user_id=4,
        vehicle_id=26,
        stars=4,
        review="i love the color! it's so cute! :)",
        created_at=date.today()
    )
    db.session.add(new_review_38)

    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
