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

    ######## Wakako ########

    new_post_11 = Vehicle(
        owner_id=3,
        make="Makigai",
        model="Maimai P126",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/makigaimaimaip126.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_11)

    new_post_12 = Vehicle(
        owner_id=3,
        make="Yaiba",
        model="Kusanagi CT-3X",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/yaibakusanagict3x.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_12)

    new_post_13 = Vehicle(
        owner_id=3,
        make="Quadra",
        model="Turbo-R 740",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/brennanapolloaldecaldos.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_13)

    new_post_14 = Vehicle(
        owner_id=3,
        make="Arch",
        model="Nazaré",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/archnazare.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_14)

    new_post_15 = Vehicle(
        owner_id=3,
        make="Rayfield",
        model="Aerondight Guinevere",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/rayfieldaerondightguinevre.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_15)

    ######## Dakota ########

    new_post_16 = Vehicle(
        owner_id=4,
        make="Thorton",
        model="Galena Gecko",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortongalenagecko.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_16)

    new_post_17 = Vehicle(
        owner_id=4,
        make="Thornton",
        model="Colby Little Mule",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortoncolbylittlemule.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_17)

    new_post_18 = Vehicle(
        owner_id=4,
        make="Mizutani",
        model="Shion Coyote",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/mizutanishioncoyotered.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_18)

    new_post_19 = Vehicle(
        owner_id=4,
        make="Quadra ",
        model="Type-66 Javelina",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/quadratype66javelina.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_19)

    ######## Dino ########

    new_post_20 = Vehicle(
        owner_id=5,
        make="Villefort",
        model="Columbus V340-F Freight",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/villefortcolumbusv340ffreight.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_20)

    new_post_21 = Vehicle(
        owner_id=5,
        make="Chevillon",
        model="Emperor 620 Ragnar",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/chevillonemperor620ragnar.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_21)

    new_post_22 = Vehicle(
        owner_id=5,
        make="Quadra",
        model="Type-66 Avenger",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/quadratype66avenger.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_22)

    new_post_23 = Vehicle(
        owner_id=5,
        make="Herrera",
        model="Outlaw GTS",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/herreraoutlawgts.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_23)

    new_post_24 = Vehicle(
        owner_id=5,
        make="Rayfield",
        model="Caliburn",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/brennanapolloaldecaldos.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_24)

    ######## Sebastian ########

    new_post_25 = Vehicle(
        owner_id=6,
        make="Chevillon",
        model="Thrax 388 Jefferson",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/chevillonthrax388jefferson.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_25)

    new_post_26 = Vehicle(
        owner_id=6,
        make="Villefort ",
        model="Cortes V5000 Valor",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/villefortcortesv5000valor.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_26)

    new_post_27 = Vehicle(
        owner_id=6,
        make="Brennan",
        model="Apollo",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/brennanapollo.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_27)

    new_post_28 = Vehicle(
        owner_id=6,
        make="Villefort",
        model="Alvarado V4F 570 Delegate",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/villefortalvaradov4f570delegate.jpg",
        price=350000,
        description="Sleek, stylish, and will definitely get you noticed!",
        created_at=date.today()
    )
    db.session.add(new_post_28)


    db.session.commit()

def undo_posts():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.vehicles RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM vehicles"))

    db.session.commit()
