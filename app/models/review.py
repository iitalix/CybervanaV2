from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = "reviews"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    vehicle_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('vehicles.id')), nullable = False)
    review = db.Column(db.String(1000), nullable = False)
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.Date, nullable = False)
    my_review_user_id = db.relationship("User", back_populates = "my_review_id")
    my_review_vehicle_id = db.relationship("Vehicle", back_populates = "my_vehicle_review_id")

    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "vehicleId": self.vehicle_id,
            "review": self.review,
            "stars": self.stars,
            "createdAt": self.created_at,
            "users": self.my_review_user_id.to_dict()
        }
