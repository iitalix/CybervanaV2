from .db import db, environment, SCHEMA, add_prefix_for_prod

class Item(db.Model):
    __tablename__ = 'items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key = True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable = False)
    vehicle_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('vehicles.id')),  nullable = False)
    created_at = db.Column(db.Date, nullable = False)

    my_item_user_id = db.relationship("User", back_populates = "my_item_id")
    my_item_vehicle_id = db.relationship("Vehicle", back_populates = "my_vehicle_item_id")


    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "vehicleId": self.vehicle_id,
            "createdAt": self.created_at,
            'vehicle': self.my_cart_vehicle_id.to_dict()
        }
