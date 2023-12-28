from .db import db, environment, SCHEMA, add_prefix_for_prod


class Vehicle(db.Model):
    __tablename__ = "vehicles"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(
        add_prefix_for_prod("users.id")))
    make = db.Column(db.String(50), nullable=False)
    model = db.Column(db.String(50), nullable=False)
    photo_url = db.Column(db.String, nullable=False)
    price = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    my_vehicle_user_id = db.relationship("User", back_populates="my_vehicle_id")
    my_vehicle_review_id = db.relationship(
        "Review", back_populates="my_review_vehicle_id", cascade="all, delete-orphan")
    my_vehicle_item_id = db.relationship("Item", back_populates = "my_item_vehicle_id", cascade="all, delete-orphan")

    def to_dict(self):
        return_dict = {
            "id": self.id,
            "ownerId": self.owner_id,
            "make": self.make,
            "model": self.model,
            "photoUrl": self.photo_url,
            "price": self.price,
            "description": self.description,
            "createdAt": self.created_at,
            'users': self.my_vehicle_user_id.to_dict()
        }
        if self.my_vehicle_review_id:
            return_dict["reviews"] = [review.to_dict() for review in self.my_vehicle_review_id]

        return return_dict
