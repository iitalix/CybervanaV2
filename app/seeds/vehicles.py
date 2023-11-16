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
        description="Unmatched speed. Elegant design.",
        created_at=date.today()
    )
    db.session.add(new_post_2)

    new_post_3 = Vehicle(
        owner_id=1,
        make="Arch",
        model="Nazaré Special",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/archnazarejackie.jpg",
        price=85000,
        description="This rare Nazaré is a one-of-a-kind Limited Edition!",
        created_at=date.today()
    )
    db.session.add(new_post_3)

    new_post_4 = Vehicle(
        owner_id=1,
        make="Arch",
        model="Nazaré Itsumade",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/archnazareitsumade.jpg",
        price=60000,
        description="Made for cruising the city.",
        created_at=date.today()
    )
    db.session.add(new_post_4)

    new_post_5 = Vehicle(
        owner_id=1,
        make="Thornton",
        model="Machinaw Beast",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortonmackinawbeast.jpg",
        price=55000,
        description="Guaranteed toughness, on and off road!",
        created_at=date.today()
    )
    db.session.add(new_post_5)

    ######## Regina ########
    new_post_6 = Vehicle(
        owner_id=2,
        make="Thornton",
        model="Galena G240",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortongalenag240.jpg",
        price=20000,
        description="It isn't pretty, but it gets the job done.",
        created_at=date.today()
    )
    db.session.add(new_post_6)

    new_post_7 = Vehicle(
        owner_id=2,
        make="Archer",
        model="Quartz EC-T2 R660",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/archerquartz.jpg",
        price=65000,
        description="Find out why this one is called 'The Perfect Getaway Vehicle.'",
        created_at=date.today()
    )
    db.session.add(new_post_7)

    new_post_8 = Vehicle(
        owner_id=2,
        make="Thornton",
        model="Colby C125",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortoncolbyc125.jpg",
        price=75000,
        description="Station wagon-inspired hauler for the family!",
        created_at=date.today()
    )
    db.session.add(new_post_8)

    new_post_9 = Vehicle(
        owner_id=2,
        make="Mizutani",
        model="Shion M22",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/mizutanishionm22.jpg",
        price=100000,
        description="Mizutani's finest!",
        created_at=date.today()
    )
    db.session.add(new_post_9)

    new_post_10 = Vehicle(
        owner_id=2,
        make="Brennan",
        model="Apollo Nomad",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/brennanapolloaldecaldos.jpg",
        price=25000,
        description="Need Street Cred? Make sure to get The Aldecaldos to vouch for this one!",
        created_at=date.today()
    )
    db.session.add(new_post_10)

    ######## Wakako ########

    new_post_11 = Vehicle(
        owner_id=3,
        make="Makigai",
        model="Maimai P126",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/makigaimaimaip126.jpg",
        price=35000,
        description="Minimal and compact for the inconspicuous driver.",
        created_at=date.today()
    )
    db.session.add(new_post_11)

    new_post_12 = Vehicle(
        owner_id=3,
        make="Yaiba",
        model="Kusanagi CT-3X",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/yaibakusanagict3x.jpg",
        price=250000,
        description="The Akira-inpspired CT-3X is every anime lover's dream bike!",
        created_at=date.today()
    )
    db.session.add(new_post_12)

    new_post_13 = Vehicle(
        owner_id=3,
        make="Quadra",
        model="Turbo-R 740",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/quadraturbor740.jpg",
        price=150000,
        description="Looking for a race?",
        created_at=date.today()
    )
    db.session.add(new_post_13)

    new_post_14 = Vehicle(
        owner_id=3,
        make="Arch",
        model="Nazaré",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/archnazare.jpg",
        price=65000,
        description="Sit down and stand out!",
        created_at=date.today()
    )
    db.session.add(new_post_14)

    new_post_15 = Vehicle(
        owner_id=3,
        make="Rayfield",
        model="Aerondight Guinevere",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/rayfieldaerondightguinevre.jpg",
        price=350000,
        description="Protection and privacy for a price!",
        created_at=date.today()
    )
    db.session.add(new_post_15)

    ######## Dakota ########

    new_post_16 = Vehicle(
        owner_id=4,
        make="Thornton",
        model="Galena Gecko",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortongalenagecko.jpg",
        price=75000,
        description="Thornton's most popular vehicle!",
        created_at=date.today()
    )
    db.session.add(new_post_16)

    new_post_17 = Vehicle(
        owner_id=4,
        make="Thornton",
        model="Colby Little Mule",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/thortoncolbylittlemule.jpg",
        price=85000,
        description="One of the best off-road vehicles in it's class!",
        created_at=date.today()
    )
    db.session.add(new_post_17)

    new_post_18 = Vehicle(
        owner_id=4,
        make="Mizutani",
        model="Shion Coyote",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/mizutanishioncoyotered.jpg",
        price=85000,
        description="Built for rally racing...and much much more!",
        created_at=date.today()
    )
    db.session.add(new_post_18)

    new_post_19 = Vehicle(
        owner_id=4,
        make="Quadra",
        model="Type-66 Javelina",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/quadratype66javelina.jpg",
        price=95000,
        description="Toughness and speed is what you NEED.",
        created_at=date.today()
    )
    db.session.add(new_post_19)

    ######## Dino ########

    new_post_20 = Vehicle(
        owner_id=5,
        make="Villefort",
        model="Columbus V340-F Freight",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/villefortcolumbusv340ffreight.jpg",
        price=95000,
        description="You could throw a party in here!",
        created_at=date.today()
    )
    db.session.add(new_post_20)

    new_post_21 = Vehicle(
        owner_id=5,
        make="Chevillon",
        model="Emperor 620 Ragnar",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/chevillonemperor620ragnar.jpg",
        price=100000,
        description="Who says armored vehicles can't be stylish?",
        created_at=date.today()
    )
    db.session.add(new_post_21)

    new_post_22 = Vehicle(
        owner_id=5,
        make="Quadra",
        model="Type-66 Avenger",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/quadratype66avenger.jpg",
        price=185000,
        description="A muscle car for those who need to compensate for their lack of it.",
        created_at=date.today()
    )
    db.session.add(new_post_22)

    new_post_23 = Vehicle(
        owner_id=5,
        make="Herrera",
        model="Outlaw GTS",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/herreraoutlawgts.jpg",
        price=265000,
        description="Luxury and style that won't get you killed...LITERALLY.",
        created_at=date.today()
    )
    db.session.add(new_post_23)

    new_post_24 = Vehicle(
        owner_id=5,
        make="Rayfield",
        model="Caliburn",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/rayfieldcaliburnwhite.jpg",
        price=650000,
        description="Nothing beats a Caliburn.",
        created_at=date.today()
    )
    db.session.add(new_post_24)

    ######## Sebastian ########

    new_post_25 = Vehicle(
        owner_id=6,
        make="Chevillon",
        model="Thrax 388 Jefferson",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/chevillonthrax388jefferson.jpg",
        price=120000,
        description="Vintage style with protection.",
        created_at=date.today()
    )
    db.session.add(new_post_25)

    new_post_26 = Vehicle(
        owner_id=6,
        make="Villefort",
        model="Cortes V5000 Valor",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/villefortcortesv5000valor.jpg",
        price=110000,
        description="For those who want classic style with zero compromise.",
        created_at=date.today()
    )
    db.session.add(new_post_26)

    new_post_27 = Vehicle(
        owner_id=6,
        make="Brennan",
        model="Apollo",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/brennanapollo.jpg",
        price=3500,
        description="The delivery service bike that holds more than just food.",
        created_at=date.today()
    )
    db.session.add(new_post_27)

    new_post_28 = Vehicle(
        owner_id=6,
        make="Villefort",
        model="Alvarado Delegate",
        photo_url="https://cybervana.s3.us-west-1.amazonaws.com/villefortalvaradov4f570delegate.jpg",
        price=125000,
        description="You don't know luxury until you've sat on six wheels.",
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
