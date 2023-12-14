from .db import db, environment, SCHEMA, add_prefix_for_prod

class CartItem(db.Model):
    __tablename__ = 'cartItems'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    vehicle_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('vehicles.id')),  nullable = False)
    created_at = db.Column(db.Date, nullable = False)

    my_cart_user_id = db.relationship("User", back_populates = "my_cart_id")
    my_cart_vehicle_id = db.relationship("Vehicle", back_populates = "my_vehicle_cart_id")


    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "vehicleId": self.vehicle_id,
            "createdAt": self.created_at,
            'vehicle': self.my_cart_vehicle_id.to_dict()
        }
