from ..models import User, Vehicle, db, environment, SCHEMA
from datetime import date
from sqlalchemy.sql import text

def seed_posts():
    ######## Johnny ########
    new_post_1 = Vehicle(
        owner_id=1,
        make="Porsche",
        model="911 II Turbo",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/porscheturbo911.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_1)

    new_post_2 = Vehicle(
        owner_id=1,
        make="Rayfield",
        model="Caliburn",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/rayfieldcaliburn_dark.jpg",
        price=650000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_2)

    new_post_3 = Vehicle(
        owner_id=1,
        make="Arch",
        model="Nazare Special",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/archnazarejackie.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_3)

    new_post_4 = Vehicle(
        owner_id=1,
        make="Arch",
        model="Nazare Itsumade",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/archnazareitsumade.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_4)

    new_post_5 = Vehicle(
        owner_id=1,
        make="Thornton",
        model="Machinaw Beast",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortonmackinawbeast.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_5)

    ######## Regina ########
    new_post_6 = Vehicle(
        owner_id=2,
        make="Thornton",
        model="Galena G240",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortongalenag240.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_6)

    new_post_7 = Vehicle(
        owner_id=2,
        make="Archer",
        model="Quartz EC-T2 R660",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/archerquartz.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_7)

    new_post_8 = Vehicle(
        owner_id=2,
        make="Thornton",
        model="Colby C125",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortoncolbyc125.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_8)

    new_post_9 = Vehicle(
        owner_id=2,
        make="Mizutani",
        model="Shion M22",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/mizutanishionm22.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_9)

    new_post_10 = Vehicle(
        owner_id=2,
        make="Brennan",
        model="Apollo Nomad",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/brennanapolloaldecaldos.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_10)

    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
